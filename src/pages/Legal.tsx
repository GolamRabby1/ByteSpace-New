export default function Legal({ type }: { type: 'privacy' | 'terms' }) {
  return (
    <article className="container legal-page">
      <span className="eyebrow">FRONTEND ASSESSMENT DEMO</span>
      <h1>{type === 'privacy' ? 'Privacy Information' : 'Terms of Use'}</h1>
      {type === 'privacy' ? (
        <>
          <p>
            This is a demonstration website. Login, signup, password reset, and newsletter forms do
            not send personal information to a server or store it in the browser.
          </p>
          <h2>Data and assets</h2>
          <p>
            Course information is static sample data. Fonts and images are served from this website.
            No analytics, advertising trackers, or authentication services are configured by this
            application.
          </p>
          <p>
            The hosting provider may process technical request information as part of providing the
            website.
          </p>
        </>
      ) : (
        <>
          <p>
            This website demonstrates the ByteSpace frontend design for an assessment. It does not
            sell courses, process payments, or provide access to real course videos.
          </p>
          <h2>Design and content</h2>
          <p>
            The supplied ByteSpace design is credited to its original owner. Course descriptions and
            additional sections are demonstration content. The site is not an official commercial
            ByteSpace service.
          </p>
        </>
      )}
    </article>
  );
}
