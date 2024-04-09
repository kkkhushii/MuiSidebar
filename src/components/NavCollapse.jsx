/* eslint-disable react/prop-types */
import NavItems from '../components/NavItems'
import { Submenu } from 'react-mui-sidebar';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';




function NavCollapse({ item, level = 0 }) {
  const marginLeft = `${level * 20}px`;

  return (
    <Submenu title={item.name} icon={item.icon ? <item.icon /> : <FiberManualRecordIcon sx={{ fontSize: '12px' }} />} >
      {item.children.map((child, index) => (
        <div key={index} style={{ marginLeft }}>
          {child.children ? (
            <NavCollapse item={child} level={level + 1} />
          ) : (
            <NavItems item={child} />
          )}
        </div>
      ))}
    </Submenu>

  );
}

export default NavCollapse;
