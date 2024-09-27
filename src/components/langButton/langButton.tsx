

import React, { useContext } from "react";
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import CheckIcon from '@mui/icons-material/Check';
import { langContext } from "../../context/langContext";

export const LangButton = ({ color }: { color: string }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { lang, changeLang } = useContext(langContext);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
  ];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (code: string) => {
    changeLang(code); 
    handleClose();
  };

  return (
    <>
      <IconButton
        size="medium"
        sx={{ width: '50px' }}
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <LanguageIcon sx={{ color, width: 'fit-content' }} />
      </IconButton>

      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {languages.map((language) => (
          <MenuItem key={language.code} onClick={() => handleLanguageChange(language.code)}>
            <ListItemIcon>
              {lang === language.code && <CheckIcon  sx={{color}}/>}
            </ListItemIcon>
            <ListItemText>{language.name}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
