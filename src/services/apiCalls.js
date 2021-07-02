const getReservationData = () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  return fetch("http://localhost:3001/api/v1/reservations", requestOptions)
  .then(response => response.json())
  .catch(error => console.log('error', error));
}

const updateReservations = (reservation) => {
  var requestOptions = {
    method: 'POST',
    redirect: 'follow',
    body: JSON.stringify(reservation)
  };

  fetch("http://localhost:3001/api/v1/reservations", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }

export {
  getReservationData,
  updateReservations
}