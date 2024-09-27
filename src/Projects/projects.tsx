import { Avatar } from "@mui/material";
import { nestjs,aspnet, React,  microservices, kubernetes } from "../assets";

 

type Technology ={
    title:string;
    logo:any;

};
export type Project ={
    id:number;
    title:string;
    description:string,
    image:any,
    link:string,
    technologies:Technology[]
};
const logoStyle:React.CSSProperties = {
    width:'50px',
    height:'50px'
};
const imageStyle:React.CSSProperties ={
    width:'fit-content',

}

export const projects :Project[] = [
    {
        id:1,
        title:'Commandili',
        description:`Developed a microservices platform to manage orders, production in workshops, and deliveries. Automatically selects nearby workshops and provides real-time notifications, optimizing logistics time and costs.`,
        // description:"Commandili_description",
        image:kubernetes,
        link:'https://github.com/abdelamrah',
        technologies:[
            {
                title:'NestJs',
                logo:<Avatar src={nestjs} style={logoStyle} />
            },
            {
                title:'Asp .Net Core',
                logo:<Avatar  src={aspnet} style={logoStyle}/>
            },
            {
                title:'ReactJs',
                logo:<Avatar src={React} style={logoStyle} />
            },
           {
            title:'Microservices',
            logo:<Avatar src={microservices} style={logoStyle} />
           },
           {
            title:'Kubernetes',
            logo:<Avatar src={kubernetes} style={logoStyle} />
           }
        ]
    },
    {
        id:2,
        title:'',
        description:'',
        image:'',
        link:'',
        technologies:[

        ]
    },
    {
        id:3,
        title:'',
        description:'',
        image:'',
        link:'',
        technologies:[
            
        ]
    }
];