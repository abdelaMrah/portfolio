
import { Box } from '@mui/material';
import {DisplaySkillsColumn} from './components/DisplaySkillsColumn';
 import { ScrollableLayout } from './layout/ScrollableLayout';
  import { Reval } from './layout/Reval';
import { skills } from './skills';
import { useRef } from 'react';
import { DisplaySkillsGrid } from './components/DisplaySkillsGrid';
import StepperButtons from './components/StepButtons';
 import { SkillsContextProvider } from './context/skillsContext';
import { getMatrix } from '../utils';
  export const SkiilsPage =()=>{
    const languageRef = useRef<HTMLDivElement | null>(null);
    const frontendRef = useRef<HTMLDivElement | null>(null);
    const backendRef = useRef<HTMLDivElement | null>(null);
    const devopsRef = useRef<HTMLDivElement | null>(null);

 
 
console.log(getMatrix(6))

 
  const sections =[
    {
        id: 'section1',
        title: 'Languages',
        content: <div ref={languageRef}>
        <Reval id={1}>
          <DisplaySkillsColumn skills={skills['language']} />
        </Reval>
        </div>
    },
    {
        id:'section2',
        title:'Frontend',
        content: <div ref={frontendRef}>
        <Reval id={2}>
          <DisplaySkillsGrid skills={skills['frontend']} />
        </Reval>
      </div>
    },
    {
        id:'section3',
        title:'Backend',
        content:  <div ref={backendRef}>
        <Reval id={3}>
          {/* <DisplaySkillsColumn skills={skills['backend']} /> */}
          <DisplaySkillsGrid skills={skills['backend']} />

        </Reval>
       </div>
    },
    {
        id:'section4',
        title:'Devops',
        content:  <div ref={devopsRef}>
        <Reval id={3}>
          <DisplaySkillsColumn skills={skills['devops']} />
          {/* <DisplaySkillsGrid skills={skills['devops']} /> */}

        </Reval>
       </div>
    }
  ]
    return(<>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <SkillsContextProvider>

         <Box sx={{ position: 'fixed', top: '6vh', left:16 }}>
                <StepperButtons refs={{
                    'language':{
                        id:0,
                        ref:languageRef
                    },
                    'frontend':{
                        id:1,
                        ref:frontendRef
                    },
                    'backend':{
                        id:2,
                        ref:backendRef
                    },
                    'devops':{
                        id:3,
                        ref:devopsRef
                    }
                }}/>
        </Box>

             {/* <ScrollSection sections={sections}/> */}
             <ScrollableLayout sections={sections}/>
             </SkillsContextProvider>
          
        
    </Box>
     </>)
}

