import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from "./Home";
import { Main } from "./layouts/main";
import { Navbar } from "./components/navbar/navbar";
import { NavTab } from "./components/sideBar/sideBar";
import { SkiilsPage } from "./Skills";
import Contact from "./Contact";
import { Projects } from "./Projects";


export const routers = createBrowserRouter(
    [
         {
            path:'',
            element:<Main
                navbar={<Navbar/>}
                children2={<NavTab />}
                children3={<Outlet/>}
            ></Main>,
            children:[
                {
                    path:'',
                    element:<Home/>
                },
                {
                    path:'skills',
                    element:<SkiilsPage/>
                },
                {
                    path:'contact',
                    element:<Contact/>
                },
                {
                    path:'projects',
                    element:<Projects />
                }
            ]
         }
    ]
)

