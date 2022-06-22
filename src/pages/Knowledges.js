import React from 'react';
import Experience from '../components/knowledges/Experience';
import Hobbies from '../components/knowledges/Hobbies';
import Languages from '../components/knowledges/Languages';
import OtherSkills from '../components/knowledges/OtherSkills';
import Navigation from '../components/Navigation';

const Knowledges = () => {
  return (
    <div className='knowledges'>
      <Navigation></Navigation>
      <div className="knowledgesContent">
        <Languages></Languages>
        <Experience></Experience>
        <OtherSkills></OtherSkills>
        <Hobbies></Hobbies>
      </div>
    </div>
  );
};

export default Knowledges;
