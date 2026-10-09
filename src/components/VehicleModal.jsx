import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Fuel, Gauge, Sliders, MessageCircle, Phone, Calendar, ArrowRight } from 'lucide-react';
import { STORE_INFO } from '../data/vehicles';

export function VehicleModal({ vehicle, onClose }) {
  if (!vehicle) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Estados do Simulador de Financiamento
  const minDownPayment = Math.round(vehicle.price * 0.2); // 20%
  const maxDownPayment = Math.round(vehicle.price * 0.7); // 70%
  const [downPayment, setDownPayment] = useState(vehicle.downPaymentSuggested || minDownPayment);
  const [termMonths, setTermMonths] = useState(48);

  // Fechar com tecla ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Cálculo da parcela com taxa mensal estimada de mercado (1.49% a.m.)
  const financedAmount = Math.max(0, vehicle.price - downPayment);
  const monthlyRate = 0.0149;
  const monthlyInstallment = financedAmount > 0
    ? Math.round((financedAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths)))
    : 0;

  const formatBRL = (val) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(val);
  };

  const handleWhatsAppProposal = () => {
    const msg = `Olá, equipe West Car Multimarcas! 👋\n\nTenho interesse no veículo:\n🚗 *${vehicle.brand} ${vehicle.model}* (${vehicle.year})\n💰 Valor à vista: ${formatBRL(vehicle.price)}\n\n*Minha simulação de financiamento:*\n💵 Entrada: ${formatBRL(downPayment)}\n📅 Plano: ${termMonths}x de ${formatBRL(monthlyInstallment)}\n\nGostaria de verificar a disponibilidade e agendar uma visita/proposta!`;
    const url = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Botão Fechar */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Fechar modal">
          <X size={20} />
        </button>

        <div className="modal-grid">
          {/* Coluna Esquerda: Galeria e Ficha Técnica */}
          <div>
            <div className="modal-gallery-main">
              <img
                src={vehicle.images[activeImageIndex] || vehicle.images[0]}
                alt={vehicle.model}
              />
            </div>

            {vehicle.images.length > 1 && (
              <div className="modal-gallery-thumbs">
                {vehicle.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`gallery-thumb-btn ${activeImageIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(idx)}
                  >
                    <img src={img} alt={`Miniatura ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}

            {/* Destaques e Procedência */}
            <div style={{ marginTop: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <ShieldCheck size={20} color="#10B981" />
                <span style={{ fontSize: '0.875rem', fontWeight: 800, color: '#0B1116' }}>
                  Procedência & Segurança West Car
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {vehicle.highlights.map((h, i) => (
                  <span
                    key={i}
                    style={{
                      background: '#F1F4F9',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#475569',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <CheckCircle2 size={13} color="#E5242D" />
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Itens de Série */}
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.75rem' }}>
                Principais Opcionais & Conforto
              </h4>
              <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                {vehicle.features.map((feat, idx) => (
                  <li key={idx} style={{ fontSize: '0.78rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#E5242D' }} />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Coluna Direita: Dados do Veículo & Simulador de Parcelas */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#E5242D', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {vehicle.brand} · {vehicle.category}
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.2, margin: '0.25rem 0 0.5rem' }}>
              {vehicle.model}
            </h2>
            <p style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 500 }}>
              Ano {vehicle.year} · {vehicle.km} · Final de placa {vehicle.plateEnd}
            </p>

            <div style={{ margin: '1.25rem 0', padding: '1rem 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Valor à vista</span>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 800, color: '#0B1116', lineHeight: 1 }}>
                {formatBRL(vehicle.price)}
              </div>
            </div>

            {/* Tabela de Especificações */}
            <table className="modal-specs-table">
              <tbody>
                <tr>
                  <td>Motorização</td>
                  <td>{vehicle.engine}</td>
                </tr>
                <tr>
                  <td>Potência</td>
                  <td>{vehicle.specs.power}</td>
                </tr>
                <tr>
                  <td>Torque</td>
                  <td>{vehicle.specs.torque}</td>
                </tr>
                <tr>
                  <td>Aceleração (0 a 100)</td>
                  <td>{vehicle.specs.acceleration}</td>
                </tr>
                <tr>
                  <td>Tração</td>
                  <td>{vehicle.specs.traction}</td>
                </tr>
                <tr>
                  <td>Consumo Médio</td>
                  <td>{vehicle.specs.consumption}</td>
                </tr>
                <tr>
                  <td>Garantia</td>
                  <td>{vehicle.specs.warranty}</td>
                </tr>
              </tbody>
            </table>

            {/* Simulador Interativo */}
            <div className="simulator-box">
              <div className="simulator-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>Simulador de Financiamento</span>
                <span style={{ fontSize: '0.72rem', color: '#E5242D', fontWeight: 700 }}>Taxas Especiais</span>
              </div>

              {/* Slider Entrada */}
              <div className="slider-group">
                <div className="slider-labels">
                  <span style={{ color: '#64748B' }}>Entrada:</span>
                  <span style={{ color: '#0B1116' }}>{formatBRL(downPayment)}</span>
                </div>
                <input
                  type="range"
                  min={minDownPayment}
                  max={maxDownPayment}
                  step={5000}
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="custom-range"
                />
              </div>

              {/* Seletor de Parcelas */}
              <div className="term-selector">
                {[24, 36, 48, 60].map((term) => (
                  <button
                    key={term}
                    className={`term-btn ${termMonths === term ? 'active' : ''}`}
                    onClick={() => setTermMonths(term)}
                  >
                    {term}x
                  </button>
                ))}
              </div>

              {/* Resultado */}
              <div className="sim-result-box">
                <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>Parcela estimada</div>
                <div className="sim-result-amount">{formatBRL(monthlyInstallment)} <span style={{ fontSize: '0.85rem', color: '#64748B' }}>/mês</span></div>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8', marginTop: '0.2rem' }}>
                  *Simulação prévia sujeita à análise de crédito bancária.
                </div>
              </div>

              {/* CTA WhatsApp com mensagem formatada */}
              <button className="btn-whatsapp-proposal" onClick={handleWhatsAppProposal}>
                <MessageCircle size={18} />
                Negociar com esta Condição no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
