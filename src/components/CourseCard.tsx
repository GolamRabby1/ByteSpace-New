import { Link } from 'react-router-dom';
import { BarChart3, Star } from 'lucide-react';
import type { Course } from '../data/courses';
import { formatDuration } from '../data/courses';
import CourseVisual from './CourseVisual';

export function Avatars({ count = true, label = '26+' }: { count?: boolean; label?: string }) {
  return (
    <div className="avatars" aria-label="A community of learners">
      {[1, 2, 3, 4].map((n) => (
        <img
          src={`/images/creator-${n}.jpg`}
          alt=""
          width="32"
          height="32"
          loading="lazy"
          key={n}
        />
      ))}
      {count && <span>{label}</span>}
    </div>
  );
}

export default function CourseCard({
  course,
  decorative = false,
}: {
  course: Course;
  decorative?: boolean;
}) {
  const content = (
    <>
      <div className="course-image">
        <CourseVisual image={course.image} />
      </div>
      <div className="course-body">
        <div className="course-title-row">
          <h3>{course.title}</h3>
          <span className="rating">
            {course.rating.toFixed(1)} <Star size={13} />
          </span>
        </div>
        <p className="byline">by {course.creator}</p>
        <div className="course-community">
          <span className="level">
            <BarChart3 size={13} />
            {course.level}
          </span>
          <Avatars />
        </div>
        <p className="price">
          ${course.price}
          <span>/lifetime</span>
        </p>
      </div>
    </>
  );
  return decorative ? (
    <div className="course-card decorative-card">{content}</div>
  ) : (
    <Link
      to={`/courses/${course.id}`}
      className="course-card"
      aria-label={`${course.title}, ${course.rating} stars, $${course.price}, ${course.lessons} lessons, ${formatDuration(course.minutes)}`}
    >
      {content}
    </Link>
  );
}
