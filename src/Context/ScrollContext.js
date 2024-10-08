import React, { createContext, useRef, useContext } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const resumeRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <ScrollContext.Provider value={{ homeRef, projectRef, resumeRef, footerRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
