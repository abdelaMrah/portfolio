import { Box, Tooltip, Typography, useTheme } from "@mui/material";
import { Project } from "../projects";
import { useContext } from "react";
import { langContext } from "../../context/langContext";


export const DisplaySection =({project}:{project:Project})=>{
    
    const {palette} = useTheme();
    const {id,title,description,technologies,image,link} = project;
    const {translate} = useContext(langContext)
    
    return (
        
        <Box  key={id} 
        sx={{width:'fit-content',height:'100vh',backgroundColor:palette.background.default,display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center',margin:5}}
        >
            <Typography variant="h4" color="textPrimary" sx={{

            }}>
                {translate(title)}
            </Typography>
            {/* main Box , affichage des details de projet a cote de son image */}
           <Box sx={{
            display:'flex',
            justifyContent:'start',
            width:'fit-content'
           }}>
                {/* Box of details */}
              <Box sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
              }}>
                <Typography variant="body1" color="textPrimary" sx={{
                    height:'50%',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    {translate(description)}
                </Typography>
                <Box sx={{
                    display:'flex',
                   justifyContent:'space-around'
                }}>
                    {
                        technologies.map((tech)=>(
                            <Box sx={{
                                display:'flex',
                                flexDirection:'column',
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                                {tech.logo}
                                <Typography variant="body2" color="textSecondary">
                                    {tech.title}
                                </Typography>
                            </Box>
                        ))
                    }
                </Box>
              </Box>
                {/* Box of image */}
                 <div style={{
                    height:'60vh'
                 }}
                 
                onClick={()=>{}}
                 >
                 <Tooltip title={`open ${title} on github`} followCursor>
                 <a href={link} target="_blank">
                  <img src={image} alt="" style={{
                        height:'60vh',
                        width:'40vw'
                    }} />
                  </a>
                 </Tooltip>
                </div>
           </Box>
         </Box>
    )
}