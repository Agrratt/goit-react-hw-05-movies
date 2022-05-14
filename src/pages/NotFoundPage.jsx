import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <p>
            Sorry, page not found. Go to
            <Link to='/'> home page</Link>
        </p>
    )
    
}