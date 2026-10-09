import React from 'react';

/**
 * Lineup Panorâmico de 5 Veículos da Hero Section
 * Layout fiel à referência: carros integrados ao fundo branco,
 * sem moldura, como cutouts em showroom, sangrados até a borda inferior.
 */
export function HeroLineup({ onSelectVehicle }) {
  const hotSpots = [
    { id: 'audi-a4-black-2023', name: 'Audi Sportback', left: '12%', top: '52%' },
    { id: 'bmw-x5-msport-2023', name: 'BMW X5 M Sport', left: '29%', top: '44%' },
    { id: 'porsche-macan-2023', name: 'SUV Flagship', left: '50%', top: '38%' },
    { id: 'toyota-hilux-srx-2024', name: 'Range Rover', left: '71%', top: '44%' },
    { id: 'porsche-911-carrera-2022', name: 'Porsche 911', left: '88%', top: '52%' }
  ];

  return (
    <div className="hero-panorama-wrapper">
      <div className="hero-panorama-stage">
        {/* Imagem Panorâmica dos Carros - Integrada ao Fundo */}
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

      {/* Degradê inferior suave para integrar com a seção abaixo */}
      <div className="hero-panorama-blend" />
    </div>
  );
}
