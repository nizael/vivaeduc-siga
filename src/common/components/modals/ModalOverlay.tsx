'use client'
import { PropsWithChildren } from "react"

type IModalOverlayProps = PropsWithChildren & {
  onClose(): void
  isOpen: boolean
}
export const ModalOverlay = ({ isOpen, children, onClose }: IModalOverlayProps) => {
  if (!isOpen) return null
  return (
    <div className="absolute top-0 left-0 w-full h-full" onClick={onClose}>
      {children}
    </div>
  )
}