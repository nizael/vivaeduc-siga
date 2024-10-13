// components/MonthlyEnrollmentsPieChart.tsx
'use client'
import React, { useEffect, useRef } from 'react';

interface EnrollmentData {
  month: string;
  enrollments: number;
}

interface IPieChartProps {
  data: EnrollmentData[];
}

export const PieChart = ({ data }: IPieChartProps) => {
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

      // Calcular o total de matrículas
      const totalEnrollments = data.reduce((total, item) => total + item.enrollments, 0);

      // Definir o centro e o raio do gráfico de pizza
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(centerX, centerY) - 40; // Raio menor para manter um espaçamento

      // Definir as cores para os segmentos
      const colors = [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40',
        '#C9CBCF',
      ];

      // Calcular e desenhar cada segmento do gráfico de pizza
      let startAngle = 0;
      data.forEach((item, index) => {
        const sliceAngle = (item.enrollments / totalEnrollments) * 2 * Math.PI;
        const endAngle = startAngle + sliceAngle;

        // Desenhar o segmento
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = colors[index % colors.length];
        ctx.fill();

        // Desenhar label no centro de cada segmento
        const midAngle = startAngle + sliceAngle / 2;
        const textX = centerX + (radius / 1.5) * Math.cos(midAngle);
        const textY = centerY + (radius / 1.5) * Math.sin(midAngle);
        ctx.fillStyle = 'white';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(item.month, textX, textY);

        // Atualizar o ângulo de início para o próximo segmento
        startAngle = endAngle;
      });

      // Adicionar texto no centro do gráfico (opcional)
      ctx.fillStyle = 'black';
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(`Total: ${totalEnrollments}`, centerX, centerY);
    };

    resizeCanvas(); // Inicialmente renderiza o gráfico
    window.addEventListener('resize', resizeCanvas); // Ajusta no redimensionamento da janela

    return () => {
      window.removeEventListener('resize', resizeCanvas); // Remove o ouvinte ao desmontar o componente
    };
  }, [data]);

  return (
    <div ref={containerRef} className="w-full max-w-xl ">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
