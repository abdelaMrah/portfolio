
import {   useTheme } from "@mui/material";
 
import { useState } from "react";
import { Body } from "../layouts/Body";
import { Test } from "./components/Test";
import { Me } from "./components/me";


export const Home =()=>{
  
    const {palette,typography} = useTheme();
     return(
        <Body
          children1={<Me palette={palette}  />}
          children2={<Test palette={palette} typography={typography} />}
        >
        </Body>
    )
}