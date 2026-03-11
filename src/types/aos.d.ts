/** Type declaration for AOS (Animate On Scroll) library v2 */
declare module 'aos' {
  interface AosOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    offset?: number;
    delay?: number;
    disable?: boolean | string | (() => boolean);
  }
  function init(options?: AosOptions): void;
  function refresh(hard?: boolean): void;
  function refreshHard(): void;
}
