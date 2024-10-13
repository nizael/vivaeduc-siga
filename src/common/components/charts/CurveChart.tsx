'use client'
import React, { useEffect, useRef } from 'react';

interface EnrollmentData {
  month: string;
  enrollments: number;
}

interface Props {
  data: EnrollmentData[];
}

export const CurveChart: React.FC<Props> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const drawChart = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      // Definir a largura e altura do canvas dinamicamente com base no contêiner
      canvas.width = container.offsetWidth;
      canvas.height = 124;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = canvas.width;
      const height = canvas.height;
      const padding = 24;
      const chartWidth = width - 2 * padding;
      const chartHeight = height - 2 * padding;

      // Limpar o canvas antes de desenhar
      ctx.clearRect(0, 0, width, height);

      // Definir o estilo do gráfico
      const maxEnrollment = Math.max(...data.map((item) => item.enrollments));
      const stepY = chartHeight / maxEnrollment;
      const stepX = chartWidth / (data.length - 1);

      // Desenhar a linha curva
      ctx.strokeStyle = '#4CBC9A'; // Cor da linha
      ctx.lineWidth = 4;
      ctx.beginPath();

      data.forEach((item, index) => {
        const x = padding + index * stepX;
        const y = height - padding - item.enrollments * stepY;
        
        if (index === 0) {
          ctx.moveTo(x, y); // Começa a partir do primeiro ponto
        } else {
          const prevX = padding + (index - 1) * stepX;
          const prevY = height - padding - data[index - 1].enrollments * stepY;
          const cp1x = prevX + stepX / 2; // Ponto de controle 1 (para curva)
          const cp1y = prevY;
          const cp2x = x - stepX / 2; // Ponto de controle 2 (para curva)
          const cp2y = y;
          
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
        }
      });
      
      ctx.stroke();

    };

    drawChart();
    window.addEventListener('resize', drawChart);

    return () => {
      window.removeEventListener('resize', drawChart);
    };
  }, [data]);

  return (
    <div ref={containerRef} className="w-full">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

