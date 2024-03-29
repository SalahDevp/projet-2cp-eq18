import Nav from "components/Nav";
import submitBtn from "assets/exercices/submitBtn.png";
import greenArrow from "assets/exercices/green-arrow.png";
import redArrow from "assets/exercices/red-arrow.png";
import ImageQCMOption from "components/exercices/ImageQCMOption";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
//translation
import { useTranslation } from "react-i18next";
//audio
import useAudio from "utils/exercices/useAudio";
import Sortir from "components/sortir";
//levels
import * as levels from "utils/exercices/levels";
import { useExoScore } from "AppContext";

const areSetsEqual = (a, b) =>
  a.size === b.size && [...a].every((value) => b.has(value));

const ImageQCM = () => {
  //audio
  const [correctAudio, wrongAudio] = useAudio();
  //routing
  const { num: questionNum } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  //states
  const [progIndicator, setProgIndicator] = useState(""); //the num shown in top left ex: 1/20
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [rightOptions, setRightOptions] = useState(new Set());
  const [checkedOptions, setCheckedOptions] = useState(new Set());
  const [submitted, setSubmitted] = useState(false);
  //score
  const { setExoScore } = useExoScore();
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

  const handleSubmit = async () => {
    //dont submit if user hasn't checked any box
    if (checkedOptions.size === 0) return;
    //play sound
    if (areSetsEqual(checkedOptions, rightOptions)) {
      await correctAudio.current.play();
    } else await wrongAudio.current.play();
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
      (areSetsEqual(checkedOptions, rightOptions) ? 1 : 0);
    if (qstNum !== maxQst)
      navigate(
        `${nextQuestion}?&maxQst=${maxQst}&qstNum=${
          qstNum + 1
        }&level=${level}&corrAns=${correctAnswers}`
      );
    else handleLastNext(level, correctAnswers, maxQst);
  };
  //
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
        questionObj = await window.electronAPI.getImageQCMQuestion(
          questionNum,
          i18n.language
        );
        setQuestion(questionObj.question);
        setOptions(questionObj.options);
        setRightOptions(new Set(questionObj.rightOptions));
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
      <Sortir />
      <Nav pathAvant={"/menu-exo"} />
      <div
        className={`relative h-auto w-[1100px] border-2 rounded-3xl border-jeune ml-24 mt-16 mb-8 pb-6 pt-7 flex flex-col items-center ${
          !submitted
            ? "bg-white"
            : areSetsEqual(checkedOptions, rightOptions)
            ? "bg-green-200"
            : "bg-red-200"
        }`}
      >
        <span className="font-bold text-2xl absolute top-1 right-4">
          {progIndicator}
        </span>
        <div className="text-2xl font-bold text-center py-4">{question}</div>

        <ul className="h-98 w-4/5 grid grid-cols-3 grid-rows-2 gap-2 place-items-center z-10">
          {options.map((opt, ind) => (
            <ImageQCMOption
              imgSrc={opt.imageSrc}
              color={opt.color}
              hoverText={opt.hoverText}
              submitted={submitted}
              key={opt.imageSrc}
              id={ind}
              onChange={() => handleChange(ind + 1)}
              checked={checkedOptions.has(ind + 1)}
            />
          ))}
        </ul>
        {submitted ? (
          <button className="translate-x-96 mt-3" onClick={handleNext}>
            <img
              src={
                areSetsEqual(checkedOptions, rightOptions)
                  ? greenArrow
                  : redArrow
              }
              alt=""
              className="h-12"
            />
          </button>
        ) : (
          <button className="translate-x-96 mt-3" onClick={handleSubmit}>
            <img className="h-12 w-12" src={submitBtn} alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageQCM;
