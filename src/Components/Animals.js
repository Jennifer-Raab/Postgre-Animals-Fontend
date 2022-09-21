import { Link } from "react-router-dom";

export default function Animals({ animals }) {
  return (
    <div className="animal-list">
      {animals.length &&
        animals.map((animal) => {
          console.log(animal);
          return (
            <div key={animal.sys.id} className="animal-card">
              <Link to={`/animal/${animal.sys.id}`}>
                <img
                  className="animal-picture"
                  src={animal.fields.bild.fields.file.url}
                  alt={animal.fields.bild.fields.description}
                />
                <p>{animal.fields.tierart}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
