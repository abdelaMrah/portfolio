import React, {  useContext,   useEffect, useState } from 'react';
import { Box, Avatar, Typography, useTheme } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
 import DevicesIcon from '@mui/icons-material/Devices';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { motion } from 'framer-motion';
import { skillsContext } from '../context/skillsContext';
 import StorageIcon from '@mui/icons-material/Storage';

const StepButton = ({ title, icon, active ,refs,id}: {id:number; title: string, icon: JSX.Element, active: boolean,refs:{id:number,ref:any}}) => {
     const {palette}= useTheme()
    const {dispatch} = useContext(skillsContext)
    const gradientStyle = {
    background: active
      ? `linear-gradient(135deg, ${palette.primary.main}, #E89B37FF, #FFB300)`
      : `linear-gradient(135deg,${palette.grey[400]},${palette.grey[200]})`,
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: active ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none',
    transition: 'all 0.5s ease',
    cursor:'pointer'
  };
 
  
   const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start'});
    };
 
 
  return (
    <Box   sx={{ textAlign: 'center',mx:1  }} 
      onClick={()=>{scrollToSection(refs.ref);
        dispatch({type:'setSection',payload:{activeSection:id}})

    }
    }
      >
      <Box sx={gradientStyle}>
        <Avatar sx={{ bgcolor: 'transparent', width: '50px', height: '50px' }}>
          {icon}
        </Avatar>
      </Box>
      <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: active ? 'bold' : 'normal' }}>
        {title}
      </Typography>
    </Box>
  );
};

const StepperButtons = ({refs}:{[key:string]:any}) => {
  const [scrollY, setScrollY] = useState(0);
  const totalScroll = 1000; // Distance totale à scroller (à ajuster en fonction du contenu)
const {state} = useContext(skillsContext)
useEffect(()=>{
console.log({id:state.activeSection})
},
[state.activeSection])
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollProgress = (scrollTop / totalScroll) * 100;
    setScrollY(scrollProgress);
  };

  useEffect(() => {
     window.addEventListener('scroll', handleScroll);

   }, [scrollY]);
  
   return (
    <Box sx={{ position: 'relative', width: '100%', mt: 4 ,mx:1}}>
       <Box
        sx={{
          position: 'absolute',
          top: '50%',  
          left: '10%',
          width: '80%',
          height: '4px',
          backgroundColor: '#E0E0E0',
          zIndex: -2,
        }}
      >
        {/* Ligne de progression animée */}
        <motion.div
          style={{
            height: '4px',
            backgroundColor: '#FF8F00',
            width: `${scrollY}%`, // Largeur de la ligne en fonction du défilement
          }}
        />
      </Box>

      {/* Conteneur des boutons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <StepButton title="Languages" icon={<CodeIcon sx={{ color: '#FFF' }} />} active={state.activeSection==0}  refs={refs['language']} id={refs['language'].id}  />
        <StepButton title="Frontend" icon={<DevicesIcon sx={{ color: '#FFF' }} />} active={state.activeSection==1} refs={refs['frontend']} id={refs['frontend'].id} />
        <StepButton title="Backend" icon={<StorageIcon sx={{ color: '#FFF' }} />} active={state.activeSection==2}refs={refs['backend']} id={refs['backend'].id}/>
        {/* <StepButton title="Backend" icon={<Avatar src={backend} sx={{color:'#ffffff'}}/>} active={state.activeSection==2}refs={refs['backend']} id={refs['backend'].id}/> */}
       
        <StepButton title="DevOps" icon={<EngineeringIcon sx={{ color: '#FFF' }} />} active={state.activeSection==3} refs={refs['devops']} id={refs['devops'].id}/>
      </Box>
    </Box>
  );
};

export default StepperButtons;
