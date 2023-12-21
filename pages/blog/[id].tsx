import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";

interface BlogPageProps {
  blog: {
    _id: string;
    title: string;
    author: string;
    content: string;
    image: string;
    createdAt: string;
  };
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const response = await fetch(`http://localhost:8080/blogs/${params?.id}`);

    if (!response.ok) {
      return {
        notFound: true,
      };
    }

    const blog = await response.json();

    return {
      props: { blog },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};

const BlogPage: NextPage<BlogPageProps> = ({ blog }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleUpdate = () => {
    console.log(`Updating blog with ID: ${blog._id}`);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/blogs/${blog._id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        console.error(`Failed to delete blog with ID: ${blog._id}`);
        return;
      }
      router.push('/home');
    } catch (error) {
    }
  };
  

  return (
    <>
    <NavBar/>
    <div className="max-w-3xl mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-2">
        By {blog.author} | {new Date(blog.createdAt).toDateString()}
      </p>
      <img
        className="w-full mb-4"
        src={`http://localhost:8080/images/${blog.image}`}
        alt="blog_image"
      />
      <p className="text-gray-700">{blog.content}</p>

      <div className="flex justify-end mt-4">
        <button
          onClick={handleUpdate}
          className="bg-primary-dark hover:bg-primary-darker text-white font-bold py-2 px-4 mr-2 rounded">
          Update
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </div>
    </div>
    </>
  );
};

export default BlogPage;
