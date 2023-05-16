import React from 'react';
import Card from './card';
import data from '../../../data';

function Blogs() {
  return (
    <div className='container blogs'>
      {data.cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          imgsrc={card.imgsrc}
          text={card.text}
          day={card.day}
          field={card.field}
        />
      ))}
    </div>
  );
}

export default Blogs;
