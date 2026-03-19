export function refreshLenis() {
  if (typeof window === 'undefined') {
    return;
  }

  const lenis = (
    window as typeof window & {
      lenis?: {
        resize?: () => void;
      };
    }
  ).lenis;

  lenis?.resize?.();
}
