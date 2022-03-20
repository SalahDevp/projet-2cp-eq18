export default function Shape(firstPoint) {
  this.points = [firstPoint];
  this.polygone = false;

  this.draw = (context) => {
    context.beginPath();
    context.strokeStyle = "#000000";
    context.moveTo(this.points[0].x, this.points[0].y);
    for (let i = 1; i < this.points.length; i++)
      context.lineTo(this.points[i].x, this.points[i].y);
    context.stroke();
  };
}
