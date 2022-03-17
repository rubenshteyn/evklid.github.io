// document.querySelectorAll('.work__list-item-link').forEach(function(itemBtn){
//     itemBtn.addEventListener('click', function(e){
//     const path = e.currentTarget.dataset.path;
//     document.querySelectorAll('.work__list-item-link').forEach(function(btn){
//     btn.classList.remove('work__list-item-active-link')});
//         e.currentTarget.classList.add('work__list-item-active-link');
//     document.querySelectorAll('.work__blocks').forEach(function(itemBtn){
//         itemBtn.classList.remove('work__blocks-active')});
//     document.querySelector(`[data-target="${path}"]`).classList.add('work-blocks-active');
//     });
// });

document.querySelectorAll('.work__list-item-link').forEach(function(itemBtn) {
    itemBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path
        document.querySelectorAll('.work__blocks').forEach(function(tabContent)  {
            tabContent.classList.remove('work__blocks-active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('work__blocks-active')
    })
})

const tabsBtn = document.querySelectorAll('.work__list-item-link')
tabsBtn.forEach(function(item) {
   item.addEventListener('click', function() {
       let currentBtn = item;

       tabsBtn.forEach(function(item) {
           item.classList.remove('work__list-item-active-link')
       })

        currentBtn.classList.add('work__list-item-active-link')
   }) 
})