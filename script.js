//Loader
var loader=document.querySelector('.loader')
setTimeout(() => {
  loader.style.top="-100%"
}, 4200);


const textEl = document.getElementById('text1')
textEl.style.color='red'
const text = `Frontend Web Developer !`
let speed = 300 / 2
idx = 1
writeText()
function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, speed)
}




var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:100,
        disableOnInteraction:false,
        
    },speed: 1000, // Smooth scrolling speed
    effect: 'cube', // Can also use 'fade', 'cube', 'coverflow', 'flip','slide
  });

  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:1000,
        disableOnInteraction:false,
        
    },speed: 1000, // Smooth scrolling speed
    effect: 'slide', // Can also use 'fade', 'cube', 'coverflow', 'flip','slide
  });










  ///////////////Downloading Resume///
  document.getElementById('downloadBtn').addEventListener('click', () => {
  fetch('https://raw.githubusercontent.com/vikasprajapati1812/Resume/main/MyResume.pdf')
  .then(response => response.blob())
  .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'MyResume.pdf'; // Set the file name here
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
  })
  .catch(error => console.error('Error fetching the resume:', error));
});
  ///////////////Downloading Resume///