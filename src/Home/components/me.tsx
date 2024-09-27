import { Box, Container, Divider, List, ListItem, ListItemAvatar, ListItemText, Palette, Typography } from "@mui/material"
import Info from "@mui/icons-material/Info"
import Phone from "@mui/icons-material/Phone"
import Email from "@mui/icons-material/Email"
import LocationCity from "@mui/icons-material/LocationCity"
 import image from '../../../public/photo.jpeg'
import React, { useContext } from "react"
import { Button1 } from "../../components/buttons/Button1"
import Download from "@mui/icons-material/Download"
import { langContext } from "../../context/langContext"
  

export const Me=({palette}:{palette:Palette})=>{
const {translate} = useContext(langContext)
  console.log(palette.warning.main)
    return(
        <Container
            style={{
                width:'80%',
                height:'70vh',
                backgroundColor:palette.background.paper,
                borderRadius:30,
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
            }}
        >
            <div style={{maxHeight:'400px',position:'relative', top:-100,textAlign:'center',borderRadius:15}}>
               <img src={image} alt="image"  style={{maxHeight:'200px',maxWidth:'200',width:'200px',borderRadius:15}}/>
               <h3 style={{color:palette.text.primary}} >
                MRAH Abdellah 
               </h3>
               <p style={{color:palette.text.secondary}}>
                fullStack Developer
               </p>
               
            </div>
            <div 
            style={{
                minHeight:'40vh',
                width:'90%',
                backgroundColor:palette.background.default,
                position:'relative',
                top:-100,
                border:`1px solid ${palette.grey[300]}`,
                borderRadius:20,
                display:'flex',
                flexDirection:'column',
                justifyContent:'start',
                alignItems:'center'
            }}
            >
                {/* <ContactBox label="phone" text="efrvgervg" icon={<></>} />
                <ContactBox label="Email" text="abdela@gmail.com" icon={<></>} />
                <ContactBox label="Location" text="Oran" icon={<></>} /> */}
                <List>
                    <ListItemBox label={translate("Phone")} text="+213795353417" icon={<Phone sx={{color:palette.primary.main}}/>} color={palette.text.primary}/>
                    <ListItemBox label="Email" text="abdela@gmail.com" icon={<Email sx={{color:palette.primary.main}}/>} color={palette.text.primary}/>
                    <ListItemBox label={translate("Location")} text="Oran, Algerie" icon={<LocationCity sx={{color:palette.primary.main}}/>} color={palette.text.primary}/>

                </List>

                    <Button1  
                    sx={{
                        backgroundColor:palette.primary.main,
                        color:palette.text.primary,
                        fontSize:'0.875rem'
                    }}
                    >
                        {translate("Dowload My CV")} <Download/>
                    </Button1>
            </div>
        </Container>
    )
}


const ContactBox=({label,text,icon}:{label:string,text:string,icon:any})=>{

    return(
        <Box
        sx={{
          textAlign: 'center',
          position: 'relative',
          display: 'inline-block',
          height:'70px',
          pb: 2, // Padding-bottom
        }}
      >
        <Box display={'flex'} justifyContent={'start'} alignContent={'center'} marginTop={2} marginLeft={5}>
            <Box width={50} height={50} alignContent={'center'}  >
                <Info />
            </Box>
            <Box   display={'flex'} flexDirection={'column'} marginLeft={2} >
                    <Typography variant="body1">
                        {label}
                    </Typography >
                    <Typography  variant="body2" marginLeft={5}>
                        {text}
                    </Typography>
            </Box>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: 0,
            width: '180px', // Longueur fixe de la ligne
            borderBottom: '1px solid black', // Ligne sous le texte
          }}
        />
      </Box>
    )
}


const ListItemBox =({label,text,icon ,color}:{label:string,text:string,icon:any,color:any})=>{
    return(
       <>
        <ListItem alignItems="flex-start"  >
        <ListItemAvatar  >
            {icon}
        </ListItemAvatar>
        <ListItemText
        sx={{color:color}}
          primary={label}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: color, display: 'inline' }}
              >
                {text}
              </Typography>
              {/* {" — I'll be in your neighborhood doing errands this…"} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" /></>
    )
}