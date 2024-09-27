// import { Box, useTheme } from "@mui/material"
// import { skillsContext, SkillsContextProvider } from "../context/skillsContext";
// import { useContext, useRef, useState } from "react";
//  import { scroller } from "react-scroll";
// import { pre } from "framer-motion/client";


// interface Section {
//     id: string;
//     title: string;
//     content: React.ReactNode;
//   }
  
//   interface ScrollSectionProps {
//     sections: Section[];
//   }

// export const ScrollableLayout =({ sections }:ScrollSectionProps)=>{
//     const {state,dispatch} = useContext(skillsContext)
//     const {palette} = useTheme();
//     const [activeSection, setActiveSection] = useState(0);
//     const isScrolling = useRef(false);
  
//     const handleScroll = (e: React.WheelEvent) => {
//       if (isScrolling.current) return;
  
//       isScrolling.current = true;

//       if (e.deltaY > 0 && activeSection < sections.length - 1) {
//         setActiveSection((prev) => prev + 1);
//         console.log(e.deltaY)
//         scroller.scrollTo(sections[activeSection + 1].id, {
//           duration: 500,
//           smooth: true,
//         });
//       } else if (e.deltaY < 0 && activeSection > 0) {
//         setActiveSection((prev) => prev - 1);
//         scroller.scrollTo(sections[activeSection - 1].id, {
//           duration: 500,
//           smooth: true,
//         });
//       }
  
//       setTimeout(() => {
//         isScrolling.current = false;
//       }, 600); // Délais avant de pouvoir scroller à nouveau
//     };
//     return(
//         <Box
//         onWheel={handleScroll}
//         id="scroll"
//          style={{
//             width: 'fit-content',
//             // maxHeight: 300, // Limit height
//             overflowY: 'scroll', // Enable vertical scroll
//             padding: 2,
//             backgroundColor: palette.background.default,
//             border: '1px solid #ddd',
//             borderRadius: 2,
//             flexGrow:1,
//             // margin:1,
//             height:'70vh',
//             color:palette.text.primary
//           }}
//         >
//             <SkillsContextProvider>
//             {/* {children} */}
//             {sections.map((section) => (
//         <Box
//           key={section.id}
//           id={section.id}
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: palette.background.default,

//              // overflowY: 'auto', // Enable vertical scroll
           
//           }}
//         >
//           {section.content}
//         </Box>
//       ))}
//             </SkillsContextProvider>
//         </Box>
//     )
// }




import { Box, Typography, useTheme } from "@mui/material";
import { useRef, useState, useEffect, useContext } from "react";
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
  const [activeSection, setActiveSection] = useState(0);
  const {state,dispatch} = useContext(skillsContext)
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isScrolling = useRef(false);

  // Utiliser useEffect pour activer le défilement automatique
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      const delta = e.deltaY;

      setActiveSection((prevSection) => {
        let newSection = prevSection;

        if (delta > 0 && prevSection < sections.length - 1) {
          newSection = prevSection + 1;
        } else if (delta < 0 && prevSection > 0) {
          newSection = prevSection - 1;
        }
        dispatch({type:'setSection',payload:{activeSection:newSection}})
        console.log({newSection})
        // Effectuer le défilement vers la nouvelle section
        scroller.scrollTo(sections[newSection].id, {
          duration: 500,
          smooth: true,
          containerId: "scrollable-container", // Assurez-vous que cela correspond à l'ID du conteneur scrollable
        });

        return newSection;
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 600); // Delai avant de permettre un autre défilement
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
        height: '70vh', // Limiter la hauteur à une partie spécifique de la page
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
