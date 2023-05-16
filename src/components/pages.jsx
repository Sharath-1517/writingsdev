import React from 'react'

const Pages = () => {
    // The scss for this is present inside the _tags.scss file.

  return (
    <div className='container pages'>
        <h4 className="pages__move">Previous</h4>
        <ul className="pages--counts">
            <li className='pages--counts__item'>1</li>
            <li className='pages--counts__item'>2</li>
            <li className='pages--counts__item'>3</li>
            <li className='pages--counts__item'>4</li>
            <li className='pages--counts__item'>5</li>
        </ul>
        <h4 className="pages__move">Next</h4>
    </div>
  )
}

export default Pages