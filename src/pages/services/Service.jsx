import { useNavigate, useParams } from "react-router";
import Button from "../../components/button/Button";

const Service = () => {
  const navigate = useNavigate();
  const path = useParams();
  console.log(path.productId);

  return (
    <>
      <Button
        title="home"
        onClick={() => {
          navigate("/");
        }}
      ></Button>
    </>
  );
};

export default Service;
