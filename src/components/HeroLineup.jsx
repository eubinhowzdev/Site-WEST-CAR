import React from 'react';

/**
 * Lineup Panorâmico de 5 Veículos da Hero Section
 * Fiel à Composição Exata da Referência Master:
 * - Visão panorâmica contínua de 5 veículos sobre piso de estúdio branco puro com sombras de contato
 * - Centro: SUV imponente em destaque frontal com faróis iluminados
 * - Laterais: SUVs e cupês esportivos escalonados com profundidade real
 * - Interatividade: Hotspots e pins de visualização rápida
 */
export function HeroLineup({ onSelectVehicle }) {
  const hotSpots = [
    { id: 'porsche-911-carrera-2022', name: 'Porsche 911 Carrera', left: '88%', top: '56%' },
    { id: 'toyota-hilux-srx-2024', name: 'Range Rover / SUV', left: '71%', top: '48%' },
    { id: 'porsche-macan-2023', name: 'GLS Flagship Edition', left: '50%', top: '42%' },
    { id: 'bmw-x5-msport-2023', name: 'BMW X7 Luxury', left: '29%', top: '48%' },
    { id: 'audi-a4-black-2023', name: 'Audi Sportback Red', left: '12%', top: '56%' }
  ];

  return (
    <div className="hero-panorama-wrapper">
      <div className="hero-panorama-stage">
        {/* Imagem Panorâmica Real de Estúdio dos 5 Carros */}
        <img
          src="/images/hero-lineup.jpg"
          alt="Lineup exclusivo West Car Multimarcas"
          className="hero-panorama-img"
          loading="eager"
        />

        {/* Hotspots Interativos Sutis */}
        {hotSpots.map((spot) => (
          <button
            key={spot.id}
            className="hero-hotspot-pin"
            style={{ left: spot.left, top: spot.top }}
            onClick={() => onSelectVehicle && onSelectVehicle(spot.id)}
            title={`Ver detalhes: ${spot.name}`}
            aria-label={`Ver detalhes de ${spot.name}`}
          >
            <span className="hotspot-pulse-ring" />
            <span className="hotspot-center-dot" />
            <span className="hotspot-tooltip">{spot.name}</span>
          </button>
        ))}
      </div>

      {/* Degradê inferior suave integrando com o fundo */}
      <div className="hero-panorama-blend" />
    </div>
  );
}
