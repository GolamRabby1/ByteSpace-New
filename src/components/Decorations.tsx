import Spiral from './Spiral';

export default function Decorations() {
  return (
    <div className="decorations" aria-hidden="true">
      <Spiral tone="lime" className="spring spring-lime" />
      <Spiral className="spring spring-white" />
      <Spiral className="spring spring-right" />
      <div className="hero-ring" />
      <div className="hero-cone" />
      <div className="hero-block" />
    </div>
  );
}
