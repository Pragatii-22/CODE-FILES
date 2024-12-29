// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const GridComponent = () => {
//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">Responsive Grid Layout</h1>
//       <div className="row">
//         <div className="col-md-4 col-sm-6 col-12">
//           <div className="p-3 border bg-light text-center">Column 1</div>
//         </div>
//         <div className="col-md-4 col-sm-6 col-12">
//           <div className="p-3 border bg-light text-center">Column 2</div>
//         </div>
//         <div className="col-md-4 col-sm-6 col-12">
//           <div className="p-3 border bg-light text-center">Column 3</div>
//         </div>
//       </div>
//       <div className="row mt-3">
//         <div className="col-md-6 col-sm-12">
//           <div className="p-3 border bg-light text-center">Column 4</div>
//         </div>
//         <div className="col-md-6 col-sm-12">
//           <div className="p-3 border bg-light text-center">Column 5</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GridComponent;

import React from "react";
import "bulma/css/bulma.min.css";

const GridComponent = () => {
  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <h2 className="title is-3 has-text-centered">Responsive Grid Layout</h2>
       <div className="columns is-multiline">
        <div className="column is-one-fifth has-text-centered box">Column 1</div>
        <div className="column is-one-fifth has-text-centered box">Column 2</div>
        <div className="column is-one-fifth has-text-centered box">Column 3</div>
        <div className="column is-one-fifth has-text-centered box">Column 4</div>
         <div className="column is-one-fifth has-text-centered box">Column 5</div>
      </div> 
     </div>
  );
};

export default GridComponent;

