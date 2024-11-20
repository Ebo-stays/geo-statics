// Elements
const createAlbumButton = document.getElementById('createAlbumButton');
const albumModal = document.getElementById('albumModal');
const saveAlbumButton = document.getElementById('saveAlbumButton');
const cancelAlbumButton = document.getElementById('cancelAlbumButton');
const albumNameInput = document.getElementById('albumNameInput');
const peopleNameInput = document.getElementById('peopleNameInput');
const albumsGrid = document.getElementById('albumsGrid');
const searchInput = document.getElementById('searchInput');
const imageModal = document.getElementById('imageModal');
const zoomedImage = document.getElementById('zoomedImage');
const closeImageModal = document.getElementById('closeImageModal');

// Load albums from LocalStorage
function loadAlbums() {
  const albums = JSON.parse(localStorage.getItem('albums')) || [];
  albumsGrid.innerHTML = '';
  albums.forEach((album, index) => {
    const albumCard = document.createElement('div');
    albumCard.classList.add('album-card');
    albumCard.innerHTML = `
      <h3>${album.name}</h3>
      <p>People: ${album.people.join(', ')}</p>
      <button onclick="deleteAlbum(${index})">Delete</button>
    `;
    albumsGrid.appendChild(albumCard);
  });
}

// Save album to LocalStorage
function saveAlbum() {
  const name = albumNameInput.value.trim();
  const people = peopleNameInput.value.trim().split(',').map(p => p.trim());
  if (!name || people.length === 0) {
    alert('Please fill in all fields.');
    return;
  }

  const albums = JSON.parse(localStorage.getItem('albums')) || [];
  albums.push({ name, people });
  localStorage.setItem('albums', JSON.stringify(albums));

  albumModal.style.display = 'none';
  loadAlbums();
}

// Delete album
function deleteAlbum(index) {
  const albums = JSON.parse(localStorage.getItem('albums')) || [];
  albums.splice(index, 1);
  localStorage.setItem('albums', JSON.stringify(albums));
  loadAlbums();
}

// Close modal
function closeModal(modal) {
  modal.style.display = 'none';
}

// Event listeners
createAlbumButton.addEventListener('click', () => {
  albumModal.style.display = 'flex';
});
cancelAlbumButton.addEventListener('click', () => {
  closeModal(albumModal);
});
saveAlbumButton.addEventListener('click', saveAlbum);
closeImageModal.addEventListener('click', () => closeModal(imageModal));

// Initial load
loadAlbums();
