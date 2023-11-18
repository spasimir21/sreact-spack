import { Link } from 'react-router-dom';
import { isClient } from './isClient';
import React from 'react';

function SSRLink({ to, children }: React.PropsWithChildren<{ to: string }>) {
  return isClient() ? <Link to={to}>{children}</Link> : <a href={to}>{children}</a>;
}

export { SSRLink };
