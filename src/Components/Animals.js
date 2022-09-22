import { Link } from "react-router-dom";

export default function Animals({ animals }) {
  return (
    <div className="animal-list">
      {animals.length &&
        animals.map((animal) => {
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
