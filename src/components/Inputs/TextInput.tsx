import { StyledInputBase } from "./StyledInputBase";

export const TextInput: React.FC<{ placeholder?: string }> = ({ placeholder }) => {
    return (
      <StyledInputBase
        placeholder={placeholder || "Enter text"}
        inputProps={{ 'aria-label': 'text input' }}
      />
    );
  };
  
  // Input Email
  export const EmailInput: React.FC<{ placeholder?: string }> = ({ placeholder }) => {
    return (
      <StyledInputBase
        placeholder={placeholder || "Enter email"}
        inputProps={{ 'aria-label': 'email input', type: 'email' }}
      />
    );
  };
  