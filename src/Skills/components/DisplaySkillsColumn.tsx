 import { Box, Typography, useTheme} from '@mui/material';
 
 
import { Skill } from '../skills'
import { ProgressBar } from './progressBar';
export const DisplaySkillsColumn = ({skills}:{skills:Skill[]}) => {
  const {palette} = useTheme()
  return (
    
     <section  
      style={{ display: 'flex', flexDirection: 'column', gap: 4  ,alignItems:'center',justifyContent:'center',height:'70vh',}}
     >

      {skills.map((lang) => (
        <Box
          key={lang.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            width:'80vw',
            padding: 2,
            backgroundColor: palette.grey[100],
            borderRadius: '8px',
            // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            margin:'1px'
            // height:'70vh'
          }}
        >
          {/* <Avatar src={lang.logo} sx={logoStyle} />
           */}
           {lang.logo}
          <Box sx={{ flexGrow: 1 ,marginLeft:3}}>
            <Typography variant="h6"  sx={{color:'black'}}>{lang.title}</Typography>
            <Typography>
                {lang.description}
            </Typography>
           {
            lang.progress ?  <ProgressBar
            value={lang.progress!}
        //    sx={{ height: 10, borderRadius: 5, marginTop: 1 }}
         />:''
           }
          </Box>
          <Typography variant="body2" sx={{ marginLeft: 2,color:'black' }}>
            {lang.progress}%
          </Typography>
        </Box>
      ))}
    </section>
 
   );
};

// export default SkillDisplay;
