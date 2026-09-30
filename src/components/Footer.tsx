import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Brand from './Brand';

const footerPanels = {
  affiliate: {
    title: 'Affiliate Program',
    text: 'The affiliate program is not available in this assessment demo. You can explore the course collection or visit the creator signup page.',
  },
  contact: {
    title: 'Contact',
    text: 'No support email or contact service was supplied for this assessment demo. For questions about the assessment, use the contact details in your original invitation.',
  },
  help: {
    title: 'Help',
    text: 'Search for a course, filter by category or level, and open a course to explore its overview and lessons. The sign-in and signup pages demonstrate form validation; they do not create real accounts.',
  },
  cookies: {
    title: 'Cookies Settings',
    text: 'This demo does not set advertising or analytics cookies. There are no optional cookies to enable or disable.',
  },
};

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const [panel, setPanel] = useState<keyof typeof footerPanels | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (panel) dialog.current?.showModal();
  }, [panel]);

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-about">
          <Brand />
          <p>Stay Up to date with our latest features and releases by joining our newsletter.</p>
          <form
            className="newsletter"
            aria-label="Newsletter"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Your email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              required
              onChange={() => setSubmitted(false)}
            />
            <button className="button button-lime" type="submit">
              Search
            </button>
          </form>
          <small>
            By subscribing, you agree to our <Link to="/privacy">Privacy Policy</Link> and consent
            to receive updates from our company.
          </small>
          {submitted && (
            <p className="form-message" role="status">
              Thanks for your interest! This demo does not send or store subscriptions.
            </p>
          )}
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <div>
            <Link to="/courses">Featured Courses</Link>
            <Link to="/#learning-paths">Featured Categories</Link>
            <Link to="/courses?category=Freelance+%26+Entrepreneurship">Business</Link>
            <Link to="/courses?category=Data+Science">IT</Link>
            <Link to="/courses?category=Graphic+Design">Design</Link>
          </div>
          <div>
            <Link to="/courses?category=Web+Development">Development</Link>
            <Link to="/courses?category=Marketing">Marketing</Link>
            <Link to="/courses?category=Photography">Photography</Link>
            <Link to="/courses?q=money">Finance</Link>
            <Link to="/courses?category=Sport">Sport</Link>
          </div>
          <div>
            <Link to="/signup">Become a Creator</Link>
            <button type="button" onClick={() => setPanel('affiliate')}>
              Affiliate Program
            </button>
            <button type="button" onClick={() => setPanel('contact')}>
              Contact
            </button>
            <button type="button" onClick={() => setPanel('help')}>
              Help
            </button>
            <Link to="/#about-bytespace">About</Link>
          </div>
        </nav>
      </div>
      <div className="container footer-bottom">
        <small>@ 2023 ByteSpace. All rights reserved.</small>
        <div>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <button type="button" onClick={() => setPanel('cookies')}>
            Cookies Settings
          </button>
        </div>
      </div>
      <dialog
        ref={dialog}
        className="footer-dialog"
        aria-labelledby="footer-dialog-title"
        onClose={() => setPanel(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        {panel && (
          <div className="footer-dialog-content">
            <h2 id="footer-dialog-title">{footerPanels[panel].title}</h2>
            <p>{footerPanels[panel].text}</p>
            <form method="dialog">
              <button type="submit" className="button button-lime" autoFocus>
                Close
              </button>
            </form>
          </div>
        )}
      </dialog>
    </footer>
  );
}
