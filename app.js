// 1 - Usul
// const btns = document.querySelectorAll(".faq-toggle");
// const faqs = document.querySelectorAll(".faq");

// btns.forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//         faqs[index].classList.toggle("active");
//     });
// });

// 2- Usul
const btns = document.querySelectorAll(".faq-toggle");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.parentNode.classList.toggle("active");
    });
});
