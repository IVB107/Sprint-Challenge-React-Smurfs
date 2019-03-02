import React, { Component } from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

class Smurfs extends Component {
  render() {
    return (
      <ListContainer>
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                edit={this.props.edit}
                delete={this.props.delete}
              />
            );
          })}
        </ul>
      </ListContainer>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
