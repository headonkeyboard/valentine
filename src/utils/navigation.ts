export function linkToScreen(elements: HTMLButtonElement[], screenName: string) {
  elements.forEach(element => {
    element.addEventListener('click', () => {
      document.body.dataset.screen = screenName;
    });
  });
}
