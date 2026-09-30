import { useSearchParams } from 'react-router-dom';
import { BookOpen, SlidersHorizontal } from 'lucide-react';
import SearchBox from '../components/SearchBox';
import CourseCard from '../components/CourseCard';
import { categories, filterCourses } from '../data/courses';

export default function Courses() {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') || '';
  const category = params.get('category') || 'Featured';
  const level = params.get('level') || 'All levels';
  const sort = params.get('sort') || 'relevant';
  const result = filterCourses(query, category, level, sort);
  function update(key: string, value: string) {
    const next = new URLSearchParams(params);
    if (value === 'Featured' || value === 'All levels' || value === 'relevant') next.delete(key);
    else next.set(key, value);
    setParams(next, { preventScrollReset: true });
  }
  return (
    <>
      <section className="search-hero grid-blue">
        <div className="container">
          <h1>Find Your Next Course</h1>
          <SearchBox key={query} initialValue={query} compact />
        </div>
      </section>
      <section className="container catalog-section">
        <div className="filter-toolbar">
          <span>
            <SlidersHorizontal size={17} /> Filters
          </span>
          <label>
            <span className="sr-only">Course level</span>
            <select value={level} onChange={(e) => update('level', e.target.value)}>
              <option>All levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
            </select>
          </label>
          <label className="sort-select">
            <span className="sr-only">Sort courses</span>
            <select value={sort} onChange={(e) => update('sort', e.target.value)}>
              <option value="relevant">Most relevant</option>
              <option value="rating">Highest rated</option>
              <option value="popular">Most popular</option>
            </select>
          </label>
        </div>
        <div className="category-list catalog-categories" aria-label="Course categories">
          {categories.map((item) => (
            <button
              className={category === item ? 'category active' : 'category'}
              key={item}
              aria-pressed={category === item}
              onClick={() => update('category', item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="results-count" role="status">
          {result.length} {result.length === 1 ? 'course' : 'courses'}
          {query && <> for “{query}”</>}
        </p>
        {result.length ? (
          <div className="course-grid">
            {result.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <BookOpen />
            <h2>No courses found</h2>
            <p>Try a different search or reset your filters.</p>
            <button className="button button-lime" onClick={() => setParams({})}>
              Reset all filters
            </button>
          </div>
        )}
        <p className="catalog-note">
          You've explored the full demo collection. Keep learning, keep creating.
        </p>
      </section>
    </>
  );
}
