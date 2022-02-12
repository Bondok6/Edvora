import './App.css';
import ProductFilter from './components/products/ProductFilter';
import ProductName from './components/products/ProductName';

function App() {
  return (
    <main>
      <section className="filter-section">
        <ProductFilter />
      </section>

      <section className="products-section">
        <h1 className="title">Edvora</h1>
        <h2 className="sub-title">Products</h2>

        <ProductName />
      </section>
    </main>
  );
}

export default App;
