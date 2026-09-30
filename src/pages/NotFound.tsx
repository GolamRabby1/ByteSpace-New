import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <section className="container not-found">
      <span className="eyebrow">404 · PAGE NOT FOUND</span>
      <h1>Let's find your way back.</h1>
      <p>This page doesn't exist. Your next course is still waiting.</p>
      <Link className="button button-lime" to="/">
        Back to Home
      </Link>
    </section>
  );
}
