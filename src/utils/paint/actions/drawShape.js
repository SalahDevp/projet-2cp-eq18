import { getMousePos, getGridPos, getShapeFromPoint } from "../basics";
import Shape from "../Shape";
import { UNIT } from "pages/Paint";
import { checkIfPointInSameShapeSegment, checkZeroAngle } from "../geometry";

const handleFirstClick = (event, state) => {
  //start drawing
  state.setDrawing(true);
  //get mouse coordinates
  const { x: mouseX, y: mouseY } = getMousePos(state.canvasRef, event);
  // get closest grid point to mouse coord
  const { x, y } = getGridPos(mouseX, mouseY, UNIT);
  //init line for drawing
  state.setLine({ x1: x, y1: y, x2: x, y2: y });
  let { shape, pointIndex } = getShapeFromPoint(state.shapes, x, y);
  //check if the point already belongs to a shape
  // and if the shape isn't a "polygone" and the selected point is the first or the last one
  //(you can only start drawing form the first or last point of a line/multiline)
  if (
    shape &&
    !shape.polygone &&
    (pointIndex === 0 || pointIndex === shape.points.length - 1)
  )
    state.setCurrent({ shape, pointIndex });
  //if the point doesnt belong to a shape
  else if (!shape) {
    //we create a new shape
    shape = new Shape({ x, y });
    state.setShapes((prv) => [...prv, shape]);
    state.setCurrent({ shape, pointIndex: 0 });
  } else {
    state.setLine({});
    state.setDrawing(false);
  }
};
export const handleMouseMove = (event, state) => {
  //in mouse move we just update the line obj (then we add the new points to the shape in handleSecondClick)
  if (!state.drawing) return;
  const { x, y } = getMousePos(state.canvasRef, event);
  state.setLine((prv) => ({ ...prv, x2: x, y2: y }));
};

const handleSecondClick = (event, state) => {
  const newPoint = getGridPos(state.line.x2, state.line.y2, UNIT);
  //for checking if the new point already belongs to another shape
  const { shape, pointIndex } = getShapeFromPoint(
    state.shapes,
    newPoint.x,
    newPoint.y
  );

  // this var is for checking the zero angle (overlaping lines)
  const prvPoint =
    //if shape is only one point (no prv point) set prvPoint to that only point
    state.current.shape.points.length >= 2
      ? state.current.shape.points[
          state.current.pointIndex === 0 ? 1 : state.current.pointIndex - 1
        ]
      : state.current.shape.points[state.current.pointIndex];

  //-------------add the new point to the current shape------------
  if (
    //check if the new point is diffrent from the one from mouse down (to prevent duplicated points)
    (state.current.shape.points[state.current.pointIndex].x !== newPoint.x ||
      state.current.shape.points[state.current.pointIndex].y !== newPoint.y) &&
    //check if the new point either doesnt belong to a shape or it belongs the same shape as the mouseDown point
    (!shape ||
      (shape === state.current.shape &&
        //shape has to have more than 3 points (bah nghl9oh)
        shape.points.length >= 3 &&
        //check if the new point is the last or first of shape
        (pointIndex === 0 ||
          pointIndex === state.current.shape.points.length - 1))) &&
    !checkIfPointInSameShapeSegment(state.current.shape, newPoint) &&
    //check for zero angle (overlaping lines)
    !checkZeroAngle(
      prvPoint,
      state.current.shape.points[state.current.pointIndex],
      {
        x: newPoint.x,
        y: newPoint.y,
      }
    )
  ) {
    //add to end of shape
    if (state.current.pointIndex === state.current.shape.points.length - 1)
      state.current.shape.points.push({ x: newPoint.x, y: newPoint.y });
    // add to the beginning of shape
    else
      state.current.shape.points.unshift({
        x: newPoint.x,
        y: newPoint.y,
      });
    if (shape) state.current.shape.polygone = true;
    //clearing the line
    state.setLine({});
    //stop drawing
    state.setDrawing(false);
  }
};

export const handleClick = (event, state) => {
  if (!state.drawing) handleFirstClick(event, state);
  else handleSecondClick(event, state);
};
