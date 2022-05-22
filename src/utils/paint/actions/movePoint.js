import { UNIT } from "components/paint/PaintComponent";

import { getGridPos, getMousePos, getShapeFromPoint } from "utils/paint/basics";
import { checkIfPointInSameShapeSegment, checkOverlap } from "../geometry";

const handleFirstClick = (event, state) => {
  //get mouse pos
  const { x: mouseX, y: mouseY } = getMousePos(state.canvasRef, event);
  //get grid pos from mousePos
  const { x, y } = getGridPos(mouseX, mouseY, UNIT);
  //get the shape wich the point belongs to
  const { shape, pointIndex } = getShapeFromPoint(state.shapes, x, y);
  //if point belongs to a shape
  if (shape) {
    //we set drawing to true and save (shape, pointIndex in shape.points array, and point coords)
    state.setDrawing(true);
    state.setCurrent({ shape, pointIndex, x, y });
  }
  //if the point is the first or last of a polygone (we move two points)
  if (
    shape?.polygone &&
    (pointIndex === 0 || pointIndex === shape.points.length - 1)
  ) {
    state.setCurrent({
      shape,
      pointIndex: shape.points.length - 1,
      x,
      y,
      movetwopoints: true,
    });
  }
};
export const handleMouseMove = (event, state) => {
  if (!state.drawing) return;
  const { x, y } = getMousePos(state.canvasRef, event);
  state.current.shape.points[state.current.pointIndex] = { x, y };
  if (state.current.movetwopoints) {
    state.current.shape.points[0] = { x, y };
  }

  state.setLine({ x, y });
};

const handleSecondClick = (event, state) => {
  const { x: mouseX, y: mouseY } = getMousePos(state.canvasRef, event);
  const { x, y } = getGridPos(mouseX, mouseY, UNIT);
  const { shape, pointIndex } = getShapeFromPoint(state.shapes, x, y);
  state.current.shape.points[state.current.pointIndex] = { x, y };
  //if grid pos belongs to a shape
  if (shape) {
    //if the shape is the same as current.shape and we'r moving the last point to the first or vice versa
    //we set polygone to true
    if (
      !shape.polygone &&
      shape === state.current.shape &&
      ((state.current.pointIndex === 0 &&
        pointIndex === shape.points.length - 1) ||
        (state.current.pointIndex === shape.points.length - 1 &&
          pointIndex === 0)) &&
      shape.points.length >= 4
    ) {
      shape.polygone = true;
    } else {
      //else we exit the func (lpoint yg3d ytba3 fl mouse)
      return;
    }
  } else if (
    checkIfPointInSameShapeSegment(state.current.shape, { x, y }) ||
    checkOverlap(state.current.shape, state.current.pointIndex)
  )
    return; //we exit the func

  //if we are moving two points we change the second point coords as well
  if (state.current.movetwopoints) {
    state.current.shape.points[0].x =
      state.current.shape.points[state.current.pointIndex].x;
    state.current.shape.points[0].y =
      state.current.shape.points[state.current.pointIndex].y;
  }
  state.setDrawing(false);
};

export const handleClick = (event, state) => {
  if (!state.drawing) handleFirstClick(event, state);
  else handleSecondClick(event, state);
};
