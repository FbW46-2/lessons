//import React from "react";

export default function Form(props) {
  return (
    <form
      onSubmit={props.onSubmitHandler}
      className="d-flex flex-column align-items-center "
    >
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Title</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" name="title" />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Body</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" name="body" />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Image</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" name="image" />
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-25">
        SUBMIT POST
      </button>
    </form>
  );
}
