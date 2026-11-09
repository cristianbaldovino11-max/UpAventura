/* ============================================================
   Up: Una aventura de altura — Lógica principal
   - Datos de personajes (ilustración SVG original)
   - Rompecabezas (memory matching)
   - Puntuaciones de escenas (1-5)
   - Contador de visitas con Supabase
   ============================================================ */

/* ---------- 1. PERSONAJES ---------- */
const characters = [
  {
    id: 'carl',
    name: 'Carl Fredricksen',
    emoji: '🧓',
    svg:
      `<svg viewBox="0 0 90 90" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#2563EB"/><stop offset="1" stop-color="#7C3AED"/>
        </linearGradient></defs>
        <rect width="90" height="90" rx="16" fill="url(#g1)"/>
        <circle cx="45" cy="28" r="11" fill="#fbbf24"/>
        <path d="M30 62 L45 44 L60 62 Z" fill="#7C3AED"/>
        <rect x="32" y="68" width="26" height="10" rx="3" fill="#1E293B"/>
        <rect x="16" y="74" width="8" height="8" rx="2" fill="#2563EB" transform="rotate(-30 20 78)"/>
        <rect x="66" y="74" width="6" height="6" rx="2" fill="#2563EB" transform="rotate(30 69 77)"/>
        <circle cx="60" cy="77" r="3" fill="#2563EB"/>
      </svg>`,
    quote: '"Nunca olvides los recuerdos que dejaste."',
    meaning: 'El amor y el compromiso, aunque el tiempo pase.'
  },
  {
    id: 'russell',
    name: 'Russell',
    emoji: '🧒',
    svg:
      `<svg viewBox="0 0 90 90" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="90" rx="16" fill="#3B82F6"/>
        <circle cx="36" cy="52" r="11" fill="#FBBF24"/>
        <path d="M24 46 L36 34 L48 46 Z" fill="#2563EB"/>
        <rect x="30" y="60" width="12" height="8" rx="2" fill="#1E293B"/>
        <rect x="22" y="60" width="4" height="4" rx="1" fill="#93C5FD"/>
        <rect x="62" y="60" width="4" height="8" rx="1" fill="#93C5FD"/>
        <rect x="33" y="42" width="6" height="4" rx="1" fill="#93C5FD"/>
      </svg>`,
    quote: '"Soy un Guía de Fauna, estoy en el último paso."',
    meaning: 'La inocencia y la curiosidad que renovan la aventura.'
  },
  {
    id: 'dug',
    name: 'Dug',
    emoji: '🐕',
    svg:
      `<svg viewBox="0 0 90 90" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="90" rx="16" fill="#7C3AED"/>
        <ellipse cx="45" cy="48" rx="20" ry="24" fill="#FBBF24"/>
        <ellipse cx="33" cy="44" rx="6" ry="8" fill="#1E293B"/>
        <ellipse cx="57" cy="44" rx="6" ry="8" fill="#1E293B"/>
        <circle cx="33" cy="40" r="3" fill="#FBBF24"/>
        <circle cx="57" cy="40" r="3" fill="#FBBF24"/>
        <rect x="42" y="52" width="6" height="12" rx="3" fill="#2563EB"/>
        <circle cx="62" cy="44" r="6" fill="#1E293B"/>
      </svg>`,
    quote: '"Tengo una matemática la más complicada."',
    meaning: 'La lealtad y la amistad que nos acompañan.'
  },
  {
    id: 'kevin',
    name: 'Kevin',
    emoji: '🦅',
    svg:
      `<svg viewBox="0 0 90 90" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="90" rx="16" fill="#3B82F6"/>
        <ellipse cx="45" cy="42" rx="18" ry="22" fill="#FBBF24"/>
        <ellipse cx="45" cy="40" rx="6" ry="8" fill="#1E293B"/>
        <ellipse cx="36" cy="34" rx="5" ry="9" fill="#1E293B" transform="rotate(20 36 34)"/>
        <ellipse cx="54" cy="34" rx="5" ry="9" fill="#1E293B" transform="rotate(-20 54 34)"/>
        <circle cx="45" cy="32" r="2" fill="#1E293B"/>
        <path d="M40 50 L45 58 L50 50 Z" fill="#2563EB"/>
      </svg>`,
    quote: '"Soy Kevin... soy una ave."',
    meaning: 'El cuidado y el propósito de cada ser.'
  },
  {
    id: 'ellie',
    name: 'Ellie',
    emoji: '💝',
    svg:
      `<svg viewBox="0 0 90 90" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="90" rx="16" fill="#9333EA"/>
        <circle cx="45" cy="46" r="9" fill="#FBBF24"/>
        <path d="M36 58 L45 42 L54 58 Z" fill="#2563EB"/>
        <path d="M38 60 Q45 54 52 60" fill="none" stroke="#1E293B" stroke-width="3" stroke-linecap="round"/>
        <circle cx="76" cy="72" r="4" fill="#2563EB"/>
        <circle cx="16" cy="70" r="4" fill="#2563EB"/>
        <rect x="40" y="62" width="10" height="10" rx="2" fill="#FBBF24"/>
      </svg>`,
    quote: '"El amor es una aventura que nunca amanece."',
    meaning: 'El sueño y la fe que nos hacen seguir adelante.'
  },
  {
    id: 'muntz',
    name: 'Charles Muntz',
    emoji: '👴',
    svg:
      `<svg viewBox="0 0 90 90" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="90" rx="16" fill="#7C3AED"/>
        <ellipse cx="45" cy="44" rx="16" ry="20" fill="#FBBF24"/>
        <path d="M34 54 L45 48 L56 54 Z" fill="#2563EB"/>
        <rect x="26" y="40" width="38" height="10" rx="4" fill="#1E293B"/>
        <rect x="30" y="60" width="30" height="8" rx="3" fill="#1E293B"/>
        <circle cx="60" cy="68" r="5" fill="#9333EA"/>
        <rect x="60" y="76" width="4" height="4" rx="1" fill="#2563EB"/>
      </svg>`,
    quote: '"Lucharé hasta el fin por ese tesoro."',
    meaning: 'El orgullo y la obsesión que nos separan de los demás.'
  },
  {
    id: 'alpha',
    name: 'Alpha y Beta',
    emoji: '🐦',
    svg:
      `<svg viewBox="0 0 90 90" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="90" rx="16" fill="#7C3AED"/>
        <ellipse cx="45" cy="50" rx="14" ry="16" fill="#FBBF24"/>
        <ellipse cx="45" cy="48" rx="5" ry="7" fill="#1E293B"/>
        <circle cx="42" cy="44" r="2" fill="#1E293B"/>
        <circle cx="48" cy="44" r="2" fill="#1E293B"/>
        <path d="M40 40 L45 46 L50 40 Z" fill="#2563EB"/>
        <text x="45" y="58" font-size="10" text-anchor="middle" fill="#1E293B" font-family="Arial">α β</text>
      </svg>`,
    quote: '"¡Pobre de mí, pronto seré otro de ustedes!"',
    meaning: 'La codicia y la competencia desmesurada.'
  },
  {
    id: 'ken',
    name: 'Ken',
    emoji: '🎈',
    svg:
      `<svg viewBox="0 0 90 90" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="90" rx="16" fill="#2563EB"/>
        <circle cx="45" cy="50" r="8" fill="#FBBF24"/>
        <path d="M40 52 L45 46 L50 52 Z" fill="#7C3AED"/>
        <rect x="40" y="60" width="10" height="6" rx="2" fill="#1E293B"/>
        <circle cx="30" cy="30" r="8" fill="#7C3AED"/>
        <circle cx="30" cy="30" r="5" fill="#1E293B"/>
        <circle cx="62" cy="30" r="8" fill="#7C3AED"/>
        <circle cx="62" cy="30" r="5" fill="#1E293B"/>
      </svg>`,
    quote: '"Ambos buscábamos globos."',
    meaning: 'La amistad silenciosa y la solidaridad.'
  }
];

/* ---------- 2. ESCENAS ---------- */
const scenes = [
  { num: 'I', title: 'El despegue de la casa', desc: 'Carl ancla globos a su casa y despega hacia el cielo con la promesa de Ellie. Momento visual y emotivo de la película.', stars: 5 },
  { num: 'II', title: 'Carl y Russell', desc: 'El viaje comienza de verdad: Carl encuentra el "Guía de Fauna" que necesita para volar. La amistad comienza con un arranque difícil.', stars: 4 },
  { num: 'III', title: 'Dug y Kevin', desc: 'Misenciones: un perro traductor y una gran ave salvaje. Ambos se convierten en integrantes del equipo de Carl.', stars: 5 },
  { num: 'IV', title: 'La selva y los perseguidores', desc: 'La tripulación de Muntz intenta comer a Kevin. La aventura se torna peligrosa y requiere cooperación.', stars: 4 },
  { num: 'V', title: 'Paradise Falls', desc: 'El destino del viaje. La casa se encuentra en el lugar soñado de Ellie. Un momento de paz y cumplimiento.', stars: 5 },
  { num: 'VI', title: 'Confrontación con Muntz', desc: 'Carl regresa a Paradise Falls y enfrenta a su ídolo, logrando comprender la verdad detrás de la obsesión de Muntz.', stars: 4 },
  { num: 'VII', title: 'La casa vuelve', desc: 'La casa vuelve a viajar (gratis, sin globos) y a fundirse de nuevo con el pasado. Un final que da sentido a la historia.', stars: 5 },
  { num: 'VIII', title: 'El regreso a Carl', desc: 'Russell y la evidencia de que Carl cumplió su promesa. Cierre emocional que habla de oro.', stars: 5 }
];

/* ---------- 3. ROMPECABEZAS ---------- */
let puzzleData = [];
let selected = [];
let moves = 0;
let isDisabled = false;
let pairsFound = 0;

function buildPuzzle() {
  const grid = document.getElementById('puzzle-grid');
  grid.innerHTML = '';
  puzzleData = [];
  // 8 emoticones + 8 nombres (cards)
  const cards = [];
  characters.forEach((c, i) => {
    cards.push({ type: 'emoji', emoji: c.emoji, label: c.name });
    cards.push({ type: 'name', emoji: c.emoji, label: c.name });
  });
  // Shuffle
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  puzzleData = cards;

  cards.forEach((card, idx) => {
    const el = document.createElement('div');
    el.className = 'puzzle-item';
    el.dataset.idx = idx;
    if (card.type === 'emoji') {
      el.innerHTML = `<div class="puzzle-item__emoji">${card.emoji}</div><div class="puzzle-item__hint">toque para ver el nombre</div>`;
    } else {
      el.innerHTML = `<div class="puzzle-item__name">${card.label}</div><div class="puzzle-item__hint">presione para ver el emoji</div>`;
    }
    el.addEventListener('click', () => onClick(idx));
    grid.appendChild(el);
  });
  selected = [];
  moves = 0;
  pairsFound = 0;
  document.getElementById('pairs-found').textContent = '0';
  document.getElementById('moves').textContent = 'Movimientos: 0';
  isDisabled = false;
}

function onClick(idx) {
  if (isDisabled || selected.length >= 2) return;
  const card = puzzleData[idx];
  if (card.type === 'name' && selected.some(s => puzzleData[s].type === 'emoji' && puzzleData[s].emoji === card.emoji)) {
    // win match
    const item = document.querySelectorAll('.puzzle-item')[idx];
    item.classList.add('matched');
    card.type = 'matched';
    // Also mark the matching emoji card as matched
    const emojiIdx = selected.find(s => puzzleData[s].type === 'emoji' && puzzleData[s].emoji === card.emoji);
    if (emojiIdx !== undefined) {
      const emojiItem = document.querySelectorAll('.puzzle-item')[emojiIdx];
      emojiItem.classList.add('matched');
      puzzleData[emojiIdx].type = 'matched';
    }
    pairsFound++;
    document.getElementById('pairs-found').textContent = pairsFound;
    if (pairsFound === characters.length) {
      setTimeout(() => alert('🎉 ¡Has encontrado todas las parejas! ¡Felicidades!'), 200);
    }
    return;
  }
  if (selected.includes(idx)) return;
  const item = document.querySelectorAll('.puzzle-item')[idx];
  item.classList.add('open');
  card.type = 'open';
  selected.push(idx);
  moves++;
  document.getElementById('moves').textContent = `Movimientos: ${moves}`;
  if (selected.length === 2) {
    isDisabled = true;
    const [a, b] = selected.map(i => puzzleData[i]);
    if (a.emoji !== b.emoji) {
      setTimeout(() => {
        document.querySelectorAll('.puzzle-item')[selected[0]].classList.remove('open');
        document.querySelectorAll('.puzzle-item')[selected[1]].classList.remove('open');
        puzzleData[selected[0]].type = 'name';
        puzzleData[selected[1]].type = 'name';
        selected = [];
        isDisabled = false;
      }, 900);
    } else {
      setTimeout(() => {
        document.querySelectorAll('.puzzle-item')[selected[0]].classList.add('matched');
        document.querySelectorAll('.puzzle-item')[selected[1]].classList.add('matched');
        puzzleData[selected[0]].type = 'matched';
        puzzleData[selected[1]].type = 'matched';
        selected = [];
        pairsFound++;
        document.getElementById('pairs-found').textContent = pairsFound;
        isDisabled = false;
        if (pairsFound === characters.length) {
          setTimeout(() => alert('🎉 ¡Has encontrado todas las parejas! ¡Felicidades!'), 200);
        }
      }, 400);
    }
  }
}

/* ---------- 4. ESCENAS + PUNTUACIÓN ---------- */
function buildScenes() {
  const container = document.getElementById('scene-list');
  container.innerHTML = '';
  scenes.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'scene-card';
    card.innerHTML = `
      <div class="scene-card__num">Escena ${s.num}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <div class="rating-wrap" data-scene-id="${i}">
        ${[1,2,3,4,5].map(n => `<span class="star" data-val="${n}">★</span>`).join('')}
      </div>
      <div class="rating-actions">
        <span class="rating-result" data-scene-id="${i}"></span>
        <button id="submit-r${i}">Enviar</button>
      </div>
    `;
    container.appendChild(card);

    // Stars
    const stars = card.querySelectorAll('.star');
    let current = 0;
    stars.forEach(star => {
      star.addEventListener('mouseenter', () => {
        current = parseInt(star.dataset.val);
        stars.forEach((s, i) => s.classList.toggle('hover', i < current));
      });
      star.addEventListener('mouseleave', () => {
        stars.forEach(s => s.classList.remove('hover'));
        // keep previous rating visually
        stars.forEach((ss, j) => ss.classList.toggle('on', j < current));
      });
      star.addEventListener('click', () => {
        current = parseInt(star.dataset.val);
        stars.forEach((s, j) => s.classList.toggle('on', j < current));
        // highlight "Enviar"
        card.querySelectorAll('button')[0].style.background = current > 0 ? 'var(--purple)' : 'var(--blue)';
      });
    });

    // Submit
    card.querySelectorAll('button')[0].addEventListener('click', () => {
      if (current === 0) { alert('Por favor selecciona una puntuación de 1 a 5.'); return; }
      const resultEl = card.querySelector('.rating-result');
      resultEl.textContent = `★ La calificación es ${'★'.repeat(current)}${'☆'.repeat(5 - current)} (${current}/5)`;
      submitRating(i, current);
      card.querySelectorAll('button')[0].style.background = '#16A34A';
    });
  });
}

/* ---------- 5. SUPABASE ---------- */
let supabase = null;

async function initSupabase() {
  // El SDK de CDN está disponible como window.supabase.createClient
  if (typeof window.supabase === 'undefined' || typeof window.supabase.createClient !== 'function') {
    console.warn('Supabase SDK no disponible aún (esperando CDN).');
    return;
  }
  const url = (typeof SUPABASE_URL !== 'undefined') ? SUPABASE_URL :
    'https://TU-Proyecto.supabase.co';
  const key = (typeof SUPABASE_ANON_KEY !== 'undefined') ? SUPABASE_ANON_KEY :
    'TU-ANON-KEY';
  supabase = window.supabase.createClient(url, key);
  await refreshCounter();
}

async function refreshCounter() {
  const el = document.getElementById('visit-count');
  if (!supabase) return;
  try {
    const { count, error } = await supabase.from('visits').select('id', { count: 'exact' });
    if (!error && count !== null && count !== undefined) {
      el.textContent = count;
    } else {
      el.textContent = '0';
    }
  } catch (e) {
    console.warn('Error actualizando el contador:', e);
    el.textContent = '0';
  }
}

async function recordVisit() {
  if (!supabase) return;
  try {
    await supabase.from('visits').insert([{
      ip_port: (navigator.connection || {}).rtt ? `${navigator.connection.effectiveType}||${navigator.connection.downlink}` : 'web',
      user_agent: navigator.userAgent.slice(0, 400)
    }]);
  } catch (e) {
    console.warn('Visita no registrada:', e);
  }
}

async function submitRating(sceneId, rating) {
  if (!supabase) return;
  try {
    const { error } = await supabase.from('ratings').insert([{
      character: characters[sceneId] ? characters[sceneId].name : `Escena ${sceneId + 1}`,
      scene: scenes[sceneId].title,
      rating: rating
    }]);
    if (error) console.warn('Rating no guardado:', error);
  } catch (e) {
    console.warn('Error al guardar la calificación:', e);
  }
}

/* ---------- 6. INICIALIZACIÓN ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // Personajes
  const grid = document.getElementById('char-grid');
  characters.forEach(c => {
    const card = document.createElement('div');
    card.className = 'char-card';
    card.innerHTML = `
      <div class="char-card__emoji">${c.svg}</div>
      <h3>${c.name}</h3>
      <p>${c.quote}</p>
      <div class="char-card__meaning"><strong>✓ Lo que significa:</strong> ${c.meaning}</div>
    `;
    grid.appendChild(card);
  });

  // Rompecabezas
  buildPuzzle();
  document.getElementById('restart-btn').addEventListener('click', buildPuzzle);

  // Escenas
  buildScenes();

  // Contador
  recordVisit();
  initSupabase();

  // Barra de progreso del contador (muestra mensaje de carga)
  const counterEl = document.getElementById('visit-counter');
  counterEl.textContent = 'Cargando...';
});

// Vuelve a contar al volver al inicio
window.addEventListener('load', () => {
  if (document.visibilityState === 'visible') refreshCounter();
});
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') refreshCounter();
});
