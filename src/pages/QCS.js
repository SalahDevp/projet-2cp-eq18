import Nav from "components/Nav";
import sortir from "../components/nouveau-protype-component/sortir.png";
import submitBtn from "assets/exercices/submitBtn.png";
import QCSImage from "assets/exercices/QCS-image.png";
import QCSOption from "components/exercices/QCSOption";
import { useEffect, useState } from "react";

const QCS = () => {
  //states
  const [question, setQuestion] = useState("");
  const [imageSrc, setImageSrc] = useState();
  const [options, setOptions] = useState([]);
  const [rightOption, setRightOption] = useState();
  const [checkedOption, setCheckedOption] = useState();
  const [submitted, setSubmitted] = useState(false);
  //funcs
  const handleChange = (evnt, optionNum) => {
    //if the form is submitted exit (to prevent user form changing answer)
    if (submitted) return;
    setCheckedOption(optionNum);
  };
  //
  const handleSubmit = () => {
    //set the right option color to green
    options[rightOption - 1].color = "green";
    //if the selected opt is wrong we set its color to red
    if (checkedOption !== rightOption) options[checkedOption - 1].color = "red";
    //set states
    setOptions(options);
    setSubmitted(true);
  };
  //
  const handleNext = () => {
    setSubmitted(false);
    options.forEach((opt) => delete opt.color);
  };
  ////
  useEffect(() => {
    let questionObj;
    (async () => {
      try {
        questionObj = await window.electronAPI.getQCSQuestion(1);
        setQuestion(questionObj.question);
        setOptions(
          questionObj.options.map((opt) => ({
            text: opt,
          }))
        );
        setRightOption(questionObj.rightOption);
        setImageSrc(questionObj.image);
      } catch (e) {
        console.error(e);
        //TODO: navigate to exercices menu
      }
    })();
  }, []);

  return (
    <div className="bg-beige relative h-screen w-screen flex overflow-hidden">
      <img
        className="absolute top-9 right-10 h-11 w-11 "
        src={sortir}
        alt="sortir"
      />
      <Nav pathAvant={"/NMenu"} />
      <div
        className={`relative h-auto flex-grow border-2 rounded-3xl border-jeune mx-24 mt-20 mb-10 pb-6 pt-7 flex flex-col items-center ${
          !submitted
            ? "bg-white"
            : checkedOption === rightOption
            ? "bg-green-200"
            : "bg-red-200"
        }`}
      >
        <span className="font-bold text-2xl absolute top-1 right-4">1/20</span>
        <div className="text-2xl font-bold text-center py-4">{question}</div>
        <div>
          <img src={imageSrc} alt="" className="h-60 mt-8" />
        </div>
        <form className="flex-grow w-4/5 grid grid-cols-2 place-items-center z-10">
          {options.map((opt, ind) => (
            <QCSOption
              text={opt.text}
              color={opt.color}
              key={ind}
              checked={checkedOption === ind + 1}
              onChange={(evnt) => handleChange(evnt, ind + 1)}
            />
          ))}
        </form>
        {submitted ? (
          <button onClick={handleNext}>next</button>
        ) : (
          <button className="translate-x-60" onClick={handleSubmit}>
            <img className="h-14 w-14" src={submitBtn} alt="" />
          </button>
        )}
        <img
          src={QCSImage}
          alt=""
          className="absolute bottom-0 left-0 opacity-80"
        />
      </div>
    </div>
  );
};

export default QCS;
