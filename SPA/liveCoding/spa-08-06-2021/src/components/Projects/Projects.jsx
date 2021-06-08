import "./Projects.scss";
import React from "react";
import Card from "../components/Card/Card";
import cardImg from "../../images/card.png";

const projects = [
  {
    title: "Project 1",
    img: cardImg,
  },
  {
    title: "Project 2",
    img: cardImg,
  },
  {
    title: "Project 3",
    img: cardImg,
  },
  {
    title: "Project 4",
    img: cardImg,
  },
  {
    title: "Project 5",
    img: cardImg,
  },
  {
    title: "Project 6",
    img: cardImg,
  },
];

export default function Projects() {
  return (
    <section className="Projects">
      <div className="Container">
        <h2>Projects</h2>
        <div className="ProjectsItems">
          {projects.map((pro, i) => (
            <Card key={i} projectData={pro} />
          ))}
        </div>
      </div>
    </section>
  );
}
