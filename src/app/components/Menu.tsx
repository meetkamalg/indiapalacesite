'use client'
import React, { useState } from 'react';
import menuData from './menuData'; // make sure the path is correct to your menuData file
import { CartProvider } from '../cart/CartContext'; // adjust the import path as necessary

type MenuItem = {
  name: string;
  price: number;
  description: string;
  image: string; 
};

type MenuCategory = {
  category: string;
  items: MenuItem[];
};

type MenuProps = {
  menuData: MenuCategory[];
};

export default function Menu({ menuData }: MenuProps) {
  // State to track expanded categories. Initialize with all false.
  const [expanded, setExpanded] = useState<boolean[]>(menuData.map(() => false));
  const [cart, setCart] = useState<MenuItem[]>([]); // State to hold cart items

  const toggleCategory = (index: number) => {
    // Toggles the truth value for the specified category
    setExpanded(expanded.map((exp, i) => (i === index ? !exp : exp)));
  };
  // Function to add an item to the cart
  const addToCart = (item: MenuItem) => {
    setCart(currentCart => [...currentCart, item]); // Adds new item to the cart
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Menu Categories</h2>

        {menuData.map((category, index) => (
          <div key={category.category}>
            <h3 className="cursor-pointer mt-4 mb-2 text-lg font-bold text-gray-900" onClick={() => toggleCategory(index)}>
              {category.category}
            </h3>
            {expanded[index] && (
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {category.items.map((item) => (
                  <div key={item.name} className="group relative">
                    <div className="w-full h-60 bg-gray-200 flex items-center justify-center overflow-hidden rounded-md">
                      {/* Adding image */}
                      <img src={item.image} alt={item.name} className="object-cover" />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h4 className="text-base text-gray-950">{item.name}</h4>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{`$${item.price.toFixed(2)}`}</p>
                      <button 
                      className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                      onClick={() => addToCart(item)} // Calls addToCart with the item
                    >
                      Add to Cart
                    </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}