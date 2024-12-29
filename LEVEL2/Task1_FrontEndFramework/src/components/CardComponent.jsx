import React from 'react';
import 'bulma/css/bulma.min.css';
import exampleImage from '../assets/image.jpeg';

const CardComponent = () => {
  return (
    <div className="card" style={{ maxWidth: '400px', margin: '20px auto' }}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={exampleImage} alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">Responsive Card</p>
            <p className="subtitle is-6">Using Bulma Framework</p>
          </div>
        </div>
        <div className="content">
          This is a responsive card component created with Bulma. It adjusts seamlessly across all screen sizes.
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
