import "./Blogs.scss";
import React from "react";
import Card from "../components/Card/Card";
import blogs from "./data.js";

export default function Blogs() {
  return (
    <section className="Blogs">
      <div className="Container">
        <h2>Blogs</h2>
        <div className="BlogsItems">
          {blogs.map((blog, i) => (
            <Card key={i} data={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
