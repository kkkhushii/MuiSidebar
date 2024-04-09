/* eslint-disable react/prop-types */
import NavItems from '../components/NavItems'
import { useState } from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

function NavCollapse({ item, level = 0 }) {
  const marginLeft = `${level * 20}px`;
  const Icon = item.icon;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (

    <List component="nav">
      {item.children && (
        <>
          <ListItemButton onClick={handleClick}>

            <ListItemText primary={item.name} />
            <ListItemIcon>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {item.children.map((child, index) => (
              <div key={index} style={{ marginLeft }}>
                {child.children ? (
                  <NavCollapse item={child} level={level + 1} />
                ) : (
                  <NavItems item={child} />
                )}
              </div>
            ))}
          </Collapse>
        </>
      )}
    </List>

  );
}

export default NavCollapse;
