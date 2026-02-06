function Input({ placeholder, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className="bg-white w-full px-6 py-3 rounded-full border-2 border-pink-200
                 focus:border-red-700 focus:ring-4 focus:ring-red-200 outline-none"
    />
  );
}

export default Input;
