'use client'
import { curriculumDependencies } from "@/services/curriculum/curriculumGets";
import { PropsWithChildren, useEffect } from "react"
import { useCurriculumStore } from "../../stores/useCurriculumStore";

export const ProviderDependencies = ({children}: PropsWithChildren) => {
  const { setCurriculumDependencies } = useCurriculumStore()
  useEffect(() => {
    const fetchDependencies = async () => {
      const { data, status } = await curriculumDependencies()
      if (status === 200) {
        setCurriculumDependencies(data)
      }
    };

    fetchDependencies();
  }, []);
  return children
}