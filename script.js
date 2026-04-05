// FILTER DỊCH VỤ
const filterButtons = document.querySelectorAll(".filter-btn");
const serviceCards = document.querySelectorAll(".service-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    serviceCards.forEach(card => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || filter === category) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// FAQ TOGGLE
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// CHỌN GÓI
function chonGoi(goi) {
  alert("Bạn đã chọn gói: " + goi + ". Hãy thay alert này bằng Zalo/Form thật nếu muốn.");
}

// FORM ĐẶT LỊCH
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Đặt lịch thành công! Hãy thay phần này bằng gửi form thật nếu muốn.");
});