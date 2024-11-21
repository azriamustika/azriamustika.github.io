// Menambahkan event hover pada menu makanan
document.querySelectorAll('section ul li').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.05)';
    item.style.transition = 'transform 0.3s ease-in-out';
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
  });
});
