import './App.css';
import IconSidebar from './components/IconSidebar';
import SidebarMain from './components/SidebarMain';
import { IconProvider } from '../src/ContextApi/IconContext';

function Page() {
  return (
    <IconProvider>
      <div className="containers">
        <IconSidebar />
        <SidebarMain />
      </div>
    </IconProvider>
  );
}

export default Page;
