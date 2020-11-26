import './App.css';
import Card from './Card';
import React, { useState, useEffect } from 'react';
import Search from './Search';

function App() {


  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
        setImages(data.hits);
        setIsLoading(false);
    })
    .catch(err => console.log(err));
  }, [term]);



  return (
    <div className="app container mx-auto">

        <Search searchText={(text) => setTerm(text)}/>

        {/* if isLoading is false and images array is empty "No Images Found" */}
        {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx-auto text-red-400">No Images Found</h1>}

        {
          isLoading ? // if true ...
          
          <h1 className="text-6xl text-center mx-auto">Loading...</h1> // do if true
          
          : //else
          
          <div className="card-container">
            {images.map(image =>(
              <Card key={image.id} image={image} />
            ))}
          </div> // do if false
        }
    </div>
  );
}

export default App;
