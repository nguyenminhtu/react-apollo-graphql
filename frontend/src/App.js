import React, { Component } from 'react';
import gpl from 'graphql-tag';
import { graphql } from 'react-apollo';

const AppQuery = gpl`
  query {
    animals {
      name
    }
  }
`;

class App extends Component {
  render() {
    if (this.props.data.loading) {
      return <p>Loading...</p>;
    }
    return (
      <div className='App'>
        {this.props.data.animals.map((animal, index) => {
          return (
            <p key={index}>
              {animal.name}
            </p>
          );
        })}
      </div>
    );
  }
}

const AppWithData = graphql(AppQuery)(App);

export default AppWithData;
