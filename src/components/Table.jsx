const Table = ({ charactersDetails, dimension }) => {
  return (
    <div className="container">
      {charactersDetails.map((character) => (
        <table className="blueTable" key={character.id}>
          <tbody>
            <tr>
              <td>Character name</td>
              <td>{character.name}</td>
            </tr>
            <tr>
              <td>Origin name</td>
              <td>{character.origin.name}</td>
            </tr>
            <tr>
              <td>Origin dimension</td>
              <td>{dimension}</td>
            </tr>
            <tr>
              <td>Poplurity</td>
              <td>{character.episode.length}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default Table;
