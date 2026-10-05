// Тема применяется до отрисовки, чтобы не было вспышки светлого фона в тёмной теме.
(function () {
  try {
    var t = localStorage.getItem('kaizen:theme') || 'system';
    var dark = t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  } catch (e) {}
})();
