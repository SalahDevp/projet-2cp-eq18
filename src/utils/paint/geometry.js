/**returns true if point belongs to one of the shapes segments */
export const checkIfPointInShapeSegment = (point, shapes) => {
  for (let shape of shapes) {
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
