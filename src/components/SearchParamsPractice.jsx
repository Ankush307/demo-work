import React from 'react'
import { useParams } from 'react-router-dom'
import { DATA_LIST } from '../utils/helper';

const SearchParamsPractice = () => {
  const [params, setParams] =useParams();
  const clickHandler = (name) => {
    setParams({name})
  }
  return (
    <div>
      {DATA_LIST.map((obj, index) =>(
        <div key={index}>
          <button onClick={()=>clickHandler}>{obj.tittle}</button>
        </div>
      ))}
    </div>
  )
}

export default SearchParamsPractice