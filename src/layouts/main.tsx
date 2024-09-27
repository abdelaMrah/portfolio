import { useTheme } from "@mui/material"

 

export const Main =({navbar,children2,children3}:{navbar:React.ReactNode,children2:React.ReactNode,children3:React.ReactNode})=>{
    const {palette} = useTheme()
  
 
    return(
        <div style={{backgroundColor:palette.background.default,height:'100vh',display:'flex',flexDirection:'column'}}>
            <div>
                {navbar}
            </div>
            <div style={{display:'flex',justifyContent:'end'}}>
                {children2}
            </div>
            <div>
            {children3}
            </div>
        </div>
    )
}