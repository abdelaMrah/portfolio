


import { Box, Card, CardContent, Typography} from '@mui/material';
 
 
import { Skill } from '../skills'
import { ProgressBar } from './progressBar';
export const DisplaySkillsGrid = ({skills}:{skills:Skill[]}) => {
  return (
    <Box 
        sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}
    > 
    {/* <Typography variant='h3' color='textPrimary'>
        Frontend
    </Typography> */}
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      gap: 2, // Espacement entre les cartes
      padding: 1, // Espacement intérieur
    }}
  >
    {skills.map((skill) => (
      <Card key={skill.id} 
      sx={{ width: '25vw',
       padding: '16px',
        textAlign: 'center',
        cursor:skill.techniques ? 'pointer':'auto',
        '&:hover': {
          transform: skill.techniques? 'scale(1.05)':'none', // agrandit légèrement la carte
          boxShadow: skill.techniques ? '0 8px 16px rgba(0,0,0,0.2)':'none', // ajoute une ombre plus forte
        },  
         }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          {skill.logo}
        </Box>
        <CardContent>
          <Typography variant="h6" component="div">
            {skill.title}
          </Typography>
          {skill.description && (
            <Typography variant="body2" color="text.secondary">
              {skill.description}
            </Typography>
          )}
          <Box sx={{ mt: 2 }}>
            {
                skill.progress? <ProgressBar value={skill.progress!} width={'20vw'}/> :''
            }
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                {skill.progress}%
            </Typography>
          </Box>
        </CardContent>
      </Card>
    ))}
  </Box>
    </Box>
   );
};

// export default SkillDisplay;
