import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = []}) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>Gift Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories
          .map((category, i) => 
            (<GifGrid key={category} category={category} />)
          )
        }
      </ol>
    </>
  );
};
