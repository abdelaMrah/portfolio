import { Box  } from "@mui/material";
import Grid from '@mui/material/Grid2'
import React from "react";



export const Body =({children1,children2}:{children1:React.ReactNode,children2:React.ReactNode}) =>{

    return(
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}  >
          <Grid size={4}>
            {children1}
           </Grid>
          <Grid size={8} >
            {children2}
           </Grid>
        </Grid>
      </Box>
    )
}