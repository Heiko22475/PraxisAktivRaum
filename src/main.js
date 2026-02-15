const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const modalTriggers = document.querySelectorAll("[data-modal-target]");
const modalCloses = document.querySelectorAll("[data-modal-close]");
const modals = document.querySelectorAll("[data-modal]");

const cookieBanner = document.querySelector("[data-cookie-banner]");
const cookieAccept = document.querySelector("[data-cookie-accept]");
const cookieDecline = document.querySelector("[data-cookie-decline]");

const openModal = (name) => {
  const modal = document.querySelector(`[data-modal="${name}"]`);
  if (!modal) return;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

const closeModal = (modal) => {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

modalTriggers.forEach((trigger) => {
  const name = trigger.dataset.modalTarget;
  trigger.addEventListener("click", () => openModal(name));
});

modalCloses.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    const modal = closeButton.closest("[data-modal]");
    closeModal(modal);
  });
});

modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const openModalElement = document.querySelector("[data-modal].is-open");
  if (openModalElement) {
    closeModal(openModalElement);
  }
});

if (cookieBanner && cookieAccept) {
  cookieBanner.classList.add("is-visible");

  cookieAccept.addEventListener("click", () => {
    cookieBanner.classList.remove("is-visible");
  });

  if (cookieDecline) {
    cookieDecline.addEventListener("click", () => {
      cookieBanner.classList.remove("is-visible");
    });
  }
}
