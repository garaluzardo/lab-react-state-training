import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import DiscoButton from "./components/DiscoButton";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <hr />
      <Counter />
      <hr />
      <DiscoButton />
    </div>
  );
}

export default App;
