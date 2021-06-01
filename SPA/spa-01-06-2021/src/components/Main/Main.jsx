import "./Main.css";

function Main({ data }) {
  return (
    <main className="Main">
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </main>
  );
}

export default Main;
