import NewPost from "./components/NewPost";
import PostCard from "./components/PostCard";
import { useGetPostsQuery } from "./redux/api";

const App: React.FC = () => {
  const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery();
  console.log(isLoading, isError, isSuccess, data, error);
  return (
    <div>
      <h1>My App</h1>
      <p>My App is running!</p>

      <NewPost />

      {isLoading && <p>Loading...</p>}

      {/* Display error message if an error occurs */}
      {isError && (
        <p>
          {error && "status" in error && (
            <>Error: {error.status} - {JSON.stringify(error.data)}</>
          )}
          {error && !("status" in error) && <>{error.message}</>}
        </p>
      )}

      {isSuccess && data && data.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
};

export default App;