export interface ICreateSubject {
  name: string
  code: string
  educacenso?: string
  bncc: "BNCC_LT" | "BNCC_MT" | "BNCC_CNT" | "BNCC_CHSA"
}