/** Javascript for webpage
code done by Trishelle Leal **/

function hamburger() {
  var link = document.getElementById("links");
  if (link.style.display == "block") {
    link.style.display = "none";
  } else {
    link.style.display = "block";
  }
}

const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
  // Hide all carousel items
  carouselItems.forEach(item => {
    item.style.display = 'none';
  });

  // Show the slide at the specified index
  carouselItems[index].style.display = 'block';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}
function previousSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);

// Set up event listeners for next and previous buttons
document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', previousSlide);