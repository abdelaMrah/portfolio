import { createTheme, ThemeProvider } from "@mui/material";
 import {  RouterProvider } from "react-router-dom";
import { routers } from "./routers";
import {themeSettings } from "./theme";
import i18next from "i18next";
import { useContext, useMemo } from "react";
import { appContext } from "./context/appContext";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { langContext } from "./context/langContext";
import httpApi from 'i18next-http-backend';
i18next
.use(initReactI18next)
.use(LanguageDetector)
.use(httpApi)
.init({
 
  // lng:'en',
  detection:{
    order:['cookie','navigator'],
    caches:['cookie']
  },
  backend:{
    loadPath:'/locale/{{lng}}/translation.json',
    
  }
})
function App() {
 const {lang} = useContext(langContext);
 console.log({lang})

   
  

   const {mode} =useContext(appContext);
  const theme =useMemo( ()=>createTheme(themeSettings(mode)),[mode])
   return (
    <>
       <ThemeProvider theme={theme}>
           <RouterProvider  router={routers} />
       </ThemeProvider>
      
    </>
  )
}

export default App
  