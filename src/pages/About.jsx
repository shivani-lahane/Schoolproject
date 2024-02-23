import React from 'react'

const About = () => {
  return (
    <div>
      <div className=' m-auto'>
        <img src='./images/about-bg.jpg ' alt='' />
      </div>


      < div className="   flex justify-evenly  text-center ">
        <div className=' w-[1200px] h-[300]'>
          <h1 className="text-3xl font-bold text-primary ">
            MISSION

          </h1>
          <p className="">
            We seek to make our children confident and creative builders of their future.
            Our focus is on the child as a whole entity. We work towards an integrated curriculum that reaches across disciplines and age levels. The students will be encouraged to meet academics challenges with openness, enthusiasm and willingness to solve problems. We strive to inspire our students to achieve the highest standards of intellectual and personal development through a satisfactory and stimulating and comprehensive programme. We aim for an atmosphere of
            cooperation and endeavour to create compassionate, responsible
            and innovative global citizens, committed to the development of India and the world.
          </p>
        </div>
        <div className=' '>
          <img className=' ' src="./images/abu.webp" alt="" />
        </div>

        <div className=' w-[1200px] h-[300]'>

          <h2 className="text-3xl font-bold text-primary ">
            VISSION</h2>
          <p> To prepare dynamic and caring citizens of tomorrow to meet the challenges a global societywhile retaining their traditional values
            develop our school into vibrant  an exemplary educational institution where students are nurtured encouraged and motivated to achieve their ultimate potential by exploring limitless possibilities with utmost confidence dedication and

          </p>
        </div>
        
      </div>
    </div>



  )
}

export default About