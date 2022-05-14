import Canvas from "components/paint/Canvas";
import React, { useRef, useEffect, useState } from "react";
import { clearCanvas, drawLine } from "utils/paint/basics";
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
import * as symetrieAxiale from "utils/paint/actions/symetireAxiale";

// WIDTH and HEIGHT have to be equal
export const HEIGHT = 700,
  WIDTH = 700,
  UNIT = 20;

const Paint = () => {
  const [drawing, setDrawing] = useState(false);
  const [shapes, setShapes] = useState([]);
  const [current, setCurrent] = useState({});
  const [line, setLine] = useState();
  //action type
  const [actionType, setActionType] = useState();
  const canvasRef = useRef(null);

  const state = {
    drawing,
    setDrawing,
    shapes,
    setShapes,
    current,
    setCurrent,
    line,
    setLine,
    canvasRef,
    actionType,
  };

  const handleClear = () => {
    const context = canvasRef.current.getContext("2d");
    clearCanvas(context, WIDTH, HEIGHT, UNIT);
    setShapes([]);
    setLine({});
    setCurrent({});
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    clearCanvas(context, WIDTH, HEIGHT, UNIT);
    shapes.forEach((shape) => shape.draw(context));
    if (line?.x1) drawLine(context, line);
  }, [shapes, line, drawing]);
  return (
    <div className="w-screen h-screen flex">
      <Canvas
        canvasRef={canvasRef}
        width={WIDTH}
        height={HEIGHT}
        onMouseDown={(event) => actionType?.handleMouseDown?.(event, state)}
        onMouseMove={(event) => actionType?.handleMouseMove?.(event, state)}
        onMouseUp={(event) => actionType?.handleMouseUp?.(event, state)}
        onClick={(event) => actionType?.handleClick?.(event, state)}
      />
      <div className="grid grid-cols-5 gap-2" style={{ width: WIDTH }}>
        <button onClick={handleClear}>clear</button>
        <button onClick={() => setActionType(undefined)}>hand</button>
        <button onClick={() => setActionType(drawShape)}>draw shape</button>

        <button onClick={() => setActionType(movePoint)}>move point</button>
        <button onClick={() => setActionType(moveShape)}>move shape</button>

        <button onClick={() => setActionType(drawTriangle)}>triangle</button>
        <button onClick={() => setActionType(drawRectangle)}>rectangle</button>
        <button onClick={() => setActionType(drawLosange)}>losange</button>
        <button onClick={() => setActionType(drawHexa)}>hexagone</button>
        <button onClick={() => setActionType(drawPentagon)}>pentagon</button>

        <button onClick={() => setActionType(paintBucket)}>bucket</button>

        <button onClick={() => setActionType(symetrieCentrale)}>
          symetrie centrale
        </button>
        <button onClick={() => setActionType(symetrieAxiale)}>
          symetireAxiale
        </button>

        <button onClick={() => setActionType(supprimerPoly)}>
          delete polygone
        </button>
        <button onClick={() => setActionType(erasePoint)}>delete point</button>
        <button onClick={() => setActionType(eraseLine)}>delete line</button>

        <button onClick={() => setActionType(rotation)}>rotation</button>
      </div>
    </div>
  );
};

export default Paint;
