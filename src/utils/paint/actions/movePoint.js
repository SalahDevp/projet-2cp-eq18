import { UNIT } from "pages/Paint";

import { getGridPos, getMousePos, getShapeFromPoint } from "utils/paint/basics";

export const handleMouseDown = (event, state) => {
  const { x: mouseX, y: mouseY } = getMousePos(state.canvasRef, event);
  const { x, y } = getGridPos(mouseX, mouseY, UNIT);
  const { shape, pointIndex } = getShapeFromPoint(state.shapes, x, y);
  if (shape) {
    state.setDrawing(true);
    state.setCurrent({ shape, pointIndex, x, y });
  }
  if (
    shape?.polygone &&
    (state.current.pointIndex === 0 ||
      state.current.pointIndex === state.current.shape.points.length - 1)
  ) {
    state.setCurrent({
      shape,
      pointIndex: state.current.shape.points.length - 1,
      x,
      y,
      movetwopoints: true,
    });
  }
};
export const handleMouseMove = (event, state, lastPoint) => {
  if (!state.drawing) return;
  const { x, y } = getMousePos(state.canvasRef, event);
  state.current.shape.points[state.current.pointIndex] = { x, y };
  if (state.current.movetwopoints) {
    state.current.shape.points[0] = { x, y };
  }

  state.setLine({ x, y });
};
export const handleMouseUp = (event, state) => {
  const getLineEq = (point1, point2) => {
    //this function calculate a line equation
    let m = (point2.y - point1.y) / (point2.x - point1.x); // m almail ta3 lmoosta9iim
    let b =
      m !== Infinity || m !== -Infinity ? point2.y - m * point2.x : point1.x; // b howa noo9tat ta9atao3 lmoosta9im m3a mi7war ltaratib (y = ax+b)
    return { m, b };
  };
  const pointBelongsToLine = (lineEq, point) => {
    //this function checks if a point is a part of a line given
    if (lineEq.m !== Infinity || lineEq.m !== -Infinity)
      return point.y === lineEq.m * point.x + lineEq.b;
    else return point.x === lineEq.b;
  };
  // linelength ta7ssab ettol ta3 l9it3a
  const lineLength = (p1, p2) =>
    Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
  if (!state.drawing) return;
  const { x: mouseX, y: mouseY } = getMousePos(state.canvasRef, event);
  const { x, y } = getGridPos(mouseX, mouseY, UNIT);
  const { shape, pointIndex } = getShapeFromPoint(state.shapes, x, y);
  state.current.shape.points[state.current.pointIndex] = { x, y };
  let lineEq;
  if (shape) {
    if (
      !shape.polygone &&
      shape === state.current.shape &&
      ((state.current.pointIndex === 0 &&
        pointIndex === shape.points.length - 1) ||
        (state.current.pointIndex === shape.points.length - 1 &&
          pointIndex === 0))
    ) {
      shape.polygone = true;
    } else {
      // had l if testi ki deplaci point foo9 point yantami lshape t3awed trdoo win kan
      state.current.shape.points[state.current.pointIndex].x = state.current.x;
      state.current.shape.points[state.current.pointIndex].y = state.current.y;
      if (state.current.movetwopoints) {
        state.current.shape.points[0].x =
          state.current.shape.points[state.current.pointIndex].x;
        state.current.shape.points[0].y =
          state.current.shape.points[state.current.pointIndex].y;
      }
      return state.setDrawing(false);
    }
  }

  /*-----------------------------------------------------------------------------------------*/
  /* bon hna ybdaw les test (les cas) ta3 deplacement ta3 les point*/
  /*1111111111111111111111111111111111111111111111111111111111111*/
  /* l if lwla testi ida lpoint li ddeplassa yantamilk ll line (had line ttkwn ml point li 9bloo ou li b3doo) nsupprimooh*/
  if (
    state.current.shape.points[state.current.pointIndex - 1] &&
    state.current.shape.points[state.current.pointIndex + 1]
  ) {
    lineEq = getLineEq(
      state.current.shape.points[state.current.pointIndex - 1],
      state.current.shape.points[state.current.pointIndex + 1]
    );

    if (
      pointBelongsToLine(
        lineEq,
        state.current.shape.points[state.current.pointIndex]
      )
    ) {
      // f had l if n7ssboo tool ta3 line ml x-1 ll x+1 ida kant toosawi line ml (x-->x-1) + (x-->x+1)
      // ida ma kantch mou7a99a9a n3awdoonrdoo lpoint win kan (fl else)
      if (
        !(
          lineLength(
            state.current.shape.points[state.current.pointIndex],
            state.current.shape.points[state.current.pointIndex - 1]
          ) +
            lineLength(
              state.current.shape.points[state.current.pointIndex],
              state.current.shape.points[state.current.pointIndex + 1]
            ) ===
          lineLength(
            state.current.shape.points[state.current.pointIndex + 1],
            state.current.shape.points[state.current.pointIndex - 1]
          )
        )
      ) {
        state.current.shape.points[state.current.pointIndex].x =
          state.current.x;
        state.current.shape.points[state.current.pointIndex].y =
          state.current.y;
      }
    }
  }
  /*222222222222222222222222222222222222222222222222222222222222222222222222222222222*/
  // had l if ntetsoo biha ida kan lpoint wzoog point li moorah mnfss line nsuprimooh
  if (
    state.current.shape.points[state.current.pointIndex + 1] &&
    state.current.shape.points[state.current.pointIndex + 2]
  ) {
    lineEq = getLineEq(
      state.current.shape.points[state.current.pointIndex + 1],
      state.current.shape.points[state.current.pointIndex + 2]
    );

    if (
      pointBelongsToLine(
        lineEq,
        state.current.shape.points[state.current.pointIndex]
      )
    ) {
      //f had l if n7ssboo tool ta3 line ml x-1 ll x+1 ida kant toosawi line ml (x-->x+1) + (x-->x+2)
      // ida ma kantch mou7a99a9a n3awdoonrdoo lpoint win kan (fl else)
      if (
        !(
          lineLength(
            state.current.shape.points[state.current.pointIndex + 1],
            state.current.shape.points[state.current.pointIndex + 2]
          ) +
            lineLength(
              state.current.shape.points[state.current.pointIndex],
              state.current.shape.points[state.current.pointIndex + 1]
            ) ===
          lineLength(
            state.current.shape.points[state.current.pointIndex],
            state.current.shape.points[state.current.pointIndex + 2]
          )
        )
      ) {
        state.current.shape.points[state.current.pointIndex].x =
          state.current.x;
        state.current.shape.points[state.current.pointIndex].y =
          state.current.y;
      }
    }
  }
  /*3333333333333333333333333333333333333333333333333333333333333333*/
  // f had l if ntestoo ida kan lpoint wzood li 9bloo mnfss line nsuprimiw jdoo
  if (
    state.current.shape.points[state.current.pointIndex - 1] &&
    state.current.shape.points[state.current.pointIndex - 2]
  ) {
    lineEq = getLineEq(
      state.current.shape.points[state.current.pointIndex - 1],
      state.current.shape.points[state.current.pointIndex - 2]
    );
    if (
      pointBelongsToLine(
        lineEq,
        state.current.shape.points[state.current.pointIndex]
      )
    ) {
      //f had l if n7ssboo tool ta3 line ml x ll x-2 ida kant toosawi line ml (x-->x-1) + (x-1-->x-2)
      // ida ma kantch mou7a99a9a n3awdoonrdoo lpoint win kan (fl else)
      if (
        !(
          lineLength(
            state.current.shape.points[state.current.pointIndex],
            state.current.shape.points[state.current.pointIndex - 1]
          ) +
            lineLength(
              state.current.shape.points[state.current.pointIndex - 1],
              state.current.shape.points[state.current.pointIndex - 2]
            ) ===
          lineLength(
            state.current.shape.points[state.current.pointIndex],
            state.current.shape.points[state.current.pointIndex - 2]
          )
        )
      ) {
        state.current.shape.points[state.current.pointIndex].x =
          state.current.x;
        state.current.shape.points[state.current.pointIndex].y =
          state.current.y;
      }
    }
  }
  if (state.current.movetwopoints) {
    state.current.shape.points[0].x =
      state.current.shape.points[state.current.pointIndex].x;
    state.current.shape.points[0].y =
      state.current.shape.points[state.current.pointIndex].y;
  }
  state.setDrawing(false);
};
