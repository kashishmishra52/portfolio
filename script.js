const hobbyData = {
  art: [
    'art6.jpg','art1.jpg', 'art2.jpg', 'art3.jpg','art4.jpg','art5.jpg','art7.jpg','art.jpg','art8.jpg' // Replace with your image paths
  ],
  dance: [
    'dance1.mp4', 'dance2.mp4' // Replace with your video paths
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
  const item = hobbyData[currentType][currentIndex];

  if (currentType === 'art') {
    viewer.innerHTML = `<img src="${item}" alt="Art Piece">`;
  } else if (currentType === 'dance') {
    viewer.innerHTML = `
      <video controls controlsList="nodownload" autoplay muted>
        <source src="${item}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
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
