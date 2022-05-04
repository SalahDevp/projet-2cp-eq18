const CustomCoursePage = ({ path }) => {
  return (
    <iframe
      scrolling="no"
      title="custom-cour"
      src={"file:/" + path}
      className="bg-white w-full h-full flex-grow overflow-hidden"
    ></iframe>
  );
};

export default CustomCoursePage;
