import { Link } from 'react-router-dom';

function Links() {
  return (
    <nav>
      <Link to="/Trailers">Trailers</Link>
      <Link to="/Industries">Industries</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}

export default Links
