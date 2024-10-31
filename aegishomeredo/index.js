var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.parentElement.nextElementSibling;
    var img = this.querySelector("img");
    if (this.classList.contains("active")) {
      panel.style.paddingBottom = "1rem";
      panel.style.maxHeight = panel.scrollHeight + "px";
      img.src = "../Assets/Icons/FAQMinusDark.png";
    } else {
      panel.style.paddingBottom = null;
      panel.style.maxHeight = null;
      img.src = "../Assets/Icons/FAQPlus.png";
    }
  });
}
