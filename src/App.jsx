import Button from "./components/button/Button";
import Search from "./components/input/Search";

function App() {
  return (
    <>
      <div className=" w-md ">
        <Button title="Submit" onClick={() => console.log("Clicked")} />
        <Search />
      </div>
    </>
  );
}

export default App;
