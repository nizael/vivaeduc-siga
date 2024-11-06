'use client'
import { ModalOverlay } from "@/components/modals/ModalOverlay"
import { usePaymentPlanCreateModal } from "../../stores/usePaymentPlanCreateModal"
import { InputText } from "@/components/inputs/InputText"
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { usePaymentPlanStore } from "../../stores/usePaymentPlanStore"
import { paymentPlanCreate } from "@/services/paymentPlan/paymentPlanCreate"
import { modalityCourseOptions } from "@/configs/modalityCourse"
import { useEffect, useState } from "react"
import { schoolYearListAll } from "@/services/school-year/schoolYearListAll"
import { courseListAll } from "@/services/course/courseListAll"
import { ISchoolYear } from "@/services/school-year/ISchoolYear"
import { ICourse } from "@/services/course/ICourse"
import { methodReceipt, methodReceiptOptions } from "@/configs/methodReceipt"
import { currencyFormat } from "@/utils/currencyFormat"

export const ModalPaymentPlanCreate = () => {
  const { isOpen, onClose } = usePaymentPlanCreateModal()
  const { pushPaymentPlan } = usePaymentPlanStore()
  const [schoolYears, setSchoolYears] = useState<ISchoolYear[]>([])
  const [courses, setCourses] = useState<ICourse[]>([])
  const [methodReceipt, setMethodReceipt] = useState<string>('')
  const [courseId, setCourseId] = useState<string>('')
  const [installmentAmount, setInstallmentAmount] = useState<string>('')
  const [dueDay, setDueDay] = useState<string>('')
  const [amount, setAmount] = useState("0,00");


  useEffect(() => {
    if (methodReceipt && methodReceipt !== 'TICKET') {
      const today = new Date()

      let installmentDate = new Date(today)
      installmentDate.setDate(installmentDate.getDate() + 1);
    
      let dayOfWeek = installmentDate.getDay();
      if (dayOfWeek === 6) {
        installmentDate.setDate(installmentDate.getDate() + 2);
      } else if (dayOfWeek === 0) {
        installmentDate.setDate(installmentDate.getDate() + 1);
      }
      setDueDay(installmentDate.getDate().toString())

      setInstallmentAmount('1')
    } else {
      setDueDay('')
      setInstallmentAmount('')
    }
  }, [methodReceipt])

  useEffect(() => {
    (async () => {
      const getSchoolYears = schoolYearListAll()
      const getCourses = courseListAll()
      const [courses, schoolYears] = await Promise.all([getCourses, getSchoolYears])
      if (schoolYears.status === 200 && schoolYears.data) setSchoolYears(schoolYears.data)
      if (courses.status === 200 && courses.data) setCourses(courses.data)
    })()
  }, [])

  
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      const value = evt.currentTarget.value 
      setAmount(currencyFormat(value));
    };



  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <div className="bg-gray-50 rounded-md shadow-sm flex flex-col max-w-lg w-full" onClick={evt => evt.stopPropagation()}>
        <div className="flex justify-between p-4 border-b ">
          <h5 className="text-xl text-[--text-primary] font-semibold">Novo Plano de pagamento</h5>
          <button onClick={onClose} className="border text-[--text-primary] rounded-full h-[40px] w-[40px] grid place-content-center">x</button>
        </div>
        <form action={async formData => {
          //readOnly não funcionou 
          if (methodReceipt !== 'TICKET') formData.set('installmentAmount', '1')
          const { data, status } = await paymentPlanCreate(formData)
          if (status === 201) {
            pushPaymentPlan({ ...data, courseName: courses.find(course => course.id === courseId)?.name })
            onClose()
          }
        }} className="p-4 flex flex-col gap-4" >
          <div className="grid grid-cols-2 gap-4 w-full">
            <CustomSelect required options={schoolYears.map(schoolYear => ({ label: schoolYear.name, value: schoolYear.id }))} onChange={() => ({})} label="Período letivo" name="schoolYearId" />
            <CustomSelect required options={courses.map(course => ({ label: course.name, value: course.id }))} onChange={evt => setCourseId(evt.currentTarget.value)} label="Curso" name="courseId" />
            <div className="col-start-1 col-end-3">
              <InputText required label="Nome *" name="name" />
            </div>
            <InputText required label="Valor R$" name="amount" value={amount} onChange={handleChange} />
            <CustomSelect required options={methodReceiptOptions} onChange={evt => setMethodReceipt(evt.currentTarget.value)} label="Metodo de recebimento" name="methodReceipt" />
            <InputText disabled={methodReceipt !== 'TICKET'} value={installmentAmount} onChange={evt => setInstallmentAmount(evt.currentTarget.value)} required type="number" label="Quantidade de parcelas" name="installmentAmount" />
            <InputText label="Dia de vencimento" name="dueDay" disabled={methodReceipt !== 'TICKET'} value={dueDay} onChange={evt => setDueDay(evt.currentTarget.value)} />
            <div className="col-start-1 col-end-3">
              <InputText label="Descrição" name="description" />
            </div>
          </div>
          <div className="flex items-center gap-4 justify-end">
            <button type="button" onClick={onClose} className="flex items-center px-4 h-[40px] text-[--text-primary] border border-[--bg-primary] rounded-full">Cancelar</button>
            <button type="submit" className="flex items-center px-4 h-[40px] text-gray-50 bg-[--bg-primary] rounded-full">Salvar</button>
          </div>
        </form>
      </div>
    </ModalOverlay>
  )
}