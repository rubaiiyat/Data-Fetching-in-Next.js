"use client";
interface ErrorProps {
  error: Error;
  reset: () => void;
}

const error = ({ error, reset }: ErrorProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-xl text-error">Something went wrong</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()} className="btn btn-error">
        Try Again
      </button>
    </div>
  );
};

export default error;
