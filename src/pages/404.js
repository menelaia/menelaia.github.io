import React from 'react';
import { Link } from 'gatsby';

export default function NotFoundPage() {
  return (
    <main style={styles.page}>
      <title>Not found</title>
      <h1 style={styles.heading}>Page not found</h1>
      <p style={styles.paragraph}>
        Sorry{' '}
        <span aria-label="Pensive emoji" role="img">
          😔
        </span>{' '}
        couldn’t find what you were looking for.
        <br />
        <br />
        <Link to="/">← Go home</Link>
      </p>
    </main>
  );
}

const styles = {
  page: {
    color: '#232129',
    padding: '96px',
    fontFamily: '-apple-system, Roboto, sans-serif, serif',
  },
  heading: {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
  },
  paragraph: { marginBottom: 48 },
};
