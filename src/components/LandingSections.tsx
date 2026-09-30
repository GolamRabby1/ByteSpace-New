import { Link } from 'react-router-dom';
import {
  BriefcaseBusiness,
  Camera,
  CheckCircle2,
  Code2,
  Monitor,
  Paintbrush,
  PenTool,
} from 'lucide-react';
import CourseCard, { Avatars } from './CourseCard';
import Decorations from './Decorations';
import Spiral from './Spiral';
import { courses } from '../data/courses';

export function LearningPaths() {
  const paths = [
    { icon: PenTool, name: 'Design', category: 'Graphic Design' },
    { icon: Code2, name: 'Development', category: 'Web Development' },
    { icon: Monitor, name: 'IT & Software', category: 'Data Science' },
    { icon: BriefcaseBusiness, name: 'Business', category: 'Freelance & Entrepreneurship' },
    { icon: Paintbrush, name: 'Marketing', category: 'Marketing' },
    { icon: Camera, name: 'Photography', category: 'Photography' },
  ];
  return (
    <div className="learning-paths" id="learning-paths">
      <div className="section-heading">
        <h2>Explore Diverse Learning Paths at Bytespace</h2>
        <p>
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of
          courses spans various fields, ensuring there's something for everyone. Unleash your
          potential and explore our carefully curated categories.
        </p>
      </div>
      <div className="paths-grid">
        {paths.map(({ icon: Icon, name, category }) => (
          <Link
            key={name}
            to={`/courses?category=${encodeURIComponent(category)}`}
            className="path-card"
          >
            <span>
              <Icon aria-hidden="true" />
            </span>
            <h3>{name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function GrowthSections() {
  return (
    <section className="growth-section" id="about-bytespace">
      <div className="container">
        <div className="growth-row">
          <div className="growth-copy">
            <h2>
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>
            <p>
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>
            <div className="growth-stats" aria-label="Illustrative platform statistics">
              <div>
                <strong>12K</strong>
                <span>Students</span>
              </div>
              <div>
                <strong>70+</strong>
                <span>Courses</span>
              </div>
              <div>
                <strong>16</strong>
                <span>Creators</span>
              </div>
            </div>
          </div>
          <div className="growth-art" aria-hidden="true">
            <div className="growth-course">
              <CourseCard course={courses[0]} decorative />
            </div>
            <img
              src="/images/student.png"
              className="growth-student"
              alt=""
              width="1254"
              height="1254"
              loading="lazy"
            />
            <div className="floating-card progress-card">
              <span>Learning Progress</span>
              <strong>55%</strong>
              <div className="progress-track">
                <i />
              </div>
            </div>
            <Spiral tone="lime" className="small-spring" />
          </div>
        </div>
        <div className="growth-row creator-row" id="creators">
          <div className="creator-art" aria-hidden="true">
            <div className="creator-stat stat-one">
              <span>Total Revenue</span>
              <small>Jul 1–25</small>
              <strong>$120.29</strong>
              <div className="progress-track">
                <i />
              </div>
            </div>
            <div className="creator-stat stat-two">
              <span>Year to Date</span>
              <small>2021</small>
              <strong>$1,200.38</strong>
              <em>+12%</em>
            </div>
            <img
              src="/images/creator-student.png"
              alt=""
              width="1024"
              height="1536"
              loading="lazy"
            />
            <div className="floating-card happy-card">
              <span>Happy Students</span>
              <div className="tiny-stars">★★★★★</div>
              <Avatars label="2K+" />
            </div>
            <Spiral tone="lime" className="small-spring" />
          </div>
          <div className="growth-copy">
            <h2>
              Create & Manage
              <br />
              Courses Easily.
            </h2>
            <p>
              <strong>ByteSpace</strong> supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>
            <ul className="creator-benefits">
              {[
                'Share Your Expertise',
                'Monetize Your Passion',
                'Flexibility and Autonomy',
                'Build a Community',
              ].map((text) => (
                <li key={text}>
                  <CheckCircle2 aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CreatorBanner() {
  return (
    <section className="creator-banner grid-blue">
      <div className="container">
        <h2>
          Unlock Your Potential as a<br />
          Creator with ByteSpace
        </h2>
        <p>
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your first course on the ByteSpace Course Library.
        </p>
        <Link className="button button-lime" to="/signup">
          Join as Creator
        </Link>
      </div>
      <Decorations />
    </section>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Enthusiastic Learner',
      image: 1,
      quote:
        'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.',
    },
    {
      name: 'James L.',
      role: 'Lifelong Learner',
      image: 2,
      quote:
        "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    },
    {
      name: 'Alex B.',
      role: 'Inspired Creator',
      image: 3,
      quote:
        "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    },
  ];
  return (
    <section className="testimonials" id="community">
      <div className="container">
        <div className="testimonial-heading">
          <h2>
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p>
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <figure key={item.name}>
              <img
                src={`/images/creator-${item.image}.jpg`}
                width="90"
                height="90"
                alt=""
                loading="lazy"
              />
              <figcaption>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </figcaption>
              <blockquote>"{item.quote}"</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
