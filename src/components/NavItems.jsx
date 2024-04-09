/* eslint-disable react/prop-types */

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { List } from '@mui/material';

function NavItems({ item }) {
  const Icon = item.icon;
  return (

    // <MenuItem>
    //   {item.icon ? <Icon className="iconstyle" /> : <FiberManualRecordIcon sx={{ fontSize: '12px' }} className="iconstyle" />}
    //   {item.name}
    // </MenuItem>

    <List>
      <ListItemButton>
        {item.icon ? <ListItemIcon><item.icon /></ListItemIcon> : <ListItemIcon><FiberManualRecordIcon sx={{ fontSize: '12px' }} /></ListItemIcon>}
        <ListItemText primary={item.name} />
      </ListItemButton>
    </List>


  );
}

export default NavItems;
