import { useEffect } from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Auth from './pages/Auth';
import CourseDetail from './pages/CourseDetail';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default function App() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Discover your next skill',
      '/courses': 'Find your next course',
      '/login': 'Welcome back',
      '/signup': 'Create an account',
      '/forgot-password': 'Reset password',
      '/privacy': 'Privacy information',
      '/terms': 'Terms of use',
    };
    document.title = `ByteSpace — ${titles[pathname] || (pathname.startsWith('/courses/') ? 'Course overview' : 'Page not found')}`;
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      target?.scrollIntoView();
    } else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:id" element={<CourseDetail />} />
        <Route path="privacy" element={<Legal type="privacy" />} />
        <Route path="terms" element={<Legal type="terms" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="login" element={<Auth key="login" mode="login" />} />
      <Route path="signup" element={<Auth key="signup" mode="signup" />} />
      <Route path="forgot-password" element={<Auth key="reset" mode="reset" />} />
    </Routes>
  );
}
