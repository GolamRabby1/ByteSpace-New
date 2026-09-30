import { Link } from 'react-router-dom';

export default function Brand({
  light = false,
  markOnly = false,
}: {
  light?: boolean;
  markOnly?: boolean;
}) {
  return (
    <Link to="/" className={`brand ${light ? 'brand-light' : ''}`} aria-label="ByteSpace home">
      <svg viewBox="0 0 32 38" aria-hidden="true">
        <path d="M3 2h8v12c16-8 25 14 11 20C14 38 3 34 3 25V2Z" fill="currentColor" />
        <circle cx="18" cy="23" r="5" fill={light ? '#073aee' : '#fff'} />
      </svg>
      {!markOnly && <span>ByteSpace</span>}
    </Link>
  );
}
