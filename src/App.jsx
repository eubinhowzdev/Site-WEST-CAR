import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Phone,
  MessageCircle,
  ShieldCheck,
  Award,
  ArrowRight,
  Play,
  Car,
  ChevronRight,
  CheckCircle2,
  Calendar,
  Gauge,
  MapPin,
  Clock,
  Instagram,
  Youtube,
  Facebook,
  Menu,
  X,
  SlidersHorizontal,
  ChevronDown,
  Percent,
  Check
} from 'lucide-react';
import { VEHICLES_DATA, STORE_INFO } from './data/vehicles';
import { WestCarLogo } from './components/WestCarLogo';
import { HeroLineup } from './components/HeroLineup';
import { VehicleModal } from './components/VehicleModal';
import { StoreTourModal } from './components/StoreTourModal';

export function App() {
  // Estados de Filtro e Busca
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedBrand, setSelectedBrand] = useState('Todas');
  const [selectedPriceRange, setSelectedPriceRange] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Estados de Modais
  const [activeVehicleModal, setActiveVehicleModal] = useState(null);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Estado do Formulário de Avaliação de Usado
  const [tradeInForm, setTradeInForm] = useState({
    carName: '',
    year: '',
    km: '',
    phone: ''
  });
  const [tradeInSubmitted, setTradeInSubmitted] = useState(false);

  // Lista de Categorias
  const categories = ['Todos', 'SUV', 'Sedan', 'Picape', 'Esportivo'];

  // Marcas únicas disponíveis
  const uniqueBrands = useMemo(() => {
    return ['Todas', ...Array.from(new Set(VEHICLES_DATA.map((v) => v.brand)))];
  }, []);

  // Filtragem dos Veículos
  const filteredVehicles = useMemo(() => {
    return VEHICLES_DATA.filter((vehicle) => {
      // Categoria
      if (selectedCategory !== 'Todos' && vehicle.category !== selectedCategory) {
        return false;
      }
      // Marca
      if (selectedBrand !== 'Todas' && vehicle.brand !== selectedBrand) {
        return false;
      }
      // Faixa de Preço
      if (selectedPriceRange !== 'Todos') {
        if (selectedPriceRange === 'ate-200' && vehicle.price > 200000) return false;
        if (selectedPriceRange === '200-400' && (vehicle.price < 200000 || vehicle.price > 400000)) return false;
        if (selectedPriceRange === 'acima-400' && vehicle.price < 400000) return false;
      }
      // Busca por texto
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchTitle = `${vehicle.brand} ${vehicle.model}`.toLowerCase().includes(query);
        const matchCategory = vehicle.category.toLowerCase().includes(query);
        const matchEngine = vehicle.engine.toLowerCase().includes(query);
        if (!matchTitle && !matchCategory && !matchEngine) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'km-asc') return parseInt(a.km.replace(/\D/g, '')) - parseInt(b.km.replace(/\D/g, ''));
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, selectedBrand, selectedPriceRange, searchQuery, sortBy]);

  // Função para abrir o modal de um veículo pelo ID (usado também pelo HeroLineup)
  const handleSelectVehicleById = (id) => {
    const found = VEHICLES_DATA.find((v) => v.id === id);
    if (found) {
      setActiveVehicleModal(found);
    }
  };

  const formatBRL = (val) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(val);
  };

  // Scroll Suave para o catálogo
  const scrollToCatalog = () => {
    const el = document.getElementById('catalogo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Envio do formulário de avaliação do seminovo
  const handleTradeInSubmit = (e) => {
    e.preventDefault();
    if (!tradeInForm.carName || !tradeInForm.phone) return;
    
    const msg = `Olá West Car Multimarcas! Gostaria de uma avaliação para o meu carro:\n🚗 *Veículo:* ${tradeInForm.carName}\n📅 *Ano:* ${tradeInForm.year || 'Não informado'}\n⚡ *Km:* ${tradeInForm.km || 'Não informado'}\n📱 *Contato:* ${tradeInForm.phone}\n\nPoderiam me enviar uma proposta de compra/troca?`;
    const url = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setTradeInSubmitted(true);
  };

  return (
    <div className="app-container">
      {/* ===================================================================
          1. NAVBAR (Clean Glassmorphism com Logotipo Oficial)
          =================================================================== */}
      <header className="site-navbar">
        <div className="container navbar-inner">
          {/* Logo West Car */}
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <WestCarLogo variant="light" height={46} />
          </a>

          {/* Links Centrais (Desktop) */}
          <nav className="nav-desktop">
            <ul className="nav-links">
              <li><a href="#catalogo" className="nav-link">Estoque</a></li>
              <li><a href="#diferenciais" className="nav-link">Diferenciais</a></li>
              <li><a href="#vender" className="nav-link">Venda seu Carro</a></li>
              <li><a href="#contato" className="nav-link">A Loja</a></li>
            </ul>
          </nav>

          {/* Ações e Contato */}
          <div className="navbar-actions">
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent('Olá, gostaria de falar com um consultor da West Car Multimarcas.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-phone-link"
              title="Atendimento online agora"
            >
              <span className="status-dot" />
              <span>{STORE_INFO.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de consultar os veículos disponíveis no estoque da West Car.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav-cta"
            >
              <MessageCircle size={16} />
              <span>Fale Conosco</span>
            </a>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div style={{ background: '#FFFFFF', padding: '1.5rem', borderBottom: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href="#catalogo" onClick={() => setIsMobileMenuOpen(false)} style={{ fontWeight: 700, color: '#0B1116' }}>Estoque Completo</a>
            <a href="#diferenciais" onClick={() => setIsMobileMenuOpen(false)} style={{ fontWeight: 700, color: '#0B1116' }}>Diferenciais</a>
            <a href="#vender" onClick={() => setIsMobileMenuOpen(false)} style={{ fontWeight: 700, color: '#0B1116' }}>Venda seu Carro</a>
            <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} style={{ fontWeight: 700, color: '#0B1116' }}>A Loja & Contato</a>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-pill"
              style={{ marginTop: '0.5rem', textAlign: 'center' }}
            >
              <MessageCircle size={18} />
              Atendimento WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* ===================================================================
          2. HERO SECTION (Layout Fiel à Referência: Título + Carros Integrados)
          =================================================================== */}
      <section className="hero-section">
        <div className="container hero-content-wrapper">
          {/* Título Principal - Grande e Impactante */}
          <h1 className="hero-title">
            VEÍCULOS SELECIONADOS<br />
            <span className="highlight-red-italic">COM PROCEDÊNCIA & EXCLUSIVIDADE</span>
          </h1>

          {/* Subtítulo conciso */}
          <p className="hero-subtitle">
            Mais de uma década realizando sonhos sobre quatro rodas. Estoque periciado com laudo cautelar 100% aprovado, garantia e as melhores condições.
          </p>

          {/* Botões de Ação */}
          <div className="hero-cta-group">
            <button className="btn-primary-pill" onClick={scrollToCatalog}>
              <span>Explorar Estoque</span>
              <ArrowRight size={18} />
            </button>

            <button className="btn-secondary-video" onClick={() => setIsTourModalOpen(true)}>
              <span className="play-icon-box">
                <Play size={12} fill="#FFFFFF" />
              </span>
              <span>Tour Virtual da Loja</span>
            </button>
          </div>
        </div>

        {/* Lineup Panorâmico de Carros - Integrado ao Fundo (Sem Moldura) */}
        <div className="hero-cars-container">
          <HeroLineup onSelectVehicle={handleSelectVehicleById} />
        </div>
      </section>

      {/* ===================================================================
          3. FLOATING FILTER & LEAD CARD (Sobreposição Fiel da Referência Master)
          =================================================================== */}
      <section className="container">
        <div className="floating-master-card">
          {/* Card Visual Esquerdo com Foto de Entrega e Badge Destaque */}
          <div className="master-card-visual">
            <img
              src="/images/delivery-card.jpg"
              alt="Entrega de veículo na West Car"
              className="master-visual-img"
            />
            <div className="master-visual-overlay">
              <div className="master-visual-badge">
                <span className="master-badge-num">10+</span>
                <span className="master-badge-txt">ANOS DE TRADIÇÃO</span>
              </div>
              <p className="master-visual-caption">
                Encontre, pericie e retire seu carro com segurança comprovada.
              </p>
            </div>
          </div>

          {/* Painel de Busca & Contato Direito */}
          <div className="master-card-form-box">
            <h3 className="master-form-title">
              Quer saber como conquistar o <span className="text-red">carro dos seus sonhos</span>?
            </h3>

            <div className="master-form-grid">
              <div className="search-field-box">
                <label>Marca</label>
                <select
                  className="search-select"
                  value={selectedBrand}
                  onChange={(e) => {
                    setSelectedBrand(e.target.value);
                    scrollToCatalog();
                  }}
                >
                  {uniqueBrands.map((b) => (
                    <option key={b} value={b}>{b === 'Todas' ? 'Todas as marcas' : b}</option>
                  ))}
                </select>
              </div>

              <div className="search-field-box">
                <label>Categoria</label>
                <select
                  className="search-select"
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    scrollToCatalog();
                  }}
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>{c === 'Todos' ? 'Todas categorias' : c}</option>
                  ))}
                </select>
              </div>

              <div className="search-field-box">
                <label>Faixa de Preço</label>
                <select
                  className="search-select"
                  value={selectedPriceRange}
                  onChange={(e) => {
                    setSelectedPriceRange(e.target.value);
                    scrollToCatalog();
                  }}
                >
                  <option value="Todos">Todos os valores</option>
                  <option value="ate-200">Até R$ 200.000</option>
                  <option value="200-400">R$ 200.000 a R$ 400.000</option>
                  <option value="acima-400">Acima de R$ 400.000</option>
                </select>
              </div>

              <button className="btn-master-submit" onClick={scrollToCatalog}>
                <Search size={18} />
                <span>Ver Estoque ({filteredVehicles.length})</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          4. CATÁLOGO COMPLETO DE VEÍCULOS (Grade Estilo Master Reference)
          =================================================================== */}
      <section id="catalogo" className="catalog-section">
        <div className="container">
          {/* Cabeçalho da Seção */}
          <div className="section-header-center">
            <div className="section-brand-tag">- WEST CAR MULTIMARCAS -</div>
            <h2 className="section-title-bold">VEÍCULOS EM DESTAQUE</h2>
          </div>

          {/* Barra de Controles e Filtros */}
          <div className="catalog-controls-bar">
            {/* Pílulas de Categoria */}
            <div className="category-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === 'Todos' ? `Todos (${VEHICLES_DATA.length})` : cat}
                </button>
              ))}
            </div>

            {/* Busca Inline e Ordenação */}
            <div className="catalog-filter-extras">
              <div className="search-inline-box">
                <Search size={16} className="search-inline-icon" />
                <input
                  type="text"
                  placeholder="Buscar modelo, motor..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-inline-input"
                />
              </div>

              <select
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Destaques</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
                <option value="km-asc">Menor Km</option>
              </select>
            </div>
          </div>

          {/* Grade de Carros */}
          {filteredVehicles.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 0', background: '#FFFFFF', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
              <Car size={48} color="#94A3B8" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0B1116' }}>Nenhum veículo encontrado</h3>
              <p style={{ color: '#64748B', marginTop: '0.5rem' }}>Tente alterar os filtros ou termo de busca para visualizar mais opções.</p>
              <button
                className="btn-primary-pill"
                style={{ marginTop: '1.5rem' }}
                onClick={() => {
                  setSelectedCategory('Todos');
                  setSelectedBrand('Todas');
                  setSelectedPriceRange('Todos');
                  setSearchQuery('');
                }}
              >
                Limpar todos os filtros
              </button>
            </div>
          ) : (
            <div className="catalog-grid">
              {filteredVehicles.map((car) => (
                <article key={car.id} className="car-card">
                  {/* Foto do Veículo com Tags */}
                  <div className="car-card-media" onClick={() => setActiveVehicleModal(car)} style={{ cursor: 'pointer' }}>
                    <img
                      src={car.images[0]}
                      alt={`${car.brand} ${car.model}`}
                      className="car-card-img"
                      loading="lazy"
                    />
                    <div className="car-badge-pill">
                      <Calendar size={12} />
                      <span>{car.year}</span>
                    </div>
                    <div className="car-badge-periciado">
                      <ShieldCheck size={12} />
                      <span>Laudo 100%</span>
                    </div>
                  </div>

                  {/* Dados e Especificações */}
                  <div className="car-card-body">
                    <h3 className="car-card-title" onClick={() => setActiveVehicleModal(car)} style={{ cursor: 'pointer' }}>
                      {car.brand} {car.model}
                    </h3>
                    <div className="car-card-subtitle">
                      {car.engine} · {car.category}
                    </div>

                    <div className="car-specs-row">
                      <div className="car-spec-item" title="Quilometragem">
                        <Gauge size={14} color="#64748B" />
                        <span>{car.km}</span>
                      </div>
                      <div className="car-spec-item" title="Transmissão">
                        <span>{car.transmission.split(' ')[0]}</span>
                      </div>
                      <div className="car-spec-item" title="Combustível">
                        <span>{car.fuel}</span>
                      </div>
                    </div>

                    {/* Preço e Parcela Estimada */}
                    <div className="car-card-price-block">
                      <div className="price-label">Valor especial</div>
                      <div className="price-value">{formatBRL(car.price)}</div>
                      <div className="price-installment">
                        ou entrada de {formatBRL(car.downPaymentSuggested)} + 48x
                      </div>
                    </div>

                    {/* Botões de Ação */}
                    <div className="car-card-actions">
                      <button
                        className="btn-card-details"
                        onClick={() => setActiveVehicleModal(car)}
                      >
                        <span>Ver Detalhes</span>
                        <ChevronRight size={16} />
                      </button>

                      <a
                        href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(`Olá! Tenho interesse no *${car.brand} ${car.model}* (${car.year}) anunciado por ${formatBRL(car.price)}. Está disponível?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-card-whatsapp"
                        title="Falar no WhatsApp sobre este veículo"
                      >
                        <MessageCircle size={20} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===================================================================
          5. ADVANTAGES SECTION (Layout Exato da Referência Master: Título Esquerda + Texto Direita + 4 Cards)
          =================================================================== */}
      <section id="diferenciais" className="advantages-section">
        <div className="container">
          <div className="section-brand-tag">- WEST CAR MULTIMARCAS -</div>
          
          <div className="advantages-master-header">
            <h2 className="advantages-master-title">
              EXPERIÊNCIA,<br />
              SEGURANÇA &amp;<br />
              EXCLUSIVIDADE.
            </h2>
            <p className="advantages-master-text">
              A West Car Multimarcas é referência em veículos selecionados de procedência atestada. Todos os nossos seminovos passam por criteriosa perícia cautelar com laudo 100% aprovado, histórico completo e garantia de satisfação para você realizar seu sonho com tranquilidade absoluta.
            </p>
          </div>

          <div className="advantages-grid">
            {/* Card 01 */}
            <div className="adv-card">
              <div className="adv-card-number">01</div>
              <h3 className="adv-card-title">Laudo Cautelar 100% Aprovado</h3>
              <p className="adv-card-desc">
                Todos os veículos passam por rigorosa perícia técnica de mais de 150 itens, assegurando estrutura original e quilometragem autêntica.
              </p>
            </div>

            {/* Card 02 (DESTAQUE EM VERMELHO WEST CAR, idêntico ao card 02 destacado na referência master) */}
            <div className="adv-card featured-card">
              <div className="adv-card-number">02</div>
              <h3 className="adv-card-title">Avaliação Justa do seu Usado</h3>
              <p className="adv-card-desc">
                Pagamos o valor real de mercado pelo seu veículo na troca com pagamento imediato à vista ou troco na troca na hora da negociação.
              </p>
            </div>

            {/* Card 03 */}
            <div className="adv-card">
              <div className="adv-card-number">03</div>
              <h3 className="adv-card-title">Financiamento com Menores Taxas</h3>
              <p className="adv-card-desc">
                Parcerias diretas com Santander, Itaú, Bradesco, BV e Safra com aprovação de crédito ágil em até 15 minutos sem burocracia.
              </p>
            </div>

            {/* Card 04 */}
            <div className="adv-card">
              <div className="adv-card-number">04</div>
              <h3 className="adv-card-title">Garantia e Pós-Venda Dedicado</h3>
              <p className="adv-card-desc">
                Assistência e garantia completa para você rodar com total tranquilidade e suporte da nossa equipe especializada pós-compra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          6. TRADE-IN / SELL CAR SECTION (Avaliação do Seminovo)
          =================================================================== */}
      <section id="vender" className="tradein-section">
        <div className="container">
          <div className="tradein-card-box">
            <div className="tradein-info">
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#E5242D', letterSpacing: '1px' }}>
                AVALIAÇÃO EXPRESSA WEST CAR
              </span>
              <h3>QUER VENDER OU TROCAR SEU VEÍCULO?</h3>
              <p>
                Avaliamos seu carro seminovo com base nas melhores cotações do mercado. Dinheiro na conta e processo 100% desburocratizado.
              </p>
              <ul className="tradein-bullets">
                <li><CheckCircle2 size={16} /> Pagamento rápido via PIX</li>
                <li><CheckCircle2 size={16} /> Aceitamos seu usado como entrada para qualquer carro do estoque</li>
                <li><CheckCircle2 size={16} /> Quitação imediata caso seu carro ainda esteja financiado</li>
              </ul>
            </div>

            <div className="tradein-form">
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
                Solicite uma cotação gratuita
              </h4>

              {tradeInSubmitted ? (
                <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(34, 197, 94, 0.15)', borderRadius: '12px', border: '1px solid #22C55E' }}>
                  <CheckCircle2 size={36} color="#22C55E" style={{ margin: '0 auto 0.5rem' }} />
                  <h5 style={{ color: '#FFFFFF', fontWeight: 700 }}>Solicitação Enviada!</h5>
                  <p style={{ color: '#E2E8F0', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                    Nossos avaliadores entrarão em contato via WhatsApp em instantes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleTradeInSubmit}>
                  <div className="form-grid-2">
                    <input
                      type="text"
                      placeholder="Marca e Modelo (Ex: Corolla 2021)"
                      value={tradeInForm.carName}
                      onChange={(e) => setTradeInForm({ ...tradeInForm, carName: e.target.value })}
                      required
                      className="form-input-dark"
                    />
                    <input
                      type="text"
                      placeholder="Ano de Fabricação"
                      value={tradeInForm.year}
                      onChange={(e) => setTradeInForm({ ...tradeInForm, year: e.target.value })}
                      className="form-input-dark"
                    />
                  </div>
                  <div className="form-grid-2">
                    <input
                      type="text"
                      placeholder="Quilometragem aproximada"
                      value={tradeInForm.km}
                      onChange={(e) => setTradeInForm({ ...tradeInForm, km: e.target.value })}
                      className="form-input-dark"
                    />
                    <input
                      type="tel"
                      placeholder="Seu WhatsApp com DDD"
                      value={tradeInForm.phone}
                      onChange={(e) => setTradeInForm({ ...tradeInForm, phone: e.target.value })}
                      required
                      className="form-input-dark"
                    />
                  </div>
                  <button type="submit" className="btn-tradein-submit">
                    <MessageCircle size={18} />
                    <span>Enviar para Avaliação no WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          7. FOOTER (Dark Obsidian Idêntico à Referência Master)
          =================================================================== */}
      <footer id="contato" className="site-footer">
        <div className="container">
          <div className="footer-master-top">
            {/* Lado Esquerdo: Logo + Telefone + Botão de Contato */}
            <div className="footer-master-left">
              <WestCarLogo variant="dark" height={44} />
              <div className="footer-contact-actions">
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-phone-display"
                >
                  <Phone size={15} />
                  <span>{STORE_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de falar com um consultor da West Car.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-footer-call"
                >
                  Fale Conosco
                </a>
              </div>
            </div>

            {/* Lado Direito: Links Horizontais de Navegação */}
            <nav className="footer-master-nav">
              <a href="#catalogo" className="footer-master-link">Veículos</a>
              <a href="#diferenciais" className="footer-master-link">Diferenciais</a>
              <a href="#vender" className="footer-master-link">Venda seu Carro</a>
              <a href="#contato" className="footer-master-link">A Loja</a>
            </nav>
          </div>

          {/* Linha Inferior: Disclaimer à Esquerda + Redes Sociais à Direita */}
          <div className="footer-master-bottom">
            <div className="footer-disclaimer-box">
              <p>WEST CAR MULTIMARCAS. Veículos rigorosamente periciados com laudo cautelar 100% aprovado.</p>
              <p>Valores, taxas e estoques sujeitos a confirmação presencial. Todos os direitos reservados.</p>
            </div>

            <div className="footer-social-row">
              <a href={STORE_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                <Instagram size={17} />
              </a>
              <a href={STORE_INFO.social.youtube} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="YouTube">
                <Youtube size={17} />
              </a>
              <a href={STORE_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
                <Facebook size={17} />
              </a>
              <a href={STORE_INFO.social.whatsapp} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="WhatsApp">
                <MessageCircle size={17} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante de WhatsApp para Conversão Rápida */}
      <a
        href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Estava navegando no site da West Car Multimarcas e gostaria de tirar uma dúvida.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-fab"
        title="Fale no WhatsApp com a West Car"
      >
        <MessageCircle size={22} />
        <span>WhatsApp West Car</span>
      </a>

      {/* Modais */}
      {activeVehicleModal && (
        <VehicleModal
          vehicle={activeVehicleModal}
          onClose={() => setActiveVehicleModal(null)}
        />
      )}

      {isTourModalOpen && (
        <StoreTourModal
          onClose={() => setIsTourModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
