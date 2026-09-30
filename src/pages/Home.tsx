import { useState } from 'react';
import { BookOpen, Compass, Fingerprint, Orbit, Sparkles, Zap } from 'lucide-react';
import {
  LearningPaths,
  GrowthSections,
  CreatorBanner,
  Testimonials,
} from '../components/LandingSections';
import SearchBox from '../components/SearchBox';
import CourseCard, { Avatars } from '../components/CourseCard';
import Decorations from '../components/Decorations';
import { categories, filterCourses } from '../data/courses';

export default function Home() {
  const [category, setCategory] = useState('Featured');
  const [more, setMore] = useState(false);
  const displayed = filterCourses('', category);
  return (
    <>
      <section className="hero grid-blue" aria-labelledby="hero-title">
        <div className="container hero-content">
          <h1 id="hero-title">
            Get Access to Hundreds
            <br className="desktop-break" /> Courses Available
          </h1>
          <p>
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide
            range of courses.
          </p>
          <SearchBox />
          <div className="hero-art">
            <div className="lime-orbit" />
            <img
              className="hero-student"
              src="/images/student.png"
              alt="A smiling student wearing headphones and holding a laptop"
              width="1254"
              height="1254"
              fetchPriority="high"
            />
            <div className="floating-card design-label">
              <strong>UI/UX Design</strong>
              <span>200 Courses · 1000+ Students</span>
            </div>
            <div className="floating-card progress-card">
              <span>Learning Progress</span>
              <strong>55%</strong>
              <div className="progress-track">
                <i />
              </div>
            </div>
            <div className="floating-card happy-card">
              <span>Happy Students</span>
              <div className="tiny-stars">4.5 (240) ★</div>
              <Avatars label="2K+" />
            </div>
          </div>
        </div>
        <Decorations />
      </section>
      <div className="partners" aria-label="Partner logo placeholders from the design">
        <div className="container partner-row">
          {[Orbit, Sparkles, Zap, Compass, Fingerprint].map((Icon, i) => (
            <span key={i}>
              <Icon aria-hidden="true" />
              <b>Logoipsum</b>
            </span>
          ))}
        </div>
      </div>
      <section
        className="section course-section container"
        id="courses"
        aria-labelledby="courses-title"
      >
        <div className="section-heading">
          <h2 id="courses-title">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p>
            At ByteSpace Courses, we bring you closer to life-changing knowledge. Explore a variety
            of courses across different fields, from technology to the arts, and make a difference
            in your career and life.
          </p>
        </div>
        <div className="category-list" aria-label="Course categories">
          {(more ? [...categories, 'Personal Development', 'Writing'] : categories).map((item) => (
            <button
              className={category === item ? 'category active' : 'category'}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              key={item}
            >
              {item}
            </button>
          ))}
          <button
            className="category category-more"
            onClick={() => setMore(!more)}
            aria-expanded={more}
          >
            {more ? '− Less' : '+ More'}
          </button>
        </div>
        <div className="course-grid">
          {displayed.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        {displayed.length === 0 && (
          <div className="empty-state" role="status">
            <BookOpen />
            <h3>More courses are on the way</h3>
            <p>Explore the featured collection while we add this category.</p>
            <button className="button button-lime" onClick={() => setCategory('Featured')}>
              Show featured courses
            </button>
          </div>
        )}
        <LearningPaths />
      </section>
      <GrowthSections />
      <CreatorBanner />
      <Testimonials />
    </>
  );
}
