import React, { Component } from 'react';
import axios from "axios";
import TopSpot from './topspot';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    }
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (

      <div className='App'>
        <div className="alert alert-dark" role="alert">
        <header className='well'>
          <h1>San Diego Top Spots</h1>
          <h3>A list of the top 30 places to see in San Diego, California.</h3>
        </header>
        </div>

        {
          this.state.topspots.map(topspot => (
            <TopSpot
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location} />
          ))
        }
      </div>
    );
  }
}

export default App;
