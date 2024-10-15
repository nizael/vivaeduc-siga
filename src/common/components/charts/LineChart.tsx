'use client'
import React, { useEffect, useRef } from 'react'

interface EnrollmentData {
  label: string
  value: number
}

interface IChartLineProps {
  data: EnrollmentData[]
}

export const LineChart = ({ data }: IChartLineProps) => {
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

      const padding = (Math.max(...data.map(data => data.value)).toString().length - 1) * 8 + 18
      const chartWidth = width - 2 * padding
      const chartHeight = height - 2 * padding

      const maxEnrollment = Math.max(...data.map((item) => item.value))
      const stepY = chartHeight / maxEnrollment

      ctx.strokeStyle = 'rgba(200, 200, 200, 0.5)'
      ctx.lineWidth = 1

      for (let i = 0; i <= maxEnrollment; i += Math.floor(maxEnrollment / 5)) {
        const y = height - padding - i * stepY
        ctx.beginPath()
        ctx.moveTo(padding, y)
        ctx.lineTo(width - padding, y)
        ctx.stroke()
      }

      const stepX = chartWidth / (data.length - 1)
      data.forEach((_, index) => {
        const x = padding + index * stepX
        ctx.beginPath()
        ctx.moveTo(x, padding)
        ctx.lineTo(x, height - padding)
        ctx.stroke()
      })

      ctx.beginPath()
      ctx.moveTo(padding, height - padding - data[0].value * stepY)
      data.forEach((item, index) => {
        const x = padding + index * stepX
        const y = height - padding - item.value * stepY
        ctx.lineTo(x, y)
      })

      ctx.strokeStyle = '#FCC43E'
      ctx.lineWidth = 2
      ctx.stroke()

      data.forEach((item, index) => {
        const x = padding + index * stepX
        const y = height - padding - item.value * stepY
        ctx.beginPath()
        ctx.arc(x, y, 5, 0, 2 * Math.PI)
        ctx.fillStyle = '#FB7D5B'
        ctx.fill()
      })

      ctx.font = '14px Arial'
      ctx.fillStyle = 'black'
      ctx.textAlign = 'center'
      data.forEach((item, index) => {
        const x = padding + index * stepX
        ctx.fillText(item.label, x, height - 10)
      })

      ctx.textAlign = 'right'
      for (let i = 0; i <= maxEnrollment; i += Math.floor(maxEnrollment / 5)) {
        const y = height - padding - i * stepY
        ctx.fillText(i.toString(), padding - 10, y + 5)
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [data])

  return (
    <div ref={containerRef} className="w-full">
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}
