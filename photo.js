// Elements
const fileInput = document.getElementById("fileInput");
const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const createAlbumBtn = document.getElementById("createAlbumBtn");
const albumsContainer = document.getElementById("albums");
const albumGallery = document.getElementById("albumGallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const renameInput = document.getElementById("renameInput");
const renameBtn = document.getElementById("renameBtn");
const deleteBtn = document.getElementById("deleteBtn");
const closeModal = document.getElementById("closeModal");
const addToAlbumBtn = document.getElementById("addToAlbumBtn");
const navbarButtons = document.querySelectorAll("#navbar button");

// State
let images = JSON.parse(localStorage.getItem("images")) || [];
let albums = JSON.parse(localStorage.getItem("albums")) || [];
let currentAlbum = null;
let selectedImage = null;

// Save data to localStorage
function saveData() {
  localStorage.setItem("images", JSON.stringify(images));
  localStorage.setItem("albums", JSON.stringify(albums));
}

// Render Images
function renderImages() {
  gallery.innerHTML = "";
  const filteredImages = currentAlbum
    ? images.filter((img) => img.album === currentAlbum)
    : images;

  filteredImages.forEach((img, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = img.url;
    imgElement.alt = img.title || "Image";
    imgElement.dataset.index = index;
    imgElement.onclick = () => openModal(index);
    gallery.appendChild(imgElement);
  });
}

// Render Albums
function renderAlbums() {
  albumsContainer.innerHTML = "";
  albums.forEach((album) => {
    const albumElement = document.createElement("div");
    albumElement.className = "album";
    albumElement.textContent = album;
    albumElement.onclick = () => {
      currentAlbum = album;
      renderAlbumImages();
    };
    albumsContainer.appendChild(albumElement);
  });
}

// Render Album Images
function renderAlbumImages() {
  albumGallery.innerHTML = "";
  const filteredImages = images.filter((img) => img.album === currentAlbum);

  filteredImages.forEach((img, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = img.url;
    imgElement.alt = img.title || "Image";
    imgElement.dataset.index = index;
    imgElement.onclick = () => openModal(index);
    albumGallery.appendChild(imgElement);
  });
}

// Add Images
fileInput.addEventListener("change", (e) => {
  const files = e.target.files;
  Array.from(files).forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      images.push({
        url: reader.result,
        title: file.name.split(".")[0],
        album: null, // Default to no album
      });
      saveData();
      renderImages();
    };
    reader.readAsDataURL(file);
  });
});

// Create Album
createAlbumBtn.addEventListener("click", () => {
  const albumName = prompt("Enter album name:");
  if (albumName && !albums.includes(albumName)) {
    albums.push(albumName);
    saveData();
    renderAlbums();
  }
});

// Add to Album
addToAlbumBtn.onclick = () => {
  if (selectedImage) {
    const albumName = prompt("Enter album name:");
    if (albumName) {
      selectedImage.album = albumName;
      saveData();
      renderImages();
      renderAlbumImages();
      modal.style.display = "none";
    }
  }
};

// Search Images
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filteredImages = images.filter((img) =>
    img.title.toLowerCase().includes(query)
  );
  searchResults.innerHTML = "";
  filteredImages.forEach((img) => {
    const imgElement = document.createElement("img");
    imgElement.src = img.url;
    imgElement.alt = img.title || "Image";
    searchResults.appendChild(imgElement);
  });
});

// Open Modal
function openModal(index) {
  selectedImage = images[index];
  modalImg.src = selectedImage.url;
  renameInput.value = selectedImage.title;
  modal.style.display = "flex";
}

// Close Modal
closeModal.onclick = () => {
  modal.style.display = "none";
};

// Rename Image
renameBtn.onclick = () => {
  if (selectedImage) {
    selectedImage.title = renameInput.value;
    saveData();
    renderImages();
    renderAlbumImages();
    modal.style.display = "none";
  }
};

// Delete Image
deleteBtn.onclick = () => {
  if (selectedImage) {
    images = images.filter((img) => img !== selectedImage);
    saveData();
    renderImages();
    renderAlbumImages();
    modal.style.display = "none";
  }
};

// Navbar Navigation
navbarButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const sectionId = btn.getAttribute("data-section");
    document.querySelectorAll(".section").forEach((section) => {
      section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
  });
});

// Initial Render
renderImages();
renderAlbums();
