import CityItem from "./CityItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CountryList({ countries, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!countries.length)
    return (
      <Message message="Add your first city buy clicking on a city on the map" />
    );

  return (
    <ul className={styles.countryList}>
      {countries.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CountryList;
