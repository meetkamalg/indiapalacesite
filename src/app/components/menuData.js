const menuData = [
        {
          category: "Breads",
          items: [
              { name: "Garlic Naan", price: 3.50, description: "", image: "/breads/garlicnaan.png"},
              { name: "Tandoori Roti", price: 2.50, description: "", image: "/breads/tandooriroti.png"},
              { name: "Makki di Roti", price: 2.75, description: "", image: "/breads/makkiroti.png"},
              { name: "Aloo Parantha", price: 3.99, description: "", image: "/breads/alooparantha.png"},
              { name: "Chappati", price: 2.50, description: "", image: "/breads/chappati.png"},
              { name: "Beef Keema Naan", price: 4.50, description: "", image: "/breads/beefkeemanaan.png"},
              { name: "Onion Naan", price: 3.50, description: "", image: "/breads/onionnaan.png"},
              { name: "Lachha Parantha", price: 3.99, description: "", image: "/nopicture.png"},
              { name: "Aaloo Naan", price: 3.99, description: "", image: "/breads/aloonaan.png"},
              { name: "Aloo Kulcha", price: 5.00, description: "", image: "/breads/alookulcha.png"},
              { name: "Peshawari Naan", price: 4.50, description: "", image: "/nopicture.png"},
              { name: "Mooli Parantha", price: 5.00, description: "", image: "/nopicture.png"},
              { name: "Paneer Parantha", price: 5.00, description: "", image: "/nopicture.png"},
              { name: "Onion Parantha", price: 5.00, description: "", image: "/nopicture.png"},
              { name: "Bhatura", price: 2.50, description: "", image: "/breads/bhatura.png"},
              { name: "Plain Parantha", price: 3.50, description: "", image: "/breads/plainparantha.png"},
              { name: "Plain Naan", price: 3.00, description: "", image: "/breads/plainnaan.png"},
              { name: "Plain Poori", price: 2.50, description: "", image: "/breads/plainpoori.png"},
              { name: "Chicken Keema Naan", price: 4.50, description: "", image: "/nopicture.png"},
              { name: "Gobhi Parantha", price: 5.00, description: "", image: "/nopicture.png"},
          ]
        },
        {
          category: "Traditional Favourites",
          items: [
              { name: "Chana Masala", price: 11.99, description: "Chickpeas in a thick gravy.", image: "/traditionalFavorites/chanamasala.png" },
              { name: "Vegetable Korma", price: 12.99, description: "Mixed vegetables cooked in nuts and raisins with gravy sauce.", image: "/traditionalFavorites/vegetablekorma.png" },
              { name: "Aloo Gobhi", price: 12.99, description: "Cauliflower and potatoes cooked in spices.", image: "/traditionalFavorites/aloogobhi.png" },
              { name: "Bombay Bhaji", price: 12.99, description: "Bombay-style mixed vegetables mashed with exotic spices.", image: "/nopicture.png" },
              { name: "Sarson da Saag", price: 12.99, description: "", image: "/nopicture.png" },
              { name: "Veggie Xacuti", price: 13.99, description: "A delightful coconut and tamarind sauce with exotic spices.", image: "/nopicture.png" },
              { name: "Palak Paneer", price: 12.99, description: "Homemade cheese cooked in fresh spinach leaves.", image: "/traditionalFavorites/palakpaneer.png" },
              { name: "Mutter Paneer", price: 12.99, description: "Homemade cheese and peas in curry sauce.", image: "/traditionalFavorites/mutterpaneer.png" },
              { name: "Daal Makhani", price: 11.99, description: "Black lentils cooked in tomatoes and spices.", image: "/traditionalFavorites/daalmakhani.png" },
              { name: "Daal Tadka", price: 11.99, description: "", image: "/traditionalFavorites/daaltadka.png" },
              { name: "Mix Vegetables", price: 12.99, description: "", image: "/traditionalFavorites/mixvegetables.png" },
              { name: "Baingan Bhartha", price: 12.99, description: "Grilled and mashed eggplant cooked with tomatoes and spices.", image: "/traditionalFavorites/baingannhartha.png" },
              { name: "Bhindi Masala", price: 12.99, description: "Okra cooked with onions and special sauce.", image: "/traditionalFavorites/bhindimasala.png" },
              { name: "Kadahi Paneer", price: 12.99, description: "Homemade cheese cooked with bell pepper, and onions in tomato sauce.", image: "/traditionalFavorites/kadahipaneer.png" },
              { name: "Malai Kofta", price: 12.99, description: "Veggie balls stuffed with nuts and raisins, simmered in a delightful gravy.", image: "/traditionalFavorites/malaikofta.png" },
              { name: "Punjabi Kadhi Pakora", price: 12.99, description: "Punjabi-style yogurt curry cooked in tomatoes, onions, and vegetable f...", image: "/traditionalFavorites/punjabikadhipakora.png" },
              { name: "Shahi Paneer", price: 12.99, description: "Cottage cheese cooked with nuts and raisins in a special gravy.", image: "/nopicture.png" },
              { name: "Jeera Aloo", price: 11.99, description: "", image: "/traditionalFavorites/jeeraaloo.png" },
              { name: "Chilli Paneer", price: 12.99, description: "", image: "/traditionalFavorites/chillipaneer.png" },
              { name: "Paneer Bhurji", price: 13.99, description: "", image: "/traditionalFavorites/paneerbhurji.png" },
              { name: "Palak Kofta", price: 12.99, description: "Veggie balls in fresh spinach leaves.", image: "/nopicture.png" }
          ]
        },      
        {
          category: "Hot Appetizers",
          items: [
              { name: "Vegetable Samosas (2 pcs)", price: 4.99, description: "Potatoes and peas stuffed in a savoury crispy pastry.", image: "/hotappetizers/vegetablesamosa.png" },
              { name: "Aloo Tikki (2 pcs)", price: 4.99, description: "A patty of savory mashed potatoes spiced with black cumin and ginger.", image: "/hotappetizers/alootikki.png" },
              { name: "Beef Samosa (2 pcs)", price: 5.99, description: "Ground beef stuffed in a savoury crispy pastry.", image: "/hotappetizers/beefsamosa.png" },
              { name: "Chicken Samosa (2 pcs)", price: 5.99, description: "Chicken stuffed in a savoury crispy pastry.", image: "/hotappetizers/chickensamosa.png" },
              { name: "Vegetable Pakora", price: 6.99, description: "Mixed vegetables rolled in gram flour and deep-fried.", image: "/hotappetizers/vegetablepakora.png" },
              { name: "Fish Pakora", price: 12.99, description: "", image: "/hotappetizers/fishpakora.png" },
              { name: "Vegetable Platter", price: 8.99, description: "Combination of vegetarian appetizers. Samosa, aloo tikka, paneer pakora,...", image: "/nopicture.png" },
              { name: "Paneer Pakora", price: 12.99, description: "", image: "/hotappetizers/paneerpakora.png" },
              { name: "Chilli Fish", price: 13.99, description: "", image: "/hotappetizers/chillifish.png" }
          ]
        },      
        {
            category: "Biryani",
            items: [
              { name: "Peas Pulao", price: 5.99, description: "Rice cooked with onions, green peas, nuts, and cumin seeds.", image: "/biryani/peaspulao.png" },
              { name: "Chicken Biryani", price: 14.99, description: "", image: "/biryani/chickenbiryani.png" },
              { name: "Vegetable Biryani", price: 13.99, description: "", image: "/biryani/vegetablebiryani.png" },
              { name: "Shrimp Biryani", price: 14.99, description: "", image: "/biryani/shripbiryani.png" },
              { name: "Coconut Rice", price: 5.99, description: "", image: "/biryani/coconutrice.png" },
              { name: "Lamb Biryani", price: 14.99, description: "", image: "/biryani/lambbiryani.png" },
              { name: "Plain Rice", price: 4.50, description: "Fragrant rice cooked with a hint of cumin seeds.", image: "/biryani/plainrice.png" },
              { name: "Beef Biryani", price: 14.99, description: "", image: "/nopicture.png" },
              { name: "Goat Biryani", price: 14.99, description: "", image: "/nopicture.png" },
            ]
          },
          {
            category: "Specials",
            items: [
              { name: "Samosa Cholle", price: 7.99, description: "", image: "/specials/samosacholle.png" },
              { name: "Aloo Tikki Cholle", price: 7.99, description: "", image: "/specials/alootikkicholle.png" },
              { name: "Saag Thali", price: 13.99, description: "", image: "/nopicture.png" },
              { name: "Aloo Kulcha Cholle", price: 10.99, description: "Served with raita.", image: "/specials/alookulchacholle.png" },
              { name: "Cholle Bhattura", price: 10.99, description: "Served with raita.", image: "/nopicture.png" },
              { name: "Spring Rolls", price: 5.99, description: "", image: "/specials/springrolls.png" },
              { name: "Chicken Hakka Noodles", price: 13.99, description: "", image: "/specials/chickenhakkanoodles.png" },
              { name: "Poori Cholle", price: 10.99, description: "Served with raita.", image: "/specials/pooricholle.png" },
              { name: "Vegetable Manchurian", price: 11.99, description: "", image: "/specials/vegetablemanchurian.png" },
              { name: "Vegetables Hakka Noodles", price: 12.99, description: "", image: "/specials/vegetablehakkanoodles.png" },
              { name: "Aloo Curry Poori", price: 10.99, description: "Served with raita.", image: "/nopicture.png" }
            ]
          },
          {
            category: "Salads and Chutneys",
            items: [
              { name: "Raita", price: 4.99, description: "", image: "/saladsAndChutneys/raita.png" },
              { name: "Green Chutney", price: 2.50, description: "", image: "/nopicture.png" },
              { name: "Kachumber Salad", price: 3.99, description: "Tomatoes, cucumber, carrots tossed in lemon, and herbs.", image: "/saladsAndChutneys/kachumbersalad.png" },
              { name: "Mixed Pickle", price: 2.50, description: "", image: "/saladsAndChutneys/mixedpickle.png" },
              { name: "Desi Salad", price: 3, description: "Onions, green chilies, and lemon. A traditional feature with Indian meals.", image: "/nopicture.png" },
              { name: "Dahi", price: 4.99, description: "", image: "/nopicture.png"},
              { name: "Green Salad", price: 3.99, description: "", image: "/saladsAndChutneys/greensalad.png" },
              { name: "Mango Chutney", price: 2.50, description: "", image: "/saladsAndChutneys/mangochutney.png" },
              { name: "Mixed Butter", price: 2.50, description: "", image: "/nopicture.png" }
            ]
          },
          {
            category: "Cold Appetizers",
            items: [
              { name: "Chaat Paapri", price: 6.99, description: "Wheat chips, chickpeas, and potatoes tossed with yogurt and tamarind chutney.", image: "/coldAppetizers/chaatpaapri.png" },
              { name: "Pappadum", price: 4.99, description: "Fried and served with mango chutney.", image: "/coldAppetizers/pappadum.png" },
              { name: "Golguppa (6 pcs)", price: 6.99, description: "", image: "/coldAppetizers/golguppa.png" },
              { name: "Dahi Bhalla", price: 6.99, description: "Lentil dumplings in yogurt and tamarind chutney.", image: "/coldAppetizers/dahibhulla.png" },
              { name: "Bhalla Chat", price: 6.99, description: "Lentil dumplings served with wheat chips.", image: "/nopicture.png" },
              { name: "Bhel", price: 6.99, description: "A mixture of puffed rice, gram flour sev, tomato, and onions, served with various chutneys.", image: "/coldAppetizers/bhel.png" },
              { name: "Dahi Batata Poori", price: 6.99, description: "Crisp poories topped with potatoes, gram flour sev, herbs, tamarind, and yogurt.", image: "/coldAppetizers/dahibatatapoori.png" },
            ]
          },
          {
            category: "Desserts",
            items: [
              { name: "Gulab Jamun", price: 3.99, description: "", image: "/desserts/gulabjamun.png" },
              { name: "Garam Gajrela", price: 4.50, description: "", image: "/desserts/garamgajrela.png"},
              { name: "Rasmalai", price: 3.99, description: "", image: "/desserts/rasmalai.png" },
              { name: "Mango Kulfi", price: 3.99, description: "", image: "/desserts/mangokulfi.png" },
              { name: "Rasgulla", price: 3.99, description: "", image: "/desserts/rasgulla.png" },
              { name: "Coconut Kulfi", price: 3.99, description: "", image: "/desserts/coconutkulfi.png", image: "/nopicture.png" },
              { name: "Faluda Kulfi", price: 4.99, description: "", image: "/desserts/faludakulfi.png", image: "/nopicture.png" },
              { name: "Kulfi (Plain)", price: 3.99, description: "", image: "/desserts/kulfiplain.png", image: "/nopicture.png" },
            ]
          },
          {
            category: "Lamb",
            items: [
              { name: "Lamb Curry", price: 15.99, description: "A traditional curry sauce with spices.", image: "/lamb/lambcurry.png" },
              { name: "Lamb Rogan Josh", price: 15.99, description: "Tender pieces of lamb cooked with ginger and browned onions.", image: "/lamb/lambroganjosh.png" },
              { name: "Lamb Vindaloo", price: 15.99, description: "Hot and tangy curry with potatoes.", image: "/lamb/lambvindaloo.png" },
              { name: "Lamb Korma", price: 15.99, description: "Lamb cooked with nuts and raisins in a special creamy sauce.", image: "/lamb/lambkorma.png" },
              { name: "Keema Mutter", price: 15.99, description: "Minced lamb with spices and fresh coriander leaves.", image: "/lamb/keemamutter.png" },
              { name: "Lamb Kadahi", price: 15.99, description: "Lamb cooked with bell pepper and onions in tomato sauce.", image: "/lamb/lambkadahi.png" },
              { name: "Lamb Saag", price: 15.99, description: "Lamb cubes cooked with fresh spinach leaves and spices.", image: "/lamb/lambsaag.png" },
            ]
          }, {
            category: "Tandoori Dishes",
            items: [
              { name: "Chicken Tandoori", price: 11.99, description: "Chicken marinated in yogurt and baked in a clay oven.", image: "/tandooriDishes/chickentandoori.png" },
              { name: "Chicken Sheikh Kabab", price: 15.99, description: "Ground chicken with fresh herbs and spices grilled in a clay oven.", image: "/tandooriDishes/chickensheikhkabab.png" },
              { name: "Lamb Sheikh Kabab", price: 15.99, description: "Ground lamb with fresh herbs and spices grilled in a clay oven.", image: "/tandooriDishes/lambsheikhkabab.png" },
              { name: "Paneer Tikka", price: 14.99, description: "Homemade cheese marinated in yogurt and cooked in a clay oven.", image: "/tandooriDishes/paneertikka.png" },
              { name: "Tandoori Mix Grill", price: 15.99, description: "", image: "/tandooriDishes/tandoorimixgrill.png" },
              { name: "Beef Sheikh Kabab", price: 15.99, description: "Ground beef with fresh herbs and spices grilled in a clay oven.", image: "/nopicture.png" }
            ]
          },
          {
            category: "Beef",
            items: [
              { name: "Beef Vindaloo", price: 15.99, description: "Hot and tangy curry with potatoes.", image: "/beef/beefvindaloo.png" },
              { name: "Beef Curry", price: 15.99, description: "A traditional curry sauce with spices.", image: "/beef/beefcurry.png" },
              { name: "Beef Saag", price: 15.99, description: "Beef cubes cooked with fresh spinach leaves with spices.", image: "/nopicture.png" },
              { name: "Beef Kadahi", price: 15.99, description: "Beef cooked with bell pepper and onions in tomato sauce.", image: "/nopicture.png" }
            ]
          },
          {
            category: "Dosa",
            items: [
              { name: "Masala Dosa", price: 8.99, description: "With potatoes and herbs with coconut chutney and sambar.", image: "/dosa/masaladosa.png" },
              { name: "Idli Sambhar", price: 7.99, description: "Steamed rice and lentil cakes flavored with curry leaves, black pepper, and other spices.", image: "/dosa/idlisambar.png" },
              { name: "Plain Dosa", price: 7.00, description: "Made with rice and lentils, served with coconut chutney and sambar.", image: "/nopicture.png" },
              { name: "Chicken Dosa", price: 13.99, description: "", image: "/dosa/chickendosa.png" },
              { name: "Sambhar", price: 4.00, description: "", image: "/dosa/sambhar.png" },
              { name: "Paneer Dosa", price: 11.99, description: "", image: "/nopicture.png" }
            ]
          },
          {
            category: "Goat",
            items: [
              { name: "Goat Kadahi", price: 15.99, description: "Goat cooked with bell pepper and onions in tomato sauce.", image: "/goat/goatkadahi.png" },
              { name: "Goat Curry", price: 15.99, description: "A traditional curry sauce with spices.", image: "/goat/goatcurry.png" },
              { name: "Goat Saag", price: 15.99, description: "Goat cubes cooked with fresh spinach leaves with spices.", image: "/nopicture.png" },
              { name: "Goat Vindaloo", price: 15.99, description: "Hot and tangy curry with potatoes.", image: "/nopicture.png" }
            ]
          }, {
            category: "Beverages",
            items: [
              { name: "Mango Lassi", price: 5.00, description: "", image: "/beverages/mangolassi.png" },
              { name: "Chai", price: 3.25, description: "", image: "/beverages/chai.png" },
              { name: "Coffee", price: 3.25, description: "", image: "/beverages/coffee.png" },
              { name: "Mango Shake", price: 5.00, description: "", image: "/beverages/mangoshake.png" },
              { name: "Orange Juice", price: 3.99, description: "", image: "/beverages/orangejuice.png" },
              { name: "Salt Lassi", price: 5.00, description: "", image: "/beverages/saltlassi.png" },
              { name: "Soft Drinks", price: 1.99, description: "", image: "/beverages/softdrinks.png" },
              { name: "Mango Juice", price: 3.99, description: "", image: "/nopicture.png" },
              { name: "Sweet Lassi", price: 5.00, description: "", image: "/nopicture.png"}
            ]
          },
          {
            category: "Seafood",
            items: [
              { name: "Shrimp Kadahi", price: 15.99, description: "", image: "/seafood/shrimpkadahi.png" },
              { name: "Shrimp Curry", price: 15.99, description: "Shrimp cooked in tomatoes with curry sauce.", image: "/seafood/shrimpcurry.png" },
              { name: "Shrimp Korma", price: 15.99, description: "Shrimp cooked with nuts and raisins in a creamy sauce.", image: "/seafood/shrimpkorma.png" },
              { name: "Shrimp Saag", price: 15.99, description: "Shrimp cooked in fresh spinach leaves.", image: "/seafood/shrimpsaag.png" },
              { name: "Shrimp Vindaloo", price: 15.99, description: "Shrimp cooked in a special tangy spicy sauce with potatoes.", image: "/seafood/shrimpvindaloo.png" },
              { name: "Shrimp Tikka Masala", price: 15.99, description: "", image: "/nopicture.png" },
              { name: "Shrimp Xacuti", price: 16.99, description: "Delightful coconut tamarind sauce that brings the flavor of coastal Goa.", image: "/nopicture.png" }
            ]
          },
          {
            category: "Lunch Specials (11:30-15:00)",
            items: [
              { name: "Non-Veggie Thali", price: 15.99, description: "Non-veggie dish, veggie dish, raita, rice, naan or roti, and dessert.", image: "/lunchSpecials/nonveggiethali.png"},
              { name: "Veggie Thali", price: 13.99, description: "Two veggie dishes, raita, naan or roti, rice, and dessert.", image: "/lunchSpecials/veggiethali.png" },
              { name: "Aloo Parantha Thali", price: 6.99, description: "Dahi, pickle, butter.", image: "/nopicture.png" },
              { name: "Gobhi Parantha Thali", price: 8.99, description: "", image: "/nopicture.png" },
              { name: "Mooli Parantha Thali", price: 8.99, description: "", image: "/nopicture.png" },
              { name: "Paneer Parantha Thali", price: 8.99, description: "", image: "/nopicture.png" }
            ]
          }
    ];
    
    export default menuData;
  