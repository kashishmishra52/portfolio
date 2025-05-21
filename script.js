const hobbyData = {
  art: [
    'art6.jpg','art1.jpg', 'art2.jpg', 'art3.jpg','art4.jpg','art5.jpg','art7.jpg','art.jpg','art8.jpg' // Replace with your image paths
  ],
  dance: [
    'dance1.mp4', 'dance2.mp4' // Replace with your video paths
  ],
 reading: [
    { title: "Gunaho Ka Devta", author: "Dharamvir Bharati", cover: "gunaho.jpg" },
  { title: "Atomic Habits", author: "James Clear", cover: "atomic-habits.jpg" },
  { title: "The Psychology of Money", author: "Morgan Housel", cover: "money.jpg" },
  { title: "The Silent Patient", author: "Alex Michaelides", cover: "silent.jpg" },
  { title: "Shatter Me", author: "Tahereh Mafi", cover: "shatterme.jpg" },

]

};

let currentType = '';
let currentIndex = 0;

function openGallery(type) {
  currentType = type;
  currentIndex = 0;
  document.getElementById('hobbyModal').style.display = 'flex';
  renderHobbyItem();
}

function renderHobbyItem() {
  const viewer = document.getElementById('hobbyViewer');

  if (currentType === 'art') {
    const item = hobbyData.art[currentIndex];
    viewer.innerHTML = `<img src="${item}" alt="Art Piece">`;
  } else if (currentType === 'dance') {
    const item = hobbyData.dance[currentIndex];
    viewer.innerHTML = `
      <video controls controlsList="nodownload" autoplay muted>
        <source src="${item}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  } else if (currentType === 'reading') {
    const book = hobbyData.reading[currentIndex];
    viewer.innerHTML = `
      <div style="text-align: center; color: #fff;">
        <img src="${book.cover}" alt="${book.title}" style="max-height: 300px; border-radius: 12px; margin-bottom: 1rem;">
        <h2 style="font-size: 1.5rem;">${book.title}</h2>
        <p style="font-size: 1.1rem;"><em>by ${book.author}</em></p>
      </div>
    `;
  }
}


function closeModal() {
  document.getElementById('hobbyModal').style.display = 'none';
}

function nextItem() {
  currentIndex = (currentIndex + 1) % hobbyData[currentType].length;
  renderHobbyItem();
}

function prevItem() {
  currentIndex = (currentIndex - 1 + hobbyData[currentType].length) % hobbyData[currentType].length;
  renderHobbyItem();
}