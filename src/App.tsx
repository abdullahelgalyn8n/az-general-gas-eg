/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { PRODUCTS, Product } from './data/catalog';
import { CartItem, calculateCartSummary } from './utils/shopLogic';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPostPage } from './pages/BlogPostPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

function AppContent() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('general_gas_cart_v1');
      if (saved) {
        const parsed = JSON.parse(saved) as Array<{ id: string; quantity: number }>;
        const hydrated: CartItem[] = [];
        for (const entry of parsed) {
          const found = PRODUCTS.find((p) => p.id === entry.id);
          if (found && entry.quantity > 0) {
            hydrated.push({ product: found, quantity: entry.quantity });
          }
        }
        return hydrated;
      }
    } catch {
      // ignore storage errors
    }
    return [];
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');

  useEffect(() => {
    try {
      const serialized = cart.map((c) => ({
        id: c.product.id,
        quantity: c.quantity,
      }));
      localStorage.setItem('general_gas_cart_v1', JSON.stringify(serialized));
    } catch {
      // ignore storage errors
    }
  }, [cart]);

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const summary = calculateCartSummary(cart);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#0F172A]">
      <ScrollToTop />
      <Navbar
        cartCount={summary.totalItems}
        cartTotalEgp={summary.finalTotalEgp}
        onOpenCart={() => setCartOpen(true)}
        onQuickSearch={(q) => setGlobalSearchQuery(q)}
      />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onAddToCart={(p) => handleAddToCart(p, 1)}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            }
          />
          <Route
            path="/index"
            element={
              <HomePage
                onAddToCart={(p) => handleAddToCart(p, 1)}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <ShopPage
                onAddToCart={(p) => handleAddToCart(p, 1)}
                onQuickView={(p) => setQuickViewProduct(p)}
                initialSearchQuery={globalSearchQuery}
              />
            }
          />
          <Route
            path="/product/:slug"
            element={
              <ProductDetailPage
                onAddToCart={handleAddToCart}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            }
          />
          <Route
            path="/services"
            element={<ServicesPage onAddToCart={handleAddToCart} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/blog/:slug"
            element={
              <BlogPostPage
                onAddToCart={(p) => handleAddToCart(p, 1)}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            }
          />
          <Route
            path="*"
            element={
              <HomePage
                onAddToCart={(p) => handleAddToCart(p, 1)}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            }
          />
        </Routes>
      </main>

      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p) => handleAddToCart(p, 1)}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
