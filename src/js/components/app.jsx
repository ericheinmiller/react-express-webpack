import React from 'react';
import Context, { MainStore } from '../context/mainContext';

export default () => (
  <MainStore>
    <div>
      <Context.Consumer>
        { context => <h1>{ context.greeting }</h1> }
      </Context.Consumer>
    </div>
  </MainStore>
);
