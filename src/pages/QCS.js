import Nav from "components/Nav";
import submitBtn from "assets/exercices/submitBtn.png";
import QCSImage from "assets/exercices/QCS-image.png";
import greenArrow from "assets/exercices/green-arrow.png";
import redArrow from "assets/exercices/red-arrow.png";
import QCSOption from "components/exercices/QCSOption";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
//translation
import { useTranslation } from "react-i18next";
//audio
import useAudio from "utils/exercices/useAudio";
import Sortir from "components/sortir";
//levels
import * as levels from "utils/exercices/levels";
import { useExoScore } from "AppContext";

const QCS = () => {
  //audio
  const [correctAudio, wrongAudio] = useAudio();
  //routing
  const { num: questionNum } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  //states
  const [progIndicator, setProgIndicator] = useState(""); //the num shown in top left ex: 1/20
  const [question, setQuestion] = useState("");
  const [imageSrc, setImageSrc] = useState();
  const [options, setOptions] = useState([]);
  const [rightOption, setRightOption] = useState();
  const [checkedOption, setCheckedOption] = useState();
  const [submitted, setSubmitted] = useState(false);
  //score
  const { setExoScore } = useExoScore();
  //translation
  const { i18n } = useTranslation();
  //funcs
  const handleChange = (evnt, optionNum) => {
    //if the form is submitted exit (to prevent user form changing answer)
    if (submitted) return;
    setCheckedOption(optionNum);
  };
  //
  const handleSubmit = async () => {
    //dont submit if user hasn't checked any box
    if (!checkedOption) return;
    //if the selected opt is wrong
    if (checkedOption !== rightOption) {
      await wrongAudio.current.play(); //play sound
      options[checkedOption - 1].color = "red"; //set its color to red
    } else await correctAudio.current.play();
    //set the right option color to green
    options[rightOption - 1].color = "green";
    //set states
    setOptions([...options]);
    setSubmitted(true);
  };
  //
  const handleLastNext = (level, correctAnswers, maxQst) => {
    setExoScore(level, correctAnswers, maxQst);
    navigate("/menu-exo");
  };
  const handleNext = () => {
    const level = searchParams.get("level");
    const qstNum = parseInt(searchParams.get("qstNum"));
    const nextQuestion = levels["level" + level][qstNum];
    const maxQst = parseInt(searchParams.get("maxQst"));
    const correctAnswers =
      parseInt(searchParams.get("corrAns")) +
      (checkedOption === rightOption ? 1 : 0);
    if (qstNum !== maxQst)
      navigate(
        `${nextQuestion}?&maxQst=${maxQst}&qstNum=${
          qstNum + 1
        }&level=${level}&corrAns=${correctAnswers}`
      );
    else handleLastNext(level, correctAnswers, maxQst);
  };
  ////
  useEffect(() => {
    let questionObj;
    //load audio
    correctAudio.current.load();
    wrongAudio.current.load();
    //progress
    setProgIndicator(
      `${searchParams.get("qstNum")}/${searchParams.get("maxQst")}`
    );
    (async () => {
      try {
        questionObj = await window.electronAPI.getQuizQuestion(
          "QCS",
          questionNum,
          i18n.language
        );
        setQuestion(questionObj.question);
        setOptions(
          questionObj.options.map((opt) => ({
            text: opt,
          }))
        );
        setRightOption(questionObj.rightOptions);
        setImageSrc(questionObj.image);
        setCheckedOption();
        setSubmitted(false);
      } catch (e) {
        console.error(e);
        //TODO: navigate to exercices menu
      }
    })();
  }, [questionNum, i18n.language]);

  return (
    <div className="bg-beige relative h-screen w-screen flex overflow-hidden">
      <Sortir />
      <Nav pathAvant={"/menu-exo"} />
      <div
        className={`relative h-auto w-[1100px] border-2 rounded-3xl border-jeune ml-24 mt-20 mb-10 pb-6 pt-7 flex flex-col items-center ${
          !submitted
            ? "bg-white"
            : checkedOption === rightOption
            ? "bg-green-200"
            : "bg-red-200"
        }`}
      >
        <span className="font-bold text-2xl absolute top-1 right-4">
          {progIndicator}
        </span>
        <div className="text-2xl font-bold text-center py-4">{question}</div>
        <div>
          <img src={imageSrc} alt="" className="h-60 mt-8" />
        </div>
        <form
          dir={i18n.language === "fr" ? "ltr" : "rtl"}
          className="flex-grow w-4/5 grid grid-cols-2 place-items-start z-10 mt-4"
        >
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
        <div className="w-4/5 h-16 relative">
          {submitted ? (
            <button className="absolute top-0 right-0" onClick={handleNext}>
              <img
                src={checkedOption === rightOption ? greenArrow : redArrow}
                alt=""
                className="h-14"
              />
            </button>
          ) : (
            <button className="absolute top-0 right-0" onClick={handleSubmit}>
              <img className="h-14 w-14" src={submitBtn} alt="" />
            </button>
          )}
        </div>
        <img
          src={QCSImage}
          alt=""
          className="absolute bottom-0 left-0 opacity-80 h-1/3"
        />
      </div>
    </div>
  );
};

export default QCS;
