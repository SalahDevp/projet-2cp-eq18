import { getMousePos } from "../basics";

export const handleClick = (event, state) => {
  const clickPoint = getMousePos(state.canvasRef, event);
  if (clickPoint.y % 20 === 0) clickPoint.y--; //to prevent the click point to be on the same line with one of the shape points wich causes a problem
  let shape;
  for (shape of state.shapes) {
    let intersectionCount = 0;
    if (!shape.polygone) continue;
    for (let i = 0; i < shape.points.length - 1; i++) {
      if (checkIntersection(clickPoint, shape.points[i], shape.points[i + 1]))
        intersectionCount++;
    }
    //if num of intrs is odd the point is inside the shape
    if (intersectionCount % 2 === 1) {
      shape.color = "#FF0000";
      state.setLine({}); // to cause rerender
      return;
    }
  }
};

/**checks if the horziental line drawn to the right of p intersects with the segment q1q2
 **/
const checkIntersection = (p, q1, q2) =>
  //cond1: y of inters y1<=y<=y2 (intersection inside the segment)
  //cond2: x of inters x>= xp (intersection to the right of p)
  p.y <= Math.max(q1.y, q2.y) &&
  p.y >= Math.min(q1.y, q2.y) &&
  ((q2.x - q1.x) * (q2.y - p.y)) / (q1.y - q2.y) + q2.x >= p.x;
