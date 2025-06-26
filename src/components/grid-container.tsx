import React from 'react';

interface GridContainerProps {
  children: React.ReactNode;
}

const GridContainer: React.FC<GridContainerProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-6 gap-4">
      {children}
    </div>
  );
};

export default GridContainer; 