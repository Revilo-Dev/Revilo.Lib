import React from 'react';
import HeaderCard from '../components/HeaderCard';
import InfoCard from '../components/InfoCard';

function Links() {
    return (
      <>
        <div className="body flex flex-col w-full h-screen">
          <div className="mt-16 w-full">
            <HeaderCard/>
          </div>
          <br></br>
          <div className="content w-14/15">

          <InfoCard
            title={"title"}
            img={"src/assets/revilo.lib.png"}
            imgAlt={"alt"}
          />


    
        </div>
        </div>
      </>
    );
  }

export default Links;