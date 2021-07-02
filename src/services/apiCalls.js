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
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reservation)
  };

  fetch("http://localhost:3001/api/v1/reservations", requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}

const deleteReservation = (id) => {
  var requestOptions = {
    method: 'DELETE',
    redirect: 'follow',
  };
  
  fetch(`http://localhost:3001/api/v1/reservations/${id}`, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}


export {
  getReservationData,
  updateReservations,
  deleteReservation
}