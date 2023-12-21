import React from 'react';
import Link from 'next/link';

interface PostCardProps {
  post: {
    _id: string;
    title: string;
    author: string;
    content: string;
    image: string;
    createdAt: string;
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => (
  <Link href={`/blog/${post._id}`} passHref>
  <div className="max-w-sm my-2 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
    <img
      className="w-full h-60 object-cover rounded-t-lg"
      src={`http://localhost:8080/images/${post.image}`} 
      alt="blog_image"
    />
    <div className="px-6 py-4 bg-white rounded-b-lg">
      <h2 className="text-xl font-bold mb-2 truncate">{post.title}</h2>
      <p className="text-gray-700 text-base truncate">{post.content}</p>
      {/* You can add more details as needed */}
    </div>
  </div>
</Link>
);

export default PostCard;
