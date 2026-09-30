import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BarChart3, CheckCircle2, Clock3, PlayCircle, Star, Users } from 'lucide-react';
import { courses, formatDuration } from '../data/courses';
import NotFound from './NotFound';

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((item) => item.id === id);
  const [tab, setTab] = useState('About');
  if (!course) return <NotFound />;
  return (
    <>
      <section className="detail-hero grid-blue">
        <div className="container">
          <Link to="/courses" className="breadcrumb">
            All courses / {course.category}
          </Link>
          <h1>{course.title}: A Comprehensive Guide</h1>
          <p>Unlock the power of creative learning with expert guidance.</p>
          <p className="detail-creator">by {course.creator}</p>
          <div className="detail-badges">
            <span>
              <BarChart3 />
              {course.level}
            </span>
            <span>
              <Star />
              {course.rating} ({course.reviews} reviews)
            </span>
            <span>
              <Users />
              {course.students} students
            </span>
          </div>
          <img
            className="detail-cover"
            src={`/images/${course.image}.jpg`}
            alt={`${course.category} course cover`}
            width="1200"
            height="580"
          />
        </div>
      </section>
      <section className="container detail-content">
        <div className="detail-main">
          <div className="detail-tabs" role="tablist" aria-label="Course information">
            {['About', 'Lessons', 'Reviews'].map((item, index) => (
              <button
                id={`tab-${item}`}
                role="tab"
                type="button"
                key={item}
                aria-selected={tab === item}
                aria-controls={`panel-${item}`}
                tabIndex={tab === item ? 0 : -1}
                className={`category ${tab === item ? 'active' : ''}`}
                onClick={() => setTab(item)}
                onKeyDown={(e) => {
                  const tabs = ['About', 'Lessons', 'Reviews'];
                  let next = index;
                  if (e.key === 'ArrowRight') next = (index + 1) % 3;
                  else if (e.key === 'ArrowLeft') next = (index + 2) % 3;
                  else if (e.key === 'Home') next = 0;
                  else if (e.key === 'End') next = 2;
                  else return;
                  e.preventDefault();
                  setTab(tabs[next]);
                  document.getElementById(`tab-${tabs[next]}`)?.focus();
                }}
              >
                {item}
              </button>
            ))}
          </div>
          <div role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} tabIndex={0}>
            {tab === 'About' ? (
              <>
                <h2>Description</h2>
                <p>{course.description}</p>
                <p>
                  Start with the foundations, explore practical techniques, and put what you learn
                  into practice. Each topic is designed to help you build a clearer understanding
                  and develop a project you can be proud of.
                </p>
                <h2>Sneak Peek</h2>
                <div className="sneak-peek">
                  {[course.image, 'digital', 'startup'].map((image, i) => (
                    <img
                      key={`${image}-${i}`}
                      src={`/images/${image}.jpg`}
                      width="240"
                      height="150"
                      alt={`Course inspiration ${i + 1}`}
                      loading="lazy"
                    />
                  ))}
                </div>
                <h2>Key Points</h2>
                <ul className="key-points">
                  {[
                    'Foundational concepts',
                    'Design principles and creative thinking',
                    'Practical exercises and project planning',
                    'Building a personal creative workflow',
                    'Presenting your finished project',
                  ].map((point) => (
                    <li key={point}>
                      <CheckCircle2 />
                      {point}
                    </li>
                  ))}
                </ul>
              </>
            ) : tab === 'Lessons' ? (
              <>
                <h2>Course Curriculum</h2>
                <p>
                  {course.lessons} lessons · {formatDuration(course.minutes)} total. Sample outline
                  for this frontend demonstration.
                </p>
                {[
                  'Welcome and course overview',
                  'Understanding the foundations',
                  'Tools and practical techniques',
                  'Your first guided project',
                  'Next steps and continued learning',
                ].map((lesson, index) => (
                  <div className="lesson" key={lesson}>
                    <PlayCircle />
                    <span>
                      {index + 1}. {lesson}
                    </span>
                    <small>Preview outline</small>
                  </div>
                ))}
              </>
            ) : (
              <>
                <h2>Learner Reviews</h2>
                <div className="review-score">
                  <strong>{course.rating}</strong>
                  <span>
                    <span className="stars">★★★★★</span>
                    <br />
                    {course.reviews} reviews in the sample course data
                  </span>
                </div>
                <p>Review submission is not connected in this frontend demo.</p>
              </>
            )}
          </div>
        </div>
        <aside className="enrollment-card">
          <span>Keep your curiosity growing</span>
          <h2>
            ${course.price}
            <s>${course.oldPrice}</s>
          </h2>
          <p>One course. A new world of possibilities.</p>
          <ul>
            <li>
              <PlayCircle />
              {course.lessons} lessons
            </li>
            <li>
              <Clock3 />
              {formatDuration(course.minutes)} of learning
            </li>
            <li>
              <BarChart3 />
              {course.level} level
            </li>
          </ul>
          <Link className="button button-lime" to="/signup">
            Start Your Journey
          </Link>
          <small>Frontend preview. No payment is collected.</small>
        </aside>
      </section>
    </>
  );
}
