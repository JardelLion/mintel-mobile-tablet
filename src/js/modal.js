const myButtonModal = document.querySelector(".modal-send");
const myModal = document.getElementById("myModal");
const myOverlay = document.getElementById("myOverlay");
const closeBtn = document.querySelector(".close");

myButtonModal.addEventListener("click", function() {
  myModal.style.display = "block";
  myOverlay.style.display = "block";
});

myOverlay.addEventListener("click", function() {
  
  myModal.style.display = "none";
  myOverlay.style.display = "none";
});

closeBtn.addEventListener("click", function() {
 
  myModal.style.display = "none";
  myOverlay.style.display = "none";
});



const myButtonArchive = document.querySelector(".modal-archive");
const myModalArchive = document.querySelector(".myModal-archive");
const myOverlayArchive = document.getElementById("myOverlay-archive");
const closeBtnArchive = document.querySelector(".close-archive");

myButtonArchive.addEventListener("click", function() {
  myModalArchive.style.display = "block";
  myOverlayArchive.style.display = "block";
});

myOverlayArchive.addEventListener("click", function() {
  myModalArchive.style.display = "none";
  myOverlayArchive.style.display = "none";
});

closeBtnArchive.addEventListener("click", function() {
  myModalArchive.style.display = "none";
  myOverlayArchive.style.display = "none";
});