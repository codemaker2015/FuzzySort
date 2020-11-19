import React from 'react';
import './App.css';
import data from './testdata';
const fuzzysort = require('fuzzysort');

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      keyword: '',
      results: [],
    }
    console.log("data: ", data["steam_games"]);
  }

  search(keyword, category) {  
    return fuzzysort.go(keyword, data[category]);
  }

  render(){
    return (
      <div className="App">
        <input type="text" onChange={(e)=> this.setState({keyword: e.target.value})}
          value={this.state.keyword}
        />
        <button onClick={()=>this.setState({results: this.search(this.state.keyword, "steam_games")})}>Search</button>
        {this.state.results !== null && this.state.results.length > 0 ?
          <h3>Results:</h3> : null
        }
        <ul>
        {this.state.results.map((item, index) =>{
            return(
              <li key={index}>{item.score} : {item.target}</li>
            )
          })
        }
        </ul>
      </div>
    );
  }
}

export default App;
