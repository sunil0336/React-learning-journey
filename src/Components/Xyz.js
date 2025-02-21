// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// const Home = () => (
//   <div className="bg-[url('../src/wood.jpg')] bg-cover text-white h-screen flex flex-col items-center justify-center">
//     <h1 className="text-5xl font-bold mb-4">Welcome to Cozy Cafe</h1>
//     <p className="text-lg">Experience the best flavors with a warm ambiance</p>
//     <Link to="/menu" className="mt-6 px-6 py-2 bg-yellow-700 rounded-lg">View Menu</Link>
//   </div>
// );

// const Menu = () => {
//   const categories = [
//     { name: "Pasta & Maggie", path: "/menu/pasta" },
//     { name: "Hot Beverages", path: "/menu/hot-beverages" },
//     { name: "Rice Bowls", path: "/menu/rice-bowls" },
//     { name: "Cold Beverages", path: "/menu/cold-beverages" },
//     { name: "Desserts", path: "/menu/desserts" }
//   ];

//   return (
//     <div className="p-8 text-center bg-wood-pattern min-h-screen text-white">
//       <h2 className="text-3xl font-bold mb-6">Our Menu</h2>
//       <div className="grid grid-cols-2 gap-4">
//         {categories.map((item) => (
//           <Link
//             key={item.name}
//             to={item.path}
//             className="block p-4 bg-yellow-700 rounded-lg hover:bg-yellow-800"
//           >
//             {item.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// const CategoryPage = ({ title, items }) => (
//   <div className="p-8 text-center bg-wood-pattern min-h-screen text-white">
//     <h2 className="text-3xl font-bold mb-6">{title}</h2>
//     <ul>
//       {items.map((item, index) => (
//         <li key={index} className="p-2">{item}</li>
//       ))}
//     </ul>
//     <Link to="/menu" className="mt-4 block text-yellow-400">Back to Menu</Link>
//   </div>
// );

// const About = () => (
//   <div className="p-8 text-center text-white bg-wood-pattern min-h-screen">
//     <h2 className="text-3xl font-bold">About Us</h2>
//     <p>Cozy Cafe offers delicious homemade meals in a rustic wooden ambiance.</p>
//   </div>
// );

// const Contact = () => (
//   <div className="p-8 text-center text-white bg-wood-pattern min-h-screen">
//     <h2 className="text-3xl font-bold">Contact Us</h2>
//     <p>Email: contact@cozycafe.com | Phone: +91 98765 43210</p>
//   </div>
// );

// const Location = () => (
//   <div className="p-8 text-center text-white bg-wood-pattern min-h-screen">
//     <h2 className="text-3xl font-bold">Our Location</h2>
//     <p>123 Street, Pune, Maharashtra</p>
//   </div>
// );

// function Xyz() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route
//           path="/menu/pasta"
//           element={<CategoryPage title="Pasta & Maggie" items={["White Sauce Pasta", "Spicy Maggie"]} />}
//         />
//         <Route
//           path="/menu/hot-beverages"
//           element={<CategoryPage title="Hot Beverages" items={["Espresso", "Masala Chai"]} />}
//         />
//         <Route
//           path="/menu/rice-bowls"
//           element={<CategoryPage title="Rice Bowls" items={["Paneer Biryani", "Fried Rice"]} />}
//         />
//         <Route
//           path="/menu/cold-beverages"
//           element={<CategoryPage title="Cold Beverages" items={["Iced Coffee", "Lemonade"]} />}
//         />
//         <Route
//           path="/menu/desserts"
//           element={<CategoryPage title="Desserts" items={["Chocolate Brownie", "Cheesecake"]} />}
//         />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/location" element={<Location />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Xyz;


import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = () => (
  <div className="bg-[url('../src/wood.jpg')] bg-cover text-white h-screen flex flex-col items-center justify-center">
    <h1 className="text-5xl font-bold mb-4">Welcome to Cozy Cafe</h1>
    <p className="text-lg">Experience the best flavors with a warm ambiance</p>
    <Link to="/menu" className="mt-6 px-6 py-2 bg-yellow-700 rounded-lg">View Menu</Link>
  </div>
);

const Menu = () => {
  const categories = [
    { name: "Pasta & Maggie", path: "/menu/pasta" },
    { name: "Hot Beverages", path: "/menu/hot-beverages" },
    { name: "Rice Bowls", path: "/menu/rice-bowls" },
    { name: "Cold Beverages", path: "/menu/cold-beverages" },
    { name: "Desserts", path: "/menu/desserts" }
  ];

  return (
    <div className="p-8 text-center bg-wood-pattern min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-6">Our Menu</h2>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="block p-4 bg-yellow-700 rounded-lg hover:bg-yellow-800"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

const CategoryPage = ({ title, items }) => (
  <div className="p-8 text-center bg-wood-pattern min-h-screen text-white">
    <h2 className="text-3xl font-bold mb-6">{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div key={index} className="bg-yellow-700 p-4 rounded-lg shadow-lg">
          <img src="url('../src/wood.jpg')" alt={item.name} className="w-full h-40 object-cover rounded-lg" />
          <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
          <p className="text-sm text-gray-200">Price: ₹{item.price}</p>
        </div>
      ))}
    </div>
    <Link to="/menu" className="mt-4 block text-yellow-400">Back to Menu</Link>
  </div>
);

const pastaItems = [
  { name: "White Sauce Pasta", price: 250, image: "https://source.unsplash.com/200x200/?pasta" },
  { name: "Spicy Maggie", price: 100, image: "https://source.unsplash.com/200x200/?maggie" },
  { name: "Pesto Pasta", price: 270, image: "https://source.unsplash.com/200x200/?pesto" },
  { name: "Cheese Maggie", price: 120, image: "https://source.unsplash.com/200x200/?cheese-pasta" }
];

const hotBeveragesItems = [
  { name: "Espresso", price: 150, image: "https://source.unsplash.com/200x200/?espresso" },
  { name: "Masala Chai", price: 50, image: "https://source.unsplash.com/200x200/?chai" },
  { name: "Cappuccino", price: 180, image: "https://source.unsplash.com/200x200/?cappuccino" }
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/pasta" element={<CategoryPage title="Pasta & Maggie" items={pastaItems} />} />
        <Route path="/menu/hot-beverages" element={<CategoryPage title="Hot Beverages" items={hotBeveragesItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
