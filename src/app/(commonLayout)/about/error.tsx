"use client";

import { useEffect } from "react";

function AboutError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, []);
  return (
    <div>
      <h1> something went wrong... </h1>
      <button onClick={reset} className="p-2 border">
        Retry
      </button>
    </div>
  );
}

export default AboutError;
