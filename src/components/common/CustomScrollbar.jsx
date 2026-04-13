import React from 'react';

export default function CustomScrollbar({ children, className = "" }) {
  return (
    <div 
      className={className}
      style={{
        scrollbarColor: "rgb(0, 136, 204) rgb(241, 241, 241)",
        scrollbarWidth: "thin",
      }}
    >
      {children}
    </div>
  );
}