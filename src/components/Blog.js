import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Cloud Cost Optimization Best Practices',
      date: 'February 11, 2025',
      excerpt: 'Learn how to reduce your cloud costs by up to 30% with these proven strategies...',
      author: 'John Smith',
      category: 'Cost Optimization'
    },
    {
      title: 'The Future of SRE Automation',
      date: 'February 10, 2025',
      excerpt: 'Discover how AI is transforming Site Reliability Engineering...',
      author: 'Sarah Johnson',
      category: 'SRE'
    },
    {
      title: 'Cloud Security Best Practices',
      date: 'February 9, 2025',
      excerpt: 'Essential security measures every cloud-native application should implement...',
      author: 'Mike Wilson',
      category: 'Security'
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest from Our Blog
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Insights and updates from the CloudPioneer team
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-1">{post.category}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.author}</span>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
