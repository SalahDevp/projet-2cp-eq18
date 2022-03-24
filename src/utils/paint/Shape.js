export default function Shape(firstPoint) {
  this.points = [firstPoint];
  this.polygone = false;

  this.draw = (context) => {
    //draw lines
    context.beginPath();
    context.strokeStyle = "#000000";
    context.moveTo(this.points[0].x, this.points[0].y);
    for (let i = 1; i < this.points.length; i++)
      context.lineTo(this.points[i].x, this.points[i].y);
    context.stroke();
    //draw points
    context.strokeStyle = "#000000";
    for (let i = 0; i < this.points.length; i++) {
      context.beginPath();
      context.arc(this.points[i].x, this.points[i].y, 2, 0, Math.PI * 2);
      context.fill();
    }
  };
}
