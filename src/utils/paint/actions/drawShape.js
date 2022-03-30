import { getMousePos, getGridPos, getShapeFromPoint } from "../basics";
import Shape from "../Shape";
import { UNIT } from "pages/Paint";
import { checkIfPointInShapeSegment } from "../geometry";

export const handleMouseDown = (event, state) => {
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
  //check if the point doesnt belong to a shape segment
  else if (!checkIfPointInShapeSegment({ x, y }, state.shapes) && !shape) {
    //we create a new shape
    shape = new Shape({ x, y });
    state.setShapes((prv) => [...prv, shape]);
    state.setCurrent({ shape, pointIndex: 0 });
  } else {
    state.setLine({});
    state.setDrawing(false);
  }
};
export const handleMouseMove = (event, state, lastPoint) => {
  if (!state.drawing) return;
  const { x: mouseX, y: mouseY } = getMousePos(state.canvasRef, event);
  const { x, y } = lastPoint
    ? getGridPos(mouseX, mouseY, UNIT)
    : { x: mouseX, y: mouseY };
  state.setLine((prv) => ({ ...prv, x2: x, y2: y }));
  //updating line bcs setLine is async (problem in handleMouseUp)
  if (lastPoint) {
    state.line.x2 = x;
    state.line.y2 = y;
  }
};
export const handleMouseUp = (event, state) => {
  /** checks if the new drawn line (head, newPoint)and (head, prvPoint) are overlaping  */
  const checkOverlapingLines = (shape, headIndex, newPoint) => {
    //if shape doesnt exist or has only one point
    if (!shape || shape.points.length < 2) return false;
    const prvIndex = headIndex === 0 ? 1 : headIndex - 1;
    const head = shape.points[headIndex];
    const prvPoint = shape.points[prvIndex];
    return (
      (head.y - newPoint.y) / (head.x - newPoint.x) ===
        (head.y - prvPoint.y) / (head.x - prvPoint.x) &&
      (head.y - prvPoint.y) * (head.y - newPoint.y) >= 0 &&
      (head.x - prvPoint.x) * (head.x - newPoint.x) >= 0
    );
  };

  if (!state.drawing) return;
  //set the line
  handleMouseMove(event, state, true);
  const { shape, pointIndex } = getShapeFromPoint(
    state.shapes,
    state.line.x2,
    state.line.y2
  );

  //add the new point to the current shape
  if (
    //check if the new point is diffrent from the one from mouse down (to prevent duplicated points)
    (state.current.shape.points[state.current.pointIndex].x !== state.line.x2 ||
      state.current.shape.points[state.current.pointIndex].y !==
        state.line.y2) &&
    //check if the new point either doesnt belong to a shape or it belongs the same shape as the mouseDown point
    (!shape ||
      (shape === state.current.shape &&
        //shape has to have more than 3 points (bah nghl9oh)
        shape.points.length >= 3 &&
        //check if the new point is the last or first of shape
        (pointIndex === 0 ||
          pointIndex === state.current.shape.points.length - 1))) &&
    //check if the new point is not in some shape sagment
    !checkIfPointInShapeSegment(
      { x: state.line.x2, y: state.line.y2 },
      state.shapes
    ) &&
    !checkOverlapingLines(state.current.shape, state.current.pointIndex, {
      x: state.line.x2,
      y: state.line.y2,
    })
  ) {
    //add to end of shape
    if (state.current.pointIndex === state.current.shape.points.length - 1)
      state.current.shape.points.push({ x: state.line.x2, y: state.line.y2 });
    // add to the beginning of shape
    else
      state.current.shape.points.unshift({
        x: state.line.x2,
        y: state.line.y2,
      });
    if (shape) state.current.shape.polygone = true;
  }
  //else dont add the point
  else state.setLine({});

  //check if the shape has only one point (user only draw one point) remove it
  if (state.current.shape.points.length === 1) state.shapes.pop();
  //stop drawing
  state.setDrawing(false);
};
