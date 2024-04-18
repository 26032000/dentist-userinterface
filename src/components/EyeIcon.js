function EyeIcon({ isVisible }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20">
      {isVisible ? (
        <path
          d="M10 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
          fill="#000"
        />
      ) : (
        <path
          d="M10 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}
export  default EyeIcon;