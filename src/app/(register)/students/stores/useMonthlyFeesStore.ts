import { create } from "zustand";

interface IUseMonthlyFeesStore {
  monthlyFees?: IMonthlyFees;
  monthlyFeesView?: IMonthlyFee[];
  monthlyFeesCurrent?: IMonthlyFee[];
  currentPage: number;
  sequence: 'asc' | 'desc';
  resetStore(): void;
  toggleSequence(): void;
  setMonthlyFeesCurrent(key: keyof IMonthlyFees): void;
  setCurrentPage(currentPage: number): void;
  setMonthlyFees(monthlyFees: IMonthlyFees): void;
  updateMonthlyFees(id: string): void;
}

export interface IMonthlyFees {
  [key: string]: IMonthlyFee[];
}

export interface IMonthlyFee {
  id: string;
  schoolYearName: string;
  classroomName: string;
  previousPayments: number;
  dueDate: Date;
  amount: number;
  installmentNumber: number;
  toReceiveAmount: number;
  discountAmount: number;
  status: 'PAID' | 'PENDING';
}

// Função utilitária
function updateStatus(
  fees: IMonthlyFee[] | undefined,
  id: string,
  newStatus: 'PAID' | 'PENDING'
): IMonthlyFee[] | undefined {
  return fees?.map(fee =>
    fee.id === id
      ? { ...fee, status: newStatus }
      : fee
  );
}

export const useMonthlyFeesStore = create<IUseMonthlyFeesStore>((set, get) => ({
  currentPage: 1,
  sequence: 'desc',
  setMonthlyFees: (monthlyFees) => set(() => ({ monthlyFees })),

  setMonthlyFeesCurrent(key) {
    set((state) => {
      const monthlyFees = state.monthlyFees;
      if (!monthlyFees) return state;

      const selectedFees = monthlyFees[key];
      return {
        monthlyFeesCurrent: [...selectedFees],
        monthlyFeesView: selectedFees.slice(0, 6),
      };
    });
  },

  setCurrentPage: (currentPage) => {
    set((state) => {
      const monthlyFees = state.monthlyFeesCurrent || [];
      const start = (currentPage - 1) * 6;
      const end = currentPage * 6;

      return {
        currentPage,
        monthlyFeesView: monthlyFees.slice(start, end),
      };
    });
  },

  toggleSequence: () => {
    const state = get();
    const monthlyFeesCurrent = state.monthlyFeesCurrent || [];
    const sortedFees = [...monthlyFeesCurrent].sort((a, b) =>
      state.sequence === 'asc'
        ? a.dueDate.getTime() - b.dueDate.getTime()
        : b.dueDate.getTime() - a.dueDate.getTime()
    );

    set({
      monthlyFeesCurrent: sortedFees,
      monthlyFeesView: sortedFees.slice(0, 6),
      sequence: state.sequence === 'asc' ? 'desc' : 'asc',
    });
  },

  resetStore: () => {
    set({
      monthlyFees: undefined,
      monthlyFeesCurrent: undefined,
      monthlyFeesView: undefined,
      currentPage: 1,
      sequence: 'desc',
    });
  },

  updateMonthlyFees: (id) => {
    set((state) => {
      if (!state.monthlyFees) return state;
      const updatedMonthlyFees = Object.keys(state.monthlyFees).reduce((acc, key) => {
        const monthlyFee = updateStatus(state.monthlyFees![key], id, 'PAID');
        if (monthlyFee) acc[key] = monthlyFee
        return acc;
      }, {} as IMonthlyFees);

      return {
        monthlyFees: updatedMonthlyFees,
        monthlyFeesCurrent: updateStatus(state.monthlyFeesCurrent, id, 'PAID'),
        monthlyFeesView: updateStatus(state.monthlyFeesView, id, 'PAID'),
      };
    });
  },
}));
