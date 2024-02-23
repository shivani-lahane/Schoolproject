import React from "react";
import Slider from "../components/Slider";
import InnerHomeBG from "../components/InnerHomeBG";
import StickyIcon from "../components/StickyIcon";
import WhatsAppIcon from "../components/WhatsAppIcon";
import Contactus from "./ContactUs";

const Home = () => {
  return (
    <div >
      <Slider />

      <div className="py-3 px-3  w-11/12 sm:p-36  sm:flex justify-around ">


        <div className="">
          <img className="w-[500px] sm:w-[300px]" src=".\images\home-welcome-1.webp" alt="" />
          
        </div>
        <div className="  w-[500px] sm:w-[500px]  flex flex-col justify-center text-center ">
          <h1  className="text-3xl font-bold text-primary ">
            <span className="text-secondary">Welcome to</span><br/>  
            Bhondawe Patil Public School
          </h1>
          <p className="text-center p-4">
            Welcome to the abode of intellect where the purpose of education is
            to equip the child with the most excellent technological
            proficiency; to empower him with the skills in order to realize his
            God gifted potential; to creole the light climate so that the child
            may develop fully as a complete human being at BHONDAWE PATIL PUBLIC
            SCHOOL, one's intellect is I transformed into an illuminated
            reflection of knowledge and broad outlook towards life.
          </p>
        </div>    
        
        <div className="">
          <img className="w-[500px] sm:w-[300px]" src=".\images\home-welcome-2.webp" alt="" />
          </div>

      </div>

      <div className=" justify-center align-middle">
        <h1 className="text-3xl font-bold text-primary text-center  ">School Virtual Tour</h1>
        <div className=" flex justify-center p-10"><iframe width="760" height="315 " src="https://www.youtube.com/embed/cuIFuOVG9eA?si=FfdMdQC15pz3MkNe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>

<StickyIcon />
<WhatsAppIcon/>
      
<InnerHomeBG/>
      
    </div>
  );
};

export default Home;
