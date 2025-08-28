import { createContext } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext();

export default function DataProcessing({ children }) {
  
  return (
    <DataContext.Provider
      value={{
        // Drawer for mobile
      
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
// Prop types validation
DataProcessing.propTypes = {
  children: PropTypes.node.isRequired,
};
