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
            // content:<div style={{backgroundColor:palette.info.light,width:'fit-content'}}>
            //     Section 1
            // </div>,
        },
        {
            id:'section2',
            title:'',
            content:<DisplaySection project={projects[0]}   />
            // content:<div style={{backgroundColor:palette.secondary.light,width:'fit-content'}}>
            //     Section 2
            // </div>,
        },
        {
            id:'section3',
            title:'',
            content:<DisplaySection project={projects[0]}   />
            // content:<div style={{backgroundColor:palette.primary.light,width:'fit-content'}}>
            //     Section 3
            // </div>,
        },
    ]
    return (
        <Box sx={{backgroundColor:palette.background.default}}>
            


            <ScrollSection sections={sections}/>
        </Box>
    )
}