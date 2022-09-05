import { useEffect, useState } from "react";
import Table from "./components/Table";
import BarChart from "./components/BarChart";

const App = () => {
  const [charactersDetails, setCharactersDetails] = useState(null);
  const [filterdCharecters, setFilterdCharecters] = useState(null);
  const [dimension, setDimension] = useState("");

  const charactersNames = [
    "Rick Sanchez",
    "Summer Smith",
    "Morty Smith",
    "Beth Smith",
    "Jerry Smith",
  ];

  const fetchDataLocation = async (locationId) => {
    try {
      const url = `https://rickandmortyapi.com/api/location/${locationId}`;
      const res = await fetch(url);
      const dataLocation = await res.json();
      const { residents, dimension } = dataLocation;
      setDimension(dimension);
      let charactersIds = residents.map(
        (resident) => +resident.replace(/\D/g, "")
      );

      fetchCharactersLocation(charactersIds);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCharactersLocation = async (charactersId) => {
    try {
      const url = `https://rickandmortyapi.com/api/character/${charactersId}`;
      const res = await fetch(url);
      const charactersData = await res.json();

      setFilterdCharecters(filterdCharacters(charactersData));

      setCharactersDetails(charactersData);
    } catch (error) {
      console.log(error);
    }
  };

  const filterdCharacters = (charactersData) => {
    return charactersData.filter((el) => charactersNames.includes(el.name));
  };

  useEffect(() => {
    fetchDataLocation(1);
  }, []);

  if (!charactersDetails) return <h2>Loading Characters data....</h2>;
  return (
    <>
      <h2>Rick And Morty App</h2>
      <Table charactersDetails={charactersDetails} dimension={dimension} />
      {filterdCharecters.map((character) => (
        <BarChart
          key={character.id}
          name={character.name}
          poplurity={character.episode.length}
        />
      ))}
    </>
  );
};

export default App;
