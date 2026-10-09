// Catálogo de Veículos Selecionados - WEST CAR Multimarcas
// Dados realistas com especificações de alto padrão para o mercado brasileiro

export const VEHICLES_DATA = [
  {
    id: 'porsche-macan-2023',
    brand: 'Porsche',
    model: 'Macan 2.0 T PDK',
    year: '2023/2023',
    category: 'SUV',
    featured: true,
    price: 489900,
    downPaymentSuggested: 140000,
    km: '14.200 km',
    fuel: 'Gasolina',
    transmission: 'Automático PDK 7M',
    color: 'Cinza Volcano Metálico',
    plateEnd: '8',
    engine: '2.0 Turbo 265cv',
    highlights: ['Laudo Cautelar 100%', 'Único Dono', 'Revisões na Concessionária', 'Teto Panorâmico'],
    images: [
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200&auto=format&fit=crop'
    ],
    specs: {
      power: '265 cv',
      torque: '40,8 kgfm',
      acceleration: '0-100 km/h em 6,2s',
      consumption: 'Urbano 8,5 km/l | Rodov. 11,2 km/l',
      traction: 'Integral sob demanda (AWD)',
      warranty: 'Garantia West Car de 1 Ano'
    },
    features: [
      'Teto Solar Panorâmico elétrico',
      'Faróis em LED PDLS Plus',
      'Bancos elétricos 14 vias com memória',
      'Sistema de som BOSE Surround',
      'Rodas RS Spyder Design aro 21',
      'Suspensão pneumática adaptativa'
    ]
  },
  {
    id: 'bmw-x5-msport-2023',
    brand: 'BMW',
    model: 'X5 xDrive45e M Sport Híbrido',
    year: '2023/2023',
    category: 'SUV',
    featured: true,
    price: 549000,
    downPaymentSuggested: 160000,
    km: '21.500 km',
    fuel: 'Híbrido Plug-in',
    transmission: 'Automático Steptronic 8M',
    color: 'Branco Mineral Perolizado',
    plateEnd: '4',
    engine: '3.0 TwinPower Turbo + Elétrico (394cv)',
    highlights: ['Híbrido Plug-in', 'Pacote M Sport Completo', 'IPVA Pago', 'Laudo 100% Aprovado'],
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop'
    ],
    specs: {
      power: '394 cv combinados',
      torque: '61,2 kgfm',
      acceleration: '0-100 km/h em 5,6s',
      consumption: 'Média de até 20,6 km/l',
      traction: 'Integral Inteligente xDrive',
      warranty: 'Bateria Híbrida com garantia de fábrica'
    },
    features: [
      'Faróis Laserlight BMW',
      'Painel BMW Live Cockpit Professional',
      'Head-up Display colorido',
      'Câmeras 360 com visualização 3D',
      'Portas com fechamento suave por sucção',
      'Bancos ventilados e aquecidos'
    ]
  },
  {
    id: 'toyota-hilux-srx-2024',
    brand: 'Toyota',
    model: 'Hilux SRX Plus 2.8 4x4 Diesel',
    year: '2024/2024',
    category: 'Picape',
    featured: true,
    price: 319900,
    downPaymentSuggested: 90000,
    km: '8.900 km',
    fuel: 'Diesel',
    transmission: 'Automático 6M',
    color: 'Prata Nevoeiro Metálico',
    plateEnd: '2',
    engine: '2.8 Turbo Diesel 204cv',
    highlights: ['Estado de Zero Km', 'Garantia de Fábrica', 'Capota Marítima Elétrica', 'Tração 4x4'],
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559416523-140ddc3d238c?q=80&w=1200&auto=format&fit=crop'
    ],
    specs: {
      power: '204 cv',
      torque: '50,9 kgfm',
      acceleration: '0-100 km/h em 10,1s',
      consumption: 'Urbano 10,1 km/l | Rodov. 11,3 km/l',
      traction: '4x4 com reduzida e bloqueio do diferencial',
      warranty: 'Garantia de Fábrica até 2029'
    },
    features: [
      'Pacote Toyota Safety Sense ativo',
      'Sistema de som premium JBL com subwoofer',
      'Bancos dianteiros com ventilação',
      'Assistente de permanência em faixa',
      'Controle de cruzeiro adaptativo (ACC)',
      'Protetor de caçamba e engate homologado'
    ]
  },
  {
    id: 'bmw-320i-msport-2024',
    brand: 'BMW',
    model: '320i M Sport 2.0 Turbo ActiveFlex',
    year: '2024/2024',
    category: 'Sedan',
    featured: true,
    price: 339900,
    downPaymentSuggested: 100000,
    km: '11.800 km',
    fuel: 'Flex',
    transmission: 'Automático 8M',
    color: 'Cinza Skyscraper Metálico',
    plateEnd: '9',
    engine: '2.0 TwinPower Turbo 184cv',
    highlights: ['Versão M Sport Top', 'Tela Curva BMW Curved Display', 'Laudo Cautelar Aprovado'],
    images: [
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop'
    ],
    specs: {
      power: '184 cv',
      torque: '30,6 kgfm',
      acceleration: '0-100 km/h em 7,1s',
      consumption: 'Urbano 10,8 km/l | Rodov. 13,8 km/l',
      traction: 'Traseira (RWD)',
      warranty: 'Garantia West Car 1 Ano'
    },
    features: [
      'Teto Solar elétrico de cristal',
      'BMW Curved Display de alta definição',
      'Volante esportivo M com paddle-shifts',
      'Cintos de segurança com costuras M',
      'Piloto automático adaptativo com Stop&Go',
      'Ar-condicionado digital de 3 zonas'
    ]
  },
  {
    id: 'jeep-compass-limited-2023',
    brand: 'Jeep',
    model: 'Compass Limited T270 Turbo Flex',
    year: '2023/2023',
    category: 'SUV',
    featured: false,
    price: 159900,
    downPaymentSuggested: 45000,
    km: '28.000 km',
    fuel: 'Flex',
    transmission: 'Automático 6M',
    color: 'Cinza Granite Metálico',
    plateEnd: '6',
    engine: '1.3 Turbo Flex 185cv',
    highlights: ['Painel 100% Digital', 'Teto Bicolor', 'Excelente Custo x Benefício'],
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop'
    ],
    specs: {
      power: '185 cv',
      torque: '27,5 kgfm',
      acceleration: '0-100 km/h em 8,8s',
      consumption: 'Urbano 9,8 km/l | Rodov. 12,1 km/l',
      traction: 'Dianteira 4x2 com Jeep Traction Control+',
      warranty: 'Garantia West Car 1 Ano'
    },
    features: [
      'Central Multimídia de 10,1 polegadas sem fio',
      'Carregador de celular por indução',
      'Park Assist (estacionamento autônomo)',
      'Detector de ponto cego',
      'Bancos em couro marrom nobre',
      'Rodas aro 19 com acabamento diamantado'
    ]
  },
  {
    id: 'volvo-xc60-t8-2023',
    brand: 'Volvo',
    model: 'XC60 T8 Recharge Inscription Híbrido',
    year: '2023/2023',
    category: 'SUV',
    featured: true,
    price: 379900,
    downPaymentSuggested: 110000,
    km: '19.400 km',
    fuel: 'Híbrido Plug-in',
    transmission: 'Automático Geartronic 8M',
    color: 'Preto Onyx Metálico',
    plateEnd: '1',
    engine: '2.0 Turbo + Supercharger + Elétrico (462cv)',
    highlights: ['462cv de Potência', 'Google Integrado Nativo', 'Autonomia Elétrica de até 78km'],
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop'
    ],
    specs: {
      power: '462 cv combinados',
      torque: '72,3 kgfm',
      acceleration: '0-100 km/h em 4,8s',
      consumption: 'Média de até 26,7 km/l',
      traction: 'Integral eAWD',
      warranty: 'Garantia de Bateria até 2031'
    },
    features: [
      'Sistema de som Harman Kardon Premium',
      'Teto Solar Panorâmico elétrico',
      'Alavanca de câmbio em cristal sueco Orrefors',
      'Pilot Assist com direção semi-autônoma',
      'Purificador de ar avançado CleanZone',
      'Bancos ortopédicos ventilados'
    ]
  },
  {
    id: 'ford-mustang-gt-2023',
    brand: 'Ford',
    model: 'Mustang Mach 1 5.0 V8',
    year: '2023/2023',
    category: 'Esportivo',
    featured: true,
    price: 499900,
    downPaymentSuggested: 150000,
    km: '7.800 km',
    fuel: 'Gasolina',
    transmission: 'Automático 10M com Paddle Shifts',
    color: 'Cinza Fighter Jet Metálico',
    plateEnd: '5',
    engine: '5.0 Coyote V8 Aspirado 483cv',
    highlights: ['Edição Especial Mach 1', 'Ronco V8 Inconfundível', 'Colecionável / Impecável'],
    images: [
      'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop'
    ],
    specs: {
      power: '483 cv @ 7.250 rpm',
      torque: '56,7 kgfm',
      acceleration: '0-100 km/h em 4,3s',
      consumption: 'Urbano 6,4 km/l | Rodov. 9,3 km/l',
      traction: 'Traseira com diferencial autoblocante Torsen',
      warranty: 'Garantia West Car 1 Ano'
    },
    features: [
      'Escapamento esportivo ativo com 4 modos sonoros',
      'Suspensão magnética MagneRide adaptativa',
      'Freios Brembo de 6 pistões',
      'Modos de condução incluindo Track e Drag Strip',
      'Sistema Line Lock para aquecimento de pneus traseiros',
      'Sistema de áudio B&O com 12 alto-falantes'
    ]
  },
  {
    id: 'ram-rampage-rt-2024',
    brand: 'RAM',
    model: 'Rampage R/T 2.0 Hurricane 4x4',
    year: '2024/2024',
    category: 'Picape',
    featured: false,
    price: 254900,
    downPaymentSuggested: 75000,
    km: '12.400 km',
    fuel: 'Gasolina',
    transmission: 'Automático 9M',
    color: 'Vermelho Flame com Teto Preto',
    plateEnd: '7',
    engine: '2.0 Turbo Hurricane 4 de 272cv',
    highlights: ['A Picape Mais Rápida do Brasil', 'Design Esportivo R/T', 'Tração 4x4 Auto'],
    images: [
      'https://images.unsplash.com/photo-1559416523-140ddc3d238c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop'
    ],
    specs: {
      power: '272 cv',
      torque: '40,8 kgfm',
      acceleration: '0-100 km/h em 6,9s',
      consumption: 'Urbano 8,2 km/l | Rodov. 10,4 km/l',
      traction: 'Integral 4x4 com modo Sport R/T',
      warranty: 'Garantia de Fábrica até 2027'
    },
    features: [
      'Escapamento duplo esportivo cromado',
      'Suspensão rebaixada e calibrada pela divisão R/T',
      'Acabamento interno em suede e costuras vermelhas',
      'Painel digital de 10,25" configurável',
      'Central Uconnect de 12,3" com espelhamento sem fio',
      'Tampa da caçamba com abertura elétrica'
    ]
  },
  {
    id: 'honda-civic-touring-2022',
    brand: 'Honda',
    model: 'Civic Touring 1.5 Turbo G10',
    year: '2022/2022',
    category: 'Sedan',
    featured: false,
    price: 154900,
    downPaymentSuggested: 45000,
    km: '34.000 km',
    fuel: 'Gasolina',
    transmission: 'Automático CVT 7M simuladas',
    color: 'Prata Platinum Metálico',
    plateEnd: '3',
    engine: '1.5 16V VTEC Turbo 173cv',
    highlights: ['Última Safra da G10', 'Extrema Liquidez', 'Laudo Cautelar 100% Aprovado'],
    images: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop'
    ],
    specs: {
      power: '173 cv',
      torque: '22,4 kgfm',
      acceleration: '0-100 km/h em 8,6s',
      consumption: 'Urbano 11,8 km/l | Rodov. 14,4 km/l',
      traction: 'Dianteira',
      warranty: 'Garantia West Car 1 Ano'
    },
    features: [
      'Teto Solar elétrico de acionamento único',
      'Faróis Full LED com acendimento automático',
      'Câmera lateral LaneWatch para ponto cego',
      'Sistema de som de 452W com 10 alto-falantes',
      'Partida do motor remota pela chave',
      'Bancos em couro legítimo marfim'
    ]
  },
  {
    id: 'audi-a4-black-2023',
    brand: 'Audi',
    model: 'A4 Sedan Performance Black TFSI',
    year: '2023/2023',
    category: 'Sedan',
    featured: false,
    price: 298900,
    downPaymentSuggested: 85000,
    km: '18.200 km',
    fuel: 'Gasolina',
    transmission: 'S-tronic 7M Dupla Embreagem',
    color: 'Azul Navarra Metálico',
    plateEnd: '0',
    engine: '2.0 TFSI 204cv',
    highlights: ['Pacote Black Optic Oficial', 'Virtual Cockpit Plus', 'Único Dono'],
    images: [
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop'
    ],
    specs: {
      power: '204 cv',
      torque: '32,6 kgfm',
      acceleration: '0-100 km/h em 7,3s',
      consumption: 'Urbano 10,6 km/l | Rodov. 13,9 km/l',
      traction: 'Dianteira',
      warranty: 'Garantia West Car 1 Ano'
    },
    features: [
      'Audi Virtual Cockpit de 12,3"',
      'Faróis em Full LED Matrix com setas dinâmicas',
      'Bancos esportivos S com apoio de coxa regulável',
      'Pacote exterior em preto brilhante (Black Package)',
      'Controle de cruzeiro adaptativo (ACC)',
      'Teto Solar elétrico com persiana'
    ]
  },
  {
    id: 'chevrolet-tracker-premier-2024',
    brand: 'Chevrolet',
    model: 'Tracker Premier 1.2 Turbo',
    year: '2024/2024',
    category: 'SUV',
    featured: false,
    price: 139900,
    downPaymentSuggested: 38000,
    km: '9.300 km',
    fuel: 'Flex',
    transmission: 'Automático 6M',
    color: 'Azul Eclipse Metálico',
    plateEnd: '2',
    engine: '1.2 Turbo Flex 133cv',
    highlights: ['Topo de Linha Premier', 'Teto Panorâmico', 'Wi-Fi e OnStar Ativos'],
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop'
    ],
    specs: {
      power: '133 cv',
      torque: '21,4 kgfm',
      acceleration: '0-100 km/h em 9,4s',
      consumption: 'Urbano 11,2 km/l | Rodov. 13,5 km/l',
      traction: 'Dianteira',
      warranty: 'Garantia de Fábrica até 2027'
    },
    features: [
      'Teto solar panorâmico elétrico',
      'Alerta de colisão frontal com frenagem autônoma',
      'Sensor de ponto cego nos retrovisores',
      'Easy Park (sistema de estacionamento semiautônomo)',
      'Carregamento wireless para smartphones',
      'Bancos revestidos em couro premium bicolor'
    ]
  },
  {
    id: 'porsche-911-carrera-2022',
    brand: 'Porsche',
    model: '911 Carrera S Coupe 3.0 Bi-Turbo',
    year: '2022/2022',
    category: 'Esportivo',
    featured: true,
    price: 940000,
    downPaymentSuggested: 280000,
    km: '9.100 km',
    fuel: 'Gasolina',
    transmission: 'PDK 8 Velocidades',
    color: 'Crayon Especial',
    plateEnd: '9',
    engine: '3.0 Boxer 6 Cilindros Bi-Turbo 450cv',
    highlights: ['Geração 992', 'Pacote Sport Chrono', 'Cor Especial Crayon', 'Laudo 100%'],
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop'
    ],
    specs: {
      power: '450 cv',
      torque: '54,0 kgfm',
      acceleration: '0-100 km/h em 3,5s',
      consumption: 'Urbano 7,6 km/l | Rodov. 10,8 km/l',
      traction: 'Traseira (RWD)',
      warranty: 'Garantia West Car 1 Ano'
    },
    features: [
      'Pacote Sport Chrono com seletor de modos no volante',
      'Sistema de escape esportivo com ponteiras em preto',
      'Rodas Carrera Classic aro 20 dianteira / 21 traseira',
      'Bancos esportivos Plus elétricos de 18 vias',
      'Sistema de elevação do eixo dianteiro (Front Axle Lift)',
      'Faróis LED Matrix incluindo PDLS Plus'
    ]
  }
];

export const STORE_INFO = {
  name: 'WEST CAR Multimarcas',
  tagline: 'Excelência e Procedência em Veículos Selecionados',
  whatsappNumber: '5511999998877',
  whatsappDisplay: '(11) 99999-8877',
  phoneDisplay: '(11) 4567-8900',
  address: 'Av. das Américas, 4.200 - Barra da Tijuca / SP & RJ',
  email: 'contato@westcarmultimarcas.com.br',
  hours: 'Segunda a Sexta: 08:30 às 19:00 | Sábado: 09:00 às 17:00',
  instagram: '@westcarmultimarcas',
  youtube: 'West Car Multimarcas TV',
  social: {
    instagram: 'https://instagram.com',
    whatsapp: 'https://wa.me/5511999998877',
    youtube: 'https://youtube.com',
    facebook: 'https://facebook.com'
  }
};
