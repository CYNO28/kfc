import { navbar } from "../component/navbar.js";
import footer from "../component/footer.js";
import startorder from "../component/startorder.js";

let start_order = document.querySelector("#start_order");
start_order.innerHTML = startorder();

let navbar1 = document.getElementById("navbar");
navbar1.innerHTML = navbar();
let ft = document.querySelector("#footer");
ft.innerHTML = footer();

const matchdaydata = [
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33781-0.jpg?ver=14.56",
    name: "Howzzat Biryani Combo",
    type: "Non veg",
    serve: "Serves 2-3",
    price: 725.0,
    about:
      "Large portions of Biryani & Chicken Popcorn, 2 Spicy Gravies, 4pc Wings & Pepsi PET [serves 2-3]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33783-0.jpg?ver=14.56",
    name: "Super 6s Bucket Meal",
    type: "Non veg",
    serve: "Serves 3",
    price: 978.0,
    about:
      "Save 21% on combo of 6 Hot & Crispy Chicken, 6 Strips, Medium Fries & Pepsi PET [serves 3]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33784-0.jpg?ver=14.56",
    name: "Super 4s Bucket Meal",
    type: "Non veg",
    serve: "Serves 2-3",
    price: 869.0,
    about:
      "Enjoy 4 Hot & Crispy Chicken, 4 Strips, Medium Popcorn & Pepsi PET - save Rs. 79 [serves 2-3]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33785-0.jpg?ver=14.56",
    name: "Super 6s Bucket",
    type: "Non veg",
    serve: "Serves 3",
    price: 869.0,
    about:
      "Save Rs. 203 on combo of 6 Hot & Crispy Chicken & 6 Strips [serves 3]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33786-0.jpg?ver=14.56",
    name: "Super 4s Bucket",
    type: "Non veg",
    serve: "Serves 2",
    price: 608.0,
    about:
      "Flat Rs. 107 off on combo of 4 Hot & Crispy Chicken & 4 Strips [serves 2]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33787-0.jpg?ver=14.56",
    name: "Dream Team Bucket",
    type: "Non veg",
    serve: "Serves 3-4",
    price: 944.0,
    about:
      "Leg before any wicket! Save 29% on 10 Leg Pieces & 4 Dips [serves 3-4]",
  },
];

const chikenbucket = [
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32775-0.jpg?ver=14.56",
    name: "5pc Leg Piece Bucket Meal",
    type: "Non veg",
    serve: "Serves 2",
    price: 650.0,
    about:
      "Save 22% on 5 chicken Leg Pieces, 2 dips, 1 Medium Fries & a Pepsi PET [serves 2 ]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30870-0.jpg?ver=14.56",
    name: "Friendship Bucket",
    type: "Non veg",
    serve: "Serves 3",
    price: 734.0,
    about:
      "Save Rs. 172 on 3pc Hot & Crispy, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30908-0.jpg?ver=14.56",
    name: "Bucket for Two",
    type: "Non veg",
    serve: "Serves 2-3",
    price: 629.0,
    about:
      "Flat Rs. 115 off on combo of 2pc Hot & Crispy, 2 pc Smoky Red Chicken & Large Popcorn [serves 2-3]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32295-0.jpg?ver=14.56",
    name: "10 strips & 2 Dips Bucket",
    type: "Non veg",
    serve: "Serves 2-3",
    price: 495.0,
    about:
      "Flat Rs. 125 off on this dipping combo of 10 pc chicken strips & 2 delicious dips [serves 2-3]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32774-0.jpg?ver=14.56",
    name: "5pc Leg Piece Bucket & 2 Dips",
    type: "Non veg",
    serve: "Serves 2",
    price: 524.0,
    about:
      "Save 22% on 5 chicken Leg Pieces, 2 dips, 1 Medium Fries & a Pepsi PET [serves 2 ]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32169-0.jpg?ver=14.56",
    name: "Ultimate Savings Bucket",
    type: "Non veg",
    serve: "Serves 2-3",
    price: 734.0,
    about:
      "Save 35% on signature bucket of 4pc Hot & crispy, 6 Wings, 4 strips, 3 Dips & Pepsi PET [serves 2-3 ]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32293-0.jpg?ver=14.56",
    name: "Big 12",
    type: "Non veg",
    serve: "Serves 2-3",
    price: 755.0,
    about:
      "Save 28% on 6pc Hot & Crispy Chicken, 6 Hot Wings & 2 dips [serves 2- 3]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31946-0.jpg?ver=14.56",
    name: "Mingles Bucket Meal",
    type: "Non veg",
    serve: "Serves 2",
    price: 503.0,
    about:
      "Save Rs. 71 on 4 Hot Wings, 2 Chicken Strips, Reg Popcorn, medium fries & Pepsi PET [serves 2 ]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32197-0.jpg?ver=14.56",
    name: "Big 8",
    type: "Non veg",
    serve: "Serves 2-3",
    price: 719.0,
    about:
      "Save 29% on this variety bucket of 4pc Hot & Crispy chicken & 4pc Smoky Red chicken [serves 2- 3 ]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-31897-41326.jpg?ver=14.56",
    name: "5pc Smoky Red Chicken",
    type: "Non veg",
    serve: "Serves 2",
    price: 524.0,
    about: "Flat 20% off on 5pc Smoky red grilled chicken [serves 2]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30640-40488.jpg?ver=14.56",
    name: "8 pc Hot & Crispy Chicken",
    type: "Non veg",
    serve: "Serves 3-4",
    price: 786.0,
    about: "Flat 20% off on 5pc Smoky red grilled chicken [serves 2]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30636-40484.jpg?ver=14.56",
    name: "6 Pc Hot & Crispy",
    type: "Non veg",
    serve: "Serves 2-3",
    price: 650,
    about: "Flat 10% off on 6pc signature Hot & crispy chicken [serves 2-3]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30865-0.jpg?ver=14.56",
    name: "6 Pc Hot & Crispy",
    type: "Non veg",
    serve: "Serves 2",
    price: 440,
    about:
      "Save 27% on this combo Chicken Zinger, Large Popcorn & 4pc Hot Wings [Serves 2]",
  },
];

const biriyanibucket = [
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33517-0.jpg?ver=14.56",
    name: "Classic Biryani Combo",
    type: "Non veg",
    serve: "Serves 2-3",
    price: 777,
    about:
      "Large portions of Biryani rice with 2 pc Hot & Crispy, 2 Gravies, 4 Strips & Pepsi PET [serves 2-3]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33518-0.jpg?ver=14.56",
    name: "Smoky Grilled Biryani Combo",
    type: "Non veg",
    serve: "Serves 2-3",
    price: 777,
    about:
      "Large portions of Biryani rice with 2 pc Smoky Red, 2 Gravies, Med Popcorn & Pepsi PET [serves 2-3]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33845-0.jpg?ver=14.56",
    name: "Howzzat Biryani Combo",
    type: "Non veg",
    serve: "Serves 2-3",
    price: 725,
    about:
      "Large portions of Biryani & Chicken Popcorn, 2 Spicy Gravies, 4pc Wings & Pepsi PET [serves 2-3]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33449-42353.jpg?ver=14.56",
    name: "Classic Chicken Biryani Bucket (Large)",
    type: "Non veg",
    serve: "Serves 2",
    price: 499,
    about:
      "Large portions of Biryani rice served with 2 pc Hot & Crispy Chicken & 2 Gravies [serves 2]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33450-42354.jpg?ver=14.56",
    name: "Popcorn Chicken Biryani Bucket (Large",
    type: "Non veg",
    serve: "Serves 2",
    price: 499,
    about:
      "Large portions of Biryani rice served with Chicken Popcorn & 2 Gravies [serves 2]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33451-42355.jpg?ver=14.56",
    name: "Smoky Grilled Biryani Bucket (Large",
    type: "Non veg",
    serve: "Serves 2",
    price: 499,
    about:
      "Large portions of Biryani rice served with 2 pc Smoky Red Chicken & 2 Gravies [serves 2]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33445-42349.jpg?ver=14.56",
    name: "Classic Chicken Biryani Bucket",
    type: "Non veg",
    serve: "Serves 1",
    price: 241,
    about:
      "Hyderabadi style Biryani rice served with 1 pc Hot & Crispy & Spicy Gravy [serves 1]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33446-42350.jpg?ver=14.56",
    name: "Popcorn Chicken Biryani Bucket",
    type: "Non veg",
    serve: "Serves 1",
    price: 241,
    about:
      "Hyderabadi style Biryani rice served with Popcorn & Spicy Gravy [serves 1]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33447-42351.jpg?ver=14.56",
    name: "Smoky Grilled Biryani Bucket",
    type: "Non veg",
    serve: "Serves 1",
    price: 241,
    about:
      "Hyderabadi style Biryani rice served with 1 pc Smoky Red & Spicy Gravy [serves 1]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33448-42352.jpg?ver=14.56",
    name: "Veg Biryani Bucket",
    type: "Veg",
    serve: "Serves 1",
    price: 198,
    about:
      "Hyderabadi style Biryani rice served with Veg Patty & Spicy Gravy [serves 1]",
  },
];
const boxmeals = [
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32050-0.jpg?ver=14.56",
    name: "All Chicken Box",
    type: "Non veg",
    price: 199,
    about:
      "A Box with your favorites! Get 1 pc Hot & Crispy, 2 Hot Wings & 1 Chicken Strip at a deal price",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32053-0.jpg?ver=14.56",
    name: "Classic Zinger Box",
    type: "Non veg",
    price: 329,
    about:
      "A classic deal for Zinger lovers : Get 1 Classic Zinger, 2 Hot Wings, 1 Veg Patty & Pepsi",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32383-0.jpg?ver=14.56",
    name: "Zinger Tandoori Box",
    type: "Non veg",
    price: 329,
    about:
      "A deal for the Tandoori lovers : Get 1 Tandoori Zinger, 2 Hot Wings, 1 Veg Patty & Pepsi",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33527-0.jpg?ver=14.56",
    name: "Popcorn Biryani Box",
    type: "Non veg",
    price: 345,
    about:
      "Biryani lovers unite : Get 1 Popcorn Biryani Bucket with gravy, 2 Hot Wings & Pepsi",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32055-0.jpg?ver=14.56",
    name: "Veg Zinger Box",
    type: "Veg",
    price: 329,
    about:
      "A deal for the Veg Zinger lovers : Get 1 Veg Zinger, 2 Veg Patties & a Pepsi",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33526-0.jpg?ver=14.56",
    name: "Veg Biryani Box",
    type: "Veg",
    price: 293,
    about:
      "Biryani lovers unite : Get 1 Veg Biryani Bucket with gravy, 1 Veg Patty & a Pepsi",
  },
];
const burger = [
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32576-0.jpg?ver=14.56",
    name: "2 Chicken Krisper Burgers",
    type: "Non veg",
    price: 240,
    about: "2 delicious chicken value burgers - at only 109 each!",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32573-0.jpg?ver=14.56",
    name: "2 Veg Krisper Burgers",
    type: "Veg",
    price: 166,
    about: "2 delicious veg value burgers - at only 69 each!",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32578-0.jpg?ver=14.56",
    name: "Chicken & Krispers Combo",
    type: "Non veg",
    price: 545,
    about:
      "Deal combo of 2 chicken value burgers, 2 pc Hot & Crispy, 2 dips & a chilled Pepsi PET",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32579-0.jpg?ver=14.56",
    name: "Veg-Non-Veg Krispers Combo",
    type: "Non veg",
    price: 387,
    about:
      "Pack of 4 burgers - 2 veg & 2 chicken value burgers at a deal price !",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32230-41486.jpg?ver=14.56",
    name: "Tandoori Zinger Burger",
    type: "Non veg",
    price: 209,
    about: "Chicken zinger with a delicious tandoori sauce",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32232-0.jpg?ver=14.56",
    name: "Mixed Zinger Doubles",
    type: "Non veg",
    price: 366,
    about: "Best-seller combo of classic chicken zinger & tandoori zinger",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30663-40505.jpg?ver=14.56",
    name: "Classic Zinger Burger",
    type: "Non veg",
    price: 199,
    about:
      "Signature burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32172-0.jpg?ver=14.56",
    name: "Buddy Meal",
    type: "Non veg",
    price: 524,
    about:
      "Share 2 Classic Chicken Zingers & a Medium Popcorn in this delightful combo for 2",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32403-41750.jpg?ver=14.56",
    name: "Veg Zinger Burger",
    type: "Veg",
    price: 188,
    about: "Signature veg burger with crispy patties, veggies & a tangy sauce",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32574-0.jpg?ver=14.56",
    name: "2 Veg Krispers Meal",
    type: "Veg",
    price: 282,
    about:
      "2 veg value burgers, crispy medium fries & 2 delicious dips at a deal price!",
  },
];

const stayhome = [
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33517-0.jpg?ver=14.56",
    name: "Classic Biryani Combo",
    type: "Non veg",
    serve: "Serves 2-3",
    price: 777,
    about:
      "Large portions of Biryani rice with 2 pc Hot & Crispy, 2 Gravies, 4 Strips & Pepsi PET [serves 2-3]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33518-0.jpg?ver=14.56",
    name: "Smoky Grilled Biryani Combo",
    type: "Non veg",
    serve: "Serves 2-3",
    price: 777,
    about:
      "Large portions of Biryani rice with 2 pc Smoky Red, 2 Gravies, Med Popcorn & Pepsi PET [serves 2-3]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33064-0.jpg?ver=14.56",
    name: "Super Snacker Combo",
    type: "Non veg",
    serve: "Serves 1-2",
    price: 473,
    about:
      "Best of snacks with a Medium Popcorn, 4 strips, 1 dip & a chilled Pepsi Black [serves 1-2]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33065-0.jpg?ver=14.56",
    name: "Chick’n Wings Combo",
    type: "Non veg",
    serve: "Serves 1-2",
    price: 473,
    about:
      "Enjoy 2pc Hot & Crispy Chicken, 4 wings , 2 dips & a chilled Pepsi Black [serves 1-2]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33519-0.jpg?ver=14.56",
    name: "Stay Home Bucket",
    type: "Non veg",
    serve: "Serves 3",
    price: 828,
    about:
      "Save 21% on 4pc Hot & Crispy, 4 Wings, 6 Chicken Strips & 2 dips [serves 3]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33520-0.jpg?ver=14.56",
    name: "Family Feast",
    type: "Non veg",
    serve: "Serves 3",
    price: 870,
    about:
      "Family Deal of 3 chicken zingers, a medium popcorn, medium fries & a chilled Pepsi PET [serves 3]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33066-0.jpg?ver=14.56",
    name: "Classic Zinger Meal",
    type: "Non veg",
    serve: "Serves 1",
    price: 362,
    about:
      "Favorite combo of Classic Zinger Burger, Medium Fries & a chilled Pepsi Black [serves 1]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33067-0.jpg?ver=14.56",
    name: "Chick'n Strips Solo Combo",
    type: "Non veg",
    serve: "Serves 1",
    price: 440,
    about:
      "Go solo with 1 pc Hot & Crispy, 3 strips, Medium Fries & a chilled Pepsi Black [serves 1]",
  },
  {
    img_url:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33068-0.jpg?ver=14.56",
    name: "Chick'n Fries Solo Combo",
    type: "Non veg",
    serve: "Serves 1",
    price: 440,
    about:
      "Try this classic pairing of 2pc Hot & Crispy, Medium Fries, 2 Dips & a chilled Pepsi Black [serves 1]",
  },
];

// let cart = JSON.parse(localStorage.getItem("cart")) || [];
function addtocart(el) {
  return function () {
    cart.push(el);
    navbar1.innerHTML = navbar();

    localStorage.setItem("cart", JSON.stringify(cart));
  };
}

matchdaydata.forEach((el) => {
  let div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `<img src="${el.img_url}" alt="">
    <h3>${el.name}</h3>
    <p>${el.type} ${el.serve}</p>
    <p>₹${el.price}</p>
    <p>${el.about}</p>
 `;

  let btn = document.createElement("button");
  btn.innerHTML = "Add to cart";
  btn.onclick = addtocart(el);

  div.appendChild(btn);

  document.querySelector("#display").appendChild(div);
});
function display(data, id) {
  data.forEach((el) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<img src="${el.img_url}" alt="">
        <div id="formargin">
        <h3>${el.name}</h3>
        
        <p><image src='https://online.kfc.co.in/static/media/Non_veg_dot_Icon.1b0fc8fd.svg'/>${el.type} ${el.serve}</p>
        
        
        <p>₹${el.price}</p>
        <p>${el.about}</p>
        </div>
        `;
    let center = document.createElement("center");

    let btn = document.createElement("button");
    btn.innerHTML = "Add to cart";
    btn.onclick = addtocart(el);
    center.appendChild(btn);
    div.appendChild(center);
    document.querySelector(`#${id}`).appendChild(div);
  });
}

// display(matchdaydata,"display");
display(biriyanibucket, "biriyanibucket");
display(boxmeals, "boxmeal");
display(burger, "burger");
display(stayhome, "stayhome");
display(chikenbucket, "normal_menu");

let links = document.querySelectorAll("#a1,#a2,#a3,#a4,#a5,#a6");
links = [...links];
console.log(links);
let elments = document.querySelectorAll(
  "#display,#normal_menu,#biriyanibucket,#boxmeal,#burger,#stayhome"
);
elments = [...elments];
for (let i = 0; i < links.length; i++) {
  linkhighlight(elments[i], links[i]);
  console.log(links[i]);
}
function linkhighlight(el, link) {
  el.addEventListener("mouseover", function () {
    link.classList.add("active");
    console.log(el, link);
  });
  el.addEventListener("mouseleave", function () {
    link.classList.remove("active");
  });
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

console.log("cart", cart);
