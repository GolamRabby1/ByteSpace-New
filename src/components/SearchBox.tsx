import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function SearchBox({
  initialValue = '',
  compact = false,
}: {
  initialValue?: string;
  compact?: boolean;
}) {
  const [query, setQuery] = useState(initialValue);
  const navigate = useNavigate();
  function submit(event: FormEvent) {
    event.preventDefault();
    navigate(`/courses${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ''}`);
  }
  return (
    <form
      className={`search-box ${compact ? 'search-compact' : ''}`}
      onSubmit={submit}
      role="search"
    >
      <label className="search-input">
        <Search size={19} aria-hidden="true" />
        <span className="sr-only">Search courses, topics, or creators</span>
        <input
          type="search"
          placeholder="Course, topic, creator"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          maxLength={120}
        />
      </label>
      <button className="button button-lime" type="submit">
        Search
      </button>
    </form>
  );
}
