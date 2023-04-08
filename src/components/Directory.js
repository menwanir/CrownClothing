import React from 'react'
import '../styles/directory.style.scss'
import CategoryItem from './CategoryItem';

export default function Directory({categories}) {
  return (
    <div className='directory-container'>
    {categories.map(( category) => (
      
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
  );
  
}
