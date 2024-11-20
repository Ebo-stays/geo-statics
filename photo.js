// Elements
const createAlbumButton = document.getElementById('createAlbumButton');
const albumModal = document.getElementById('albumModal');
const saveAlbumButton = document.getElementById('saveAlbumButton');
const cancelAlbumButton = document.getElementById('cancelAlbumButton');
const albumNameInput = document.getElementById('albumNameInput');
const peopleNameInput = document.getElementById('peopleNameInput');
const albumsGrid = document.getElementById('albumsGrid');
const imageModal = document.getElementById('imageModal');
const zoomedImage = document.getElementById('zoomedImage');
const closeImageModal = document.getElementById('closeImageModal');
const uploadModal = document.getElementById('uploadModal');
const mediaUploadInput = document.getElementById('mediaUploadInput');
const uploadMediaButton = document.getElementById('uploadMediaButton');
const cancelUploadButton = document.getElementById('cancelUploadButton');

let albums = JSON.parse(localStorage.getItem('albums')) || [];

// Display Albums
function displayAlbums() {
  albumsGrid.innerHTML = '';
  albums.forEach((album, index) => {
    const albumCard = document.createElement('div');
    albumCard.className = 'album-card';
    albumCard.innerHTML = `
      <h3>${album.name}</h3>
      <p>${album.people.join(', ')}</p>
      <button onclick="deleteAlbum(${index})">Delete</button>
      <button onclick="openUploadModal(${index})">Upload Media</button>
    `;

    // Display media in album
    album.media.forEach((file, fileIndex) => {
      const mediaElement = document.createElement(
        file.type.startsWith('image/') ? 'img' : 'video'
      );
      mediaElement.src = file.url;
      mediaElement.controls = file.type.startsWith('video');
      mediaElement.className = 'media-thumbnail';
      mediaElement.onclick = () => zoomMedia(file.url);
      albumCard.appendChild(mediaElement);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = () => deleteMedia(index, fileIndex);
      albumCard.appendChild(deleteButton);
    });

    albumsGrid.appendChild(albumCard);
  });
}

// Add Album
function addAlbum() {
  const name = albumNameInput.value.trim();
  const people = peopleNameInput.value.split(',').map(p => p.trim());
  if (!name) {
    alert('Album name is required.');
    return;
  }

  albums.push({ name, people, media: [] });
  localStorage.setItem('albums', JSON.stringify(albums));
  albumModal.style.display = 'none';
  displayAlbums();
}

// Upload Media
function uploadMedia(albumIndex) {
  const files = Array.from(mediaUploadInput.files);
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = () => {
      albums[albumIndex].media.push({ url: reader.result, type: file.type });
      localStorage.setItem('albums', JSON.stringify(albums));
      displayAlbums();
      uploadModal.style.display = 'none';
    };
    reader.readAsDataURL(file);
  });
}

// Delete Album
function deleteAlbum(index) {
  albums.splice(index, 1);
  localStorage.setItem('albums', JSON.stringify(albums));
  displayAlbums();
}

// Delete Media
function deleteMedia(albumIndex, mediaIndex) {
  albums[albumIndex].media.splice(mediaIndex, 1);
  localStorage.setItem('albums', JSON.stringify(albums));
  displayAlbums();
}

// Zoom Media
function zoomMedia(url) {
  zoomedImage.src = url;
  imageModal.style.display = 'flex';
}

// Open Upload Modal
function openUploadModal(index) {
  uploadModal.dataset.albumIndex = index;
  uploadModal.style.display = 'flex';
}

// Event Listeners
createAlbumButton.onclick = () => (albumModal.style.display = 'flex');
cancelAlbumButton.onclick = () => (albumModal.style.display = 'none');
saveAlbumButton.onclick = addAlbum;
closeImageModal.onclick = () => (imageModal.style.display = 'none');
cancelUploadButton.onclick = () => (uploadModal.style.display = 'none');
uploadMediaButton.onclick = () => {
  const albumIndex = uploadModal.dataset.albumIndex;
  uploadMedia(albumIndex);
};

// Initial Render
displayAlbums();
