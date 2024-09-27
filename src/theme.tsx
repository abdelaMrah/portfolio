import {  PaletteMode, ThemeOptions } from "@mui/material";


 

export const themeSettings =(mode:PaletteMode):ThemeOptions=>{
 
 
    return {
        palette:palettes(mode),
        typography:{
            fontFamily: 'Roboto, sans-serif',
            h1: {
                fontSize: '2rem',
                '@media (max-width:600px)': {
                    fontSize: '1.875rem', // plus petit sur les petits écrans
                },
            },
            h2:{
                fontSize: '1.875rem',
                '@media (max-width:600px)': {
                    fontSize: '1.75rem', // plus petit sur les petits écrans
                },
            },
            body1: {
                fontSize: '0.875rem',
                '@media (max-width:600px)': {
                    fontSize: '0.875rem', // taille ajustée pour les petits écrans
                },
            },
            body2:{
                fontSize: '0.7rem',
                '@media (max-width:600px)': {
                    fontSize: '0.75rem', // taille ajustée pour les petits écrans
                },

            },
            button:{
                fontSize:'1rem',
                '@media (max-width:600)':{
                    fontSize:'0.875rem'
                }
            }
        },
        breakpoints:{
            values:{
                xs:0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
            }
        },
        spacing:8,
        zIndex:{
            appBar: 1200,
            drawer: 1100,

        },
        mixins:{
            toolbar: {
                minHeight: 56,
                '@media (min-width:600px)': {
                    minHeight: 64, // ajustement de la hauteur minimale pour les grands écrans
                },
            },
        },
        
    }
    
}



 const palettes =(mode:PaletteMode)=>{
   if(mode=='light'){
    return {
        primary:{
            main:'#F5862BFF',
            light:'#F7D9C1B6',
            dark:'#ed6c02',
            contrastText:'#ed6c02'
        },
        secondary:{
            main:'#AAE728',
            light:'#AAE728',
            dark:'#AAE728',
            contrastText:'#dc004e'
        },
        background:{
            default:'#EDF1F1FF',
            paper:'#EFEFEFFF'
        },
        text:{
            primary:'#000000',
            secondary:'#555555FF',
            disabled:'#7F7F7FFF4'
        },
        grey:{
            50:'#EFE8E8FF',
            100: "#e7e7e7",
            200: "#cfcfcf",
            300: "#b8b8b8",
            400: "#a0a0a0",
            500: "#888888",
            600: "#6d6d6d",
            700: "#525252",
            800: "#363636",
            900: "#1b1b1b",
            A100:'#E6E5E5FF',
            A200:'#B8AFAFFF',
            A400:'#868282FF',
            A700:'#3B3939FF'
        }
     }
   }else{
    return {
        primary: {
            main: '#DB6708FF', // Couleur principale plus claire pour un contraste élevé
            light: '#ed6c02', // Variante claire
            dark: '#BE5703FF', // Variante sombre
            contrastText: '#ffffff', // Texte clair pour le contraste
        },
        secondary: {
            main: '#9FE802FF', // Couleur principale pour le secondaire
            light: '#A4E024FF', // Variante claire
            dark: '#8AC804FF', // Variante sombre
            contrastText: '#ffffff', // Texte clair pour le contraste
        },
        background: {
            default: '#080808', // Couleur de fond sombre
            paper: '#171819', // Couleur de fond pour les éléments comme les cartes
        },
        text: {
            primary: '#ffffff', // Texte principal en blanc
            secondary: '#C8C4C4FF', // Texte secondaire en gris clair
            disabled: '#7f7f7f', // Texte désactivé en gris
        }
        ,
        grey:{
            50: '#F0ECECFF',
            100: "#e6e6e6",
            200: "#cccccc",
            300: "#b3b3b3",
            400: "#999999",
            500: "#808080",
            600: "#666666",
            700: "#4d4d4d",
            800: "#333333",
            900: "#1a1a1a",
            A100:'#e6e6e6',
            A200:'#A9A3A3FF',
            A400:'#626060FF',
            A700:'#2B2A2AFF'
        }
   }
   
 }}


 