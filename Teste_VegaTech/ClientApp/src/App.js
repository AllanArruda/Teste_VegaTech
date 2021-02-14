import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Material } from './components/Material';
import { Supplier } from './components/Supplier';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/supplier' component={Supplier} />
        <Route path='/material' component={Material} />
      </Layout>
    );
  }
}
