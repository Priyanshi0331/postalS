  // Initialize carousel explicitly (optional)
  const heroCarousel = document.querySelector('#heroCarousel');
  const carouselInstance = new bootstrap.Carousel(heroCarousel, {
    interval: 5000,
    ride: 'carousel',
    pause: 'hover',
    wrap: true
  });