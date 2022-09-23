import { useParams, Link } from "react-router-dom";
import { Map, Marker } from "pigeon-maps";
import { stamenTerrain } from "pigeon-maps/providers";

function Animal({ animals }) {
  const { id } = useParams();

  const animal =
    animals.length && animals.find((animal) => parseInt(id) === animal.id);

  return (
    <div className="animal-single">
      {animal ? (
        <>
          <nav>
            <Link to={`/tierklassenliste/${animal.tierklasse}`}>
              {animal.tierklasse}
            </Link>{" "}
            &#10132;{" "}
            <Link to={`/gattung/${animal.gattung}`}>{animal.gattung}</Link>{" "}
            &#10132; {animal.tierart}
          </nav>
          <h1>{animal.tierart}</h1>
          <div>
            <img
              className="animal-picture"
              src={animal.bild}
              alt={animal.tierart}
            />
          </div>
          <div className="animal-flex">
            <table>
              <tbody>
                <tr>
                  <th>Tierklasse:</th>
                  <td>{animal.tierklasse}</td>
                </tr>
                <tr>
                  <th>Gattung:</th>
                  <td>{animal.gattung}</td>
                </tr>
                <tr>
                  <th>Größe:</th>
                  <td>
                    {animal.mingroesse.toString().replace(".", ",")} -{" "}
                    {animal.maxgroesse.toString().replace(".", ",")} Meter
                  </td>
                </tr>
                <tr>
                  <th>Gewicht:</th>
                  <td>
                    {animal.mingewicht.toString().replace(".", ",")} -{" "}
                    {animal.maxgewicht.toString().replace(".", ",")} Kilo
                  </td>
                </tr>
                <tr>
                  <th>Lebenserwartung:</th>
                  <td>{animal.lebenserwartung} Jahre</td>
                </tr>
                <tr>
                  <th>Lebensraum:</th>
                  <td>{JSON.parse(animal.lebensraum).join(", ")}</td>
                </tr>
                <tr>
                  <th>Schutzstatus:</th>
                  <td>{animal.schutzstatus}</td>
                </tr>
              </tbody>
            </table>
            <Map
              provider={stamenTerrain}
              height={227.03}
              defaultCenter={[
                animal.herkunftsland_lat,
                animal.herkunftsland_lng,
              ]}
              defaultZoom={3.7}
            >
              <Marker
                width={50}
                anchor={[animal.herkunftsland_lat, animal.herkunftsland_lng]}
              />
            </Map>
          </div>
          <div className="animal-behaviour">
            {animal.verhalten
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
