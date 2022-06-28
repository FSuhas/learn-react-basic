import React from 'react';

const Hobbies = () => {
  return (
    <div className='hobbies'>
      <h3>Intérêts</h3>
      <ul>
        <li className='hobby'>
          <i className='fas fa-running'>
            <span>Couse a pied</span>
          </i>
        </li>
        <li className='hobby'>
          <i className='fas fa-hiking'>
            <span>Randonnees</span>
          </i>
        </li>
        <li className='hobby'>
          <i className='fas fa-seedling'>
            <span>Permaculture</span>
          </i>
        </li>
        <li className='hobby'>
          <i className='fas fa-rocket'>
            <span>Espace</span>
          </i>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
