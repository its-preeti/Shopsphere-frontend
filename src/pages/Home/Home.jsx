import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
      -
        <h1>Welcome to Shopsphere</h1>
         
        <p>
          Discover the latest products at the best prices.
        </p>
         
        <div className="hero-buttons">
          <button>Shop Now</button>
          <button>Explore</button>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Categories</h2>

    <div className="categories-container">
      
          <div className="category-card">
            Electronics
          </div>

          <div className="category-card">
            Fashion
          </div>

          <div className="category-card">
            Shoes
          </div>

          <div className="category-card">
            Watches
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;