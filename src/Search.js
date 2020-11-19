import React, { useState } from 'react';

function Search({ searchText }) {

   const [text, setText] = useState('');
   const onSubmit = (e) => {
      e.preventDefault();

      searchText(text);
   }

   return (
      <div className="seacrh">
         <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={onSubmit} className="w-full max-w-sm">
               <div className="flex ittems-center border-b-2 py-2 border-purple-500">
                  <input 
                     onChange={e => setText(e.target.value)} 
                     className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-ttight focus:outline-none" 
                     type="text" 
                     placeholder="Search Image Term..." 
                  />
                  <button className="flex-shrink-0 bg-purple-700 text-sm border-2 border-purple-500 text-white py-1 px-2 rounded" type="submit">Search</button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Search;
