import React, {Component} from 'react';
import {} from 'react-native';

//relative imports
import Intro from './Intro';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <Intro />;
  }
}

export default Home;
