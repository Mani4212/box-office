import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({childern}) => {
  return (
    <div>
      <Title title="Box-office" subtitle="Are you looking for a movie"/>
      <Navs/>
      {childern}
    </div>
  );
};

export default MainPageLayout;
