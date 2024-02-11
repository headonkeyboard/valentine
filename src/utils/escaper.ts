const MAX_MOUSEENTER_STEPS = 4;

export function makeItEscape(element: HTMLButtonElement) {
  let mouseenterCount = 1
  let isEventAllowed = true;
  
  const updateMouseenterCount = (count: number) => {
    if (isEventAllowed) {
      mouseenterCount = Math.min(count, MAX_MOUSEENTER_STEPS)
      element.style.setProperty('--translation-step', `var(--translation-step-${mouseenterCount})`)
      element.style.setProperty('--translation-step-mobile', `var(--translation-step-mobile-${mouseenterCount})`)
      element.dataset.step = `${mouseenterCount}`;
      isEventAllowed = false;

      // avoid unwanted multiple triggering
      setTimeout(() => {
        isEventAllowed = true;
        }, 300);
    }
  }

  element.addEventListener('mouseenter', () => updateMouseenterCount(mouseenterCount + 1))
  element.addEventListener('touchstart', (e) => {
    if (mouseenterCount < MAX_MOUSEENTER_STEPS) {
      e.preventDefault()
    }
    updateMouseenterCount(mouseenterCount + 1)
  })
  updateMouseenterCount(1)
}
