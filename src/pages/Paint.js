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

const firstshape = new Shape({ x: 40, y: 60 });
firstshape.points.push(
  { x: 100, y: 160 },
  { x: 80, y: 260 },
  { x: 40, y: 100 },
  { x: 560, y: 280 }
);
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
      setCurrent({ shape, pointIndex, x, y });
    }
  };
  const handleMouseMove = (event, lastPoint) => {
    if (!drawing) return;
    const { x, y } = getMousePos(canvasRef, event);
    current.shape.points[current.pointIndex] = { x, y };
    setLine({ x, y });
  };
  const handleMouseUp = (event) => {
    const getLineEq = (point1, point2) => {
      //this function calculate a line equation
      let m = (point2.y - point1.y) / (point2.x - point1.x); // m almail ta3 lmoosta9iim
      let b = m !== Infinity ? point2.y - m * point2.x : point1.x; // b howa noo9tat ta9atao3 lmoosta9im m3a mi7war ltaratib (y = ax+b)
      return { m, b };
    };
    const pointBelongsToLine = (lineEq, point) => {
      //this function checks if a point is a part of a line given
      if (lineEq.m !== Infinity)
        return point.y === lineEq.m * point.x + lineEq.b;
      else return point.x === lineEq.b;
    };
    // linelength ta7ssab ettol ta3 l9it3a
    const lineLength = (p1, p2) =>
      Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
    if (!drawing) return;
    const { x: mouseX, y: mouseY } = getMousePos(canvasRef, event);
    const { x, y } = getGridPos(mouseX, mouseY, UNIT);
    const { shape, pointIndex } = getShapeFromPoint(shapes, x, y);
    current.shape.points[current.pointIndex] = { x, y };
    let lineEq;

    if (shape && pointIndex !== current.pointIndex) {
      // had l if testi ki deplaci point foo9 point yantami lshape t3awed trdoo win kan
      current.shape.points[current.pointIndex].x = current.x;
      current.shape.points[current.pointIndex].y = current.y;
      return setDrawing(false);
    }
    /*-----------------------------------------------------------------------------------------*/
    /* bon hna ybdaw les test (les cas) ta3 deplacement ta3 les point*/
    /*1111111111111111111111111111111111111111111111111111111111111*/
    /* l if lwla testi ida lpoint li ddeplassa yantamilk ll line (had line ttkwn ml point li 9bloo ou li b3doo) nsupprimooh*/
    if (
      current.shape.points[current.pointIndex - 1] &&
      current.shape.points[current.pointIndex + 1]
    ) {
      lineEq = getLineEq(
        current.shape.points[current.pointIndex - 1],
        current.shape.points[current.pointIndex + 1]
      );

      if (
        pointBelongsToLine(lineEq, current.shape.points[current.pointIndex])
      ) {
        // f had l if n7ssboo tool ta3 line ml x-1 ll x+1 ida kant toosawi line ml (x-->x-1) + (x-->x+1)
        // ida ma kantch mou7a99a9a n3awdoonrdoo lpoint win kan (fl else)
        if (
          lineLength(
            current.shape.points[current.pointIndex],
            current.shape.points[current.pointIndex - 1]
          ) +
            lineLength(
              current.shape.points[current.pointIndex],
              current.shape.points[current.pointIndex + 1]
            ) ===
          lineLength(
            current.shape.points[current.pointIndex + 1],
            current.shape.points[current.pointIndex - 1]
          )
        )
          current.shape.points.splice(current.pointIndex, 1);
        else {
          current.shape.points[current.pointIndex].x = current.x;
          current.shape.points[current.pointIndex].y = current.y;
        }
      }
    }
    /*222222222222222222222222222222222222222222222222222222222222222222222222222222222*/
    // had l if ntetsoo biha ida kan lpoint wzoog point li moorah mnfss line nsuprimooh
    if (
      current.shape.points[current.pointIndex + 1] &&
      current.shape.points[current.pointIndex + 2]
    ) {
      lineEq = getLineEq(
        current.shape.points[current.pointIndex + 1],
        current.shape.points[current.pointIndex + 2]
      );

      if (
        pointBelongsToLine(lineEq, current.shape.points[current.pointIndex])
      ) {
        //f had l if n7ssboo tool ta3 line ml x-1 ll x+1 ida kant toosawi line ml (x-->x+1) + (x-->x+2)
        // ida ma kantch mou7a99a9a n3awdoonrdoo lpoint win kan (fl else)
        if (
          lineLength(
            current.shape.points[current.pointIndex + 1],
            current.shape.points[current.pointIndex + 2]
          ) +
            lineLength(
              current.shape.points[current.pointIndex],
              current.shape.points[current.pointIndex + 1]
            ) ===
          lineLength(
            current.shape.points[current.pointIndex],
            current.shape.points[current.pointIndex + 2]
          )
        )
          current.shape.points.splice(current.pointIndex + 1, 1);
        else {
          current.shape.points[current.pointIndex].x = current.x;
          current.shape.points[current.pointIndex].y = current.y;
        }
      }
    }
    /*3333333333333333333333333333333333333333333333333333333333333333*/
    // f had l if ntestoo ida kan lpoint wzood li 9bloo mnfss line nsuprimiw jdoo
    if (
      current.shape.points[current.pointIndex - 1] &&
      current.shape.points[current.pointIndex - 2]
    ) {
      lineEq = getLineEq(
        current.shape.points[current.pointIndex - 1],
        current.shape.points[current.pointIndex - 2]
      );
      if (
        pointBelongsToLine(lineEq, current.shape.points[current.pointIndex])
      ) {
        //f had l if n7ssboo tool ta3 line ml x ll x-2 ida kant toosawi line ml (x-->x-1) + (x-1-->x-2)
        // ida ma kantch mou7a99a9a n3awdoonrdoo lpoint win kan (fl else)
        if (
          lineLength(
            current.shape.points[current.pointIndex],
            current.shape.points[current.pointIndex - 1]
          ) +
            lineLength(
              current.shape.points[current.pointIndex - 1],
              current.shape.points[current.pointIndex - 2]
            ) ===
          lineLength(
            current.shape.points[current.pointIndex],
            current.shape.points[current.pointIndex - 2]
          )
        )
          current.shape.points.splice(current.pointIndex - 1, 1);
        else {
          current.shape.points[current.pointIndex].x = current.x;
          current.shape.points[current.pointIndex].y = current.y;
        }
      }
    }
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
