 
import { Avatar, Container, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
 import Contact from '../../../public/contact-removebg-preview.png';
import Home from "@mui/icons-material/Home";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
export const NavTab = () => {
  const { palette } = useTheme();
    // const location = useLocation();
    const navigate = useNavigate()
    const url =window.location.pathname
     function removeLeadingSlash(path:string) {
        if (path.startsWith('/')) {
          return path.slice(1);
        }
        return path;
      }
      const path = removeLeadingSlash(url)
      const init = navlinks.find((nav)=>nav.link.match(path))?.id
  const [selected, setSelected] = useState(init?? 1);

    console.log(removeLeadingSlash(url))
      useEffect(() => {
        navigate(navlinks.find((nav)=>nav.id==selected)?.link??'')
      }, [selected])
      
  return (
    <div style={{ ...mainDiv, backgroundColor: palette.background.paper}}>
      {navlinks.map(({ id, label, logo }) => (
        <Container
          key={id}
          style={{
            ...boxStyle,
            backgroundColor: selected === id ? palette.primary.main : "#E4E4E4FF",
            boxShadow: selected === id ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none",
            color:selected ===id ?palette.text.secondary:palette.text.disabled,
            transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          }}
          onClick={() => {
            setSelected(id);
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = selected === id ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none";
          }}
        >
          {/* <Container sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
          }}>
            {logo}
            {selected==id ? label : ''}
          </Container> */}

           <Container sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
          }}>
            {logo}
            {selected==id ? label : ''}
          </Container>
         </Container>
      ))}
    </div>
  );
};

const mainDiv: React.CSSProperties = {
  height: "12vh",
  width: "350px",
  display: "flex",
  justifyContent: "space-evenly",
  margin: 10,
  borderRadius: 20,
  alignItems: "center",
};

const boxStyle: React.CSSProperties = {
  height: "10vh",
  width: "5vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: 2,
  borderRadius: 10,
  cursor: "pointer",
  transition: "background-color 0.3s ease, transform 0.3s ease",
};

const navlinks = [
  {
    id: 1,
    label: "Home",
    link: "/",
    logo:<Home  style={{height:'50px',color:'#ffffff'}}/>
    // logo: <Avatar src={Home}></Avatar>,
  },
  {
    id: 2,
    label: "Skills",
    link: "/skills",
    logo: <ElectricBoltIcon style={{height:'50px',color:'#ffffff'}}/>,
  },
  {
    id: 3,
    label: "Projects",
    link: "/projects",
    // logo:<Avatar src={Projects} sx={{}}></Avatar>,
    logo: <WorkOutlineIcon  style={{height:'50px',color:'#ffffff'}}/>

  },
  {
    id: 4,
    label: "Contact",
    link: "/contact",
    logo:<PermContactCalendarIcon style={{height:'50px',color:'#ffffff'}}/>,
    // logo:</>
  },
];
