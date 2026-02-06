function Button({ children, onClick, variant = "primary", className = "" }) {
  const base =
    "mt-8 px-8 py-3 rounded-full transition hover:scale-105";

  const styles = {
    primary: "bg-pink-600 text-white",
    secondary: "bg-gray-500 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
