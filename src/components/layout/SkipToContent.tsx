export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:border-4 focus:border-ink focus:bg-slime focus:px-4 focus:py-2 focus:font-bold focus:uppercase focus:text-ink"
    >
      Skip to main content
    </a>
  );
}
