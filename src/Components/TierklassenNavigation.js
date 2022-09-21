import { Link } from "react-router-dom";

export default function TierklassenNavigation({ animals }) {
  const tierklassen = [];
  if (animals.length) {
    for (let i = 0; i < animals.length; i++) {
      if (tierklassen.indexOf(animals[i].fields.tierklasse) === -1) {
        tierklassen.push(animals[i].fields.tierklasse);
      }
    }
    return (
      <nav>
        {tierklassen.length &&
          tierklassen.map((tierklasse) => {
            return (
              <Link to={`/tierklassenliste/${tierklasse}`}>{tierklasse}</Link>
            );
          })}
      </nav>
    );
  }
  console.log(tierklassen);
}
