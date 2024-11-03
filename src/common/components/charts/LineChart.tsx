'use client'
import React, { useEffect, useRef, useState } from 'react'

interface EnrollmentData {
  label: string
  value: number
}

interface IChartLineProps {
  data: EnrollmentData[]
}

export const LineChart = ({ data = [] }: IChartLineProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [tooltip, setTooltip] = useState<{ x: number; y: number; label: string; value: number } | null>(null)

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

      // Definindo o padding principal e o padding extra na parte inferior para os rótulos do eixo X
      const padding = (Math.max(...data.map(d => d.value)).toString().length - 1) * 8 + 18
      const paddingBottom = padding + 30 // Padding extra para rótulos do eixo X
      const chartWidth = width - 2 * padding
      const chartHeight = height - padding - paddingBottom // Calcula a altura do gráfico com o padding adicional

      const maxEnrollment = Math.max(...data.map((item) => item.value)) + 10
      const stepY = chartHeight / maxEnrollment

      // Renderizar linhas horizontais (grade)
      ctx.strokeStyle = 'rgba(200, 200, 200, 0.5)'
      ctx.lineWidth = 1
      for (let i = 0; i <= maxEnrollment; i += Math.floor(maxEnrollment / 5) || 1) {
        const y = height - paddingBottom - i * stepY
        ctx.beginPath()
        ctx.moveTo(padding, y)
        ctx.lineTo(width - padding, y)
        ctx.stroke()
      }

      const stepX = chartWidth / (data.length - 1 || 1)
      data.forEach((_, index) => {
        const x = padding + index * stepX
        ctx.beginPath()
        ctx.moveTo(x, padding)
        ctx.lineTo(x, height - paddingBottom)
        ctx.stroke()
      })

      const hasNonZeroValues = data.some(item => item.value > 0)

      if (hasNonZeroValues) {
        ctx.beginPath()
        ctx.moveTo(padding, height - paddingBottom - data[0].value * stepY)
        data.forEach((item, index) => {
          const x = padding + index * stepX
          const y = height - paddingBottom - item.value * stepY
          ctx.lineTo(x, y)
        })

        ctx.strokeStyle = '#FCC43E'
        ctx.lineWidth = 2
        ctx.stroke()

        // Renderizar pontos na linha
        data.forEach((item, index) => {
          const x = padding + index * stepX
          const y = height - paddingBottom - item.value * stepY
          ctx.beginPath()
          ctx.arc(x, y, 5, 0, 2 * Math.PI)
          ctx.fillStyle = '#FB7D5B'
          ctx.fill()
        })
      }

      // Renderizar rótulos no eixo x
      ctx.font = '14px Arial'
      ctx.fillStyle = 'black'
      ctx.textAlign = 'center'
      data.forEach((item, index) => {
        const x = padding + index * stepX
        ctx.fillText(item.label, x, height - (paddingBottom - 20) / 2) // Posiciona os rótulos um pouco acima do final do padding
      })

      // Renderizar rótulos no eixo y
      ctx.textAlign = 'right'
      for (let i = 0; i <= maxEnrollment; i += Math.floor(maxEnrollment / 5) || 1) {
        const y = height - paddingBottom - i * stepY
        ctx.fillText(i.toString(), padding - 10, y + 5)
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [data])

  const handleMouseMove = (event: React.MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const padding = (Math.max(...data.map(d => d.value)).toString().length - 1) * 8 + 18
    const paddingBottom = padding + 30
    const chartWidth = canvas.width - 2 * padding
    const chartHeight = canvas.height - padding - paddingBottom
    const maxEnrollment = Math.max(...data.map((item) => item.value)) + 10
    const stepY = chartHeight / maxEnrollment
    const stepX = chartWidth / (data.length - 1 || 1)

    data.forEach((item, index) => {
      const pointX = padding + index * stepX
      const pointY = canvas.height - paddingBottom - item.value * stepY

      // Verifique se o mouse está próximo do ponto
      if (Math.abs(x - pointX) < 10 && Math.abs(y - pointY) < 10) {
        setTooltip({ x: pointX, y: pointY, label: item.label, value: item.value })
      }
    })
  }

  const handleMouseLeave = () => {
    setTooltip(null)
  }

  return (
    <div ref={containerRef} className="w-full relative" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <canvas ref={canvasRef}></canvas>
      {tooltip && (
        <div
          style={{ left: tooltip.x, top: tooltip.y - 30 }}
          className="absolute p-2 bg-gray-800 text-white text-sm rounded"
        >
          {tooltip.label}: {tooltip.value}
        </div>
      )}
    </div>
  )
}
