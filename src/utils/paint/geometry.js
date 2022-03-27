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

export function rahMoghtasib(shape, pointIndex) {
  const getPrvAndNextInd = (pointIndex) => ({
    prvIndex:
      pointIndex === 0
        ? shape.polygone
          ? shape.points.length - 2
          : shape.points.length - 1
        : pointIndex - 1,
    nextIndex:
      pointIndex === shape.points.length - 1
        ? shape.polygone
          ? 1
          : 0
        : pointIndex + 1,
  });
  const marahchMrigl = (shape, pointIndex) => {
    const point = shape.points[pointIndex];
    const index = getPrvAndNextInd(pointIndex);
    const prvPoint = shape.points[index.prvIndex];
    const nextPoint = shape.points[index.nextIndex];
    return (
      (point.y - prvPoint.y) / (point.x - prvPoint.x) ===
        (point.y - nextPoint.y) / (point.x - nextPoint.x) &&
      (point.y - nextPoint.y) * (point.y - prvPoint.y) >= 0 &&
      (point.x - nextPoint.x) * (point.x - prvPoint.x) >= 0
    );
  };
  const index = getPrvAndNextInd(pointIndex);
  return (
    marahchMrigl(shape, index.prvIndex) || marahchMrigl(shape, index.nextIndex)
  );
}
