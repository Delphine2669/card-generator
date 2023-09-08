import "./App.css";
import Form from "./components/Form";
import Carousel from "./components/Carousel";
import Counter from "./components/Counter";
import characterList from "./components/CharacterList";

function App() {
  return (
    <>
      <Form />
      <Carousel characterList={characterList} />
      <Counter />
    </>
  );
}

export default App;
