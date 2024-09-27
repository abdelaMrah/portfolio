import { useTheme } from "@mui/material"
import { SwitchDarkMode } from "../SwitchDarkMode/SwitchDarkMode"
import { useContext } from "react"
import { appContext } from "../../context/appContext"
import { langContext } from "../../context/langContext"
import { LangButton } from "../langButton/langButton"
// import './navbar.css'

export const Navbar =()=>{
    const {palette,typography} = useTheme()
    const {setMode,mode} = useContext(appContext)
    // const {lang,changeLang} = useContext(langContext);
    const boxStyle:React.CSSProperties={
        margin:5,
        padding:5,
        color:palette.text.primary
    
    }
    return(
          <div 
           style={{
            // backgroundColor:palette.background.default,
            padding:5,
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            height:'10vh',
             }} 
           >
            <div style={{...boxStyle}}>
                hi, 
                <br />
                I am M'rah Abdellah Ibrahim
            </div>
            <div style={{
                display:'flex',
                justifyContent:'start'
            }}>
            <div style={{...boxStyle,fontSize:typography.h2?.fontSize}}>
                <LangButton color={palette.text.primary}/>
            </div>
            <div style={{...boxStyle,fontSize:typography.h2?.fontSize}}>
                <SwitchDarkMode 
                onChange={(e)=>{
                    console.log(e.target.checked)
                    setMode(e.target.checked ?'light':'dark')
                    console.log(e.target.checked ?'light':'dark')
                }}
                defaultChecked={mode=='light'?true:false}
                 />
            </div>
            </div>
           
        </div>
     )
}