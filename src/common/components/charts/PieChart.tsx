'use client'
import React, { useEffect, useRef } from 'react'

interface EnrollmentData {
  month: string
  enrollments: number
}

interface IPieChartProps {
  data: EnrollmentData[]
}

export const PieChart = ({ data }: IPieChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current
      const container = containerRef.current
      if (!canvas || !container) return

      canvas.width = container.offsetWidth
      canvas.height = 400 

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const width = canvas.width
      const height = canvas.height
      ctx.clearRect(0, 0, width, height)

      const totalEnrollments = data.reduce((total, item) => total + item.enrollments, 0)

      const centerX = width / 2
      const centerY = height / 2
      const radius = Math.min(centerX, centerY) - 40 

      const colors = [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40',
        '#C9CBCF',
      ]

      let startAngle = 0
      data.forEach((item, index) => {
        const sliceAngle = (item.enrollments / totalEnrollments) * 2 * Math.PI
        const endAngle = startAngle + sliceAngle

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.arc(centerX, centerY, radius, startAngle, endAngle)
        ctx.closePath()
        ctx.fillStyle = colors[index % colors.length]
        ctx.fill()

        const midAngle = startAngle + sliceAngle / 2
        const textX = centerX + (radius / 1.5) * Math.cos(midAngle)
        const textY = centerY + (radius / 1.5) * Math.sin(midAngle)
        ctx.fillStyle = 'white'
        ctx.font = '14px Arial'
        ctx.textAlign = 'center'
        ctx.fillText(item.month, textX, textY)

        startAngle = endAngle
      })

      ctx.fillStyle = 'black'
      ctx.font = '16px Arial'
      ctx.textAlign = 'center'
      ctx.fillText(`Total: ${totalEnrollments}`, centerX, centerY)
    }

    resizeCanvas() 
    window.addEventListener('resize', resizeCanvas) 

    return () => {
      window.removeEventListener('resize', resizeCanvas) 
    }
  }, [data])

  return (
    <div ref={containerRef} className="w-full max-w-xl ">
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}
