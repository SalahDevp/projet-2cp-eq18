import Canvas from "components/paint/Canvas";
import React, { useRef, useEffect, useState } from "react";
import { matchRoutes } from "react-router-dom";
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

const firstshape = new Shape({ x: 40, y: 60 });
firstshape.points.push({ x: 60, y: 160 }, { x: 80, y: 120 });
const Paint = () => {
  const [drawing, setDrawing] = useState(false);
  const [shapes, setShapes] = useState([firstshape]);
  const [current, setCurrent] = useState({});
  const [line, setLine] = useState();
  const canvasRef = useRef(null);

  const handleMouseDown = (event) => {
    const { x: mouseX, y: mouseY } = getMousePos(canvasRef, event);
    const { x, y } = getGridPos(mouseX, mouseY, UNIT);
    const { shape, pointIndex } = getShapeFromPoint(shapes, x, y);
    if (shape) {
      setDrawing(true);
      setCurrent({ shape, pointIndex });
    }
  };
  const handleMouseMove = (event, lastPoint) => {
    if (!drawing) return;
    const { x, y } = getMousePos(canvasRef, event);
    current.shape.points[current.pointIndex] = { x, y };
    setLine({ x, y });
  };
  const handleMouseUp = (event) => {
    const { x: mouseX, y: mouseY } = getMousePos(canvasRef, event);
    const { x, y } = getGridPos(mouseX, mouseY, UNIT);
    current.shape.points[current.pointIndex] = { x, y };
    setDrawing(false);
  };
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
