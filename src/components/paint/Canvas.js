const Canvas = ({
  canvasRef,
  width,
  height,
  onMouseDown,
  onMouseUp,
  onMouseMove,
  onClick,
}) => {
  return (
    <div className="border-8 border-green-500 inline-block">
      <canvas
        ref={canvasRef}
        height={height}
        width={width}
        className="bg-white"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onClick={onClick}
      ></canvas>
    </div>
  );
};

export default Canvas;
