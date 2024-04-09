import IconContext from '../ContextApi/IconContext';
import { useContext } from 'react';
import SidebarContent from '../Data/SidebarData';
import '../Styles/sidebar.css';
import NavItems from './NavItems';
import NavCollapse from './NavCollapse';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';

function SidebarMain() {
  const { selectedIconId } = useContext(IconContext);
  const selectedContent = SidebarContent.find((data) => data.id === selectedIconId);


  return (

    <List>
      {selectedContent && selectedContent.items.map((item, index) => (
        <div key={index}>
          <ListSubheader component="div" id={`nested-list-subheader-${index}`}>
            {item.heading}
          </ListSubheader>
          {item.children.map((child, childIndex) => (
            <div key={childIndex}>
              {child.children ? (
                <NavCollapse item={child} />
              ) : (
                <NavItems item={child} />
              )}
            </div>
          ))}
        </div>
      ))}
    </List>

  );
}

export default SidebarMain;
