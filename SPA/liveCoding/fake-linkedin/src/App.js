import "./App.css";
import { useState } from "react";
import Form from "./components/Form/Form";
import Layout from "./components/Layout/Layout";
import Post from "./components/Post/Post";

const initState = [];

function App() {
  //const [posts, setPosts] = useState(initState);
  //console.log("useState('alex') ==> ", useState("Alex"));
  const store = useState(initState);
  const posts = store[0];
  const setPosts = store[1];

  const submitForm = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let body = e.target.body.value;
    let image = e.target.image.value;

    const postPayload = {
      title: title,
      body: body,
      image: image,
    };
    const clonePostsAndUpdate = [postPayload, ...posts];
    setPosts(clonePostsAndUpdate);
    console.log(" clonePostsAndUpdate ==> ", clonePostsAndUpdate);
  };

  return (
    <Layout>
      <Form onSubmitHandler={submitForm} />
      {posts.map((item, i) => (
        <Post postData={item} key={i} />
      ))}
    </Layout>
  );
}

export default App;
