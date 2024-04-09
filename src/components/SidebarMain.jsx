import IconContext from '../ContextApi/IconContext';
import { useContext } from 'react';
import SidebarContent from '../Data/SidebarData';
import '../Styles/sidebar.css';
import NavItems from './NavItems';
import NavCollapse from './NavCollapse';
import { Sidebar, Menu } from "react-mui-sidebar";

function SidebarMain() {
  const { selectedIconId } = useContext(IconContext);
  const selectedContent = SidebarContent.find((data) => data.id === selectedIconId);


  return (

    <Sidebar width={"270px"}>
      {selectedContent && (
        <div className="sidebar-content">
          {selectedContent.items.map((item, index) => (
            <Menu key={index} subHeading={item.heading}>
              {item.children.map((child, index) => (
                <div key={index}>
                  {child.children ? (
                    <NavCollapse item={child} />
                  ) : (
                    <NavItems item={child} />
                  )}
                </div>
              ))}
            </Menu>
          ))}
        </div>
      )}
    </Sidebar>

  );
}

export default SidebarMain;
