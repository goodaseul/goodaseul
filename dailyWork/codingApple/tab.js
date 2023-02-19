let tab = document.querySelector(".list");

let tabBtns = document.querySelectorAll(".list .tab-button");
let tabContents = document.querySelectorAll(".tab-content");

//이벤트 리스너 사용줄이면 램 사용이 줄어들어서 좋음
// ul 태그 누를시
tab.addEventListener("click", (e) => {
    tabOpen(e.target.dataset.id);
});
function tabOpen(data) {
    tabBtns.forEach((item, index) => {
        item.classList.remove("show");
        tabBtns[data].classList.add("show");
    });
    tabContents.forEach((item, index) => {
        item.classList.remove("show");
        tabContents[data].classList.add("show");
    });
}

// li 태그(3개) 누를시
// tabBtns.forEach((tabBtn, index) => {
//     tabBtn.addEventListener("click", () => {
//         tabBtns.forEach((item) => {
//             item.classList.remove("show");
//         });
//         tabBtns[index].classList.add("show");
//         tabContents.forEach((item) => {
//             item.classList.remove("show");
//         });
//         tabContents[index].classList.add("show");
//     });
// });
