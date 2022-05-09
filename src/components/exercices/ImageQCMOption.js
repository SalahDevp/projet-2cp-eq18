const ImageQCMOption = ({
  imgSrc,
  id,
  onChange,
  checked,
  color,
  submitted,
}) => {
  return (
    <li className="block w-full h-full">
      <input
        type="checkbox"
        className="hidden peer"
        id={id}
        onChange={onChange}
        checked={checked}
      />
      <label
        htmlFor={id}
        className={`relative ${
          !submitted && "cursor-pointer"
        } overflow-hidden flex place-content-center w-full h-full border-2 rounded-xl ${
          color === "green" ? "border-green-500" : "border-transparent"
        } ${
          !submitted ? "hover:border-gray-300 hover:before:scale-100" : ""
        } peer-checked:border-2 before:block before:bg-center before:bg-check before:bg-no-repeat before:border-2 before:rounded-full before:h-7 before:w-7 before:duration-300 before:absolute before:top-1 before:left-1 ${
          !color
            ? "before:border-gray-300 before:scale-0 peer-checked:before:bg-blue-400 peer-checked:border-blue-400"
            : color === "green"
            ? "before:border-green-500 before:scale-100 peer-checked:before:bg-green-500 peer-checked:border-green-500"
            : "peer-checked:before:bg-red-500 peer-checked:border-red-500"
        } peer-checked:before:bg-[url('/public/images/check-mark.svg')] peer-checked:before:border-transparent peer-checked:before:scale-100`}
      >
        <img src={imgSrc} alt="" className="max-h-9/10 max-w-[90%] m-auto" />
      </label>
    </li>
  );
};

export default ImageQCMOption;
