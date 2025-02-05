import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import DiscoButton from "./components/DiscoButton";



function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <hr />
      <Counter />
      <hr />
      <ClickablePicture />
      <hr />
      <DiscoButton />
    </div>
  );
}

export default App;
