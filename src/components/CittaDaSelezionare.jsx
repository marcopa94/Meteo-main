import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const CittaDaSelezionare = ({ elenco }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOnClick = (lat, lon, nome) => {
    const coord = String(lat) + " " + String(lon) + " " + String(nome);

    dispatch({
      type: "CITTA_RICHIESTA",

      payload: coord,
    });
    navigate(`/dettagli-meteo`);
    ///${lat}/${lon} da usare con use params
  };
  return (
    <>
      <div style={{ width: "80%", marginInline: "auto" }}>
        <h2>Choose you're city</h2>
        <ListGroup>
          {elenco.map((elem, i) => {
            return (
              <ListGroupItem
                key={i}
                className="menu-citta"
                onClick={() => {
                  handleOnClick(elem.lat, elem.lon, elem.name);
                }}
              >
                <div className="d-flex justify-content-between">
                  <p>{elem.name}</p>
                  <p>
                    {elem.country}, {elem.state}
                  </p>
                </div>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    </>
  );
};
export default CittaDaSelezionare;
