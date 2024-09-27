import { Box, useTheme } from "@mui/material"
import ScrollSection, { Section } from "./layout/ScrollSmooth"
import { DisplaySection } from "./Components/DisplaySection"
import { projects } from "./projects"



export const Projects = ()=>{
    const {palette} = useTheme()
    const sections:Section[] = [
        {
            id:'section1',
            title:'',
            content:<DisplaySection project={projects[0]}   />
      
        },
        {
            id:'section2',
            title:'',
            content:<DisplaySection project={projects[0]}   />
         
        },
        {
            id:'section3',
            title:'',
            content:<DisplaySection project={projects[0]}   />
         
        },
    ]
    return (
        <Box sx={{backgroundColor:palette.background.default}}>
            


            <ScrollSection sections={sections}/>
        </Box>
    )
}