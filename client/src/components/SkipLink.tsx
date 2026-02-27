export default function SkipLink() {
  return (
    <a 
      href="#main-content" 
      className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:shadow-lg"
      onFocus={(e) => e.target.classList.remove('sr-only')}
      onBlur={(e) => e.target.classList.add('sr-only')}
    >
      Skip to main content
    </a>
  );
}