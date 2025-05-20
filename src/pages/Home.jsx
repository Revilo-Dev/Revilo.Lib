import React from 'react';
import HeaderCard from '../components/HeaderCard';
import InfoCard from '../components/InfoCard';

function Home() {

    return (
      <>
      <div className="body flex flex-col w-full">
        <div className="mt-16 w-full">
          <HeaderCard/>
        </div>
        <br></br>
        <div className="content w-14/15 A-SlideUp">

        <InfoCard
          title={"About"}
          subtitle={"About Revilo.lib"}
          description={"Revilo.Lib Was created to speed up development by creating a starting framework of organized easy to use features that could be reused for a wide variety of projects. "}
        />

        <InfoCard
        title={"Features"}
        subtitle={"Revilo.Lib Features"}
        row1={<p><b>Components:</b> Many built in Easy to use, customizable, Multipurpose Components</p>}
        row2={<p><b>Themes/Theme Picker:</b> 29 Themes with an Included Theme Picker</p>}
        row3={<p><b>Animations:</b> Many Included Animations for hover, focus and more. all Easy to use and edit</p>}
        />
  
        <InfoCard
        title={"Plugins"}
        subtitle={"All availible Plugins"}
        row1={<p>React <b>:</b> Tailwind <b>:</b> DaisyUI <b>:</b> Lucide</p>}
        />
      </div>
      </div>
      </>
    )
  }

export default Home;