export const getLineEq = (point1, point2) => {
  //this function calculate a line equation
  let m = (point2.y - point1.y) / (point2.x - point1.x); // m almail ta3 lmoosta9iim
  let b = m !== Infinity ? point2.y - m * point2.x : point1.x; // b howa noo9tat ta9atao3 lmoosta9im m3a mi7war ltaratib (y = ax+b)
  return { m, b };
};
export const pointBelongsToLine = (lineEq, point) => {
  //this function checks if a point is a part of a line given
  if (lineEq.m !== Infinity) return point.y === lineEq.m * point.x + lineEq.b;
  else return point.x === lineEq.b;
};
// segmentlength ta7ssab ettol ta3 l9it3a
export const segmentLength = (p1, p2) =>
  Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
