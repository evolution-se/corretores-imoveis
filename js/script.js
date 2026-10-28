/* NOBRE LAR IMOVEIS - script.js */

const WHATSAPP_NUMBER = '5500900000000';

function whatsappLink(message) {
  return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
}

const MSG = {
  geral: 'Ola! Gostaria de falar com um corretor.',
  imovel: (p) => 'Ola! Tenho interesse no imovel ' + p.titulo + ' (codigo ' + p.codigo + '), em ' + p.bairro + ', ' + p.cidade + '. Gostaria de mais informacoes.',
  visita: (p) => 'Ola! Gostaria de agendar uma visita ao imovel ' + p.titulo + ' (codigo ' + p.codigo + ').',
  anunciar: 'Ola! Gostaria de anunciar meu imovel com a Nobre Lar.',
  equipe: (nome) => 'Ola! Gostaria de falar com ' + nome + '.',
  faq: 'Ola! Tenho uma duvida e gostaria de falar com um corretor.',
  ctaFinal: 'Ola! Gostaria de ajuda para encontrar um imovel.',
  vazio: 'Ola! Nao encontrei o imovel que procuro no site e gostaria de ajuda.',
  chipCompra: 'Ola! Quero comprar um imovel e gostaria de ajuda.',
  chipAluguel: 'Ola! Quero alugar um imovel e gostaria de ajuda.',
  chipAnunciar: 'Ola! Gostaria de anunciar meu imovel com a Nobre Lar.',
  chipOutro: 'Ola! Gostaria de falar com um corretor sobre outro assunto.'
};

const properties = [
  { id:1, codigo:'NL-0001', titulo:'Casa com varanda gourmet no Jardim das Acacias', finalidade:'venda', tipo:'Casa', cidade:'Cidade Exemplo', bairro:'Jardim das Acacias', preco:785000, area:210, quartos:3, suites:1, banheiros:3, vagas:2, descricao:'Casa ampla e iluminada, com sala integrada a cozinha americana e varanda gourmet com churrasqueira. Acabamento em porcelanato e esquadrias em aluminio.\n\nQuintal privativo com espaco para jardim e area de servico coberta. Localizacao residencial, a poucos minutos de comercio e escolas.', diferenciais:['Varanda gourmet','Churrasqueira','Quintal privativo','Portaria virtual','Acabamento em porcelanato'], fotos:['images/gallery/imovel-01-1.svg','images/gallery/imovel-01-2.svg','images/gallery/imovel-01-3.svg','images/gallery/imovel-01-4.svg'], destaque:true, status:'Destaque' },
  { id:2, codigo:'NL-0002', titulo:'Apartamento de 2 quartos no Residencial Vista Verde', finalidade:'aluguel', tipo:'Apartamento', cidade:'Cidade Exemplo', bairro:'Residencial Vista Verde', preco:2800, condominio:420, iptu:95, area:68, quartos:2, suites:0, banheiros:1, vagas:1, descricao:'Apartamento funcional em condominio com area de lazer. Sala com varanda, cozinha planejada e quartos com armarios.\n\nIdeal para quem busca praticidade e proximidade de transporte. Valores de condominio e IPTU ficticios, para demonstracao.', diferenciais:['Condominio com lazer','Varanda','Cozinha planejada','Portaria 24h','Proximo a transporte'], fotos:['images/gallery/imovel-02-1.svg','images/gallery/imovel-02-2.svg','images/gallery/imovel-02-3.svg','images/gallery/imovel-02-4.svg'], destaque:true, status:'Aluguel' },
  { id:3, codigo:'NL-0003', titulo:'Cobertura duplex com vista panoramica', finalidade:'venda', tipo:'Cobertura', cidade:'Cidade Exemplo', bairro:'Alto da Serra', preco:1450000, area:260, quartos:4, suites:2, banheiros:4, vagas:3, descricao:'Cobertura duplex com terraco e vista panoramica da cidade. Piso superior com piscina privativa e espaco gourmet.\n\nPiso inferior com salas amplas, cozinha integrada e quartos com suites. Imovel demonstrativo, com informacoes ficticias.', diferenciais:['Piscina privativa','Terraco','Vista panoramica','Espaco gourmet','3 vagas'], fotos:['images/gallery/imovel-03-1.svg','images/gallery/imovel-03-2.svg','images/gallery/imovel-03-3.svg','images/gallery/imovel-03-4.svg'], destaque:true, status:'Lancamento' },
  ,{ id:4, codigo:'NL-0004', titulo:'Sala comercial em edificio corporativo', finalidade:'aluguel', tipo:'Sala comercial', cidade:'Cidade Exemplo', bairro:'Centro Empresarial', preco:4500, condominio:680, iptu:180, area:45, quartos:0, banheiros:1, vagas:1, descricao:'Sala comercial pronta para uso, com piso elevado, forro e luminarias. Banheiro privativo e vaga no edificio.\n\nLocalizacao estrategica para escritorios e consultorios. Valores demonstrativos.', diferenciais:['Piso elevado','Forro e luminarias','Banheiro privativo','Vaga no edificio','Localizacao central'], fotos:['images/gallery/imovel-04-1.svg','images/gallery/imovel-04-2.svg','images/gallery/imovel-04-3.svg','images/gallery/imovel-04-4.svg'], destaque:false, status:'Comercial' }
  ,{ id:5, codigo:'NL-0005', titulo:'Terreno em condominio fechado', finalidade:'venda', tipo:'Terreno', cidade:'Cidade Exemplo', bairro:'Condominio Horizonte', preco:320000, area:450, quartos:0, banheiros:0, vagas:0, descricao:'Lote plano em condominio fechado com infraestrutura completa. Topografia favoravel a construcao.\n\nCondominio com portaria, lazer e area verde. Documentacao ficticia para demonstracao.', diferenciais:['Lote plano','Infraestrutura completa','Portaria 24h','Area verde','Topografia favoravel'], fotos:['images/gallery/imovel-05-1.svg','images/gallery/imovel-05-2.svg','images/gallery/imovel-05-3.svg','images/gallery/imovel-05-4.svg'], destaque:false, status:'' }
  ,{ id:6, codigo:'NL-0006', titulo:'Casa de 4 quartos com piscina no Parque das Flores', finalidade:'venda', tipo:'Casa', cidade:'Cidade Exemplo', bairro:'Parque das Flores', preco:1250000, area:320, quartos:4, suites:2, banheiros:4, vagas:4, descricao:'Residencia de alto padrao com piscina, espaco gourmet e jardim amplo. Sala de cinema e home office.\n\nAcabamentos selecionados e automacao basica. Imovel demonstrativo.', diferenciais:['Piscina','Espaco gourmet','Jardim amplo','Home office','Automacao'], fotos:['images/gallery/imovel-06-1.svg','images/gallery/imovel-06-2.svg','images/gallery/imovel-06-3.svg','images/gallery/imovel-06-4.svg'], destaque:true, status:'Destaque' }
  ,{ id:7, codigo:'NL-0007', titulo:'Apartamento mobiliado para locacao no Centro', finalidade:'aluguel', tipo:'Apartamento', cidade:'Cidade Exemplo', bairro:'Centro', preco:3500, condominio:550, iptu:120, area:75, quartos:2, suites:1, banheiros:2, vagas:1, descricao:'Apartamento mobiliado e pronto para morar, com ar-condicionado e eletrodomesticos. Localizacao central.\n\nCondominio com portaria e salao de festas. Valores ficticios.', diferenciais:['Mobiliado','Ar-condicionado','Localizacao central','Portaria','Salao de festas'], fotos:['images/gallery/imovel-07-1.svg','images/gallery/imovel-07-2.svg','images/gallery/imovel-07-3.svg','images/gallery/imovel-07-4.svg'], destaque:false, status:'Mobiliado' },
  { id:8, codigo:'NL-0008', titulo:'Casa geminada nova no Bairro Jardim Sol', finalidade:'venda', tipo:'Casa', cidade:'Cidade Exemplo', bairro:'Jardim Sol', preco:420000, area:120, quartos:2, suites:1, banheiros:2, vagas:1, descricao:'Casa nova em condominio, com 2 quartos e suíte. Sala com varanda e cozinha americana.\n\nArea de servico coberta e quintal. Ideal para primeiro imovel.', diferenciais:['Casa nova','Condominio','Suíte','Varanda','Quintal'], fotos:['images/gallery/imovel-08-1.svg','images/gallery/imovel-08-2.svg','images/gallery/imovel-08-3.svg','images/gallery/imovel-08-4.svg'], destaque:false, status:'Novo' }
  ,{ id:9, codigo:'NL-0009', titulo:'Apartamento de 3 quartos com lazer completo', finalidade:'venda', tipo:'Apartamento', cidade:'Cidade Exemplo', bairro:'Residencial Vista Verde', preco:560000, area:92, quartos:3, suites:1, banheiros:2, vagas:2, descricao:'Apartamento em torre com lazer completo: piscina, academia e playground. Varanda gourmet.\n\nCozinha planejada e quartos com armarios. Imovel demonstrativo.', diferenciais:['Piscina','Academia','Playground','Varanda gourmet','2 vagas'], fotos:['images/gallery/imovel-09-1.svg','images/gallery/imovel-09-2.svg','images/gallery/imovel-09-3.svg','images/gallery/imovel-09-4.svg'], destaque:true, status:'Destaque' }
  ,{ id:10, codigo:'NL-0010', titulo:'Sobrado comercial para locacao no Alto da Serra', finalidade:'aluguel', tipo:'Casa', cidade:'Cidade Exemplo', bairro:'Alto da Serra', preco:6500, condominio:0, iptu:210, area:180, quartos:0, banheiros:2, vagas:4, descricao:'Sobrado com uso comercial, amplo salao no terreo e escritorios no piso superior. Estacionamento frontal.\n\nApto para clinicas, escritorios e comercio. Valores ficticios.', diferenciais:['Salao amplo','Escritorios','Estacionamento','2 banheiros','Localizacao visivel'], fotos:['images/gallery/imovel-10-1.svg','images/gallery/imovel-10-2.svg','images/gallery/imovel-10-3.svg','images/gallery/imovel-10-4.svg'], destaque:false, status:'Comercial' }
  ,{ id:11, codigo:'NL-0011', titulo:'Apartamento compacto para solteiros no Centro', finalidade:'aluguel', tipo:'Apartamento', cidade:'Cidade Exemplo', bairro:'Centro', preco:1900, condominio:310, iptu:75, area:38, quartos:1, suites:0, banheiros:1, vagas:0, descricao:'Studio funcional no centro da cidade, com cozinha integrada e area de servico. Ideal para quem busca praticidade.\n\nCondominio com portaria. Valores demonstrativos.', diferenciais:['Studio','Localizacao central','Portaria','Baixo condominio','Pronto para morar'], fotos:['images/gallery/imovel-11-1.svg','images/gallery/imovel-11-2.svg','images/gallery/imovel-11-3.svg','images/gallery/imovel-11-4.svg'], destaque:false, status:'' }
  ,{ id:12, codigo:'NL-0012', titulo:'Casa de campo com terreno amplo', finalidade:'venda', tipo:'Casa', cidade:'Cidade Exemplo', bairro:'Condominio Horizonte', preco:980000, area:240, quartos:3, suites:1, banheiros:3, vagas:4, descricao:'Casa de campo com terreno amplo, varanda e area de churrasco. Pomar e horta.\n\nAmbiente tranquilo a poucos minutos da cidade. Imovel demonstrativo.', diferenciais:['Terreno amplo','Varanda','Churrasco','Pomar','Ambiente tranquilo'], fotos:['images/gallery/imovel-12-1.svg','images/gallery/imovel-12-2.svg','images/gallery/imovel-12-3.svg','images/gallery/imovel-12-4.svg'], destaque:false, status:'' }
  ,{ id:13, codigo:'NL-0013', titulo:'Lote comercial na Avenida Principal', finalidade:'venda', tipo:'Terreno', cidade:'Cidade Exemplo', bairro:'Centro Empresarial', preco:650000, area:600, quartos:0, banheiros:0, vagas:0, descricao:'Lote comercial em avenida de grande fluxo, ideal para empreendimento ou ponto de venda.\n\nDocumentacao ficticia para demonstracao.', diferenciais:['Avenida de fluxo','Grande area','Uso comercial','Localizacao estrategica','Topografia plana'], fotos:['images/gallery/imovel-13-1.svg','images/gallery/imovel-13-2.svg','images/gallery/imovel-13-3.svg','images/gallery/imovel-13-4.svg'], destaque:false, status:'' }
  ,{ id:14, codigo:'NL-0014', titulo:'Apartamento de 2 quartos com varanda no Jardim Sol', finalidade:'venda', tipo:'Apartamento', cidade:'Cidade Exemplo', bairro:'Jardim Sol', preco:335000, area:62, quartos:2, suites:1, banheiros:2, vagas:1, descricao:'Apartamento novo com varanda, cozinha americana e 2 quartos com suíte. Area de lazer no condominio.\n\nPronto para morar. Imovel demonstrativo.', diferenciais:['Novo','Varanda','Suíte','Lazer no condominio','Pronto para morar'], fotos:['images/gallery/imovel-14-1.svg','images/gallery/imovel-14-2.svg','images/gallery/imovel-14-3.svg','images/gallery/imovel-14-4.svg'], destaque:false, status:'Novo' }
  ,{ id:15, codigo:'NL-0015', titulo:'Casa de 3 quartos para locacao no Parque das Flores', finalidade:'aluguel', tipo:'Casa', cidade:'Cidade Exemplo', bairro:'Parque das Flores', preco:4200, condominio:0, iptu:160, area:150, quartos:3, suites:1, banheiros:2, vagas:2, descricao:'Casa com 3 quartos e quintal, ideal para familia. Sala ampla e cozinha planejada.\n\nLocalizacao residencial e tranquila. Valores ficticios.', diferenciais:['3 quartos','Quintal','Cozinha planejada','2 vagas','Residencial'], fotos:['images/gallery/imovel-15-1.svg','images/gallery/imovel-15-2.svg','images/gallery/imovel-15-3.svg','images/gallery/imovel-15-4.svg'], destaque:false, status:'' }
  ,{ id:16, codigo:'NL-0016', titulo:'Cobertura linear com terraco no Alto da Serra', finalidade:'aluguel', tipo:'Cobertura', cidade:'Cidade Exemplo', bairro:'Alto da Serra', preco:9500, condominio:900, iptu:320, area:200, quartos:3, suites:2, banheiros:3, vagas:2, descricao:'Cobertura linear com terraco e vista da cidade. Sala ampla e cozinha integrada.\n\nCondominio com lazer completo. Valores demonstrativos.', diferenciais:['Terraco','Vista da cidade','Lazer completo','Cozinha integrada','2 vagas'], fotos:['images/gallery/imovel-16-1.svg','images/gallery/imovel-16-2.svg','images/gallery/imovel-16-3.svg','images/gallery/imovel-16-4.svg'], destaque:true, status:'Destaque' }
];
/* ---------- 3. UTILITARIOS ---------- */
function formatPrice(n) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(n);
}
function priceLabel(p) {
  let s = formatPrice(p.preco);
  if (p.finalidade === 'aluguel') s += ' /mes';
  return s;
}
function featuresHtml(p) {
  let items = [];
  if (p.area) items.push('<span><i class="bi bi-rulers"></i> ' + p.area + ' m²</span>');
  if (p.quartos) items.push('<span><i class="bi bi-door-closed"></i> ' + p.quartos + (p.suites ? ' (' + p.suites + ' suite' + (p.suites>1?'s':'') + ')' : '') + '</span>');
  if (p.banheiros) items.push('<span><i class="bi bi-droplet"></i> ' + p.banheiros + '</span>');
  if (p.vagas) items.push('<span><i class="bi bi-car-front"></i> ' + p.vagas + '</span>');
  return items.join('');
}
function badgeClass(status, finalidade) {
  if (status === 'Destaque') return 'destaque';
  if (status === 'Lancamento') return 'lancamento';
  if (finalidade === 'venda') return 'venda';
  if (finalidade === 'aluguel') return 'aluguel';
  return '';
}
function badgeLabel(p) {
  if (p.status) return p.status;
  return p.finalidade === 'venda' ? 'Venda' : 'Aluguel';
}
/* ---------- 4. RENDER DE CARDS ---------- */
function cardHtml(p) {
  return '<article class="property-card reveal">' +
    '<div class="card-media">' +
      '<img src="' + p.fotos[0] + '" alt="' + p.titulo + ' - imovel demonstrativo" width="800" height="600" loading="lazy" onerror="this.src=\'images/hero/pattern.svg\'">' +
      '<span class="badge-pill ' + badgeClass(p.status, p.finalidade) + '">' + badgeLabel(p) + '</span>' +
      '<span class="badge-demo">Imovel demonstrativo</span>' +
      '<button class="fav-btn" aria-label="Favoritar (decorativo)" type="button"><i class="bi bi-heart"></i></button>' +
    '</div>' +
    '<div class="card-body">' +
      '<div class="property-code">' + p.codigo + '</div>' +
      '<h3 class="property-title">' + p.titulo + '</h3>' +
      '<div class="property-loc"><i class="bi bi-geo-alt"></i> ' + p.bairro + ', ' + p.cidade + '</div>' +
      '<div class="property-price">' + priceLabel(p) + '</div>' +
      (p.finalidade === 'aluguel' && (p.condominio || p.iptu) ? '<div class="property-fees">Cond. ' + formatPrice(p.condominio||0) + ' · IPTU ' + formatPrice(p.iptu||0) + ' (ficticios)</div>' : '') +
      '<div class="property-features">' + featuresHtml(p) + '</div>' +
      '<div class="card-actions">' +
        '<button class="btn btn-ghost btn-sm" data-open-modal="' + p.id + '" aria-label="Ver detalhes do imovel ' + p.titulo + '">Ver detalhes</button>' +
        '<a class="btn btn-whatsapp btn-sm" href="' + whatsappLink(MSG.imovel(p)) + '" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i> WhatsApp</a>' +
      '</div>' +
    '</div>' +
  '</article>';
}
function renderCards(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = list.map(cardHtml).join('');
  observeReveal(container);
}

/* ---------- 5. FILTROS ---------- */
const filterState = { finalidade: 'todos', tipo: 'Todos', cidade: 'Todas', preco: 'Todos' };
const PRICE_RANGES = {
  venda: [
    { label: 'Ate R$ 300 mil', min: 0, max: 300000 },
    { label: 'R$ 300 mil a R$ 600 mil', min: 300000, max: 600000 },
    { label: 'R$ 600 mil a R$ 1 milhao', min: 600000, max: 1000000 },
    { label: 'Acima de R$ 1 milhao', min: 1000000, max: Infinity }
  ],
  aluguel: [
    { label: 'Ate R$ 2.000', min: 0, max: 2000 },
    { label: 'R$ 2.000 a R$ 4.000', min: 2000, max: 4000 },
    { label: 'R$ 4.000 a R$ 8.000', min: 4000, max: 8000 },
    { label: 'Acima de R$ 8.000', min: 8000, max: Infinity }
  ]
};
function populateCities() {
  const sel = document.getElementById('filter-cidade');
  if (!sel) return;
  const cidades = [...new Set(properties.map(p => p.cidade))];
  sel.innerHTML = '<option value="Todas">Todas as cidades</option>' + cidades.map(c => '<option value="' + c + '">' + c + '</option>').join('');
}
function updatePriceOptions() {
  const sel = document.getElementById('filter-preco');
  if (!sel) return;
  let ranges = [];
  if (filterState.finalidade === 'venda') ranges = PRICE_RANGES.venda;
  else if (filterState.finalidade === 'aluguel') ranges = PRICE_RANGES.aluguel;
  if (ranges.length === 0) {
    sel.innerHTML = '<option value="Todos">Selecione uma finalidade para filtrar por preco</option>';
    sel.disabled = true;
    return;
  }
  sel.disabled = false;
  sel.innerHTML = '<option value="Todos">Todas as faixas</option>' + ranges.map((r, i) => '<option value="' + i + '">' + r.label + '</option>').join('');
  filterState.preco = 'Todos';
}
function applyFilters() {
  let list = properties.slice();
  if (filterState.finalidade !== 'todos') list = list.filter(p => p.finalidade === filterState.finalidade);
  if (filterState.tipo !== 'Todos') list = list.filter(p => p.tipo === filterState.tipo);
  if (filterState.cidade !== 'Todas') list = list.filter(p => p.cidade === filterState.cidade);
  if (filterState.preco !== 'Todos') {
    let ranges = filterState.finalidade === 'venda' ? PRICE_RANGES.venda : (filterState.finalidade === 'aluguel' ? PRICE_RANGES.aluguel : []);
    const r = ranges[parseInt(filterState.preco)];
    if (r) list = list.filter(p => p.preco >= r.min && p.preco < r.max);
  }
  const grid = document.getElementById('property-grid');
  const counter = document.getElementById('results-count');
  const empty = document.getElementById('empty-state');
  if (list.length === 0) {
    if (grid) grid.innerHTML = '';
    if (empty) empty.classList.remove('d-none');
  } else {
    if (empty) empty.classList.add('d-none');
    renderCards(list, 'property-grid');
  }
  if (counter) counter.textContent = list.length + ' imoveis encontrados';
  const dest = properties.filter(p => p.destaque);
  renderCards(dest.slice(0,6), 'destaques-grid');
}
function clearFilters() {
  filterState.finalidade = 'todos';
  filterState.tipo = 'Todos';
  filterState.cidade = 'Todas';
  filterState.preco = 'Todos';
  document.querySelectorAll('.purpose-tab').forEach(t => t.classList.toggle('active', t.dataset.value === 'todos'));
  const tipo = document.getElementById('filter-tipo'); if (tipo) tipo.value = 'Todos';
  const cidade = document.getElementById('filter-cidade'); if (cidade) cidade.value = 'Todas';
  updatePriceOptions();
  applyFilters();
}
function setFinalidade(val) {
  filterState.finalidade = val;
  document.querySelectorAll('.purpose-tab').forEach(t => t.classList.toggle('active', t.dataset.value === val));
  updatePriceOptions();
  applyFilters();
  document.querySelectorAll('.qs-tab').forEach(t => t.classList.toggle('active', t.dataset.value === val));
}
/* ---------- 6. MODAL ---------- */
let currentProperty = null;
const modalEl = document.getElementById('propertyModal');
const bsModal = modalEl ? new bootstrap.Modal(modalEl) : null;
function openModal(id) {
  const p = properties.find(x => x.id === id);
  if (!p) return;
  currentProperty = p;
  document.getElementById('modal-title').textContent = p.titulo;
  document.getElementById('modal-code').textContent = p.codigo;
  document.getElementById('modal-loc').textContent = p.bairro + ', ' + p.cidade;
  document.getElementById('modal-price').textContent = priceLabel(p);
  document.getElementById('modal-fees').textContent = (p.finalidade === 'aluguel' && (p.condominio || p.iptu)) ? 'Cond. ' + formatPrice(p.condominio||0) + ' · IPTU ' + formatPrice(p.iptu||0) + ' (valores ficticios)' : '';
  const f = document.getElementById('modal-features');
  f.innerHTML = '';
  if (p.area) f.innerHTML += '<div class="modal-feature"><i class="bi bi-rulers"></i><div class="v">' + p.area + ' m²</div><div class="l">Area</div></div>';
  if (p.quartos) f.innerHTML += '<div class="modal-feature"><i class="bi bi-door-closed"></i><div class="v">' + p.quartos + '</div><div class="l">Quartos' + (p.suites ? ' ('+p.suites+' suite'+(p.suites>1?'s':'')+')' : '') + '</div></div>';
  if (p.banheiros) f.innerHTML += '<div class="modal-feature"><i class="bi bi-droplet"></i><div class="v">' + p.banheiros + '</div><div class="l">Banheiros</div></div>';
  if (p.vagas) f.innerHTML += '<div class="modal-feature"><i class="bi bi-car-front"></i><div class="v">' + p.vagas + '</div><div class="l">Vagas</div></div>';
  document.getElementById('modal-desc').innerHTML = p.descricao.split('\n\n').map(par => '<p>' + par + '</p>').join('');
  const ul = document.getElementById('modal-diffs');
  ul.innerHTML = p.diferenciais.map(d => '<li><i class="bi bi-check2"></i> ' + d + '</li>').join('');
  document.getElementById('modal-wa').href = whatsappLink(MSG.imovel(p));
  const ag = document.getElementById('modal-agendar'); if (ag) ag.href = whatsappLink(MSG.visita(p));
  buildGallery(p);
  if (bsModal) bsModal.show();
}
function buildGallery(p) {
  const inner = document.getElementById('modal-carousel-inner');
  const indicators = document.getElementById('modal-carousel-indicators');
  const thumbs = document.getElementById('modal-thumbs');
  inner.innerHTML = ''; indicators.innerHTML = ''; thumbs.innerHTML = '';
  p.fotos.forEach((src, i) => {
    const item = document.createElement('div');
    item.className = 'carousel-item' + (i === 0 ? ' active' : '');
    item.innerHTML = '<img src="' + src + '" alt="' + p.titulo + ' - foto ' + (i+1) + ' (imovel demonstrativo)" loading="' + (i===0?'eager':'lazy') + '">';
    inner.appendChild(item);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.dataset.bsTarget = '#modalCarousel';
    btn.dataset.bsSlideTo = i;
    btn.setAttribute('aria-label', 'Foto ' + (i+1));
    if (i === 0) btn.classList.add('active');
    indicators.appendChild(btn);
    const t = document.createElement('img');
    t.src = src; t.alt = '';
    t.className = i === 0 ? 'active' : '';
    t.addEventListener('click', () => {
      const c = bootstrap.Carousel.getOrCreateInstance(document.getElementById('modalCarousel'));
      c.to(i);
    });
    thumbs.appendChild(t);
  });
}
/* ---------- 7. BUSCA RAPIDA DO HERO ---------- */
function heroSearch() {
  const finalidade = document.querySelector('.qs-tab.active')?.dataset.value || 'todos';
  const tipo = document.getElementById('qs-tipo')?.value || 'Todos';
  const cidade = document.getElementById('qs-cidade')?.value || 'Todas';
  setFinalidade(finalidade);
  filterState.tipo = tipo;
  filterState.cidade = cidade;
  const tipoSel = document.getElementById('filter-tipo'); if (tipoSel) tipoSel.value = tipo;
  const cidadeSel = document.getElementById('filter-cidade'); if (cidadeSel) cidadeSel.value = cidade;
  updatePriceOptions();
  applyFilters();
  document.getElementById('imoveis')?.scrollIntoView({ behavior: 'smooth' });
}
/* ---------- 8. HEADER SCROLL ---------- */
function initHeader() {
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (window.scrollY > 60) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  document.querySelectorAll('.navbar-collapse .nav-link, .navbar-collapse .btn').forEach(el => {
    el.addEventListener('click', () => {
      const collapse = document.querySelector('.navbar-collapse');
      if (collapse && collapse.classList.contains('show')) document.querySelector('.navbar-toggler')?.click();
    });
  });
  const btt = document.getElementById('back-to-top');
  const fab = document.querySelector('.fab-whatsapp');
  window.addEventListener('scroll', () => {
    btt?.classList.toggle('show', window.scrollY > 400);
    fab?.classList.toggle('show', window.scrollY > 200);
  }, { passive: true });
}
/* ---------- 9. LINK ATIVO ---------- */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => obs.observe(s));
}
/* ---------- 10. REVEAL ---------- */
let revealObserver = null;
function observeReveal(root) {
  const els = (root || document).querySelectorAll('.reveal');
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealObserver.unobserve(e.target); } });
    }, { threshold: 0.12 });
  }
  els.forEach(el => { if (!el.classList.contains('in')) revealObserver.observe(el); });
}
/* ---------- 11. COMO FUNCIONA ---------- */
function initHowTabs() {
  document.querySelectorAll('#howTabs .nav-link').forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('#howTabs .nav-link').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.getAttribute('data-bs-target');
      document.querySelectorAll('.how-pane').forEach(p => p.classList.add('d-none'));
      document.querySelector(target)?.classList.remove('d-none');
    });
  });
}
/* ---------- 12. CHIPS ---------- */
function initChips() {
  const map = { 'chip-compra': MSG.chipCompra, 'chip-aluguel': MSG.chipAluguel, 'chip-anunciar': MSG.chipAnunciar, 'chip-outro': MSG.chipOutro };
  Object.keys(map).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = whatsappLink(map[id]);
  });
}
/* ---------- 13. VOLTAR AO TOPO ---------- */
function initBackToTop() {
  document.getElementById('back-to-top')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
/* ---------- 14. EVENTOS DE FILTRO ---------- */
function initFilters() {
  populateCities();
  updatePriceOptions();
  document.querySelectorAll('.purpose-tab').forEach(t => t.addEventListener('click', () => setFinalidade(t.dataset.value)));
  document.getElementById('filter-tipo')?.addEventListener('change', (e) => { filterState.tipo = e.target.value; applyFilters(); });
  document.getElementById('filter-cidade')?.addEventListener('change', (e) => { filterState.cidade = e.target.value; applyFilters(); });
  document.getElementById('filter-preco')?.addEventListener('change', (e) => { filterState.preco = e.target.value; applyFilters(); });
  document.getElementById('clear-filters')?.addEventListener('click', clearFilters);
  const ew = document.getElementById('empty-wa'); if (ew) ew.href = whatsappLink(MSG.vazio);
  document.querySelectorAll('.qs-tab').forEach(t => t.addEventListener('click', () => {
    document.querySelectorAll('.qs-tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
  }));
  const qsCity = document.getElementById('qs-cidade');
  if (qsCity) {
    const cidades = [...new Set(properties.map(p => p.cidade))];
    qsCity.innerHTML = '<option value="Todas">Todas as cidades</option>' + cidades.map(c => '<option value="' + c + '">' + c + '</option>').join('');
  }
  const qsTipo = document.getElementById('qs-tipo');
  if (qsTipo) qsTipo.innerHTML = '<option value="Todos">Todos os tipos</option>' + ['Casa','Apartamento','Cobertura','Terreno','Sala comercial'].map(t => '<option value="' + t + '">' + t + '</option>').join('');
  document.getElementById('qs-btn')?.addEventListener('click', heroSearch);
  const ft = document.getElementById('filter-tipo');
  if (ft) ft.innerHTML = '<option value="Todos">Todos os tipos</option>' + ['Casa','Apartamento','Cobertura','Terreno','Sala comercial'].map(t => '<option value="' + t + '">' + t + '</option>').join('');
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-open-modal]');
    if (btn) openModal(parseInt(btn.dataset.openModal));
  });
}
/* ---------- 15. INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  initHeader();
  initActiveNav();
  initFilters();
  applyFilters();
  initHowTabs();
  initChips();
  initBackToTop();
  observeReveal();
  document.querySelectorAll('[data-wa]').forEach(el => {
    const key = el.dataset.wa;
    if (key === 'equipe') {
      el.href = whatsappLink(MSG.equipe(el.dataset.nome || ''));
    } else {
      const msg = MSG[key] || MSG.geral;
      el.href = whatsappLink(typeof msg === 'function' ? msg() : msg);
    }
    el.target = '_blank'; el.rel = 'noopener noreferrer';
  });
  const mc = document.getElementById('modalCarousel');
  if (mc) mc.addEventListener('slid.bs.carousel', (ev) => {
    const idx = ev.to;
    document.querySelectorAll('#modal-thumbs img').forEach((t,i) => t.classList.toggle('active', i === idx));
  });
});