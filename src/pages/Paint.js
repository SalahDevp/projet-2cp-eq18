import Canvas from "components/paint/Canvas";
import React, { useRef, useEffect, useState } from "react";
import {
  clearCanvas,
  getGridPos,
  getMousePos,
  getShapeFromPoint,
} from "utils/paint/basics";
import Shape from "utils/paint/Shape";

const HEIGHT = 500,
  WIDTH = 1000,
  UNIT = 20;

const Paint = () => {
  const [drawing, setDrawing] = useState(false);
  const [shapes, setShapes] = useState([]);
  const [current, setCurrent] = useState({});
  const [line, setLine] = useState();
  const canvasRef = useRef(null);

  const drawLine = (context, line) => {
    context.beginPath();
    context.strokeStyle = "#000000";
    context.moveTo(line.x1, line.y1);
    context.lineTo(line.x2, line.y2);
    context.stroke();
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
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      <div className="flex justify-between">
        <button onClick={handleClear}>clear</button>
      </div>
    </>
  );
};

export default Paint;
