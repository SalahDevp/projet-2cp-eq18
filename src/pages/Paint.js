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

const Paint = () => {
  const [drawing, setDrawing] = useState(false);
  const [shapes, setShapes] = useState([]);
  const [current, setCurrent] = useState({});
  const [line, setLine] = useState();
  const canvasRef = useRef(null);

  const handleMouseDown = (event) => {
    //start drawing
    setDrawing(true);
    //get mouse coordinates
    const { x: mouseX, y: mouseY } = getMousePos(canvasRef, event);
    // get closest grid point to mouse coord
    const { x, y } = getGridPos(mouseX, mouseY, UNIT);
    setLine({ x1: x, y1: y, x2: x, y2: y });
    //check if the point already belongs to a shape
    let { shape, pointIndex } = getShapeFromPoint(shapes, x, y);
    //if the shape isn't a "polygone" and the selected point is the first or the last one
    if (
      shape &&
      !shape.polygone &&
      (pointIndex === 0 || pointIndex === shape.points.length - 1)
    )
      setCurrent({ shape, pointIndex });
    //else we create a new shape
    else {
      shape = new Shape({ x, y });
      setShapes((prv) => [...prv, shape]);
      setCurrent({ shape, pointIndex: 0 });
    }
  };
  const handleMouseMove = (event, lastPoint) => {
    if (!drawing) return;
    const { x: mouseX, y: mouseY } = getMousePos(canvasRef, event);
    const { x, y } = lastPoint
      ? getGridPos(mouseX, mouseY, UNIT)
      : { x: mouseX, y: mouseY };
    setLine((prv) => ({ ...prv, x2: x, y2: y }));
    //updating line bcs setLine is asyn (problem in handleMouseUp)
    if (lastPoint) {
      line.x2 = x;
      line.y2 = y;
    }
  };
  const handleMouseUp = (event) => {
    //set the line
    handleMouseMove(event, true);
    //add the new point to the current shape
    if (current.pointIndex === current.shape.points.length - 1)
      current.shape.points.push({ x: line.x2, y: line.y2 });
    else current.shape.points.unshift({ x: line.x2, y: line.y2 });
    //stop drawing
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
  }, [shapes, line]);
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
