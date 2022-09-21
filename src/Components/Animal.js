import { useParams, Link } from "react-router-dom";
import { Map, Marker } from "pigeon-maps";
import { stamenTerrain } from "pigeon-maps/providers";

function Animal({ animals }) {
  const { id } = useParams();

  console.log("Animals: ", animals);

  const animal =
    animals.length && animals.find((animal) => id === animal.sys.id);

  return (
    <div className="animal-single">
      {animal ? (
        <>
          <nav>
            <Link to={`/tierklassenliste/${animal.fields.tierklasse}`}>
              {animal.fields.tierklasse}
            </Link>{" "}
            &#10132;{" "}
            <Link to={`/gattung/${animal.fields.gattung}`}>
              {animal.fields.gattung}
            </Link>{" "}
            &#10132; {animal.fields.tierart}
          </nav>
          <h1>{animal.fields.tierart}</h1>
          <div>
            <img
              className="animal-picture"
              src={animal.fields.bild.fields.file.url}
              alt={animal.fields.bild.fields.description}
            />
          </div>
          <div className="animal-flex">
            <table>
              <tbody>
                <tr>
                  <th>Tierklasse:</th>
                  <td>{animal.fields.tierklasse}</td>
                </tr>
                <tr>
                  <th>Gattung:</th>
                  <td>{animal.fields.gattung}</td>
                </tr>
                <tr>
                  <th>Größe:</th>
                  <td>
                    {animal.fields.mingroesse.toString().replace(".", ",")} -{" "}
                    {animal.fields.maxgroesse.toString().replace(".", ",")}{" "}
                    Meter
                  </td>
                </tr>
                <tr>
                  <th>Gewicht:</th>
                  <td>
                    {animal.fields.mingewicht.toString().replace(".", ",")} -{" "}
                    {animal.fields.maxgewicht.toString().replace(".", ",")} Kilo
                  </td>
                </tr>
                <tr>
                  <th>Lebenserwartung:</th>
                  <td>{animal.fields.lebenserwartung} Jahre</td>
                </tr>
                <tr>
                  <th>Lebensraum:</th>
                  <td>{animal.fields.lebensraum.join(", ")}</td>
                </tr>
                <tr>
                  <th>Schutzstatus:</th>
                  <td>{animal.fields.schutzstatus}</td>
                </tr>
              </tbody>
            </table>
            <Map
              provider={stamenTerrain}
              height={227.03}
              defaultCenter={[
                animal.fields.herkunftsland.lat,
                animal.fields.herkunftsland.lon,
              ]}
              defaultZoom={3.7}
            >
              <Marker
                width={50}
                anchor={[
                  animal.fields.herkunftsland.lat,
                  animal.fields.herkunftsland.lon,
                ]}
              />
            </Map>
            {console.log(animal.fields.herkunftsland.lon)}
          </div>
          <div className="animal-behaviour">
            {animal.fields.verhalten
              .split("\n")
              .reduce((children, textSegment, index) => {
                return [
                  ...children,
                  index > 0 && <br key={index} />,
                  textSegment,
                ];
              }, [])}
          </div>
        </>
      ) : (
        "not found"
      )}
    </div>
  );
}

export default Animal;
