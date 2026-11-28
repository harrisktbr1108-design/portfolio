// Click a project screenshot to view it full size.
const viewer = document.querySelector('.viewer');
const viewerImg = viewer.querySelector('img');

document.querySelectorAll('.shot').forEach(btn => {
  btn.addEventListener('click', () => {
    viewerImg.src = btn.dataset.full;
    viewerImg.alt = btn.dataset.alt;
    viewer.showModal();
  });
});

// Close when clicking the dark area around the image.
viewer.addEventListener('click', e => {
  if (e.target === viewer) viewer.close();
});
