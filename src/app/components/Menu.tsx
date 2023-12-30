'use client'
import React, { useState } from 'react';
import menuData from './menuData'; // make sure the path is correct to your menuData file

type MenuItem = {
  name: string;
  price: number;
  description: string;
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

  const toggleCategory = (index: number) => {
    // Toggles the truth value for the specified category
    setExpanded(expanded.map((exp, i) => (i === index ? !exp : exp)));
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Menu Categories</h2>

        {menuData.map((category, index) => (
          <div key={category.category}>
            {/* Clickable category title */}
            <h3 className="cursor-pointer mt-4 mb-2 text-lg font-bold text-gray-900" onClick={() => toggleCategory(index)}>
              {category.category}
            </h3>

            {/* Conditional rendering based on the expanded state */}
            {expanded[index] && (
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {category.items.map((item) => (
                  <div key={item.name} className="group relative">
                    {/* Placeholder for item image or any other content */}
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      {/* Insert your image or placeholder here */}
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h4 className="text-base text-gray-950">{item.name}</h4>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{`$${item.price.toFixed(2)}`}</p>
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
