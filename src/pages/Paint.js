import React, { useEffect, useRef } from "react";
import sortir from "assets/Grille/sortir.png";
import first from "assets/Grille/1.png";
import second from "assets/Grille/2.png";
import third from "assets/Grille/3.png";
import fourth from "assets/Grille/4.png";
import fifth from "assets/Grille/5.png";
import sixth from "assets/Grille/6.png";
import seventh from "assets/Grille/7.png";
import eighth from "assets/Grille/8.png";
import I1 from "assets/Grille/iconsovert/I1.png";
import I2 from "assets/Grille/iconsovert/I2.png";
import I3 from "assets/Grille/iconsovert/I3.png";
import P1 from "assets/Grille/iconsovert/hexagone.png";
import P2 from "assets/Grille/iconsovert/pentagone.png";
import P3 from "assets/Grille/iconsovert/Rectangle.png";
import P4 from "assets/Grille/iconsovert/Rhombus.png";
import P5 from "assets/Grille/iconsovert/triangle.png";
import SC from "assets/Grille/iconsovert/SC.png";
import SAV from "assets/Grille/iconsovert/SAV.png";
import SAH from "assets/Grille/iconsovert/SAH.png";
//exo questions
import submitBtn from "assets/exercices/submitBtn.png";
import greenArrow from "assets/exercices/green-arrow.png";
import redArrow from "assets/exercices/red-arrow.png";
//
import dossier from "components/nouveau-protype-component/dossier-ouvert .png";
import sauvgarde from "components/nouveau-protype-component/sauvgarde.png";
import addIcon from "assets/cour/add.png";
import NAV from "components/Nav";
import { useState } from "react";
//actions
import * as drawShape from "utils/paint/actions/drawShape";
import * as movePoint from "utils/paint/actions/movePoint";
import * as paintBucket from "utils/paint/actions/paintBucket";
import * as drawTriangle from "utils/paint/actions/drawTriangle";
import * as erasePoint from "utils/paint/actions/erasePoint";
import * as drawPentagon from "utils/paint/actions/drawPentagon";
import * as moveShape from "utils/paint/actions/moveShape";
import * as symetrieCentrale from "utils/paint/actions/symetrieCentrale";
import * as supprimerPoly from "utils/paint/actions/supprimerPoly";
import * as rotation from "utils/paint/actions/rotation";
import * as drawRectangle from "utils/paint/actions/drawRectangle";
import * as drawLosange from "utils/paint/actions/drawLosange";
import * as drawHexa from "utils/paint/actions/drawHexa";
import * as eraseLine from "utils/paint/actions/eraseLine";
import * as symetrieAxialeHorizontal from "utils/paint/actions/symetrieAxialeHorizontal";
import * as symetrieAxialeVertical from "utils/paint/actions/symetrieAxialeVertical";
import PaintComponent from "components/paint/PaintComponent";
import Shape from "utils/paint/Shape";
import SimpleBtn from "components/paint/SimpleBtn";
import MenuBtn from "components/paint/MenuBtn";
import checkSymetrieCentral from "utils/paint/checkSymetrieCentral";
import { useNavigate, useSearchParams } from "react-router-dom";
import { checkSymetrieAxialeHorizontal } from "utils/paint/checkSymetrieAxialH";
import { checkSymetrieAxialeVertical } from "utils/paint/checkSymetrieAxialV";
import { useUserMode } from "AppContext";
import AddExoDialogue from "components/paint/AddExoDialogue";
import useAudio from "utils/exercices/useAudio";
//levels
import * as levels from "utils/exercices/levels";
import { useExoScore } from "AppContext";

const [RED, GREEN, BLUE, YELLOW, ORANGE, PURPLE] = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FFA500",
  "#800080",
];

const Paint = () => {
  //get params
  /*contains:
    if custom exo: exoMode, qstNum, cstmExo, maxQst  
    exoMode:bool, qstNum(qst num to get it from paint exo questions file), exoQstNum(the number of the question in the level), maxQst, level, corrAns
  */
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  //audio
  const [correctAudio, wrongAudio] = useAudio();
  //icons
  const [icons5, setIcons5] = useState(false);
  const [icons1, setIcons1] = useState(false);
  const [icons2, setIcons2] = useState(false);
  const [icons3, setIcons3] = useState(false);
  const [icons4, setIcons4] = useState(false);
  //paint state
  const [shapes, setShapes] = useState([]);
  const [actionType, setActionType] = useState();
  const [bucketColor, setBucketColor] = useState(RED);
  //exo mode
  const [exoMode, setExoMode] = useState(false);
  const [exoShapes, setExoShapes] = useState([]);
  const [exoSymetrieMode, setExoSymetrieMode] = useState(""); // centrale | axiale-horizentale| axiale-verticale
  const [submitted, setSubmitted] = useState(false);
  const [rightAnswer, setRightAnswer] = useState(true);
  //user mode
  const { teacherMode } = useUserMode();
  //add exo dialogue
  const [dialogueOpened, setDialogueOpened] = useState(false);
  //score
  const { setExoScore } = useExoScore();

  //ref
  const paintRef = useRef(null);
  //funcs
  const saveDrawing = () => {
    window.electronAPI.savePaintDrawing(JSON.stringify(shapes));
  };
  //
  const getDrawing = async () => {
    const shapesStr = await window.electronAPI.getPaintDrawing();
    const shapesArr = JSON.parse(shapesStr);
    const newShapes = shapesArr.map((shape) => {
      const newShape = new Shape();
      newShape.points = shape.points;
      newShape.color = shape.color;
      newShape.polygone = shape.polygone;
      return newShape;
    });
    setShapes(newShapes);
  };
  //close all menu's
  const closeAll = () => {
    setIcons1(false);
    setIcons2(false);
    setIcons3(false);
    setIcons4(false);
    setIcons5(false);
  };
  //handlers
  const handleSubmit = async () => {
    let res;
    //if user hasn't draw any shape exit fnc
    if (shapes.length === 0) return;
    //
    closeAll(); //close all menus
    setSubmitted(true);
    //check if answer is correct
    if (exoSymetrieMode === "centrale")
      res = checkSymetrieCentral(exoShapes, shapes);
    else if (exoSymetrieMode === "axiale-horizentale")
      res = checkSymetrieAxialeHorizontal(exoShapes, shapes);
    else if (exoSymetrieMode === "axiale-verticale")
      res = checkSymetrieAxialeVertical(exoShapes, shapes);
    //if correct
    if (res) {
      setRightAnswer(true);
      await correctAudio.current.play();
    }
    //if wrong
    else {
      setRightAnswer(false);
      //set wrong shapes color to red
      shapes.forEach((shape) => {
        if (shape.strokeStyle !== GREEN) shape.strokeStyle = RED;
      });
      await wrongAudio.current.play();
    }
    setShapes([...shapes]);
  };
  const handleLastNext = (cstmExo, level, correctAnswers, maxQst) => {
    if (!cstmExo) setExoScore(level, correctAnswers, maxQst);
    navigate("/menu-exo");
  };
  const handleNext = () => {
    const cstmExo = searchParams.get("cstmExo") === "true";
    const level = searchParams.get("level");
    const qstNum = parseInt(searchParams.get(cstmExo ? "qstNum" : "exoQstNum"));
    const maxQst = parseInt(searchParams.get("maxQst"));
    const correctAnswers =
      parseInt(searchParams.get("corrAns")) + (rightAnswer ? 1 : 0);
    if (qstNum !== maxQst) {
      if (cstmExo) {
        navigate(
          `/paint?exoMode=true&qstNum=${
            qstNum + 1
          }&cstmExo=true&maxQst=${maxQst}`
        );
        paintRef.current?.handleClear();
        setSubmitted(false);
      } else {
        const nextQuestion = levels["level" + level][qstNum];
        navigate(
          `${nextQuestion}?&maxQst=${maxQst}&qstNum=${
            qstNum + 1
          }&level=${level}&corrAns=${correctAnswers}`
        );
      }
    } else handleLastNext(cstmExo, level, correctAnswers, maxQst);
  };
  //exo mode
  useEffect(() => {
    const exo = searchParams.get("exoMode") === "true";
    const cstmExo = searchParams.get("cstmExo") === "true";
    setExoMode(exo);
    if (!exo) return;
    const qstNum = parseInt(searchParams.get("qstNum"));
    (async () => {
      try {
        const qstObj = await window.electronAPI.getPaintExoQst(qstNum, cstmExo);
        const newExoShapes = qstObj.exoShapes.map((shape) => {
          const newShape = new Shape();
          newShape.points = shape.points;
          newShape.polygone = shape.polygone;
          newShape.color = shape.color;
          return newShape;
        });
        setExoShapes(newExoShapes);
        setExoSymetrieMode(qstObj.mode);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [searchParams]);
  return (
    <div className="relative flex justify-between overflow-hidden bg-white h-screen w-screen">
      <NAV
        pathAvant="/NMenu"
        image1={!exoMode && dossier}
        image2={!exoMode && sauvgarde}
        image3={!exoMode && teacherMode && shapes.length > 0 && addIcon}
        saveDrawing={saveDrawing}
        getDrawing={getDrawing}
        createExo={() => setDialogueOpened(true)}
      />
      {dialogueOpened && (
        <AddExoDialogue setDialogueOpened={setDialogueOpened} shapes={shapes} />
      )}
      <PaintComponent
        actionType={actionType}
        bucketColor={bucketColor}
        shapes={shapes}
        setShapes={setShapes}
        exoShapes={exoShapes}
        symetrieCentraleMode={
          actionType === symetrieCentrale || exoSymetrieMode === "centrale"
        }
        symetrieAxialeHorizontalMode={
          actionType === symetrieAxialeHorizontal ||
          exoSymetrieMode === "axiale-horizentale"
        }
        symetrieAxialeVerticalMode={
          actionType === symetrieAxialeVertical ||
          exoSymetrieMode === "axiale-verticale"
        }
        ref={paintRef}
        exoMode={exoMode}
        submitted={submitted}
        rightAnswer={rightAnswer}
      />
      <div
        className="py-3 border-l-2 border-violet rounded-l-2xlh-screen w-20 bg-marron
            flex flex-col items-center justify-between"
      >
        <img className="cursor-pointer mt-1 h-14 w-14" src={sortir} alt="" />
        <SimpleBtn
          src={first}
          submitted={submitted}
          closeAll={closeAll}
          action={undefined}
          setActionType={setActionType}
        />
        <SimpleBtn
          src={second}
          submitted={submitted}
          closeAll={closeAll}
          action={drawShape}
          setActionType={setActionType}
        />
        <MenuBtn
          submitted={submitted}
          src={third}
          closeAll={closeAll}
          opened={icons1}
          setOpened={setIcons1}
        >
          <SimpleBtn
            src={I1}
            small
            action={movePoint}
            setActionType={setActionType}
            closeAll={closeAll}
          />
          <SimpleBtn
            src={I2}
            small
            action={moveShape}
            setActionType={setActionType}
            closeAll={closeAll}
          />
        </MenuBtn>

        <MenuBtn
          submitted={submitted}
          src={fourth}
          closeAll={closeAll}
          opened={icons2}
          setOpened={setIcons2}
        >
          <SimpleBtn
            src={I2}
            small
            action={supprimerPoly}
            setActionType={setActionType}
            closeAll={closeAll}
          />
          <SimpleBtn
            src={second}
            small
            action={eraseLine}
            setActionType={setActionType}
            closeAll={closeAll}
          />
          <SimpleBtn
            src={I1}
            small
            action={erasePoint}
            setActionType={setActionType}
            closeAll={closeAll}
          />
          <SimpleBtn
            src={I3}
            small
            action={paintRef.current?.handleClear}
            setActionType={setActionType}
            closeAll={closeAll}
          />
        </MenuBtn>
        <MenuBtn
          src={fifth}
          submitted={submitted}
          closeAll={closeAll}
          opened={icons3}
          setOpened={setIcons3}
        >
          <SimpleBtn
            src={P1}
            small
            action={drawHexa}
            setActionType={setActionType}
            closeAll={closeAll}
          />
          <SimpleBtn
            src={P2}
            small
            action={drawPentagon}
            setActionType={setActionType}
            closeAll={closeAll}
          />
          <SimpleBtn
            src={P3}
            small
            action={drawRectangle}
            setActionType={setActionType}
            closeAll={closeAll}
          />
          <SimpleBtn
            src={P4}
            small
            action={drawLosange}
            setActionType={setActionType}
            closeAll={closeAll}
          />
          <SimpleBtn
            src={P5}
            small
            action={drawTriangle}
            setActionType={setActionType}
            closeAll={closeAll}
          />
        </MenuBtn>

        <MenuBtn
          src={sixth}
          submitted={submitted}
          closeAll={closeAll}
          opened={icons4}
          setOpened={setIcons4}
        >
          <div className="flex flex-col h-24 justify-between">
            <div
              onClick={() => {
                setActionType(paintBucket);
                setBucketColor(RED);
              }}
              className="bg-[#FF0000] cursor-pointer rounded-full h-10 w-10"
            ></div>
            <div
              onClick={() => {
                setActionType(paintBucket);
                setBucketColor(BLUE);
              }}
              className="bg-[#0000FF] cursor-pointer rounded-full h-10 w-10"
            ></div>
          </div>

          <div className="flex flex-col h-24 justify-between">
            <div
              onClick={() => {
                setActionType(paintBucket);
                setBucketColor(GREEN);
              }}
              className="bg-[#00FF00] cursor-pointer rounded-full h-10 w-10"
            ></div>
            <div
              onClick={() => {
                setActionType(paintBucket);
                setBucketColor(YELLOW);
              }}
              className="bg-[#FFFF00] cursor-pointer rounded-full h-10 w-10"
            ></div>
          </div>

          <div className="flex flex-col h-24 justify-between">
            <div
              onClick={() => {
                setActionType(paintBucket);
                setBucketColor(ORANGE);
              }}
              className="bg-[#FFA500] cursor-pointer rounded-full h-10 w-10"
            ></div>
            <div
              onClick={() => {
                setActionType(paintBucket);
                setBucketColor(PURPLE);
              }}
              className="bg-[#800080] cursor-pointer rounded-full h-10 w-10"
            ></div>
          </div>
        </MenuBtn>

        <SimpleBtn
          src={seventh}
          submitted={submitted}
          action={rotation}
          setActionType={setActionType}
          closeAll={closeAll}
        />

        {!exoMode && (
          <div dir="rtl" className="flex flex-row justify-between ">
            <img
              className="cursor-pointer h-16 w-14"
              src={eighth}
              alt=""
              onClick={() => {
                closeAll();
                if (!icons5) setIcons5(true);
              }}
            />
            {icons5 && (
              <div
                className="p-1 px-1 w-44 rounded-xl justify-between  flex items-center flex-row bg-marron
                             mt-1 mr-20 absolute   "
              >
                <img
                  onClick={() => setActionType(symetrieCentrale)}
                  className="cursor-pointer h-12 w-12"
                  src={SC}
                  alt=""
                />
                <img
                  onClick={() => setActionType(symetrieAxialeVertical)}
                  className="cursor-pointer h-12 w-12"
                  src={SAV}
                  alt=""
                />
                <img
                  onClick={() => setActionType(symetrieAxialeHorizontal)}
                  className="cursor-pointer h-12 w-12"
                  src={SAH}
                  alt=""
                />
              </div>
            )}
          </div>
        )}
        {exoMode &&
          (!submitted ? (
            <button onClick={handleSubmit}>
              <img src={submitBtn} alt="" className="h-14 w-14" />
            </button>
          ) : (
            <button onClick={handleNext}>
              <img
                src={rightAnswer ? greenArrow : redArrow}
                alt=""
                className="h-14 w-14"
              />
            </button>
          ))}
      </div>
    </div>
  );
};

export default Paint;
