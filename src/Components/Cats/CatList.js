import React from 'react';
import CatIndex from './CatIndex';

const CatList = (props) => {
  return(
    <div>
      <ul>
      {props.cats.map((cat) => {
        return <li>{cat}</li>
      })}
      </ul>
    </div>
   
  )
}
 
export default CatList;


