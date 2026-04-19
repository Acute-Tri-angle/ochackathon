import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return(
        <div>
            <h1>Page not found</h1>
            <Link to = {"/"}>
            <button> Go Back home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;