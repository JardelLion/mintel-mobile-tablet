//modal
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


