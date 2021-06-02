import "./App.css";
import { useState } from "react";
import Form from "./components/Form/Form";
import Layout from "./components/Layout/Layout";

const initState = [
  {
    title: "First post",
    body: "First post body",
    image:
      "https://easybase.io/assets/images/posts_images/5-great-react-libraries-1.png",
  },
];

function App() {
  const [posts, setPosts] = useState(initState);
  /*
  const tuple = useState(initState);
  const posts = tuple[0];
  const setPosts = tuple[1];
*/
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
    console.log(" postPayload ==> ", postPayload);
  };

  return (
    <Layout>
      <Form onSubmitHandler={submitForm} />
      <div>Posts</div>
    </Layout>
  );
}

export default App;
