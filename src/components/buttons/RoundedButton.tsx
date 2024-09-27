import { styled ,Button} from "@mui/material";



export const RoundedButton =styled(Button)(({theme})=>({
    backgroundColor:theme.palette.primary.main,
    width:60,
    height:60,
    borderRadius:'50%',
    fontSize:30,
    boxShadow:'initial',

}))


