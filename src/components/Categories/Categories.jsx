import React from 'react'
import { categories } from './categories.prop'
import style from './categories.module.css'

function Categories() {
  const[categorilist,setList] = React.useState([])
  React.useEffect(()=>{
    setList(categories)
  },[])
  return (
    <div className={style.Categories}>
        {
          categories.map((el,ind)=>{
            return <a href='#'>{el.title}</a>
          })
        }
    </div>
  )
}

export default Categories