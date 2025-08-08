
// Smooth scroll for nav links
document['addEventListener']('DOMContentLoaded', function () {
  const yearEl = document['getElementById']('year');
  if (yearEl) { yearEl['textContent'] = new Date()['getFullYear'](); }

  // Smooth scroll
  const navLinks = document['querySelectorAll']('.site-header nav a[href^="#"]');
  navLinks['forEach'](function (a) {
    a['addEventListener']('click', function (e) {
      e['preventDefault']();
      const id = this['getAttribute']('href');
      const el = document['querySelector'](id);
      if (el) { el['scrollIntoView']({ behavior: 'smooth', block: 'start' }); }
    });
  });

  // Slider
  const slider = document['querySelector']('.slider');
  if (slider) {
    const slides = slider['querySelectorAll']('.slide');
    let i = 0;
    const interval = parseInt(slider['dataset']['interval'] || '4500', 10);
    const autoplay = String(slider['dataset']['autoplay'] || 'true') === 'true';

    function show(n){
      slides['forEach']((s, idx) => {
        s['classList'][idx === n ? 'add' : 'remove']('is-active');
      });
    }
    show(0);

    if (autoplay && slides['length'] > 1) {
      setInterval(function(){
        i = (i + 1) % slides['length'];
        show(i);
      }, interval);
    }
  }

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries['forEach']((entry) => {
      if (entry['isIntersecting']) {
        entry['target']['classList']['add']('visible');
        io['unobserve'](entry['target']);
      }
    });
  }, { threshold: 0.12 });

  document['querySelectorAll']('.reveal')['forEach']((el)=> io['observe'](el));
});
