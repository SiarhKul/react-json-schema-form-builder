import React, { useContext } from 'react';

const PortalSelectorPrefixContext = React.createContext('');
export const PortalSelectorPrefixProvider = ({ prefix, children }) => {
  return (
    <PortalSelectorPrefixContext.Provider value={{ prefix }}>
      {children}
    </PortalSelectorPrefixContext.Provider>
  );
};

export const usePortalSelectorPrefix = () => {
  const { prefix } = useContext(PortalSelectorPrefixContext);
  return prefix;
};
