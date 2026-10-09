import React from 'react';

/**
 * Logotipo oficial WEST CAR Multimarcas
 * Recriação vetorial ultra-fiel com os traços originais do logo:
 * - Traço superior: Prata/Cromado metálico (silhueta superior do cupê esportivo)
 * - Traço inferior: Vermelho carmim de alta performance (swoosh aerodinâmico)
 * - Tipografia 'WEST CAR' com presença marcante e 'Multimarcas' em itálico de prestígio
 */
export function WestCarLogo({ variant = 'dark', className = '', height = 48 }) {
  const isDark = variant === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#0B1116';
  const subtextColor = isDark ? '#E2E8F0' : '#475569';

  return (
    <div className={`westcar-logo-wrapper ${className}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
      <svg
        viewBox="0 0 520 220"
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="westcar-logo-svg"
        style={{ height: `${height}px`, width: 'auto', overflow: 'visible' }}
      >
        <defs>
          {/* Gradiente Cromado / Prata Superior */}
          <linearGradient id="silverSwooshGrad" x1="50" y1="50" x2="450" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="25%" stopColor="#E2E8F0" />
            <stop offset="55%" stopColor="#FFFFFF" />
            <stop offset="85%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          {/* Gradiente Vermelho Carmim Inferior */}
          <linearGradient id="redSwooshGrad" x1="150" y1="80" x2="480" y2="105" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF3843" />
            <stop offset="40%" stopColor="#E5242D" />
            <stop offset="80%" stopColor="#B3121A" />
            <stop offset="100%" stopColor="#5E060B" />
          </linearGradient>

          {/* Sombra sutil para profundidade de estúdio */}
          <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* --- Silhueta Automotiva: Traço Superior (Prata Metálico) --- */}
        <path
          d="M 68 102 C 65 92 68 76 75 70 C 85 64 125 66 170 54 C 215 42 270 32 340 38 C 390 42 420 54 445 68 C 450 71 454 75 456 78 C 440 70 405 58 350 52 C 285 46 220 54 165 67 C 115 78 85 80 75 88 C 72 91 70 96 68 102 Z"
          fill="url(#silverSwooshGrad)"
          filter="url(#logoShadow)"
        />

        {/* --- Silhueta Automotiva: Traço Inferior (Vermelho West Car) --- */}
        <path
          d="M 160 84 C 210 74 265 80 340 85 C 395 89 440 98 460 115 C 462 112 463 108 462 105 C 445 90 395 78 340 73 C 270 67 210 65 160 76 C 152 78 145 81 140 84 C 146 84 153 84 160 84 Z"
          fill="url(#redSwooshGrad)"
          filter="url(#logoShadow)"
        />

        {/* --- Texto WEST CAR --- */}
        <text
          x="260"
          y="152"
          textAnchor="middle"
          fill={textColor}
          style={{
            fontFamily: "'Unbounded', sans-serif",
            fontSize: '66px',
            fontWeight: 900,
            letterSpacing: '3px'
          }}
        >
          WEST CAR
        </text>

        {/* --- Subtexto Multimarcas --- */}
        <text
          x="260"
          y="196"
          textAnchor="middle"
          fill={subtextColor}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '32px',
            fontWeight: 700,
            letterSpacing: '1.5px'
          }}
        >
          Multimarcas
        </text>
      </svg>
    </div>
  );
}
