import error from '../.././../public/error.jpg'

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="mb-4 text-3xl text-red-500">Oops! Something went wrong.</h1>
            <p className="mb-6">We are having trouble loading this page. Please try again later.</p>
            <img className="mb-6" src={error} />
            <button className="btn btn-red">Retry</button>
        </div>
    );
};

export default Error;