import React, { useState, useRef, useEffect } from 'react';
import {  scroller } from 'react-scroll';
import { Box,  Fab, useTheme } from '@mui/material';
 
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
export interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface ScrollSectionProps {
  sections: Section[];
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ sections }) => {
    const {palette} = useTheme()
  const [activeSection, setActiveSection] = useState(0);
  const isScrolling = useRef(false);

  const handleScroll = (e: React.WheelEvent) => {
    if (isScrolling.current) return;

    isScrolling.current = true;

    if (e.deltaY > 0 && activeSection < sections.length - 1) {
      setActiveSection((prev) => prev + 1);
      scroller.scrollTo(sections[activeSection + 1].id, {
        duration: 500,
        smooth: true,
      });
    } else if (e.deltaY < 0 && activeSection > 0) {
      setActiveSection((prev) => prev - 1);
      scroller.scrollTo(sections[activeSection - 1].id, {
        duration: 500,
        smooth: true,
      });
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 600);
  };
    useEffect(() => {
      scroller.scrollTo('section1',{ 
        duration: 500,
        smooth: true,})
    }, [])
  
  console.log(activeSection)
  return (
     <Box onWheel={handleScroll}>
    
     {
      activeSection!= 0 ?<>
       <Fab 
      variant="extended" 
      size="small" 
      // color="g"

      sx={{
        position: 'fixed', 
        bottom: 20,  
        right: 20,
        color:palette.text.secondary
      }}
      onClick={()=>{scroller.scrollTo('section1', {
        duration: 500,
        smooth: true,
      });
      setActiveSection(0)
    }}
    >
      <ExpandLessIcon sx={{color:palette.text.primary}}/> 
     </Fab>
      </>:<></>
      }


      {sections.map((section) => (
        <Box
          key={section.id}
          id={section.id}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            overflowY: 'auto', // Enable vertical scroll
            // width: 'fit-content',
            borderBottom: '1px solid #ddd',
            backgroundColor: palette.background.default,
          }}
        >
          {section.content}
        </Box>
      ))}
    
    </Box>
   );
};

export default ScrollSection;
