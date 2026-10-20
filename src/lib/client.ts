/** Share buttons: native share sheet on phones, copy link elsewhere. */
export function wireShare() {
  document.querySelectorAll<HTMLButtonElement>('[data-share]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const data = { title: document.title, url: location.href };
      try {
        if (navigator.share) {
          await navigator.share(data);
          return;
        }
        await navigator.clipboard.writeText(location.href);
        btn.textContent = btn.dataset.copied ?? 'Link copied';
      } catch {
        /* cancelled or blocked */
      }
    });
  });
}
