import "./Projects.scss";
import React from "react";
import Card from "../components/Card/Card";
import projects from "./data";

export default function Projects() {
  return (
    <section className="Projects">
      <div className="Container">
        <h2>Projects</h2>
        <div className="ProjectsItems">
          {projects.map((pro, i) => (
            <Card key={i} data={pro} />
          ))}
        </div>
      </div>
    </section>
  );
}
