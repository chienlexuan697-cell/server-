// CHUYỂN TRANG
const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".nav-link");

function switchPage(pageId) {
  pages.forEach(page => page.classList.remove("active"));
  navLinks.forEach(link => link.classList.remove("active"));

  document.getElementById(pageId).classList.add("active");

  const activeBtn = document.querySelector(`.nav-link[data-page="${pageId}"]`);
  if (activeBtn) {
    activeBtn.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const pageId = link.getAttribute("data-page");
    switchPage(pageId);
  });
});

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

// FAQ
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// CHỌN GÓI
function chonGoi(goi) {
  alert("Bạn đã chọn gói: " + goi);
  switchPage("contact");
}

// FORM
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Đặt lịch thành công! Bạn có thể thay phần này bằng Zalo/Form thật.");
});