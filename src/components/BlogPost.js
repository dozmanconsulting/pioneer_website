import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';
import './BlogPost.css';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPosts.find((p) => p.id === postId);

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this article: ${post.title}`;
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(post.title)}`;
        break;
      case 'instagram':
        // Instagram doesn't have a direct share URL, but we can open Instagram
        shareUrl = 'https://www.instagram.com/';
        break;
      default:
        break;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

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
        <article className="bg-white rounded-lg shadow-lg overflow-hidden p-8 prose prose-lg max-w-none blog-post-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        {/* Share and navigation */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
          <div className="flex space-x-4">
            <button
              onClick={() => handleShare('twitter')}
              className="social-share-button twitter"
            >
              <FaTwitter /> Twitter
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="social-share-button facebook"
            >
              <FaFacebook /> Facebook
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="social-share-button linkedin"
            >
              <FaLinkedin /> LinkedIn
            </button>
            <button
              onClick={() => handleShare('instagram')}
              className="social-share-button instagram"
            >
              <FaInstagram /> Instagram
            </button>
          </div>
        </div>

        {/* Navigation between posts */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          {blogPosts.findIndex((p) => p.id === postId) > 0 && (
            <Link
              to={`/blog/${blogPosts[blogPosts.findIndex((p) => p.id === postId) - 1].id}`}
              className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="text-sm text-gray-500">← Previous Article</span>
              <h4 className="text-lg font-semibold text-gray-900">
                {blogPosts[blogPosts.findIndex((p) => p.id === postId) - 1].title}
              </h4>
            </Link>
          )}
          {blogPosts.findIndex((p) => p.id === postId) < blogPosts.length - 1 && (
            <Link
              to={`/blog/${blogPosts[blogPosts.findIndex((p) => p.id === postId) + 1].id}`}
              className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow ml-auto text-right"
            >
              <span className="text-sm text-gray-500">Next Article →</span>
              <h4 className="text-lg font-semibold text-gray-900">
                {blogPosts[blogPosts.findIndex((p) => p.id === postId) + 1].title}
              </h4>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
