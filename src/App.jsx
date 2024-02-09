import { useState } from "react";
import Login from "./pages/auth/Login";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";

function App() {
  const [data, setData] = useState(999);
  const [title, setTitle] = useState("Login");

  const [isVisible, setVisible] = useState(false);

  const handleClick = () => {
    setData((d) => d + 1);
    setTitle((d) => d + "e");
  };
  return (
    <>
      <div className=" h-screen flex justify-center items-center">
        My value is {data}.{/* <Login /> */}
        <Button
          title={title}
          onClick={() => {
            setVisible(true);
          }}
        />
        <Modal isVisible={isVisible} onModalClick={() => setVisible(false)}>
          <Login></Login>
        </Modal>
      </div>
    </>
  );
}

export default App;
