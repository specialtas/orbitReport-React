import React from 'react';
import './styling.css';

function Table({ sat }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {sat.map((satellite, index) => (
          <tr key={index}>
            <td>{satellite.name}</td>
            <td>{satellite.type}</td>
            <td>{satellite.launchDate}</td>
            <td>{satellite.operational ? 'Active' : 'Inactive'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
