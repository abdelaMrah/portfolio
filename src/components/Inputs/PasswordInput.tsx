import InputAdornment from "@mui/material/InputAdornment";
import { StyledInputBase } from "./StyledInputBase";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { useState } from "react";

export const PasswordInput: React.FC<{ placeholder?: string }> = ({ placeholder }) => {
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <StyledInputBase
        placeholder={placeholder || "Enter password"}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            {showPassword ? (
              <VisibilityOff onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} />
            ) : (
              <Visibility onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} />
            )}
          </InputAdornment>
        }
        inputProps={{ 'aria-label': 'password input' }}
      />
    );
  };
  