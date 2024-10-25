'use client'
export const CheckboxGender = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <span className=" text-[--text-primary] font-semibold ">Sexo</span>
      <div className="flex gap-2 border border-[#C1BBEB] rounded-lg p-2 text-base text-[--text-primary] font-medium outline-[--bg-primary]  bg-white">
        <label className="flex items-center gap-2" htmlFor="male">
          <input onChange={() => ({})} type="radio" value={'MALE'} id="male" name="gender" /> Masculino</label>
        <label className="flex items-center gap-2" htmlFor="female">
          <input onChange={() => ({})} type="radio" value={'FEMALE'} id="female" name="gender" /> feminino</label>
      </div>
    </div>
  )
}