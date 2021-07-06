import React, { Component } from 'react';

import Table from '../common/Table';

class ReservationsTable extends Component {
  
  columns = [
    { path: 'reservations', label: 'Reservations' }
  ]

  render() { 

    const { reservations, onSort, sortColumn } = this.props;

    return ( 
      <Table 
        columns={ this.columns }
        data={ reservations }
        sortColumn={ sortColumn }
        onSort={ onSort }
      />
     );
  }
}
 
export default ReservationsTable;