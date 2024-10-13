// components/MonthlyEnrollmentsChart.tsx
'use client'
import React, { useEffect, useRef } from 'react';

interface EnrollmentData {
  month: string;
  enrollments: number;
}

interface Props {
  data: EnrollmentData[];
}

export const MonthlyFinanceChart: React.FC<Props> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      // Definir a largura e altura do canvas dinamicamente com base no contêiner
      canvas.width = container.offsetWidth;
      canvas.height = 400; // Altura fixa ou pode ser ajustada dinamicamente também

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Limpar o canvas antes de desenhar
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      // Definir o estilo do gráfico
      const padding = 40;
      const chartWidth = width - 2 * padding;
      const chartHeight = height - 2 * padding;

      // Desenhar linhas de grade horizontais
      const maxEnrollment = Math.max(...data.map((item) => item.enrollments));
      const stepY = chartHeight / maxEnrollment;

      ctx.strokeStyle = 'rgba(200, 200, 200, 0.5)'; // Cor das linhas de grade
      ctx.lineWidth = 1;

      for (let i = 0; i <= maxEnrollment; i += Math.floor(maxEnrollment / 5)) {
        const y = height - padding - i * stepY;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
      }

      // Desenhar linhas de grade verticais
      const stepX = chartWidth / data.length;
      data.forEach((_, index) => {
        const x = padding + index * stepX;
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, height - padding);
        ctx.stroke();
      });

      // Desenhar barras do gráfico
      const barWidth = stepX * 0.6; // Largura das barras (60% do espaço disponível)
      ctx.fillStyle = '#FB7D5B';

      data.forEach((item, index) => {
        const x = padding + index * stepX + (stepX - barWidth) / 2;
        const y = height - padding - item.enrollments * stepY;
        const barHeight = item.enrollments * stepY;

        ctx.fillRect(x, y, barWidth, barHeight);
      });

      // Adicionar labels dos meses
      ctx.font = '14px Arial';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      data.forEach((item, index) => {
        const x = padding + index * stepX + stepX / 2;
        ctx.fillText(item.month, x, height - 10);
      });

      // Adicionar labels dos valores de matrículas
      ctx.textAlign = 'right';
      for (let i = 0; i <= maxEnrollment; i += Math.floor(maxEnrollment / 5)) {
        const y = height - padding - i * stepY;
        ctx.fillText(i.toString(), padding - 10, y + 5);
      }
    };

    resizeCanvas(); // Inicialmente renderiza o gráfico
    window.addEventListener('resize', resizeCanvas); // Ajusta no redimensionamento da janela

    return () => {
      window.removeEventListener('resize', resizeCanvas); // Remove o ouvinte ao desmontar o componente
    };
  }, [data]);

  return (
    <div ref={containerRef} className="w-full">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
