const weatherState = {
  datiFormCitta: {
    coord: ""
  }
};

const reducerWeather = (state = weatherState, action) => {
  switch (action.type) {
    case "CITTA_RICHIESTA":
      return {
        ...state,
        datiFormCitta: {
          ...state.datiFormCitta,
          coord: action.payload
        }
      };

    default:
      return state;
  }
};
export default reducerWeather;
