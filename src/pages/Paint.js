import React, { useRef } from "react";
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
import submitBtn from "assets/exercices/submitBtn.png";
import dossier from "components/nouveau-protype-component/dossier-ouvert .png";
import sauvgarde from "components/nouveau-protype-component/sauvgarde.png";
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

const [RED, GREEN, BLUE, YELLOW, ORANGE, PURPLE] = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FFA500",
  "#800080",
];

const Paint = () => {
  //icons
  const [icons5, setIcons5] = useState(false);
  const [icons1, setIcons1] = useState(false);
  const [icons2, setIcons2] = useState(false);
  const [icons3, setIcons3] = useState(false);
  const [icons4, setIcons4] = useState(false);
  //paint state
  const [shapes, setShapes] = useState([]);
  const [exoShapes, setExoShapes] = useState([]);
  const [actionType, setActionType] = useState();
  const [bucketColor, setBucketColor] = useState(RED);
  const [exoMode, setExoMode] = useState(false);
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
    console.log(newShapes);
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

  return (
    <div className="relative flex justify-between overflow-hidden bg-white h-screen w-screen">
      <NAV
        pathAvant="/"
        image1={dossier}
        image2={sauvgarde}
        saveDrawing={saveDrawing}
        getDrawing={getDrawing}
      />
      <PaintComponent
        actionType={actionType}
        bucketColor={bucketColor}
        shapes={shapes}
        setShapes={setShapes}
        exoShapes={exoShapes}
        symetrieCentraleMode={actionType === symetrieCentrale}
        symetrieAxialeHorizontalMode={actionType === symetrieAxialeHorizontal}
        symetrieAxialeVerticalMode={actionType === symetrieAxialeVertical}
        ref={paintRef}
      />
      <div
        className="py-3 border-l-2 border-violet rounded-l-2xlh-screen w-20 bg-marron
            flex flex-col items-center justify-between"
      >
        <img className="cursor-pointer mt-1 h-14 w-14" src={sortir} alt="" />
        <img
          onClick={() => {
            setActionType(undefined);
            closeAll();
          }}
          className="cursor-pointer h-14 w-14"
          src={first}
          alt=""
        />
        <img
          onClick={() => {
            setActionType(drawShape);
            closeAll();
          }}
          className="cursor-pointer h-14 w-14"
          src={second}
          alt=""
        />
        <div dir="rtl" className="flex flex-row justify-between ">
          <img
            className="cursor-pointer h-16 w-14"
            src={third}
            alt=""
            onClick={() => {
              closeAll();
              if (!icons1) setIcons1(true);
            }}
          />
          {icons1 && (
            <div
              className="p-1 px-1 w-32 rounded-xl justify-between  flex items-center flex-row bg-marron
                             mt-1 mr-20 absolute   "
            >
              <img
                onClick={() => setActionType(movePoint)}
                className="cursor-pointer h-12 w-12"
                src={I1}
                alt=""
              />
              <img
                onClick={() => setActionType(moveShape)}
                className="cursor-pointer h-12 w-12"
                src={I2}
                alt=""
              />
            </div>
          )}
        </div>

        <div dir="rtl" className="flex flex-row justify-between ">
          <img
            className="cursor-pointer h-16 w-14"
            src={fourth}
            alt=""
            onClick={() => {
              closeAll();
              if (!icons2) setIcons2(true);
            }}
          />
          {icons2 && (
            <div
              className="p-1 px-1 w-56 rounded-xl justify-between  flex items-center flex-row bg-marron
                             mt-1 mr-20 absolute   "
            >
              <img
                onClick={() => setActionType(supprimerPoly)}
                className="cursor-pointer h-12 w-12"
                src={I2}
                alt=""
              />
              <img
                onClick={() => setActionType(eraseLine)}
                className="cursor-pointer h-12 w-12"
                src={second}
                alt=""
              />
              <img
                onClick={() => setActionType(erasePoint)}
                className="cursor-pointer h-12 w-12"
                src={I1}
                alt=""
              />
              <img
                onClick={paintRef.current?.handleClear}
                className="cursor-pointer h-12 w-12"
                src={I3}
                alt=""
              />
            </div>
          )}
        </div>

        <div dir="rtl" className="flex flex-row justify-between ">
          <img
            className="cursor-pointer h-16 w-14"
            src={fifth}
            alt=""
            onClick={() => {
              closeAll();
              if (!icons3) setIcons3(true);
            }}
          />
          {icons3 && (
            <div
              className="p-1 px-1 w-80 rounded-xl justify-between  flex items-center flex-row bg-marron
                                mt-1 mr-20 absolute   "
            >
              <img
                onClick={() => setActionType(drawHexa)}
                className="cursor-pointer h-14 w-12"
                src={P1}
                alt=""
              />
              <img
                onClick={() => setActionType(drawPentagon)}
                className="cursor-pointer h-12 w-14"
                src={P2}
                alt=""
              />
              <img
                onClick={() => setActionType(drawRectangle)}
                className="cursor-pointer h-10 w-16"
                src={P3}
                alt=""
              />
              <img
                onClick={() => setActionType(drawLosange)}
                className="cursor-pointer h-12 w-12"
                src={P4}
                alt=""
              />
              <img
                onClick={() => setActionType(drawTriangle)}
                className="cursor-pointer h-11 w-11"
                src={P5}
                alt=""
              />
            </div>
          )}
        </div>

        <div dir="rtl" className="flex flex-row justify-between ">
          <img
            className="cursor-pointer h-16 w-14"
            src={sixth}
            alt=""
            onClick={() => {
              setActionType(paintBucket);
              closeAll();
              if (!icons4) setIcons4(true);
            }}
          />
          {icons4 && (
            <div
              className="p-0.5 px-1 w-48 h-28 border-2 border-violet rounded-xl flex flex-row justify-between  items-center  bg-marron
                             mt-1 mr-20 absolute   "
            >
              <div className="flex flex-col h-24 justify-between">
                <div
                  onClick={() => setBucketColor(RED)}
                  className="bg-[#FF0000] cursor-pointer rounded-full h-10 w-10"
                ></div>
                <div
                  onClick={() => setBucketColor(BLUE)}
                  className="bg-[#0000FF] cursor-pointer rounded-full h-10 w-10"
                ></div>
              </div>

              <div className="flex flex-col h-24 justify-between">
                <div
                  onClick={() => setBucketColor(GREEN)}
                  className="bg-[#00FF00] cursor-pointer rounded-full h-10 w-10"
                ></div>
                <div
                  onClick={() => setBucketColor(YELLOW)}
                  className="bg-[#FFFF00] cursor-pointer rounded-full h-10 w-10"
                ></div>
              </div>

              <div className="flex flex-col h-24 justify-between">
                <div
                  onClick={() => setBucketColor(ORANGE)}
                  className="bg-[#FFA500] cursor-pointer rounded-full h-10 w-10"
                ></div>
                <div
                  onClick={() => setBucketColor(PURPLE)}
                  className="bg-[#800080] cursor-pointer rounded-full h-10 w-10"
                ></div>
              </div>
            </div>
          )}
        </div>

        <div dir="rtl" className="flex flex-row justify-between ">
          <img
            onClick={() => {
              setActionType(rotation);
              closeAll();
            }}
            className="cursor-pointer h-14 w-14"
            src={seventh}
            alt=""
          />
        </div>

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
        {exoMode && (
          <button>
            <img src={submitBtn} alt="" className="h-14 w-14" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Paint;
