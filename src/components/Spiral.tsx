/** A continuous coil, shared by the landing and authentication artwork. */
export default function Spiral({
  tone = 'white',
  className = '',
}: {
  tone?: 'white' | 'lime';
  className?: string;
}) {
  return (
    <span className={`spiral ${className}`} aria-hidden="true">
      <img src={`/images/spiral-${tone}.png`} alt="" width="1225" height="1284" />
    </span>
  );
}
