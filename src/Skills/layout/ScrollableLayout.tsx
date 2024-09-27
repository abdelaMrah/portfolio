 



import { Box, Typography, useTheme } from "@mui/material";
import { useRef, useEffect, useContext } from "react";
import { scroller } from "react-scroll";
import { skillsContext } from "../context/skillsContext";

interface Section {
  id: string;
  content: React.ReactNode;
  title:string;
}

interface ScrollSectionProps {
  sections: Section[];
 
}

export const ScrollableLayout = ({ sections }: ScrollSectionProps) => {
  const { palette } = useTheme();

  const {state,dispatch} = useContext(skillsContext)
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      const delta = e.deltaY;
      const prevSection = state.activeSection;
      let newSection = prevSection;
      if (delta > 0 && prevSection < sections.length - 1) {
        newSection = prevSection + 1;
      } else if (delta < 0 && prevSection > 0) {
        newSection = prevSection - 1;
      }
      dispatch({type:'setSection',payload:{activeSection:newSection}})
      console.log({newSection})
      scroller.scrollTo(sections[newSection].id, {
        duration: 500,
        smooth: true,
        containerId: "scrollable-container",
      });
      

      setTimeout(() => {
        isScrolling.current = false;
      }, 600); 
    };

    const container = containerRef.current;

    if (container) {
      container.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
      }
    };
  }, [sections,state.activeSection]);
  
  return (
    <Box
      id="scrollable-container"
      ref={containerRef}
      sx={{
        width: '100%',
        overflowY: 'auto',
        height: '70vh', 
        backgroundColor: palette.background.default,
        padding: 2,
        color: palette.text.primary,
        border: '1px solid #ddd',
        borderRadius: 2,
      }}
    >
      
      {/* Rendu des sections */}
      {sections.map((section) => (

        <Box
          key={section.id}
          id={section.id}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh', // Chaque section prend toute la hauteur visible dans le conteneur
            backgroundColor: palette.background.default,
          }}
        >
           <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Typography variant="h4" color="textPrimary">
              {section.title}
            </Typography>
            {section.content}
           </Box>
           

        </Box>
      ))}
    </Box>
  );
};
