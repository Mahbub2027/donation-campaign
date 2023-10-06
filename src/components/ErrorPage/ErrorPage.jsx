import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="text-center mt-52">
            <h1 className="text-4xl font-semibold mb-10">Oops!</h1>
            <p className="text-xl mb-5">Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;