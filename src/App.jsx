import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Fuel,
  Menu,
  MessageCircle,
  Phone,
  Search,
  Settings2,
  X
} from 'lucide-react';
import { STORE_INFO } from './data/vehicles';
import { loadVehicles } from './lib/catalog';
import { WestCarLogo } from './components/WestCarLogo';
import { HeroLineup } from './components/HeroLineup';
import { VehicleModal } from './components/VehicleModal';

const formatPrice = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(value);

export default function App() {
  const [vehicles, setVehicles] = useState([]);
  const [activeVehicle, setActiveVehicle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [query, setQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    loadVehicles().then(setVehicles);
  }, []);

  const categories = useMemo(
    () => ['Todos', ...new Set(vehicles.map((vehicle) => vehicle.category))],
    [vehicles]
  );

  const visibleVehicles = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR');

    return vehicles.filter((vehicle) => {
      const matchesCategory =
        selectedCategory === 'Todos' || vehicle.category === selectedCategory;
      const searchable = `${vehicle.brand} ${vehicle.model} ${vehicle.version} ${vehicle.year}`.toLocaleLowerCase('pt-BR');
      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [vehicles, selectedCategory, query]);

  const scrollToCatalog = () => {
    document.getElementById('veiculos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="page-width header-inner">
          <a className="brand-link" href="#inicio" aria-label="West Car Multimarcas">
            <WestCarLogo height={48} />
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#inicio">Início</a>
            <a href="#veiculos">Veículos</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="header-actions">
            <a className="header-phone" href={STORE_INFO.phoneHref}>
              <Phone size={17} />
              <span>{STORE_INFO.phoneDisplay}</span>
            </a>
            <a className="button button-small button-dark" href={STORE_INFO.whatsappHref} target="_blank" rel="noreferrer">
              Falar com a loja
            </a>
            <button
              className="mobile-menu-button"
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-nav" aria-label="Navegação mobile">
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Início</a>
            <a href="#veiculos" onClick={() => setMobileMenuOpen(false)}>Veículos</a>
            <a href="#contato" onClick={() => setMobileMenuOpen(false)}>Contato</a>
            <a href={STORE_INFO.whatsappHref} target="_blank" rel="noreferrer">WhatsApp: {STORE_INFO.whatsappDisplay}</a>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="page-width hero-content">
            <h1>
              CARRO BOM,
              <span> PREÇO JUSTO</span>
              <br />E ATENDIMENTO DE VERDADE.
            </h1>
            <div className="hero-actions">
              <button className="button button-primary" type="button" onClick={scrollToCatalog}>
                Ver veículos
                <ArrowRight size={19} />
              </button>
              <a className="button button-light" href={STORE_INFO.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>

          <HeroLineup />

          <div className="page-width hero-trust-row" aria-label="Compromissos da West Car">
            <span><CheckCircle2 size={17} /> Estoque real</span>
            <span><CheckCircle2 size={17} /> Atendimento direto</span>
            <span><CheckCircle2 size={17} /> Informações transparentes</span>
          </div>
        </section>

        <section id="veiculos" className="catalog-section">
          <div className="page-width">
            <div className="catalog-heading">
              <h2>Veículos disponíveis</h2>
            </div>

            <div className="catalog-toolbar">
              <div className="category-list" aria-label="Filtrar por categoria">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={selectedCategory === category ? 'active' : ''}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <label className="catalog-search">
                <Search size={18} />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Buscar marca ou modelo"
                  aria-label="Buscar veículo"
                />
              </label>
            </div>

            {visibleVehicles.length > 0 ? (
              <div className="vehicle-grid">
                {visibleVehicles.map((vehicle) => (
                  <article className="vehicle-card" key={vehicle.id}>
                    <button
                      className="vehicle-photo"
                      type="button"
                      onClick={() => setActiveVehicle(vehicle)}
                      aria-label={`Ver detalhes do ${vehicle.brand} ${vehicle.model}`}
                    >
                      <img src={vehicle.images[0]} alt={`${vehicle.brand} ${vehicle.model}`} loading="lazy" />
                      <span className="available-badge">Disponível</span>
                      <span className="photo-count">+{vehicle.images.length} fotos</span>
                    </button>

                    <div className="vehicle-card-body">
                      <div className="vehicle-card-topline">
                        <span>{vehicle.brand}</span>
                        <span>{vehicle.year}</span>
                      </div>
                      <h3>{vehicle.model}</h3>
                      <p className="vehicle-version">{vehicle.version}</p>

                      <div className="vehicle-quick-specs">
                        <span><CalendarDays size={16} /> {vehicle.year}</span>
                        <span><Settings2 size={16} /> {vehicle.transmission}</span>
                        <span><Fuel size={16} /> {vehicle.fuel}</span>
                      </div>

                      <div className="vehicle-price-row">
                        <div>
                          <small>Preço à vista</small>
                          <strong>{formatPrice(vehicle.price)}</strong>
                        </div>
                        <button type="button" onClick={() => setActiveVehicle(vehicle)}>
                          Ver detalhes
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <Search size={30} />
                <h3>Nenhum veículo encontrado.</h3>
                <button type="button" onClick={() => { setQuery(''); setSelectedCategory('Todos'); }}>
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </section>

        <section id="contato" className="contact-section">
          <div className="page-width contact-card">
            <div>
              <h2>Fale com a West Car</h2>
              <p>Confirme a disponibilidade, tire suas dúvidas e combine uma visita.</p>
            </div>
            <a className="contact-phone" href={STORE_INFO.whatsappHref} target="_blank" rel="noreferrer">
              <span className="contact-phone-icon"><MessageCircle size={26} /></span>
              <span>
                <small>WhatsApp da West Car</small>
                <strong>{STORE_INFO.whatsappDisplay}</strong>
              </span>
              <ArrowRight size={24} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <WestCarLogo height={42} />
          <p>West Car Multimarcas · Catálogo de veículos</p>
          <a href={STORE_INFO.phoneHref}>{STORE_INFO.phoneDisplay}</a>
        </div>
      </footer>

      <a className="floating-call" href={STORE_INFO.whatsappHref} target="_blank" rel="noreferrer" aria-label="Abrir o WhatsApp da West Car">
        <MessageCircle size={21} />
        <span>WhatsApp West Car</span>
      </a>

      {activeVehicle && (
        <VehicleModal vehicle={activeVehicle} onClose={() => setActiveVehicle(null)} />
      )}
    </div>
  );
}
