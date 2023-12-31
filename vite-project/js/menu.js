const menu = [
    // sushis
    {
        foodName: "Dragon Roll",
        category: "Special",
        price: 14.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: true,
        dessert: false,
        image: "https://foreignfork.com/wp-content/uploads/2023/05/DragonRoll-FEATURE.jpg",
      },
      {
        foodName: "Rainbow Roll",
        category: "Special",
        price: 16.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://www.internationalcuisine.com/wp-content/uploads/2016/02/Japanese-rainbow-roll_-600x794-1.jpg",
      },
      {
        foodName: "Spicy Tuna Roll",
        category: "Appetizers",
        price: 8.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: true,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://129655557.cdn6.editmysite.com/uploads/1/2/9/6/129655557/s236665495549630432_p176_i5_w4032.jpeg?width=2400&optimize=medium",
      },
      {
        foodName: "California Roll",
        category: "Appetizers",
        price: 7.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: true,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://www.justonecookbook.com/wp-content/uploads/2022/12/California-Roll-6126-I-2.jpg",
      },
      {
        foodName: "Miso Soup",
        category: "Soup",
        price: 4.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: true,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://www.justonecookbook.com/wp-content/uploads/2022/06/Miso-Soup-8297-I.jpg",
      },
    // ramens
    {
        foodName: "Classic Shoyu Ramen",
        category: "Main",
        price: 11.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: true,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://assets.bonappetit.com/photos/57ae038653e63daf11a4e122/16:9/w_1280,c_limit/shoyu-ramen.jpg",
      },
      {
        foodName: "Spicy Miso Ramen",
        category: "Main",
        price: 13.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: true,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://dishingouthealth.com/wp-content/uploads/2022/01/SpicyMisoRamen_Square.jpg",
      },
      {
        foodName: "Vegetarian Shoyu Ramen",
        category: "Main",
        price: 10.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: true,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://gastroplant.com/wp-content/uploads/2019/11/1911_Vegan-Shoyu-Ramen_550.jpg",
      },
    //sandwiches
    {
        foodName: "California Sandwich",
        category: "Main",
        price: 9.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://emilybites.com/wp-content/uploads/2014/03/California-Club-Sandwich-8b-e1450200452787.jpg",
      },
      {
        foodName: "Katsu Chicken Sandwich",
        category: "Main",
        price: 12.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://www.justonecookbook.com/wp-content/uploads/2023/02/Crispy-Chicken-Sandwich-6164-I.jpg",
      },
      {
        foodName: "Turkey Sandwich",
        category: "Main",
        price: 8.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://www.favfamilyrecipes.com/wp-content/uploads/2021/07/Turkey-Sandwich-3-500x500.jpg",
      },
      //salad
    {
        foodName: "Kani Salad",
        category: "Salads",
        price: 6.99,
        alcBev: false,
        nonAlc: false,
        salad: true,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://thebigmansworld.com/wp-content/uploads/2023/09/kani-salad-recipe.jpg",
      },
      {
        foodName: "Avocado Salad",
        category: "Salads",
        price: 8.99,
        alcBev: false,
        nonAlc: false,
        salad: true,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://chocolatecoveredkatie.com/wp-content/uploads/2020/07/The-Best-Avocado-Salad-jpg.webp",
      },
      {
        foodName: "Caesar Salad",
        category: "Salads",
        price: 7.99,
        alcBev: false,
        nonAlc: false,
        salad: true,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://www.recipetineats.com/wp-content/uploads/2016/05/Caesar-Salad_7-SQ.jpg",
      },
// side dishes
      {
        foodName: "Edamame",
        category: "Side",
        price: 4.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: true,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://www.eatingbirdfood.com/wp-content/uploads/2022/10/easy-edamame-hero.jpg",
      },
      {
        foodName: "Agedashi Tofu",
        category: "Side",
        price: 6.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: true,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://www.wandercooks.com/wp-content/uploads/2021/11/agedashi-tofu-3.jpg",
      },
      {
        foodName: "Takoyaki",
        category: "Side",
        price: 8.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: true,
        kids: false,
        chefsRec: true,
        dessert: false,
        image: "https://www.justonecookbook.com/wp-content/uploads/2013/10/Takoyaki-NEW-500x375.jpg",
      },
      {
        foodName: "Gyoza",
        category: "Side",
        price: 7.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: true,
        kids: false,
        chefsRec: true,
        dessert: false,
        image: "https://www.justonecookbook.com/wp-content/uploads/2020/04/Gyoza-3112-I.jpg",
      },
      {
        foodName: "Tempura",
        category: "Side",
        price: 9.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: true,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://thesuburbansoapbox.com/wp-content/uploads/2022/08/STempura-18.jpg",
      },
      // kids menu
      {
        foodName: "Kids' Bento Box",
        category: "Kids Menu",
        price: 9.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: true,
        kids: true,
        chefsRec: true,
        dessert: true,
        image: "https://assets.epicurious.com/photos/58dd783103394604d81d5903/16:9/w_2560%2Cc_limit/Sunday-Stash-Mini-Beef-and-Mushroom-Patties-Bento-Box-hero-30032017.jpg",
      },
      {
        foodName: "Chicken Teriyaki Nuggets",
        category: "Kids Menu",
        price: 7.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: true,
        chefsRec: false,
        dessert: false,
        image: "https://dudethatcookz.com/wp-content/uploads/2019/02/Boneless_Teriyaki_Chicken_Nuggets_8.jpg",
      },
      {
        foodName: "Cheese Ramen",
        category: "Kids Menu",
        price: 6.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: true,
        appetizer: false,
        kids: true,
        chefsRec: false,
        dessert: false,
        image: "https://www.whiskaffair.com/wp-content/uploads/2022/03/Cheese-Ramen-Noodles-2-3.jpg",
      },
      {
        foodName: "Vegetable Tempura Rice Bowl",
        category: "Kids Menu",
        price: 8.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: true,
        kids: true,
        chefsRec: false,
        dessert: false,
        image: "https://cdn.media.amplience.net/i/japancentre/recipe-354-tendon-tempura-rice-bowl/Tendon-tempura-rice-bowl?$poi$&w=1200&h=630&sm=c&fmt=auto",
      },
      {
        foodName: "Mini Sushi Rolls",
        category: "Kids Menu",
        price: 10.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: true,
        chefsRec: false,
        dessert: false,
        image: "https://kidseatincolor.com/wp-content/uploads/2022/04/Avocado-Sushi-Roll-1024x692.jpg",
      },
      {
        foodName: "Fruit and Yogurt Parfait",
        category: "Kids Menu",
        price: 5.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: true,
        chefsRec: false,
        dessert: true,
        image: "https://feelgoodfoodie.net/wp-content/uploads/2021/05/fruit-and-yogurt-parfait-09.jpg",
      },
      //desserts
      {
        foodName: "Chocolate Lava Cake",
        category: "Desserts",
        price: 8.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: true,
        image: "https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg",
      },
      {
        foodName: "Tiramisu",
        category: "Desserts",
        price: 9.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: true,
        dessert: true,
        image: "https://bakewithzoha.com/wp-content/uploads/2023/08/chocolate-tiramisu-featured.jpg",
      },
      {
        foodName: "Mango Sticky Rice",
        category: "Desserts",
        price: 7.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: true,
        image: "https://takestwoeggs.com/wp-content/uploads/2021/07/Thai-Mango-Sticky-Rice-Takestwoeggs-Process-Final-sq.jpg",
      },
      {
        foodName: "Matcha Mochi",
        category: "Japanese Desserts",
        price: 6.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: true,
        dessert: true,
        image: "https://zhangcatherine.com/wp-content/uploads/2023/04/12001200-1.jpg",
      },
      {
        foodName: "Dorayaki (Red Bean Pancake)",
        category: "Japanese Desserts",
        price: 5.99,
        alcBev: false,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: true,
        image: "https://www.justonecookbook.com/wp-content/uploads/2022/08/Japanese-Dorayaki-3716.jpg",
      },
      //alcoholics
      {
        foodName: "Sake",
        category: "Alcoholic Beverages",
        price: 12.99,
        alcBev: true,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://www.eatingwell.com/thmb/cnZ8M861ZSGj5DRe652o3h0Lfnk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sake-be83ad8997e94a21af28b48d3f27e298.jpg",
      },
      {
        foodName: "Japanese Whisky Highball",
        category: "Alcoholic Beverages",
        price: 14.99,
        alcBev: true,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://robbreport.com/wp-content/uploads/2021/07/japanese_whisky_highball.jpg",
      },
      {
        foodName: "Plum Wine (Ume-shu)",
        category: "Alcoholic Beverages",
        price: 10.99,
        alcBev: true,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://assets.cntraveller.in/photos/624d6883a3d87afae65fc978/3:2/w_1620,h_1080,c_limit/Umeshu-japanese-wine-lead.jpg",
      },
      {
        foodName: "Suntory Toki Highball",
        category: "Alcoholic Beverages",
        price: 16.99,
        alcBev: true,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://images.squarespace-cdn.com/content/v1/60b5b18fa63c193d1b6d77c1/8f45dd18-6a63-45a7-bdb7-175cb7adea4e/tokihighball11.jpg",
      },
      {
        foodName: "Japanese Plum Soju",
        category: "Alcoholic Beverages",
        price: 11.99,
        alcBev: true,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://www.bevalcinsights.com/wp-content/uploads/2022/02/B2B_BevAlcInsights_February_MA_OnTheRiseSoju_R8-1.jpg",
      },
      {
        foodName: "Mai Tai",
        category: "Alcoholic Beverages",
        price: 15.99,
        alcBev: true,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://www.platingsandpairings.com/wp-content/uploads/2020/07/mai-tai-cocktail-recipe-1460x2190.jpg",
      },
      {
        foodName: "Margarita",
        category: "Alcoholic Beverages",
        price: 13.99,
        alcBev: true,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://assets.bonappetit.com/photos/5b69f16006027f654a27cd19/1:1/w_2560%2Cc_limit/ba-margarita-1.jpg",
      },
      {
        foodName: "Old Fashioned",
        category: "Alcoholic Beverages",
        price: 14.99,
        alcBev: true,
        nonAlc: false,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://www.gimmesomeoven.com/wp-content/uploads/2014/04/Old-Fashioned-Recipe-5-1.jpg",
      },
//non alcohols
      {
        foodName: "Classic Lemonade",
        category: "Drinks",
        price: 4.99,
        alcBev: false,
        nonAlc: true,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://www.redpathsugar.com/sites/redpathsugar_com/files/_0002_Lemonade-174.jpg",
      },
      {
        foodName: "Mango Tango Smoothie",
        category: "Drinks",
        price: 5.99,
        alcBev: false,
        nonAlc: true,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://i.pinimg.com/originals/8e/10/a8/8e10a86d4a84e435eea85959bb026c10.jpg",
      },
      {
        foodName: "Matcha Latte",
        category: "Drinks",
        price: 6.99,
        alcBev: false,
        nonAlc: true,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte.jpg",
      },
      {
        foodName: "Strawberry Bubble Tea",
        category: "Drinks",
        price: 5.99,
        alcBev: false,
        nonAlc: true,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://plantbasedjess.com/wp-content/uploads/2023/06/IMG_6827.jpg",
      },
      {
        foodName: "Blueberry Mint Sparkler",
        category: "Drinks",
        price: 6.99,
        alcBev: false,
        nonAlc: true,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://culinarybutterfly.com/wp-content/uploads/2018/03/Blueberry-Mint-Sparkle.jpg",
      },
      {
        foodName: "Pineapple Coconut Smoothie",
        category: "Drinks",
        price: 5.99,
        alcBev: false,
        nonAlc: true,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://www.delscookingtwist.com/wp-content/uploads/2016/07/Tropical-Pineapple-Coconut-Smoothie_0145.jpg",
      },
      {
        foodName: "Honeydew Milk Tea",
        category: "Drinks",
        price: 6.99,
        alcBev: false,
        nonAlc: true,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://myveganminimalist.com/wp-content/uploads/2022/05/Honeydew-Melon-Milk-Tea-Boba-13.jpg",
      },
      {
        foodName: "Raspberry Lemonade",
        category: "Drinks",
        price: 4.99,
        alcBev: false,
        nonAlc: true,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://www.acouplecooks.com/wp-content/uploads/2021/05/Raspberry-Lemonade-007s.jpg",
      },
      {
        foodName: "Passion Fruit Iced Tea",
        category: "Drinks",
        price: 5.99,
        alcBev: false,
        nonAlc: true,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://www.girlgonegourmet.com/wp-content/uploads/2022/04/Passion-Fruit-Iced-Tea-25.jpg",
      },
      {
        foodName: "Watermelon Slush",
        category: "Drinks",
        price: 6.99,
        alcBev: false,
        nonAlc: true,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://www.joyousapron.com/wp-content/uploads/2021/08/Watermelon-Slush-Sq-Pic.jpg",
      },
      {
        foodName: "Peach Berry Smoothie",
        category: "Drinks",
        price: 5.99,
        alcBev: false,
        nonAlc: true,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://thedeliciousplate.com/wp-content/uploads/2022/01/Peach-Blueberry-Smoothie-22-2.jpg",
      },
      {
        foodName: "Coca-Cola",
        category: "Drinks",
        price: 2.99,
        alcBev: false,
        nonAlc: true,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://www.webstaurantstore.com/images/products/large/473849/1928114.jpg",
      },
      {
        foodName: "Pepsi",
        category: "Drinks",
        price: 2.99,
        alcBev: false,
        nonAlc: true,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://www.webstaurantstore.com/images/products/large/525546/1928118.jpg",
      },
      {
        foodName: "Sprite",
        category: "Drinks",
        price: 2.99,
        alcBev: false,
        nonAlc: true,
        salad: false,
        soup: false,
        appetizer: false,
        kids: false,
        chefsRec: false,
        dessert: false,
        image: "https://st4.depositphotos.com/36668420/39056/i/450/depositphotos_390569198-stock-photo-glass-sprite-soda-water-ice.jpg",
      },
]
export {menu};


