'use client'
import React, { useEffect, useRef } from 'react'

interface EnrollmentData {
  label: string
  value: number
}

interface Props {
  data: EnrollmentData[]
}

export const CurveChart: React.FC<Props> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const drawChart = () => {
      const canvas = canvasRef.current
      const container = containerRef.current
      if (!canvas || !container) return

      canvas.width = container.offsetWidth
      canvas.height = 124

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const width = canvas.width
      const height = canvas.height
      const padding = 24
      const chartWidth = width - 2 * padding
      const chartHeight = height - 2 * padding

      ctx.clearRect(0, 0, width, height)

      const maxValue = Math.max(...data.map((item) => item.value))
      const stepY = chartHeight / maxValue
      const stepX = chartWidth / (data.length - 1)

      ctx.strokeStyle = '#4CBC9A' 
      ctx.lineWidth = 4
      ctx.beginPath()

      data.forEach((item, index) => {
        const x = padding + index * stepX
        const y = height - padding - item.value * stepY
        
        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          const prevX = padding + (index - 1) * stepX
          const prevY = height - padding - data[index - 1].value * stepY
          const cp1x = prevX + stepX / 2 
          const cp1y = prevY
          const cp2x = x - stepX / 2 
          const cp2y = y
          
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
        }
      })
      
      ctx.stroke()

    }

    drawChart()
    window.addEventListener('resize', drawChart)

    return () => {
      window.removeEventListener('resize', drawChart)
    }
  }, [data])

  return (
    <div ref={containerRef} className="w-full">
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

