const CustomCoursePage = ({ path }) => {
  return (
    <iframe
      title="custom-cour"
      src={"file:/" + path}
      className="bg-white w-full h-full flex-grow"
    ></iframe>
  );
};

export default CustomCoursePage;
