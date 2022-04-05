import { UNIT } from "pages/Paint";
import { getShapeFromPoint } from "./basics";

/**returns true if point belongs to a segments */
export const checkIfPointInSameShapeSegment = (shape, point) => {
  for (let i = 0; i < shape.points.length - 1; i++) {
    //check if point is in [points[i], points[i+1]] segment
    if (
      //if point is between points[i] and points[i+1]
      point.y <= Math.max(shape.points[i].y, shape.points[i + 1].y) &&
      point.y >= Math.min(shape.points[i].y, shape.points[i + 1].y) &&
      point.x <= Math.max(shape.points[i].x, shape.points[i + 1].x) &&
      point.x >= Math.min(shape.points[i].x, shape.points[i + 1].x) &&
      //if point is collinear with points[i] and points[i+1]
      (shape.points[i].y - point.y) / (shape.points[i].x - point.x) ===
        (shape.points[i + 1].y - point.y) / (shape.points[i + 1].x - point.x)
    ) {
      return true;
    }
  }

  return false;
};

/** returns true if the angle (p1, p2, p3) is 0 degrees */
export const checkZeroAngle = (p1, p2, p3) =>
  //if the points are collinear
  (p2.y - p1.y) / (p2.x - p1.x) === (p2.y - p3.y) / (p2.x - p3.x) &&
  //if the points are in the same direction
  (p2.y - p3.y) * (p2.y - p1.y) >= 0 &&
  (p2.x - p3.x) * (p2.x - p1.x) >= 0;

/**returns true if one of the two lines (in the left or right of point) overlap with its prev line
 *  (one of the angles is 0) */
export function checkOverlap(shape, pointIndex) {
  const getPrvAndNextIndex = (shape, pointIndex) => ({
    prvIndex:
      pointIndex === 0
        ? shape.polygone
          ? shape.points.length - 2
          : pointIndex
        : pointIndex - 1,
    nextIndex:
      pointIndex === shape.points.length - 1
        ? shape.polygone
          ? 1
          : pointIndex
        : pointIndex + 1,
  });
  //if shape is a line exit the func (lines dont have angles)
  if (shape.points.length < 3) return false;
  //
  const point = shape.points[pointIndex];
  const { prvIndex, nextIndex } = getPrvAndNextIndex(shape, pointIndex);
  const prvPoint = shape.points[prvIndex],
    nextPoint = shape.points[nextIndex];
  const prvPrvPoint =
      shape.points[getPrvAndNextIndex(shape, prvIndex).prvIndex],
    nextNextPoint =
      shape.points[getPrvAndNextIndex(shape, nextIndex).nextIndex];
  //check if one of the 3 angles (point) (prvPoint) (nextPoint)  is 0
  return (
    checkZeroAngle(prvPoint, point, nextPoint) ||
    checkZeroAngle(prvPrvPoint, prvPoint, point) ||
    checkZeroAngle(point, nextPoint, nextNextPoint)
  );
}

/**return the shape(polygone only) the user clicked inside else returns null */
export function clickInsidePolygone(shapes, clickPoint) {
  if (clickPoint.y % UNIT === 0) clickPoint.y--; //to prevent the click point to be on the same line with one of the shape points wich causes a problem

  for (let shape of shapes) {
    let intersectionCount = 0;
    if (!shape.polygone) continue;
    for (let i = 0; i < shape.points.length - 1; i++) {
      if (checkIntersection(clickPoint, shape.points[i], shape.points[i + 1]))
        intersectionCount++;
    }
    //if num of intrs is odd the point is inside the shape
    if (intersectionCount % 2 === 1) {
      return shape;
    }
  }
  return null;
}
export function clickOnShapeSegment(shapes, clickPoint) {
  const OFFSET = 2;
  for (let shape of shapes) {
    for (let i = 0; i < shape.points.length - 1; i++) {
      //check if point is in [points[i], points[i+1]] segment
      if (
        Math.abs(
          segmentLength(shape.points[i], shape.points[i + 1]) -
            (segmentLength(shape.points[i], clickPoint) +
              segmentLength(shape.points[i + 1], clickPoint))
        ) <= OFFSET
      ) {
        return { shape, firstPointInd: i };
      }
    }
  }
  return { shape: null, firstPointInd: -1 };
}

/**return true if all points positions are valid (no other point exit in that pos) */
export function checkPoints(shapes, points) {
  for (let point of points) {
    if (getShapeFromPoint(shapes, point.x, point.y).shape) return false;
  }
  return true;
}

/**checks if the horziental line drawn to the right of p intersects with the segment q1q2
 **/
const checkIntersection = (p, q1, q2) =>
  //cond1: y of inters y1<=y<=y2 (intersection inside the segment)
  //cond2: x of inters x>= xp (intersection to the right of p)
  p.y <= Math.max(q1.y, q2.y) &&
  p.y >= Math.min(q1.y, q2.y) &&
  ((q2.x - q1.x) * (q2.y - p.y)) / (q1.y - q2.y) + q2.x >= p.x;

const segmentLength = (p1, p2) =>
  Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
