import React from 'react';
import Menu from '../components/Menu';
import menuData from '../components/menuData'; // Ensure this path is correct

const MenuPage = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Our Menu</h1>
      <Menu menuData={menuData} />
    </div>
  );
};

export default MenuPage;
