import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h2>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to blog link */}
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to blog
        </Link>

        {/* Article header */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-gray-500">{post.readTime}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex items-center justify-between border-b border-gray-200 pb-6">
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 font-medium">{post.author}</p>
                  <p className="text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-sm text-gray-600 bg-gray-100 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Article content */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden p-8 prose prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        {/* Share and navigation */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex space-x-4">
            <button className="text-gray-600 hover:text-blue-600">
              Share on Twitter
            </button>
            <button className="text-gray-600 hover:text-blue-600">
              Share on LinkedIn
            </button>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            More articles →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
