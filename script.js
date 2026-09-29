(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---- toast ---- */
  const toastEl = $('#toast');
  let timer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(timer);
    timer = setTimeout(() => toastEl.classList.remove('show'), 1900);
  }
  $$('[data-toast]').forEach(b => b.addEventListener('click', () => toast(b.dataset.toast)));

  /* ---- header ---- */
  $('#searchForm').addEventListener('submit', e => {
    e.preventDefault();
    const v = $('#searchInput').value.trim();
    toast(v ? `Searching for “${v}”…` : 'Type something to search');
  });
  const wish = $('#wishBtn');
  wish.addEventListener('click', () => {
    const on = wish.getAttribute('aria-pressed') !== 'true';
    wish.setAttribute('aria-pressed', on);
    toast(on ? 'Added to wishlist' : 'Removed from wishlist');
  });
  $('#cartBtn').addEventListener('click', () => toast(`${$('#cartCount').textContent} items in your cart`));

  /* ---- categories: arrows scroll the track when it overflows ---- */
  const track = $('#catTrack');
  $('.arrow.prev').addEventListener('click', () => track.scrollBy({ left: -240, behavior: 'smooth' }));
  $('.arrow.next').addEventListener('click', () => track.scrollBy({ left: 240, behavior: 'smooth' }));

  /* ---- featured tabs ---- */
  $$('.tabs button').forEach(tab => tab.addEventListener('click', () => {
    $$('.tabs button').forEach(t => { t.classList.remove('on'); t.setAttribute('aria-selected', 'false'); });
    tab.classList.add('on');
    tab.setAttribute('aria-selected', 'true');
    toast(`Showing “${tab.textContent}”`);
  }));

  /* ---- add to cart ---- */
  $$('.add').forEach(btn => btn.addEventListener('click', () => {
    const c = $('#cartCount');
    c.textContent = +c.textContent + 1;
    toast(`${btn.dataset.name} added to cart`);
  }));

  /* ---- AI assistant ---- */
  const ai = $('#aiInput');
  $$('.prompts button').forEach(b => b.addEventListener('click', () => { ai.value = b.dataset.prompt; ai.focus(); }));
  $('#askBtn').addEventListener('click', () => {
    const v = ai.value.trim();
    toast(v ? `AI is preparing: ${v}` : 'Type a shopping question first');
  });
  ai.addEventListener('keydown', e => { if (e.key === 'Enter') $('#askBtn').click(); });
  $('#micBtn').addEventListener('click', () => toast('Listening… (voice input demo)'));
})();
