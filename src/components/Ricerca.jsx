import { useState } from "react";
import { Button, Form } from "react-bootstrap";

import CittaDaSelezionare from "./CittaDaSelezionare";
const Ricerca = () => {
  const [elencoCitta, setElencoCitta] = useState(null);

  const fetchCoord = async (citta) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${citta}&limit=10&appid=e085a7d1659e09c5228310aae9216ab5`
      );
      if (response.ok) {
        const arrayCitta = await response.json();
        setElencoCitta(arrayCitta);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const heandlerForm = (event) => {
    event.preventDefault();
    fetchCoord(event.target[0].value);
  };

  return (
    <div className="d-flex flex-column flex-grow-1" id="search">
      <h2>Search a city for know the weather</h2>
      <Form onSubmit={heandlerForm}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Write here..." />
        </Form.Group>
        <Button type="submit" className="btn btn-success " id="btn1">
          Search
        </Button>
      </Form>
      {elencoCitta && <CittaDaSelezionare elenco={elencoCitta}></CittaDaSelezionare>}
    </div>
  );
};
export default Ricerca;
