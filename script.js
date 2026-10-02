// Tabs: show the section that matches the address (#overview, #days, ...)
function showTab() {
  const id = location.hash.slice(1) || 'overview';
  document.querySelectorAll('.panel').forEach(p => p.hidden = p.id !== 'tab-' + id);
  document.querySelectorAll('.menu a').forEach(a => a.classList.toggle('active', a.hash === '#' + id));
  window.scrollTo(0, 0);
  // Maps need to be visible to size themselves
  document.querySelectorAll('#tab-' + id + ' [data-map]').forEach(fitMap);
}

// Lines (from routes.js) and how they look
const lineStyle = {
  day2: { color: '#a3201c' },
  day3: { color: '#7b2d6b' },
  day4: { color: '#2e6b5a' }
};

// Stops: [id, lat, lng, name, popup text, type, label]. Type 'sleep' = where we spend the night (gold bed marker + label).
const stops = [
  ['hg', 22.8233, 104.9836, 'Hà Giang city', 'Arrive Fri ~04:00-05:00, pick up the bikes. Return them Sun ~12:30.'],
  ['gate', 23.0493, 104.9930, 'Quản Bạ Heaven Gate', 'With the Twin (Fairy) Mountains just below. Fri morning.'],
  ['yenminh', 23.1206, 105.1394, 'Yên Minh', 'Lunch on Friday, then the Thẩm Mã Pass.'],
  ['vuong', 23.2562, 105.2621, 'Vương Palace', "The H'mong king's house. Fri afternoon."],
  ['dongvan', 23.2786, 105.3627, 'Đồng Văn', 'Homestay, Fri night. Dinner pre-ordered.', 'sleep', 'Fri night · Đồng Văn'],
  ['lungcu', 23.3635, 105.3163, 'Lũng Cú flag (optional)', 'Northern tip of Vietnam. Sat early, about 1.5 h there and back.', 'opt'],
  ['mapileng', 23.2406, 105.4121, 'Mã Pí Lèng Pass', 'Sat morning. The Nho Quế river and Tu Sản canyon are below: boat trip.'],
  ['meovac', 23.1633, 105.4104, 'Mèo Vạc', 'Lunch at Voi Hostel, Sat.'],
  ['dugia', 22.9326, 105.2224, 'Du Già', 'Local Homestay Du Già, Sat night. Dinner pre-ordered. Waterfall early Sun.', 'sleep', 'Sat night · Du Già']
];

// What each map shows: the bike loop only, no buses.
const mapContent = {
  overview: { lines: ['day2', 'day3', 'day4'], stops: stops.map(s => s[0]) },
  day2: { lines: ['day2'], stops: ['hg', 'gate', 'yenminh', 'vuong', 'dongvan'] },
  day3: { lines: ['day3'], stops: ['dongvan', 'lungcu', 'mapileng', 'meovac', 'dugia'] },
  day4: { lines: ['day4'], stops: ['dugia', 'hg'] }
};

const bed = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M3 6h2v7h6V9h7a3 3 0 0 1 3 3v6h-2v-2H5v2H3z M8 12.5a2 2 0 1 0 0-.01z"/></svg>';

function buildMap(el) {
  const content = mapContent[el.dataset.map];
  const map = L.map(el, { scrollWheelZoom: false });
  L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '© OpenStreetMap contributors, © OpenTopoMap (CC BY-SA)'
  }).addTo(map);

  const frame = [];
  content.lines.forEach(key => {
    L.polyline(ROUTES[key].line, { color: '#fff', weight: 9, opacity: .8 }).addTo(map);
    frame.push(L.polyline(ROUTES[key].line, { weight: 5, ...lineStyle[key] }).addTo(map));
  });

  stops.forEach(([id, lat, lng, name, text, type = '', label], i) => {
    if (!content.stops.includes(id)) return;
    const sleep = type === 'sleep';
    const size = sleep ? 34 : 26;
    const icon = L.divIcon({ className: '', html: `<div class="map-num ${type}">${sleep ? bed : i + 1}</div>`, iconSize: [size, size], iconAnchor: [size / 2, size / 2] });
    const marker = L.marker([lat, lng], { icon, zIndexOffset: sleep ? 1000 : 0 }).addTo(map).bindPopup(`<b>${name}</b><br>${text}`);
    if (label) marker.bindTooltip(label, { permanent: true, direction: 'right', offset: [18, 0], className: 'sleep-label' });
    frame.push(marker);
  });

  el.bounds = L.featureGroup(frame).getBounds();
  el.leaflet = map;
}

function fitMap(el) {
  if (!el.leaflet) buildMap(el);
  el.leaflet.invalidateSize();
  // Extra room on the right for the 'night' labels
  el.leaflet.fitBounds(el.bounds, { paddingTopLeft: [30, 30], paddingBottomRight: [150, 30], maxZoom: 12 });
}

window.addEventListener('hashchange', showTab);
showTab();

// Budget, per person. Vietnam prices in VND, converted at 20,000 VND = 1 SGD.
const RATE = 20000;
const budget = [
  ['Getting there and back', [
    ['Flight Singapore to Hanoi', 'Thu 26 Nov, not picked yet', { sgd: 180 }],
    ['Scoot flight Hanoi to Singapore', 'Mon 30 Nov, about 19:50', { sgd: 120 }],
    ['Night bus to Ha Giang', 'Bằng Phấn cabin sleeper, 470,000 VND', { vnd: 470000 }],
    ['Bus back to Nội Bài', 'Bằng Phấn limousine, about 350,000 VND', { vnd: 350000 }],
    ['Hotel to airport', 'Mon, shuttle or Grab', { vnd: 60000 }]
  ]],
  ['Bikes', [
    ['Bike rental', 'Honda Future 125cc, 3 days × 250,000 VND', { vnd: 750000 }],
    ['Damage insurance', '3 days × about 150,000 VND', { vnd: 450000 }],
    ['Fuel', 'About 350 km on the loop', { vnd: 250000 }]
  ]],
  ['Where we sleep (half of a twin room)', [
    ['Đồng Văn homestay', 'Fri 27 Nov, about 500,000 VND per room', { vnd: 250000 }],
    ['Local Homestay Du Già', 'Sat 28 Nov, about 500,000 VND per room', { vnd: 250000 }],
    ['Noi Bai Boutique Hotel', 'Sun 29 Nov, about US$40 per room', { vnd: 500000 }],
    ['Late check-out', 'Mon, to about 17:00, about half a night', { vnd: 250000 }]
  ]],
  ['Food and extras', [
    ['Homestay dinners', '2 × about 150,000 VND', { vnd: 300000 }],
    ['Other meals and coffee', '4 days × about 300,000 VND', { vnd: 1200000 }],
    ['Nho Quế river boat', 'Tu Sản canyon', { vnd: 150000 }],
    ['Entry tickets', 'Vương Palace, Lũng Cú flagpole', { vnd: 100000 }],
    ['Vietnam eSIM', 'Data for the trip', { vnd: 200000 }]
  ]]
];

const toSgd = cost => cost.sgd ?? cost.vnd / RATE;
let total = 0;
let rows = '';
budget.forEach(([group, items]) => {
  rows += `<tr class="group"><td colspan="3">${group}</td></tr>`;
  items.forEach(([what, details, cost]) => {
    const sgd = toSgd(cost);
    total += sgd;
    rows += `<tr><td>${what}</td><td class="muted">${details}</td><td class="num">${Math.round(sgd)}</td></tr>`;
  });
});
const rounded = Math.round(total / 10) * 10;
rows += `<tr class="total"><td colspan="2">Total per person, about</td><td class="num">${rounded}</td></tr>`;
document.getElementById('budget-rows').innerHTML = rows;
document.getElementById('stat-total').textContent = '~' + rounded;
