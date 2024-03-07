import Data from "../Data.json";
const PostList = (props) => {
  return (
    <div>
      {Data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};
export default PostList;
