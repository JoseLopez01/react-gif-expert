import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Puch']);

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
