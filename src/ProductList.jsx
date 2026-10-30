
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plantCategories = [
  {
    category: "Air Purifying Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 18.99, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b1e" },
      { id: 2, name: "Peace Lily", price: 15.99, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee" },
      { id: 3, name: "Spider Plant", price: 12.99, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333" },
      { id: 4, name: "Areca Palm", price: 24.99, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78" },
      { id: 5, name: "Rubber Plant", price: 21.99, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09" },
      { id: 6, name: "Boston Fern", price: 16.99, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e" }
    ]
  },
  {
    category: "Succulents",
    plants: [
      { id: 7, name: "Aloe Vera", price: 10.99, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09" },
      { id: 8, name: "Echeveria", price: 8.99, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a" },
      { id: 9, name: "Jade Plant", price: 13.99, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
      { id: 10, name: "Haworthia", price: 9.99, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411" },
      { id: 11, name: "Burro's Tail", price: 14.99, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09" },
      { id: 12, name: "String of Pearls", price: 17.99, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e" }
    ]
  },
  {
    category: "Hanging Plants",
    plants: [
      { id: 13, name: "Golden Pothos", price: 19.99, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e" },
      { id: 14, name: "English Ivy", price: 15.99, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
      { id: 15, name: "Heartleaf Philodendron", price: 18.99, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411" },
      { id: 16, name: "String of Hearts", price: 16.99, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e" },
      { id: 17, name: "Lipstick Plant", price: 22.99, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09" },
      { id: 18, name: "Spiderwort", price: 13.99, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isAdded = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  return (
    <div className="product-list-page">

      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">
            Cart 🛒 ({totalItems})
          </a>
        </div>
      </nav>

      <header className="products-header">
        <h1>Our Beautiful Houseplants</h1>
        <p>
          Discover our collection of beautiful plants
          and bring nature into your home.
        </p>
      </header>

      {plantCategories.map((category) => (
        <section
          className="plant-category"
          key={category.category}
        >
          <h2>{category.category}</h2>

          <div className="plant-grid">
            {category.plants.map((plant) => (
              <div className="plant-card" key={plant.id}>

                <img
                  src={plant.image}
                  alt={plant.name}
                  className="plant-image"
                />

                <h3>{plant.name}</h3>

                <p className="plant-price">
                  ${plant.price.toFixed(2)}
                </p>

                <button
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(plant)}
                  disabled={isAdded(plant.id)}
                >
                  {isAdded(plant.id)
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>

              </div>
            ))}
          </div>
        </section>
      ))}

    </div>
  );
}

export default ProductList;
