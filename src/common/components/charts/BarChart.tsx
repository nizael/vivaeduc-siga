'use client'
import React, { useEffect, useRef } from 'react'

interface chartData {
  label: string
  value: number
}

interface IChartBarProps {
  data: chartData[]
}

export const BarChart = ({ data }: { data: chartData[] }) => {

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

      // Ajusta o maxValue para o maior valor + 10
      const maxDataValue = Math.max(...data.map((item) => item.value))
      const maxValue = maxDataValue + 10
      const stepY = chartHeight / maxValue

      ctx.strokeStyle = 'rgba(200, 200, 200, 0.5)'
      ctx.lineWidth = 1

      for (let i = 0; i <= maxValue; i += Math.floor(maxValue / 5)) {
        const y = height - padding - i * stepY
        ctx.beginPath()
        ctx.moveTo(padding, y)
        ctx.lineTo(width - padding, y)
        ctx.stroke()
      }

      const stepX = chartWidth / data.length
      data.forEach((_, index) => {
        const x = padding + index * stepX
        ctx.beginPath()
        ctx.moveTo(x, padding)
        ctx.lineTo(x, height - padding)
        ctx.stroke()
      })

      const barWidth = stepX * 0.6
      ctx.fillStyle = '#FB7D5B'

      data.forEach((item, index) => {
        const x = padding + index * stepX + (stepX - barWidth) / 2
        const y = height - padding - item.value * stepY
        const barHeight = item.value * stepY

        ctx.fillRect(x, y, barWidth, barHeight)
      })

      ctx.font = '14px Arial'
      ctx.fillStyle = 'black'
      ctx.textAlign = 'center'
      data.forEach((item, index) => {
        const x = padding + index * stepX + stepX / 2
        ctx.fillText(item.label, x, height - 10)
      })

      ctx.textAlign = 'right'
      for (let i = 0; i <= maxValue; i += Math.floor(maxValue / 5)) {
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
    <div ref={containerRef} className="w-full h-full">
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}
