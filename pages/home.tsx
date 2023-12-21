import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PostCard from "../components/BlogCard";

interface Blog {
  _id: string;
  title: string;
  author: string;
  content: string;
  image: string;
  createdAt: string;
  // Add other properties as needed
}

function Home() {
  const [posts, setPosts] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/blogs");

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="flex flex-wrap m-6 mx-24">
        {posts.map((post) => (
          <div key={post._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
