'use client'
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { InputText } from "@/components/inputs/InputText"
import { ModalOverlay } from "@/components/modals/ModalOverlay"
import { useEffect, useState } from "react"
import { useCurriculumStore } from "../stores/useCurriculumStore"
import { IEmployee } from "@/services/employee/IEmployee"
import { curriculumDependencies } from "@/services/curriculum/curriculumGets"
import { IGrade } from "@/services/grade/IGrade"
import { ISubject } from "@/services/subject/ISubject"
import { IPersonalData } from "@/types/personal/IPersonalData"
import { ISchoolYear } from "@/services/school-year/ISchoolYear"
import { curriculumCreate } from "@/services/curriculum/curriculumCreate"


interface ICurriculumDependenciesResponse {
  employees: (IEmployee & { person: IPersonalData })[]
  grades: IGrade[]
  subjects: ISubject[]
  schoolYears: ISchoolYear[]
}

export const CreateCurriculum = () => {
  const [subjectId, setSubjectId] = useState('')
  const [curriculumName, setCurriculumName] = useState('')
  const [employeeId, setEmployeeId] = useState('')
  const [initialValue, setInitialValue] = useState({ label: '', value: '' })
  const [curriculumItems, setCurriculumItems] = useState<{ subjectId: string, employeeId: string }[]>([])
  const { isModalOpen, closeModal, addCurriculum } = useCurriculumStore()
  const [listEmployees, setListEmployee] = useState<{ id: string, name: string }[]>([])
  const [listSubjects, setListSubjects] = useState<{ id: string, name: string }[]>([])
  const [listSchoolYears, setListSchoolYears] = useState<{ id: string, name: string }[]>([])
  const [listGrades, setListGrades] = useState<{ id: string, name: string }[]>([])

  useEffect(() => {
    const fetchDependencies = async () => {
      const { data, status } = await curriculumDependencies();
      if (status === 200) {
        const { employees, subjects, grades, schoolYears } = data as ICurriculumDependenciesResponse;
        setListEmployee(employees.map(employee => ({ id: employee.id, name: employee.person.name })));
        setListSubjects(subjects.map(subject => ({ id: subject.id, name: subject.name })));
        setListGrades(grades.map(grade => ({ id: grade.id, name: grade.name })));
        setListSchoolYears(schoolYears.map(schoolYear => ({ id: schoolYear.id, name: schoolYear.name })));
      }
    };
  
    fetchDependencies();
  }, []);

  const addItem = () => {
    if (!subjectId || !employeeId) return;
  
    const isExists = curriculumItems.some(item => item.subjectId === subjectId);
    if (!isExists) {
      setCurriculumItems(prev => [...prev, { subjectId, employeeId }]);
      setEmployeeId('');
      setSubjectId('');
      setInitialValue({ label: '', value: '' });
    }
  };
  
  const deleteItem = (index: number) => {
    setCurriculumItems(prev => prev.filter((_, idx) => idx !== index));
  };
  

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEmployeeId('');
    setSubjectId('');
    setCurriculumName('');
    setCurriculumItems([]);
    closeModal();
  };
  

  const handleSave = () => {

  }

  return (
    <ModalOverlay isOpen={isModalOpen} onClose={() => ({})}>
      <form action={async formData => {
        formData.set('curriculumSubjects', JSON.stringify(curriculumItems))
        const { data, status } = await curriculumCreate(formData)
        if (status === 201) {
          addCurriculum(data)
          closeModal()
        }
      }} className="bg-gray-50 rounded-md shadow-sm flex flex-col max-w-screen-lg w-full h-[90%]" >
        <div className="flex justify-between p-4 border-b ">
          <h5 className="text-xl text-[--text-primary] font-semibold">Nova Grade Currícular</h5>
          <button onClick={closeModal} className="border text-[--text-primary] rounded-full h-[40px] w-[40px] grid place-content-center">x</button>
        </div>
        <div className="p-4 flex flex-col gap-4" >
          <div className="grid grid-cols-2 gap-4">
            <CustomSelect required name="schoolYearId" onChange={() => ({})} options={listSchoolYears.map(schoolYear => ({ label: schoolYear.name, value: schoolYear.id }))} label="Período letivo" />
            <CustomSelect required name="gradeId" onChange={() => ({})} options={listGrades.map(grade => ({ label: grade.name, value: grade.id }))} label="Série" />
          </div>
          <InputText name="name" label="Nome" value={curriculumName} onChange={evt => setCurriculumName(evt.currentTarget.value)} />
          <div className="flex items-end gap-4 w-full border-t py-2">
            <CustomSelect disabled={!curriculumName} initialValue={initialValue} onChange={evt => setSubjectId(evt.currentTarget.value)} options={listSubjects?.map(subject => ({ label: subject.name, value: subject.id }))} label="Disciplina" className="w-full" />
            <CustomSelect disabled={!subjectId} initialValue={initialValue} onChange={evt => setEmployeeId(evt.currentTarget.value)} options={listEmployees?.map(employee => ({ label: employee.name, value: employee.id }))} label="Professor" className="w-full" />
            <button disabled={!subjectId || !employeeId} onClick={addItem} className="border bg-primary text-gray-50 text-3xl rounded-full h-[40px] w-[40px] grid place-content-center flex-none">+</button>
          </div>
        </div>
        <div className="p-4 text-[--text-primary] w-full grow overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-500 border-b">
                <td className="py-2 w-1/2">Disciplina</td>
                <td className="py-2 w-1/2">Professor</td>
                <td className="py-2 w-8"></td>
              </tr>
            </thead>
            <tbody>
              {curriculumItems.map((item, index) => {
                const subject = listSubjects.find(subject => subject.id === item.subjectId)
                const teacher = listEmployees.find(employee => employee.id === item.employeeId)
                return (
                  <tr key={`${item.employeeId}-${item.subjectId}`}>
                    <td className="py-2 w-1/2">{subject?.name}</td>
                    <td className="py-2 w-1/2">{teacher?.name}</td>
                    <td className="w-8">
                      <button onClick={() => deleteItem(index)} className="border bg-gray-50 text-red-500 text-lg rounded-full h-[32px] w-[32px] grid place-content-center flex-none">x</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="p-4 w-full flex items-center gap-4 justify-end">
          <button onClick={handleCancel} className="rounded-md bg-primary text-gray-50 px-4 py-2">Cancelar</button>
          <button onClick={handleSave} disabled={!curriculumItems.length || !curriculumName} className={`${!curriculumItems.length || !curriculumName ? 'bg-gray-500 ' : 'bg-primary'} rounded-md text-gray-50 px-4 py-2`}>Salvar</button>
        </div>
      </form>
    </ModalOverlay >
  )
}