import { useState, useContext } from "react";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";

const AddBlog = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setImage(selectedFile);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("author", author);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch("http://localhost:8080/blogs/create", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        console.error("Failed to create blog:", response.status);
        return;
      }

      router.push("/home");
    } catch (error) {
      console.error("Create error:", error);
    }
  };

  return (
    <div>
      <NavBar />
      <form
        className="max-w-5xl w-full mx-auto mt-6"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <span className="text-3xl flex flex-col items-center font-bold mb-6">
          ADD BLOG
        </span>
        <div className="mb-6">
          {image && (
            <img
              className="w-full h-64 object-cover"
              src={URL.createObjectURL(image)}
              alt=""
            />
          )}
        </div>
        <div className="mb-6">
          <label className="block uppercase text-gray-500 text-xs font-bold mb-2">
            Title
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            type="text"
            placeholder="Title"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block uppercase text-gray-500 text-xs font-bold mb-2">
            Author
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            type="text"
            placeholder="Author"
            autoFocus={true}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block uppercase text-gray-500 text-xs font-bold mb-2">
            Image
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            type="file"
            id="fileInput"
            onChange={handleFileChange}
          />
        </div>
        <div className="mb-6">
          <label className="block uppercase text-gray-500 text-xs font-bold mb-2">
            Description
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            placeholder="Tell your story..."
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="bg-primary-dark hover:bg-primary-darker text-white font-bold py-2 px-4 mr-2 rounded"
            type="submit"
            onClick={handleSubmit}
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
