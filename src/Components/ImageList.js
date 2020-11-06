import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import NoImages from './NoImages';
import Image from './Image';

// Image list class that displays the rendered Image component for each image that was fetched. Stores a history of the searched inputs and displays the NoImages component if no images match the fetched data
class ImageList extends Component {
  componentDidMount() {
    this.props.performSearch(this.props.match.params.query);
  }

  componentDidUpdate() {
    const usedSearch = this.props.query;
    const newSearch = this.props.match.params.query;

    if (usedSearch !== newSearch) {
      this.props.performSearch(this.props.match.params.query);
    } else if (this.props.loading) {
      this.props.loadingImages(false);
    }
  }

  render() {
    let title;
    let img = "";
    const photos = this.props.photos;
    if (this.props.loading) {
      title = "Loading...";
    } else if (photos.length) {
      title = `${this.props.query}`;
      img = photos.map((photo) => {
        return (
          <Image
            key={photo.id}
            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            title={photo.title}
          />
        );
      });
    } else {
      img = <NoImages />;
    }

    return (
      <div className="photo-container">
        <h2>{title}</h2>
        <ul>{img}</ul>
      </div>
    );
  }
}

export default withRouter(ImageList);