"use client";

import { toast } from "react-toastify";

const TestingPage = () => {
  return (
    <div>
      <h1>Testing Page</h1>
      <button onClick={() => toast.success("Toast is working!")}>
        Show Toast
      </button>
    </div>
  );
};

export default TestingPage;
