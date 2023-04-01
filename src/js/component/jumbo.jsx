import React from "react";

export const Jumbo = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">A Warm Wellcome!</h1>
        <p className="col-md-8 fs-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt omnis quidem repellendus itaque repudiandae ducimus odio blanditiis necessitatibus culpa sapiente doloribus nesciunt, velit aspernatur saepe sit optio eum fuga minima?
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Call to action!
        </button>
      </div>
    </div>
  );
};
