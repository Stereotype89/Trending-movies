import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Header, Link } from './SharedLayout.styled';

export function SharedLayout() {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Container>
        <main>
          <Suspense fallback={<p>Loading page...</p>}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
}
