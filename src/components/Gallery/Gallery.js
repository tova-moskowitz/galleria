import React, { useState, useEffect, useRef } from "react";
import data from "../../data/data.json";
import "./gallery.scss";

function Gallery({ columnOne, columnTwo, columnThree, columnFour }) {
  const columns = [columnOne, columnTwo, columnThree, columnFour];

  return (
    <div className="image-grid">
      {columns.map((column) => {
        return (
          <div className="column">
            {column.map((painting, index) => (
              <div key={index} className="image-item">
                <img src={`/assets/${painting}/thumbnail.jpg`} alt={painting} />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
export default Gallery;

//   return (
//     <ul className="gallery">
//       {data.map((painting, ind) => {
//         return (
//           <li>
//             <img
//               className={`gallery-painting painting-${ind + 1}`}
//               src={painting.images.thumbnail}
//               alt={painting.name}
//             />
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
