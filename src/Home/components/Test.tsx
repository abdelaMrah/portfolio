import { Avatar, Container, Palette, Typography } from "@mui/material"
import Security from '../../../public/security2.png'
import Front from '../../../public/front.jpeg'
import Back from '../../../public/back.png'
import devops from '../../../public/devopa.png'



import Grid from '@mui/material/Grid2'
import React, { useContext } from "react"
import { langContext } from "../../context/langContext"
 
export const Test  =({palette}:{palette:any,typography:any})=>{
    const {translate} = useContext(langContext)
    return(
    <Container
            style={{
                width:'95%',
                height:'70vh',
                backgroundColor:palette.background.paper,
                borderRadius:30,
                display:'flex',
                flexDirection:'column',
                paddingLeft:80,
                paddingRight:80,
                paddingTop:20
            }}
        >
            <Typography variant="h4" color="textPrimary" >
                {translate('About Me')}
            </Typography>
            <Typography variant="body1" padding={2  }  lineHeight={2} color="textPrimary">
            {translate("I am a full-stack developer skilled in both frontend and backend development. I create dynamic web applications using React and TypeScript, while leveraging frameworks like NestJS and ASP.NET Core for the backend. My focus is on delivering high-quality, user-friendly solutions that are both efficient and scalable.")}

            </Typography>
            <Typography variant="h5" color="textPrimary" >
               {translate("What I Do")}
            </Typography>
            <Grid container spacing={2} sx={{marginTop:2}}>
                <GridItem palette={palette} colored
                    icon={<Avatar src={Back} sx={{width:'25px',height:'25px' }}></Avatar>}
                    title={translate('BackEnd Web Developement')}
                    text={<>
                    {translate('I am an experienced backend developer skilled in building scalable systems with modern frameworks like NestJS, ASP.NET Core, and Laravel. I specialize in creating RESTful APIs, working with microservices, and using databases like PostgreSQL, MongoDB, and Redis. I focus on clean, efficient code and leverage tools like Docker to optimize deployment.')}
                    </>}
                >
                </GridItem>
                <GridItem palette={palette} 
                    icon={<Avatar src={Front} sx={{width:'25px',height:'25px' }}></Avatar>}
                    title={translate('FrontEnd Web Developement')}
                    text={<>
                    {translate("I have strong expertise in frontend development, focusing on creating intuitive and visually appealing user interfaces with React and TypeScript. I am skilled in implementing responsive designs using CSS and frameworks like Material-UI. My experience includes optimizing performance, integrating RESTful APIs, and ensuring cross-browser compatibility for seamless user interactions.")}
                    </>}
                >
                </GridItem>
                <GridItem palette={palette} 
                    icon={<Avatar src={devops} sx={{width:'25px',height:'25px' }}></Avatar>}
                    title={translate('DevOps Skills')}
                    text={<>
                        {translate("I am currently enhancing my automation skills with solid experience in Docker for containerization and some familiarity with Kubernetes, Ansible, and Terraform. I have strong proficiency in Linux environments, managing servers, and using shell scripting to automate tasks. My goal is to streamline deployment processes and improve system scalability through effective automation and infrastructure management.")}
                    </>}
                >
                </GridItem>
                <GridItem palette={palette} colored
                    icon={
                        <Avatar src={Security} sx={{width:'25px',height:'25px' }}>
                            
                        </Avatar>
                    }
                    title={translate('Networking and CyberSecurity')}
                    text={<>
                        {translate("I have a solid foundation in networking and cybersecurity, with experience in managing network infrastructure, implementing firewalls, and securing systems. I understand network protocols and intrusion detection, and I apply best practices to safeguard data and mitigate vulnerabilities, ensuring system integrity against cyber threats.")}                    
                        </>}
                >
                </GridItem>
            </Grid>

         </Container>
    )
}

const GridItem =({
    icon,
    title,
    text,palette,colored}:{icon:React.ReactNode,title:React.ReactNode,text:React.ReactNode,palette:Palette,colored?:boolean})=>{

    return(
        <Grid size={6} 
        sx={{
            backgroundColor:colored?palette?.primary.light:palette.background.default,
            height:'17vh',borderRadius:5,
            padding:1,
            // marginLeft:1
            // textAlign:'center'
            }}>
                    <Typography sx={{
                        display:'flex',
                        justifyContent:'start',
                        color:palette.text.primary

                    }}>
                   <span style={{marginRight:20}}> {icon}</span> <span>{title}</span>
                    </Typography>
                    <Typography variant="body2" color="textPrimary">
                        {text}
                    </Typography>
        </Grid>
    )
}