import React from 'react';
  import ScrollSmooth from './layout/ScrollSmooth';
import { Html,aspnet,
  redis,rabbitmq,grpc,docker,kubernetes}from '../assets/index'
  

 
const Contact: React.FC = () => {
  const style :React.CSSProperties={
    width:'fit-content',
   };
    const sections = [
        {
          id: 'section1',
          title: 'Languages',
          content:  <div style={style}>
          <img src={Html} alt="" style={style}/>
        </div>
        },
        {
          id: 'section2',
          title: 'Frontend',
          content: <div style={style}>
            <img src={docker} alt="" style={style}/>
          </div>,
        },
        {
          id: 'section3',
          title: 'Backend',
          content: <div style={style}>
          <img src={kubernetes} alt="" style={style}/>
        </div>,
        },
        {
          id: 'section4',
          title: 'DevOps',
          content: <div style={style}>
          <img src={rabbitmq} alt="" style={style}/>
        </div>,
        },
        
        {
          id: 'section5',
          title: 'Frontend',
          content:  <div style={style}>
          <img src={redis} alt="" style={style}/>
        </div>,
        },
        {
          id: 'section6',
          title: 'Backend',
          content:  <div style={style}>
          <img src={grpc} alt="" style={style}/>
        </div>,
        },
        {
          id: 'section7',
          title: 'DevOps',
          content:  <div style={style}>
          <img src={aspnet} alt="" style={style}/>
        </div>,
        },
      ];

  return (
     <>
        <ScrollSmooth sections={sections} />
     </>
  );
};

export default Contact;
