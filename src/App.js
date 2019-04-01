import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Form from './components/Form';
import Images from './components/Images';
import Navigate from './components/Navigate';

const API_KEY = "4222a56cebdb550cd8c54acb7385ba6f879c6c4b76b6906a294d2eca8d9f5d62";

class App extends React.Component {
    
  state = {
      results: [],
      counter: 2,
      text: ""
  }
  
  updateState = async(e) => {
      fetch(`http:api.unsplash.com/search/photos/?page=1&per_page=12&query=${this.state.text}&client_id=${API_KEY}`)
		.then(res => res.json())
		.then(data => {
			this.setState({ results: data["results"] } );
            
		})
		.catch(err => {
			console.log('Error happened during fetching!', err);
		});
      
        
  }
  
  onSubmit = async(e) => {
      e.preventDefault();
//      console.log(this.state.results);
      let search = document.getElementById("search");
      this.setState({text: search.value})
      
      
      fetch(`http:api.unsplash.com/search/photos/?page=1&per_page=12&query=${this.state.text}&client_id=${API_KEY}`)
		.then(res => res.json())
		.then(data => {
			this.setState({ results: data["results"] }, this.updateState );
            
		})
		.catch(err => {
			console.log('Error happened during fetching!', err);
		});
      
        
    }
  
  prevPage = async(e) => {
      e.preventDefault();
//      console.log(this.state.results);
      let search = document.getElementById("search");
      this.setState({text: search.value})
      
      
      fetch(`http:api.unsplash.com/search/photos/?page=${this.state.counter}&per_page=12&query=${this.state.text}&client_id=${API_KEY}`)
		.then(res => res.json())
		.then(data => {
			this.setState({ results: data["results"] });
            
		})
		.catch(err => {
			console.log('Error happened during fetching!', err);
		});
      
      if(this.state.counter >= 1){
        this.setState({counter: this.state.counter - 1});
      }
  }
  
  nextPage = async(e) => {
      e.preventDefault();
//      console.log(this.state.results);
      let search = document.getElementById("search");
      this.setState({text: search.value})
      
      
      fetch(`https:api.unsplash.com/search/photos/?page=${this.state.counter}&per_page=12&query=${this.state.text}&client_id=${API_KEY}`)
		.then(res => res.json())
		.then(data => {
			this.setState({ results: data["results"] });
            
		})
		.catch(err => {
			console.log('Error happened during fetching!', err);
		});
      
      
      this.setState({counter: this.state.counter + 1});
      
  }
    
  render() {
      
    return (
        
      <div className="App">
      
          <div className="row header">
              <h1 className="text-center">Stock Images</h1>
          </div>

          <div className="container">
              
              <p className="text-center">See more of my work at <a href="http://www.rahulrodrigues.ca">rahulrodrigues.ca</a></p>

              <Form onSubmit={this.onSubmit} />

              <Images imgs={this.state.results}/>

              <Navigate 
                  nextPage={this.nextPage}
                  prevPage={this.prevPage}
              />

              <p className="text-center">
                  This website is using the Unsplash Api &copy;
              </p>

          </div>
      
      </div>
    );
  }
}

export default App;
