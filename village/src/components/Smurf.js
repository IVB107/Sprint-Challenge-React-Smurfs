import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SmurfContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 20px;
  width: 300px;
  border: 2px solid crimson;
  background-color: lightblue;
  padding: 0 20px 20px;
`;

const Smurf = props => {
  return (
    <SmurfContainer>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div>
        <Link to="/smurf-form">
          <button onClick={(e) => props.edit(e, props.id)}>Edit</button>
        </Link>
        <button onClick={(e) => props.delete(e, props.id)}>Delete</button>
      </div>
    </SmurfContainer>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

