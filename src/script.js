const closeTab = document.querySelectorAll(".red");
closeTab.forEach((tab) => {
  tab.addEventListener("click", () => {
    tab.closest(".card").classList.add("hidden");
  });
});
