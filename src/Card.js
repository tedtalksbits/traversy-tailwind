import React from 'react';


function Card({ image }) {
   const tags = image.tags.split(',');
   return (
      <div className="card max-w-sm rounded overflow-hidden shadow-lg">
         <img src={image.webformatURL} alt="" className="w-full"/>
         <div className="px-6 py-4">
            <div className="font-bold text-xl text-purple-500 mb-2">
               Photo by {image.user}
            </div>
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
         </div>
         <div className="px-6 py-4">
            {tags.map((tag, index)=> (
               <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 text-sm mr-2">
                  #{tag}
               </span>
            ))}
         </div>
      </div>
   )
}

export default Card;
