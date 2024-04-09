
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { MenuItem } from 'react-mui-sidebar';

function NavItems({ item }) {
  // const Icon = item.icon;
  return (

    <MenuItem>
      {item.icon ? <item.icon className="iconstyle" /> : <FiberManualRecordIcon sx={{ fontSize: '12px' }} className="iconstyle" />}
      {item.name}
    </MenuItem>

  );
}

export default NavItems;
