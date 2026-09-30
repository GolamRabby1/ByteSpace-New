import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Eye, EyeOff } from 'lucide-react';
import Brand from '../components/Brand';
import Spiral from '../components/Spiral';
import CourseCard, { Avatars } from '../components/CourseCard';
import { courses } from '../data/courses';

type Mode = 'login' | 'signup' | 'reset';
export default function Auth({ mode }: { mode: Mode }) {
  const signup = mode === 'signup';
  const reset = mode === 'reset';
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const [provider, setProvider] = useState('');
  function change(field: keyof typeof values, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: '' }));
    setSuccess(false);
  }
  function submit(event: FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (signup && values.name.trim().length < 2)
      next.name = 'Please enter your full name (at least 2 characters).';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = 'Please enter a valid email address.';
    if (!reset && values.password.length < 8)
      next.password = 'Use a password with at least 8 characters.';
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(Object.keys(next)[0])?.focus();
      return;
    }
    setSuccess(true);
    setValues((previous) => ({ ...previous, password: '' }));
  }
  return (
    <main id="main-content" className="auth-page grid-blue">
      <div className="auth-shell">
        <Brand light markOnly />
        <div className="auth-layout">
          <div className="auth-story">
            <span>{signup ? 'Sign up and come in' : 'Sign in with ease'}</span>
            <p>
              {signup
                ? 'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at any time.'
                : 'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.'}
            </p>
            <div className="auth-collage" aria-hidden="true">
              <div className="collage-back">
                <CourseCard course={courses[1]} decorative />
              </div>
              <div className="collage-front">
                <CourseCard course={courses[2]} decorative />
              </div>
              <div className="collage-ring" />
              <div className="collage-triangle" />
              <div className="collage-happy">
                <strong>Happy Students</strong>
                <span>★★★★★</span>
                <Avatars />
              </div>
              <Spiral className="collage-spring" />
            </div>
          </div>
          <section className="auth-card" aria-labelledby="auth-title">
            <span className="auth-eyebrow">
              {signup ? 'Create an Account' : reset ? 'Reset Password' : 'Sign In'}
            </span>
            <h1 id="auth-title">
              {signup ? (
                <>
                  Welcome to
                  <br />
                  ByteSpace
                </>
              ) : reset ? (
                'Forgot your password?'
              ) : (
                'Welcome Back'
              )}
            </h1>
            {success ? (
              <div className="auth-success" role="status">
                <CheckCircle2 />
                <h2>
                  {reset
                    ? 'Reset form checked'
                    : signup
                      ? 'Your signup form looks good!'
                      : 'Your sign-in form looks good!'}
                </h2>
                <p>
                  {reset
                    ? 'This frontend demo does not send reset emails.'
                    : 'This is a frontend preview. No account was created and no credentials were sent or saved.'}
                </p>
                <Link className="button button-lime" to="/courses">
                  Explore Courses
                </Link>
                <button className="text-button" onClick={() => setSuccess(false)}>
                  Back to form
                </button>
              </div>
            ) : (
              <form className="auth-form" noValidate onSubmit={submit}>
                {signup && (
                  <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Jamie Davis"
                      value={values.name}
                      maxLength={100}
                      onChange={(e) => change('name', e.target.value)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      required
                    />
                    {errors.name && (
                      <p id="name-error" className="field-error">
                        {errors.name}
                      </p>
                    )}
                  </div>
                )}
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="designer@example.com"
                    value={values.email}
                    maxLength={254}
                    onChange={(e) => change('email', e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    required
                  />
                  {errors.email && (
                    <p id="email-error" className="field-error">
                      {errors.email}
                    </p>
                  )}
                </div>
                {!reset && (
                  <div className="field">
                    <label htmlFor="password">Password</label>
                    <div className="password-input">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete={signup ? 'new-password' : 'current-password'}
                        placeholder="At least 8 characters"
                        value={values.password}
                        maxLength={128}
                        onChange={(e) => change('password', e.target.value)}
                        aria-invalid={!!errors.password}
                        aria-describedby={errors.password ? 'password-error' : undefined}
                        required
                      />
                      <button
                        type="button"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        aria-pressed={showPassword}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    {errors.password && (
                      <p id="password-error" className="field-error">
                        {errors.password}
                      </p>
                    )}
                  </div>
                )}
                <div className="auth-submit-row">
                  {!signup && !reset && <Link to="/forgot-password">Forgot password?</Link>}
                  <button className="button button-lime" type="submit">
                    {signup ? 'Continue' : reset ? 'Check Reset Form' : 'Sign In'}
                  </button>
                </div>
              </form>
            )}
            {!signup && !reset && !success && (
              <>
                <div className="auth-divider">
                  <span>or</span>
                </div>
                <div className="social-buttons">
                  <button
                    type="button"
                    aria-label="Continue with Facebook"
                    onClick={() => setProvider('Facebook')}
                  >
                    <b>f</b>
                  </button>
                  <button
                    type="button"
                    aria-label="Continue with Google"
                    onClick={() => setProvider('Google')}
                  >
                    <b>G</b>
                  </button>
                </div>
                {provider && (
                  <p className="provider-note" role="status">
                    {provider} sign-in needs an authentication provider. It is not connected in this
                    frontend demo.
                  </p>
                )}
              </>
            )}
            <p className="auth-switch">
              {signup ? (
                <>
                  Already have an account? <Link to="/login">Login</Link>
                </>
              ) : reset ? (
                <Link to="/login">Back to login</Link>
              ) : (
                <>
                  New user? <Link to="/signup">Create an account</Link>
                </>
              )}
            </p>
            <p className="auth-demo-note">Frontend demo · No credentials are stored</p>
          </section>
        </div>
        <Link className="auth-home" to="/">
          Back to ByteSpace
        </Link>
      </div>
    </main>
  );
}
