export const checkIfPointInShapeSegment = (point, shapes) => {
  for (let shape of shapes) {
    for (let i = 0; i < shape.points.length - 1; i++) {
      if (
        point.y <= Math.max(shape.points[i].y, shape.points[i + 1].y) &&
        point.y >= Math.min(shape.points[i].y, shape.points[i + 1].y) &&
        point.x <= Math.max(shape.points[i].x, shape.points[i + 1].x) &&
        point.x >= Math.min(shape.points[i].x, shape.points[i + 1].x) &&
        (shape.points[i].y - point.y) / (shape.points[i].x - point.x) ===
          (shape.points[i + 1].y - point.y) / (shape.points[i + 1].x - point.x)
      ) {
        return true;
      }
    }
  }
  return false;
};
