import { useState, useEffect } from 'react';
import './App.css';
import ProductFilter from './components/products/ProductFilter';
// import ProductName from './components/products/ProductName';
import Products from './components/products/Products';

function App() {
  const [data, setData] = useState('');
  const [productFilter, setProductFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');

  useEffect(() => {
    if (data.length > 0) {
      const productDataFilter = data.filter((product) => {
        if (productFilter !== '') return product.brand_name === productFilter;
      });
      setData(productDataFilter);
    }
  }, [productFilter]);

  useEffect(() => {
    if (data.length > 0) {
      const stateDataFilter = data.filter((product) => {
        if (stateFilter !== '') return product.address.state === stateFilter;
      });
      setData(stateDataFilter);
    }
  }, [stateFilter]);

  useEffect(() => {
    if (data.length > 0) {
      const cityDataFilter = data.filter((product) => {
        if (cityFilter !== '') return product.address.city === cityFilter;
      });
      setData(cityDataFilter);
    }
  }, [cityFilter]);

  const getData = async () => {
    const resolve = await fetch('https://assessment-edvora.herokuapp.com');
    const data = await resolve.json();
    setData(data);
  };

  useEffect(() => getData(), []);
  return (
    <main>
      <section className="filter-section">
        <ProductFilter
          products={data}
          productFilter={productFilter}
          setProductFilter={setProductFilter}
          stateFilter={stateFilter}
          setStateFilter={setStateFilter}
          cityFilter={cityFilter}
          setCityFilter={setCityFilter}
        />
      </section>

      <section className="products-section">
        <h1 className="title">Edvora</h1>
        <h2 className="sub-title">Products</h2>

        <Products products={data} />
      </section>
    </main>
  );
}

export default App;
