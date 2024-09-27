import { useEffect, useState } from "react";
import { StyledInputBase } from "./StyledInputBase";



export const NumberInput: React.FC<{ placeholder?: string,style?:React.CSSProperties ,onChange?:(value:ReturnType<any>)=>void}> = ({ placeholder,style,onChange }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false)
    const phoneRegex = /^\+?[0-9]{10,15}$/;
  const handleChange =(val:string)=>{
    setValue(val);
    setError(phoneRegex.test(value))
    console.log(phoneRegex.test(value))
    
    
  }
  useEffect(() => {
      if(onChange)
      {
        onChange(value)
      }
  }, [value])
    return (
      <StyledInputBase
        placeholder={placeholder || "Enter number"}
        type="text"
        inputProps={{ 'aria-label': 'number input' }}
        onChange={(e)=>handleChange(e.target.value)}
        style={style}
      />
    );
  };