import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
const Home = () => {
  const navigate = useNavigate();

  // const navigateServ = () => {
  //   navigate("/service");
  // };
  return (
    <>
      <div>
        <Link to="/">
          <Button title="Home"></Button>
        </Link>
        {/* <Link to="/service"> */}
        <Button
          title="Service"
          onClick={() => {
            navigate("/service/10");
          }}
        ></Button>
        {/* </Link> */}
        <Link to="/contact">
          <Button title="Contact"></Button>
        </Link>
        <Link to="/product">
          <Button title="Product"></Button>
        </Link>
      </div>
    </>
  );
};

export default Home;