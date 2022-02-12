import React from 'react';

const ProblemList = ({problems}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Difficulty</th>
          <th>Veredict</th>
        </tr>
      </thead>
      {
        problems.map(element =>
          <tbody key={element.id}>
            <tr>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.difficulty}</td>
              <td>{element.veredict}</td>
            </tr>
          </tbody>
        )
      }
    </table>
  )
}

export default ProblemList;
