import { useState, createContext } from 'react';

export const SidebarContext = createContext({} as SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  return (
    <SidebarContext.Provider
      value={{ sidebarToggle, toggleSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
