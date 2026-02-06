function Option({ label, name, onClick }) {
  return (
    <label onClick={onClick} className="bg-white px-6 py-4 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition flex gap-3 items-center text-red-900">
      <input type="radio" name={name} className="hidden peer" />
      <span className="peer-checked:text-red-700 peer-checked:font-semibold">
        {label}
      </span>
    </label>
  );
}

export default Option;
