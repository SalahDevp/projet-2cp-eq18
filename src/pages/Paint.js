import Canvas from "components/paint/Canvas";
import React, { useRef, useEffect, useState } from "react";

import * as drawShape from "utils/paint/actions/drawShape";
import * as movePoint from "utils/paint/actions/movePoint";
import * as paintBucket from "utils/paint/actions/paintBucket";
import * as drawTriangle from "utils/paint/actions/drawTriangle";
import { clearCanvas, drawLine } from "utils/paint/basics";

export const HEIGHT = 500,
  WIDTH = 1000,
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
    <>
      <Canvas
        canvasRef={canvasRef}
        width={WIDTH}
        height={HEIGHT}
        onMouseDown={(event) => actionType?.handleMouseDown?.(event, state)}
        onMouseMove={(event) => actionType?.handleMouseMove?.(event, state)}
        onMouseUp={(event) => actionType?.handleMouseUp?.(event, state)}
        onClick={(event) => actionType?.handleClick?.(event, state)}
      />
      <div className="flex justify-between" style={{ width: WIDTH }}>
        <button onClick={handleClear}>clear</button>
        <button onClick={() => setActionType(undefined)}>hand</button>
        <button onClick={() => setActionType(drawShape)}>draw shape</button>
        <button onClick={() => setActionType(movePoint)}>move point</button>
        <button onClick={() => setActionType(drawTriangle)}>triangle</button>
        <button onClick={() => setActionType(paintBucket)}>bucket</button>
      </div>
    </>
  );
};

export default Paint;
