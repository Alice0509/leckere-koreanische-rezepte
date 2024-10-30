import React from 'react';

const MenuCount = ({ totalMenus }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '1.2em', color: '#333' }}>
      Unsere Website bietet derzeit insgesamt <strong>{totalMenus}</strong> Menüs an.
    </div>
  );
};

export default MenuCount;
