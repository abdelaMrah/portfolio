import { Box, Card, CardContent, Typography } from '@mui/material';
import { ProgressBar } from './progressBar';
type Techinique ={
    id:number;
    label:string;
    logo:any;
}
export const TechniqueGrid =({techniques}:{techniques:Techinique[]})=>{
   
   
    return(
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          gap: 2,
          padding: 1,
        }}
      >


{techniques.map((technique:any) => (
      <Card key={technique.id} sx={{ width: '5vw', padding: '5px', textAlign: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          {technique.logo}
        </Box>
        <CardContent>
          <Typography variant="h6" component="div">
            {technique.title}
          </Typography>
          {technique.description && (
            <Typography variant="body2" color="text.secondary">
              {technique.description}
            </Typography>
          )}
          <Box sx={{ mt: 2 }}>
            {
                technique.progress? (<>
                <ProgressBar value={technique.progress!} width={'4vw'}/>  

                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                {technique.progress}%
                </Typography>
                </>
                ):''
            }
        
          </Box>
        </CardContent>
      </Card>
    ))}
      </Box>

    )
}



