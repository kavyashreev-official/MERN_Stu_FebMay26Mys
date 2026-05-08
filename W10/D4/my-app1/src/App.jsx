import './App.css'
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from "./layouts/MainLayout";
import { AboutPage } from "./pages/AboutPage"
import { DashboardPage } from "./pages/DashboardPage"
import { HomePage } from "./pages/HomePage"
import { ProductsPage } from "./pages/ProductsPage"
import { ProductDetailsPage } from "./pages/ProductDetailsPage"
import { NotFoundPage } from "./pages/NotFoundPage"

function App() {
  const isAuthenticated=true;
  return (  
      < BrowserRouter >
      {/* BrowserRouter enables React Router in entire application */}
        <Routes>
          <Route
            path="/"
            element={<MainLayout />} >

            {/* Index Route */}
            <Route
              index element={<HomePage />} />
            {/* About Route */}
            <Route
              path="about"
              element={<AboutPage />} />
            {/* Products Page */}
            <Route
              path="products"
              element={<ProductsPage />} />
            {/* Dynamic Route */}
            <Route
              path="products/:id"
              element={<ProductDetailsPage />} />

            {/* Protected Route */}
            <Route
              path="dashboard"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}>
                  <DashboardPage />
                </ProtectedRoute>
              } />

            {/*404 not found route  */}
            <Route
              path="*"
              element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter >
  );
}

export default App
