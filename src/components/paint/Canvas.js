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
    <div className="border-4 border-green-400 inline-block h-fit">
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
