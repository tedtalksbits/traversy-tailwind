import React from 'react';
import "./Card.css";

function Card({ image }) {
   const tags = image.tags.split(', ');
   return (
      <div className="card">
         <img src={image.webformatURL} alt="" />
         <h1>Photo by {image.user}</h1>
         <ul>
            <li>
               <strong>Views: </strong>
               {image.views}
            </li>
            <li>
               <strong>Downloads: </strong>
               {image.downloads}
            </li>
            <li>
               <strong>Likes: </strong>
               {image.likes}
            </li>
         </ul>
         <div className="tags">
            {tags.map((tag, index)=> (
               <span key={index} className="tag">
                  #{tag}
               </span>
            ))}
         </div>
      </div>
   )
}

export default Card;
