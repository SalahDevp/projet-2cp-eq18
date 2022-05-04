import Nav from "components/Nav";
import { useNavigate } from "react-router-dom";
import Box from "components/menu-mode/Box";
import courImg from "assets/cour/custom-course.png";

const MenuCour = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Nav title="Cour" pathAvant="/menu" />
      <div
        className=" absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2 
        h-96 min-w-fit flex items-center justify-between "
      >
        <div className="m-4">
          <Box
            image={courImg}
            title="Centrale"
            handleClick={() => navigate("/cour-centrale")}
          />
        </div>
        <div className="m-4">
          <Box
            image={courImg}
            title="Axiale"
            handleClick={() => navigate("/cour-axiale")}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuCour;
