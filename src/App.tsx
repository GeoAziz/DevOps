import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import './App.css';

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="text-primary-500 font-mono text-lg mb-4">$ loading...</div>
      <div className="w-64 h-1 bg-neutral-800 rounded overflow-hidden">
        <div className="w-1/2 h-full bg-primary-500 animate-pulse" />
      </div>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-bg-surface focus:font-mono focus:rounded-md focus:shadow-glow"
        >
          Skip to main content
        </a>
        <div className="min-h-screen bg-bg-page text-neutral-200 font-sans">
          <Navbar />
          <main id="main-content" className="pt-16">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
