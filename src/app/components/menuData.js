const menuData = [
        {
            category: "Breads",
            items: [
                { name: "Garlic Naan", price: 3.50, description: "" },
                { name: "Tandoori Roti", price: 2.50, description: "" },
                { name: "Makki di Roti", price: 2.75, description: "" },
                { name: "Aloo Parantha", price: 3.99, description: "" },
                { name: "Chappati", price: 2.50, description: "" },
                { name: "Beef Keema Naan", price: 4.50, description: "" },
                { name: "Onion Naan", price: 3.50, description: "" },
                { name: "Lachha Parantha", price: 3.99, description: "" },
                { name: "Aaloo Naan", price: 3.99, description: "" },
                { name: "Aloo Kulcha", price: 5.00, description: "" },
                { name: "Peshawari Naan", price: 4.50, description: "" },
                { name: "Mooli Parantha", price: 5.00, description: "" },
                { name: "Paneer Parantha", price: 5.00, description: "" },
                { name: "Onion Parantha", price: 5.00, description: "" },
                { name: "Bhatura", price: 2.50, description: "" },
                { name: "Plain Parantha", price: 3.50, description: "" },
                { name: "Plain Naan", price: 3.00, description: "" },
                { name: "Plain Poori", price: 2.50, description: "" },
                { name: "Chicken Keema Naan", price: 4.50, description: "" },
                { name: "Gobhi Parantha", price: 5.00, description: "" }
            ]
        },
        {
            category: "Traditional Favourites",
            items: [
                { name: "Chana Masala", price: 11.99, description: "Chickpeas in a thick gravy." },
                { name: "Vegetable Korma", price: 12.99, description: "Mixed vegetables cooked in nuts and raisins with gravy sauce." },
                { name: "Aloo Gobhi", price: 12.99, description: "Cauliflower and potatoes cooked in spices." },
                { name: "Bombay Bhaji", price: 12.99, description: "Bombay-style mixed vegetables mashed with exotic spices." },
                { name: "Sarson da Saag", price: 12.99, description: "" },
                { name: "Veggie Xacuti", price: 13.99, description: "A delightful coconut and tamarind sauce with exotic spices." },
                { name: "Palak Paneer", price: 12.99, description: "Homemade cheese cooked in fresh spinach leaves." },
                { name: "Mutter Paneer", price: 12.99, description: "Homemade cheese and peas in curry sauce." },
                { name: "Daal Makhani", price: 11.99, description: "Black lentils cooked in tomatoes and spices." },
                { name: "Daal Tadka", price: 11.99, description: "" },
                { name: "Mix Vegetables", price: 12.99, description: "" },
                { name: "Baingan Bhartha", price: 12.99, description: "Grilled and mashed eggplant cooked with tomatoes and spices." },
                { name: "Bhindi Masala", price: 12.99, description: "Okra cooked with onions and special sauce." },
                { name: "Kadahi Paneer", price: 12.99, description: "Homemade cheese cooked with bell pepper, and onions in tomato sauce." },
                { name: "Malai Kofta", price: 12.99, description: "Veggie balls stuffed with nuts and raisins, simmered in a delightful gravy." },
                { name: "Punjabi Kadhi Pakora", price: 12.99, description: "Punjabi-style yogurt curry cooked in tomatoes, onions, and vegetable f..." },
                { name: "Shahi Paneer", price: 12.99, description: "Cottage cheese cooked with nuts and raisins in a special gravy." },
                { name: "Jeera Aloo", price: 11.99, description: "" },
                { name: "Chilli Paneer", price: 12.99, description: "" },
                { name: "Paneer Bhurji", price: 13.99, description: "" },
                { name: "Palak Kofta", price: 12.99, description: "Veggie balls in fresh spinach leaves." }
            ]
        },
        {
            category: "Hot Appetizers",
            items: [
              { name: "Vegetable Samosas (2 pcs)", price: 4.99, description: "Potatoes and peas stuffed in a savoury crispy pastry." },
              { name: "Aloo Tikki (2 pcs)", price: 4.99, description: "A patty of savory mashed potatoes spiced with black cumin and ginger." },
              { name: "Beef Samosa (2 pcs)", price: 5.99, description: "Ground beef stuffed in a savoury crispy pastry." },
              { name: "Chicken Samosa (2 pcs)", price: 5.99, description: "Chicken stuffed in a savoury crispy pastry." },
              { name: "Vegetable Pakora", price: 6.99, description: "Mixed vegetables rolled in gram flour and deep-fried." },
              { name: "Fish Pakora", price: 12.99, description: "" },
              { name: "Vegetable Platter", price: 8.99, description: "Combination of vegetarian appetizers. Samosa, aloo tikka, paneer pakora,..." },
              { name: "Paneer Pakora", price: 12.99, description: "" },
              { name: "Chilli Fish", price: 13.99, description: "" }
            ]
          },
          {
            category: "Chicken",
            items: [
              { name: "Butter Chicken", price: 15.99, description: "Chicken baked in a clay oven and cooked in tomato sauce." },
              { name: "Chicken Kadahi", price: 15.99, description: "Chicken cooked with bell peppers and onions in tomato sauce." },
              { name: "Chicken Curry", price: 15.99, description: "Chicken cooked in an authentic Punjabi style." },
              { name: "Chicken Chilli", price: 15.99, description: "Cooked with bell pepper and onions in a special spicy sauce." },
              { name: "Chicken Saag", price: 15.99, description: "Chicken cooked with fresh spinach leaves with spices." },
              { name: "Chicken Korma", price: 15.99, description: "Chicken cooked with nuts and raisins in special creamy sauce." },
              { name: "Chicken Xacuti", price: 16.99, description: "Delightful coconut and tamarind sauce with exotic spices." },
              { name: "Chicken Vindaloo", price: 15.99, description: "Hot and tangy sauce with potatoes." }
            ]
          },
          {
            category: "Biryani",
            items: [
              { name: "Peas Pulao", price: 5.99, description: "Rice cooked with onions, green peas, nuts, and cumin seeds." },
              { name: "Chicken Biryani", price: 14.99, description: "" },
              { name: "Vegetable Biryani", price: 13.99, description: "" },
              { name: "Shrimp Biryani", price: 14.99, description: "" },
              { name: "Coconut Rice", price: 5.99, description: "" },
              { name: "Lamb Biryani", price: 14.99, description: "" },
              { name: "Plain Rice", price: 4.50, description: "Fragrant rice cooked with a hint of cumin seeds." },
              { name: "Beef Biryani", price: 14.99, description: "" },
              { name: "Goat Biryani", price: 14.99, description: "" }
            ]
          },
          {
            category: "Specials",
            items: [
              { name: "Samosa Cholle", price: 7.99, description: "" },
              { name: "Aloo Tikki Cholle", price: 7.99, description: "" },
              { name: "Saag Thali", price: 13.99, description: "" },
              { name: "Aloo Kulcha Cholle", price: 10.99, description: "Served with raita." },
              { name: "Cholle Bhattura", price: 10.99, description: "Served with raita." },
              { name: "Spring Rolls", price: 5.99, description: "" },
              { name: "Chicken Hakka Noodles", price: 13.99, description: "" },
              { name: "Poori Cholle", price: 10.99, description: "Served with raita." },
              { name: "Vegetable Manchurian", price: 11.99, description: "" },
              { name: "Vegetables Hakka Noodles", price: 12.99, description: "" },
              { name: "Aloo Curry Poori", price: 10.99, description: "Served with raita." }
            ]
          },
          {
            category: "Salads and Chutneys",
            items: [
              { name: "Raita", price: 4.99, description: "" },
              { name: "Green Chutney", price: 2.50, description: "" },
              { name: "Kachumber Salad", price: 3.99, description: "Tomatoes, cucumber, carrots tossed in lemon, and herbs." },
              { name: "Mixed Pickle", price: 2.50, description: "" },
              { name: "Desi Salad", price: 3, description: "Onions, green chilies, and lemon. A traditional feature with Indian meals." },
              { name: "Dahi", price: 4.99, description: "" },
              { name: "Green Salad", price: 3.99, description: "" },
              { name: "Mango Chutney", price: 2.50, description: "" },
              { name: "Mixed Butter", price: 2.50, description: "" }
            ]
          },
          {
            category: "Cold Appetizers",
            items: [
              { name: "Chaat Paapri", price: 6.99, description: "Wheat chips, chickpeas, and potatoes tossed with yogurt and tamarind chutney." },
              { name: "Pappadum", price: 4.99, description: "Fried and served with mango chutney." },
              { name: "Golguppa (6 pcs)", price: 6.99, description: "" },
              { name: "Dahi Bhalla", price: 6.99, description: "Lentil dumplings in yogurt and tamarind chutney." },
              { name: "Bhalla Chat", price: 6.99, description: "Lentil dumplings served with wheat chips." },
              { name: "Bhel", price: 6.99, description: "A mixture of puffed rice, gram flour sev, tomato, and onions, served with various chutneys." },
              { name: "Dahi Batata Poori", price: 6.99, description: "Crisp poories topped with potatoes, gram flour sev, herbs, tamarind, and yogurt." }
            ]
          },
          {
            category: "Desserts",
            items: [
              { name: "Gulab Jamun", price: 3.99, description: "" },
              { name: "Garam Gajrela", price: 4.50, description: "" },
              { name: "Rasmalai", price: 3.99, description: "" },
              { name: "Mango Kulfi", price: 3.99, description: "" },
              { name: "Rasgulla", price: 3.99, description: "" },
              { name: "Coconut Kulfi", price: 3.99, description: "" },
              { name: "Faluda Kulfi", price: 4.99, description: "" },
              { name: "Kulfi (Plain)", price: 3.99, description: "" }
            ]
          },
          {
            category: "Lamb",
            items: [
              { name: "Lamb Curry", price: 15.99, description: "A traditional curry sauce with spices." },
              { name: "Lamb Rogan Josh", price: 15.99, description: "Tender pieces of lamb cooked with ginger and browned onions." },
              { name: "Lamb Vindaloo", price: 15.99, description: "Hot and tangy curry with potatoes." },
              { name: "Lamb Korma", price: 15.99, description: "Lamb cooked with nuts and raisins in a special creamy sauce." },
              { name: "Keema Mutter", price: 15.99, description: "Minced lamb with spices and fresh coriander leaves." },
              { name: "Lamb Kadahi", price: 15.99, description: "Lamb cooked with bell pepper and onions in tomato sauce." },
              { name: "Lamb Saag", price: 15.99, description: "Lamb cubes cooked with fresh spinach leaves and spices." }
            ]
          }, {
            category: "Tandoori Dishes",
            items: [
              { name: "Chicken Tikka", price: 14.99, description: "White meat marinated in yogurt and baked in a clay oven." },
              { name: "Chicken Tandoori", price: 11.99, description: "Chicken marinated in yogurt and baked in a clay oven." },
              { name: "Chicken Sheikh Kabab", price: 15.99, description: "Ground chicken with fresh herbs and spices grilled in a clay oven." },
              { name: "Lamb Sheikh Kabab", price: 15.99, description: "Ground lamb with fresh herbs and spices grilled in a clay oven." },
              { name: "Paneer Tikka", price: 14.99, description: "Homemade cheese marinated in yogurt and cooked in a clay oven." },
              { name: "Tandoori Mix Grill", price: 15.99, description: "" },
              { name: "Beef Sheikh Kabab", price: 15.99, description: "Ground beef with fresh herbs and spices grilled in a clay oven." }
            ]
          },
          {
            category: "Beef",
            items: [
              { name: "Beef Vindaloo", price: 15.99, description: "Hot and tangy curry with potatoes." },
              { name: "Beef Curry", price: 15.99, description: "A traditional curry sauce with spices." },
              { name: "Beef Saag", price: 15.99, description: "Beef cubes cooked with fresh spinach leaves with spices." },
              { name: "Beef Kadahi", price: 15.99, description: "Beef cooked with bell pepper and onions in tomato sauce." }
            ]
          },
          {
            category: "Dosa",
            items: [
              { name: "Masala Dosa", price: 8.99, description: "With potatoes and herbs with coconut chutney and sambar." },
              { name: "Idli Sambhar", price: 7.99, description: "Steamed rice and lentil cakes flavored with curry leaves, black pepper, and other spices." },
              { name: "Plain Dosa", price: 7.00, description: "Made with rice and lentils, served with coconut chutney and sambar." },
              { name: "Chicken Dosa", price: 13.99, description: "" },
              { name: "Sambhar", price: 4.00, description: "" },
              { name: "Paneer Dosa", price: 11.99, description: "" }
            ]
          },
          {
            category: "Goat",
            items: [
              { name: "Goat Kadahi", price: 15.99, description: "Goat cooked with bell pepper and onions in tomato sauce." },
              { name: "Goat Curry", price: 15.99, description: "A traditional curry sauce with spices." },
              { name: "Goat Saag", price: 15.99, description: "Goat cubes cooked with fresh spinach leaves with spices." },
              { name: "Goat Vindaloo", price: 15.99, description: "Hot and tangy curry with potatoes." }
            ]
          }, {
            category: "Beverages",
            items: [
              { name: "Mango Lassi", price: 5.00, description: "" },
              { name: "Chai", price: 3.25, description: "" },
              { name: "Coffee", price: 3.25, description: "" },
              { name: "Mango Shake", price: 5.00, description: "" },
              { name: "Orange Juice", price: 3.99, description: "" },
              { name: "Salt Lassi", price: 5.00, description: "" },
              { name: "Soft Drinks", price: 1.99, description: "" },
              { name: "Mango Juice", price: 3.99, description: "" },
              { name: "Sweet Lassi", price: 5.00, description: "" }
            ]
          },
          {
            category: "Seafood",
            items: [
              { name: "Shrimp Kadahi", price: 15.99, description: "" },
              { name: "Shrimp Curry", price: 15.99, description: "Shrimp cooked in tomatoes with curry sauce." },
              { name: "Shrimp Korma", price: 15.99, description: "Shrimp cooked with nuts and raisins in a creamy sauce." },
              { name: "Shrimp Saag", price: 15.99, description: "Shrimp cooked in fresh spinach leaves." },
              { name: "Shrimp Vindaloo", price: 15.99, description: "Shrimp cooked in a special tangy spicy sauce with potatoes." },
              { name: "Shrimp Tikka Masala", price: 15.99, description: "" },
              { name: "Shrimp Xacuti", price: 16.99, description: "Delightful coconut tamarind sauce that brings the flavor of coastal Goa." }
            ]
          },
          {
            category: "Lunch Specials (11:30-15:00)",
            items: [
              { name: "Non-Veggie Thali", price: 15.99, description: "Non-veggie dish, veggie dish, raita, rice, naan or roti, and dessert." },
              { name: "Veggie Thali", price: 13.99, description: "Two veggie dishes, raita, naan or roti, rice, and dessert." },
              { name: "Aloo Parantha Thali", price: 6.99, description: "Dahi, pickle, butter." },
              { name: "Gobhi Parantha Thali", price: 8.99, description: "" },
              { name: "Mooli Parantha Thali", price: 8.99, description: "" },
              { name: "Paneer Parantha Thali", price: 8.99, description: "" }
            ]
          }
    ];
    
    export default menuData;
  