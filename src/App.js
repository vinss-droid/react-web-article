import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Article from './components/Article';
import ArticleDetail from './components/ArticleDetail';
import Contact from './components/Contact';
import NotFound from './components/Errors/NotFound';
import Navbar from './components/Layouts/Navbar';

function App() {

  return (
    <div className="App">
      <Routers>
          <Navbar />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/article" element={<Article />} />
              <Route path="/article/:id" element={<ArticleDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </Routers>
    </div>
  );
}

export default App;
