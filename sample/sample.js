0// const clipboard = new ClipboardJS('.copy-btn');
// clipboard.on('success', function(e) {
//     showTooltip();
    
//     e.clearSelection();
// });

// const tooltip = document.getElementById("tooltip");
// function showTooltip() {
//     tooltip.classList.add("copied");
//     setTimeout(() => {
//         tooltip.classList.remove("copied");
//     }, 1200);
// }


const clipboard = new ClipboardJS('.copy-value');

// Select .copy-value items
const btn = document.querySelector('.copy-value');

// Remove .tooptip class by mouseout
// for(let i=0;i<btns.length;i++){
//     btns[i].addEventListener('mouseleave',clearTooltip);
// }
btn.addEventListener('click',clearTooltip);
function clearTooltip(e){
    // e.currentTarget.setAttribute('class','copy-value');
}

// Add .tooltip class when it's clicked
function showTooltip(elem){
    elem.setAttribute('class','copy-value tooltip');
}

clipboard.on('success', function(e) {
    showTooltip(e.trigger);
    // alert('success');
});