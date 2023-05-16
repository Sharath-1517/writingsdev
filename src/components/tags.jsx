import React from 'react'

const Tags = () => {

const tags = [
    "Javascript",
    "DevOps",
    "Cloud",
    "Terraform",
    "Architecture",
    "Scalability",
    "Explainers"
]

return (
    <div className='tags container'>
        <div className="tags--display">
          <img src="images/grid.png" alt=""/>
          <img src="images/list.png" alt=""/>
        </div>
        <ul className="tags--elements">
          {
            tags.map((tag, index) => {
              return(
                <li className='tags--elements__item' key={index}>{tag}</li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default Tags