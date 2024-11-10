'use client'
import { PropsWithChildren } from "react"

type IModalOverlayProps = PropsWithChildren & {
  onClose(): void
  isOpen: boolean
}
export const ModalOverlay = ({ isOpen, children, onClose }: IModalOverlayProps) => {
  if (!isOpen) return null
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[#4D44B5] bg-opacity-70 z-20 flex items-center justify-center p-4" onClick={onClose}>
      {children}
    </div>
  )
}