import React, {Component} from 'react';
import { Route, Redirect, Switch, HashRouter } from 'react-router-dom';
import SearchForm from './Components/SearchForm';
import RouteError from './Components/RouteError';
import ImageList from './Components/ImageList';
import NavLinks from './Components/NavLinks';
import apiKey from './config';

// main App Class that renders data/components based off user input. Fetches data from flickr API, rendering data according to component data requirements
class App extends Component {
  state = {
    loading: true,
    photos: [],
    query: ''
  }

  loadingImages = (boo = true) => {
    this.setState({loading: boo});
  }

  performSearch = (query) => {
   fetch(
     `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&sort=relevance&safe_search=1&format=json&nojsoncallback=1`
   )
     .then((res) => res.json())
     .then((responseData) =>
       this.setState({
         photos: responseData.photos.photo,
         loading: false,
         query: query
       })
     )
     .catch((err) => {
       console.log("Error fetching and parsing data", err);
     });
  };

  render() {
    return (
      <HashRouter>
        <Route render={() => <SearchForm loadingImages={this.loadingImages} />} />
        <Route render={() => <NavLinks loadingImages={this.loadingImages} />} />
        <Switch>
          <Redirect exact path="/" to="/search/pepper" />
          <Route
            path={"/search/:query"}
            render={() => (
              <ImageList
                performSearch={this.performSearch}
                loadingImages={this.loadingImages}
                loading={this.state.loading}
                photos={this.state.photos}
                title={this.state.query}
                query={this.state.query}
              />
            )}
          />
          <Route component={RouteError} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;