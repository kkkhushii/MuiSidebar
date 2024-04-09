import { createContext, useState } from 'react';

const IconContext = createContext();

// eslint-disable-next-line react/prop-types
export const IconProvider = ({ children }) => {
  const [selectedIconId, setSelectedIconId] = useState(1);

  return (
    <IconContext.Provider value={{ selectedIconId, setSelectedIconId }}>
      {children}
    </IconContext.Provider>
  );
};
export default IconContext;
