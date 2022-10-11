import { useState } from "react";
import CardList from "./components/CardList";
import SearchForm from "./components/SearchForm";

function App() {
  const [cards, setCards] = useState([]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center bg-red-700">
        <h1 className="text-3xl text-white py-2">Pokemon TCH Search</h1>
      </div>
      <div className="flex flex-col">
        <SearchForm setCards={setCards} />
        <CardList cards={cards} />
      </div>
    </div>
  );
}

export default App;
