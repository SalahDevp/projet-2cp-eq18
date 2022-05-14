import Nav from "components/Nav";
import sortir from "../components/nouveau-protype-component/sortir.png";
import submitBtn from "assets/exercices/submitBtn.png";
import greenArrow from "assets/exercices/green-arrow.png";
import redArrow from "assets/exercices/red-arrow.png";
import QCMImage from "assets/exercices/QCM-image.png";
import QCMOption from "components/exercices/QCMOption";
import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
//translation
import { useTranslation } from "react-i18next";

const areSetsEqual = (a, b) =>
  a.size === b.size && [...a].every((value) => b.has(value));

const QCM = () => {
  const maxQuestions = 1;
  //audio
  const correctAudio = useMemo(
    () => new Audio("./audio/correct-answer.wav"),
    []
  );
  const wrongAudio = useMemo(() => new Audio("./audio/wrong-answer.mp3"), []);
  //routing
  const { num: questionNum } = useParams();
  const navigate = useNavigate();
  //states
  const [question, setQuestion] = useState("");
  const [imageSrc, setImageSrc] = useState();
  const [options, setOptions] = useState([]);
  const [rightOptions, setRightOptions] = useState(new Set());
  const [checkedOptions, setCheckedOptions] = useState(new Set());
  const [submitted, setSubmitted] = useState(false);
  //translation
  const { i18n } = useTranslation();
  //funcs
  const handleChange = (optionNum) => {
    //if the form is submitted exit (to prevent user form changing answer)
    if (submitted) return;
    //if box is checked uncheck it else check it
    if (checkedOptions.has(optionNum)) checkedOptions.delete(optionNum);
    else checkedOptions.add(optionNum);
    setCheckedOptions(new Set([...checkedOptions]));
  };
  const handleSubmit = () => {
    //dont submit if user hasn't checked any box
    if (checkedOptions.size === 0) return;
    //play audio
    if (areSetsEqual(checkedOptions, rightOptions)) correctAudio.play();
    else wrongAudio.play();
    //set the right options color to green
    for (let optNum of rightOptions) options[optNum - 1].color = "green";
    //if the selected opt is wrong we set its color to red
    for (let optNum of checkedOptions) {
      if (!rightOptions.has(optNum)) options[optNum - 1].color = "red";
    }
    //set states
    setOptions([...options]);
    setSubmitted(true);
  };
  const handleNext = () => {
    const nextQuestion = parseInt(questionNum) + 1;
    navigate(`/qcm/${nextQuestion <= maxQuestions ? nextQuestion : 1}`);
  };
  //
  useEffect(() => {
    let questionObj;
    //load audio
    correctAudio.load();
    wrongAudio.load();
    (async () => {
      try {
        questionObj = await window.electronAPI.getQuizQuestion(
          "QCM",
          questionNum,
          i18n.language
        );
        setQuestion(questionObj.question);
        setOptions(
          questionObj.options.map((opt) => ({
            text: opt,
          }))
        );
        setRightOptions(new Set(questionObj.rightOptions));
        setImageSrc(questionObj.image);
        setCheckedOptions(new Set());
        setSubmitted(false);
      } catch (e) {
        console.error(e);
        //TODO: navigate to exercices menu
      }
    })();
  }, [questionNum, i18n.language]);

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
            : areSetsEqual(checkedOptions, rightOptions)
            ? "bg-green-200"
            : "bg-red-200"
        }`}
      >
        <span className="font-bold text-2xl absolute top-1 right-4">{`${questionNum}/${maxQuestions}`}</span>
        <div className="text-2xl font-bold text-center py-4">{question}</div>
        <div>
          <img src={imageSrc} alt="" className="h-60 mt-8" />
        </div>
        <form className="flex-grow w-4/5 grid grid-cols-2 place-items-center z-10">
          {options.map((opt, ind) => (
            <QCMOption
              text={opt.text}
              color={opt.color}
              key={ind}
              checked={checkedOptions.has(ind + 1)}
              onChange={() => handleChange(ind + 1)}
            />
          ))}
        </form>
        {submitted ? (
          <button className="translate-x-60" onClick={handleNext}>
            <img
              src={
                areSetsEqual(checkedOptions, rightOptions)
                  ? greenArrow
                  : redArrow
              }
              alt=""
              className="h-14"
            />
          </button>
        ) : (
          <button className="translate-x-60" onClick={handleSubmit}>
            <img className="h-14 w-14" src={submitBtn} alt="" />
          </button>
        )}
        <img
          src={QCMImage}
          alt=""
          className="absolute bottom-0 left-0 opacity-50 h-1/3"
        />
      </div>
    </div>
  );
};

export default QCM;
