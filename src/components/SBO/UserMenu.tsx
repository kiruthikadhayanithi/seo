import * as React from 'react';
import {
  Avatar,
  IconButton,
  ListItemText,
  Menu,
  MenuItem,
  useTheme,
} from '@mineral/core';

export const UserMenu: React.FC = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const menuId = 'user-menu';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-controls={menuId}
        aria-haspopup
        aria-label="user menu"
        onClick={handleClick}
        size="small">
        <Avatar
          sx={{ color: 'common.white', bgcolor: 'secondary.dark' }}
          size="medium">
          M
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{
          vertical: parseInt(theme.sizing.menuOffset),
          horizontal: 'right',
        }}
        PaperProps={{
          style: {
            minWidth: 200,
          },
        }}
        id={menuId}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        variant="menu">
        <MenuItem
          disabled
          sx={{
            borderBottomColor: 'divider',
            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
          }}>
          <ListItemText
            sx={{
              cursor: 'text',
              pointerEvents: 'auto',
              userSelect: 'text',
            }}
            primary="Mineral User"
            secondary="Mineral Tenant"
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText primary="Profile" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText primary="Logout" />
        </MenuItem>
      </Menu>
    </>
  );
};
