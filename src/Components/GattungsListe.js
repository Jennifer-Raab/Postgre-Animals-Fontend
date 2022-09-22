import { useParams, Link } from "react-router-dom";

export default function Gattungslistes({ animals }) {
  const { suchwort } = useParams();

  const result = animals.filter((animal) => animal.gattung === suchwort);

  return (
    <div className="animal-list">
      {result.length &&
        result.map((animal) => {
          return (
            <div key={animal.id} className="animal-card">
              <Link to={`/animal/${animal.id}`}>
                <img
                  className="animal-picture"
                  src={animal.bild}
                  alt={animal.tierart}
                />
                <p>{animal.tierart}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
