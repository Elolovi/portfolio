import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContent = () => {
  return (
    <div className="container mt-4">
      <h1>Welcome to Our Information Website</h1>
      <p>This website provides various articles and information on different topics.</p>
      
      <div className="row">
        <div className="col-md-4">
          <h2>Article 1</h2>
          <p>This is a brief description of the first article. It covers important aspects of the topic.</p>
        </div>
        <div className="col-md-4">
          <h2>Article 2</h2>
          <p>This is a brief description of the second article. It provides insights and details.</p>
        </div>
        <div className="col-md-4">
          <h2>Article 3</h2>
          <p>This is a brief description of the third article. It highlights key points and information.</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;