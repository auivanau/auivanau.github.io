(function () {
  window.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".share-buttons").forEach(function (container) {
      const button = container.querySelector(".share-button--native");
      const status = container.querySelector(".share-status");
      if (!button) return;

      button.addEventListener("click", async function () {
        const url = container.dataset.shareUrl || window.location.href;
        const title = container.dataset.shareTitle || document.title;
        try {
          if (navigator.share) {
            await navigator.share({ title: title, url: url });
            return;
          }
          await navigator.clipboard.writeText(url);
          if (status) status.textContent = "Link copied";
          window.setTimeout(function () { if (status) status.textContent = ""; }, 2200);
        } catch (error) {
          if (error && error.name === "AbortError") return;
          window.prompt("Copy this link:", url);
        }
      });
    });
  });
})();
