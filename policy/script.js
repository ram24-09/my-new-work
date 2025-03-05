document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll("#v-pills-tab button");
  tabs.forEach((tab) => {
    tab.addEventListener("shown.bs.tab", function () {
      tabs.forEach((t) => t.querySelector("i")?.remove());
      const icon = document.createElement("i");
      icon.className = "bi bi-chevron-right float-end";
      tab.appendChild(icon);
    });
  });
});
