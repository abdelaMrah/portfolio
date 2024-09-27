import {  Button, styled } from "@mui/material"

 
export const Button1 =styled(Button)(({theme})=>({
    backgroundColor:theme.palette.primary.main,
    borderRadius:50,
    color:theme.palette.text.secondary,
    variants:'contained',
    width:200,

 }))