// script.js

// Elements
const searchBox = document.getElementById('search-box');
const searchBtn = document.getElementById('search-btn');
const embedContainer = document.getElementById('embed-container');
const embedFrame = document.getElementById('embed-frame');
const historyList = document.getElementById('history-list');
const aiOutput = document.getElementById('ai-output');

// Bookmark and Icons functionality
document.getElementById('bookmark-icon').addEventListener('click', () => {
  addBookmark(searchBox.value);
});

// Search/Embed Functionality
searchBtn.addEventListener('click', () => {
  const query = searchBox.value;
  if (isURL(query)) {
    embedContainer.classList.remove('hidden');
    embedFrame.src = query;
  } else {
    aiOutput.innerHTML += `<p>You searched: ${query}</p>`;
    addHistory(query);
    askAI(query);
  }
});

// Check if input is a URL
function isURL(str) {
  const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i');
  return !!pattern.test(str);
}

// Adding history entries
function addHistory(query) {
  const li = document.createElement('li');
  li.textContent = query;
  historyList.appendChild(li);
  saveHistory(query);
}

// Save history in localStorage
function saveHistory(query) {
  let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
  history.push(query);
  localStorage.setItem('searchHistory', JSON.stringify(history));
}

// Load history on page load
function loadHistory() {
  const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
  history.forEach(item => addHistory(item));
}

loadHistory();

// AI Feature: Basic Chatbot functionality
function askAI(query = null) {
  // Example: Simple response generation logic
  const responses = [
    'That sounds interesting!',
    'Can you tell me more about it?',
    'I’m not sure, but I’ll help you look it up.',
    'Let me think about that...'
  ];
  
  if (query) {
    aiOutput.innerHTML += `<p>AI: ${responses[Math.floor(Math.random() * responses.length)]}</p>`;
  }
}

// Voice Search Functionality (simulated)
function activateVoiceSearch() {
  alert("Voice search activated!");
}

// Camera Search Functionality (simulated)
function activateCamera() {
  alert("Camera search activated!");
}

// Bookmarks functionality (simulated)
function addBookmark(url) {
  if (!url) {
    alert('No search or URL to bookmark!');
    return;
  }
  alert(`Bookmarked: ${url}`);
}
