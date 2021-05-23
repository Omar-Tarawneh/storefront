import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';
import Categories from './components/Categories/categories.jsx';
import Products from './components/Products/products.jsx';
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Categories />
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;
