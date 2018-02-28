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
    return (
      <div className='App'>
        <h1>Hello world</h1>
      </div>
    );
  }
}

const AppWithData = graphql(AppQuery)(App);

export default AppWithData;
