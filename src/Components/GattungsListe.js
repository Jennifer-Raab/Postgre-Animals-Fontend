import { useParams, Link } from "react-router-dom";

export default function Gattungslistes({ animals }) {
  const { suchwort } = useParams();

  const result = animals.filter((animal) => animal.fields.gattung === suchwort);

  console.log("result", result);
  return (
    <div className="animal-list">
      {result.length &&
        result.map((animal) => {
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
