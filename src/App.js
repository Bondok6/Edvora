import { useState, useEffect } from 'react';
import './App.css';
import ProductFilter from './components/products/ProductFilter';
import ProductName from './components/products/ProductName';
// import Products from './components/products/Products';

function App() {
  const [data, setData] = useState('');

  const getData = async () => {
    const resolve = await fetch('https://assessment-edvora.herokuapp.com');
    const data = await resolve.json();
    setData(data);
  };

  useEffect(() => getData(), []);
  return (
    <main>
      <section className="filter-section">
        <ProductFilter />
      </section>

      <section className="products-section">
        <h1 className="title">Edvora</h1>
        <h2 className="sub-title">Products</h2>

        {/* <Products products={data} /> */}

        <ProductName products={data} />
        <ProductName products={data} />
      </section>
    </main>
  );
}

export default App;
