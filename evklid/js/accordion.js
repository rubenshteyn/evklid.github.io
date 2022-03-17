$('.accordion').accordion({
    active: false,
    collapsible: true,
    header: ".questions__list-item",
    heightStyle: "content",
    icons: { 
      "header": "questions__list-item-btn",
      "activeHeader": "questions__list-item-btn questions__list-item-btn__active" },
  });

let acc = document.querySelectorAll('.questions__list-item')
let i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("open");
    })
}

