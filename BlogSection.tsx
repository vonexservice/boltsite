import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "5 Signs Your Business Needs Managed Print Services",
    excerpt: "Discover the key indicators that your Saskatchewan business could benefit from professional managed print services to reduce costs and improve efficiency.",
    author: "Vonex Team",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Managed Print",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    slug: "signs-business-needs-managed-print-services"
  },
  {
    id: 2,
    title: "Emergency Printer Repair: What to Do When Your Printer Fails",
    excerpt: "Step-by-step guide for Saskatchewan businesses when facing printer emergencies, including when to call for professional repair services.",
    author: "Technical Team",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Printer Repair",
    image: "https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    slug: "emergency-printer-repair-guide"
  },
  {
    id: 3,
    title: "Konica Minolta vs HP: Which Printer is Right for Your Business?",
    excerpt: "Compare leading printer brands to help Saskatchewan businesses choose the right office equipment for their specific needs and budget.",
    author: "Sales Team",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Equipment Guide",
    image: "https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    slug: "konica-minolta-vs-hp-printer-comparison"
  }
];

export default function BlogSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Print Industry Insights & Tips
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest print technology trends, maintenance tips, 
            and business solutions from Saskatchewan's print experts.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5 md:p-6">
                {/* Date & Read Time */}
                <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('en-CA', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-cyan-500 transition-colors duration-200 line-clamp-2"
                  >
                    {post.title}
                  </Link>
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-cyan-500 hover:text-cyan-600 font-semibold transition-colors duration-200 group/link"
                    aria-label={`Read full article: ${post.title}`}
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center bg-cyan-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
            aria-label="View all print industry articles and insights"
          >
            View All Articles
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>

        {/* Service Links Section - NEW: Links to service pages */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 mb-4">Explore our services:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link 
              to="/managed-print" 
              className="px-4 py-2 bg-cyan-50 text-cyan-600 rounded-full text-sm font-medium hover:bg-cyan-100 transition-colors"
            >
              Managed Print Services
            </Link>
            <Link 
              to="/repairs" 
              className="px-4 py-2 bg-cyan-50 text-cyan-600 rounded-full text-sm font-medium hover:bg-cyan-100 transition-colors"
            >
              Printer Repair
            </Link>
            <Link 
              to="/office-equipment" 
              className="px-4 py-2 bg-cyan-50 text-cyan-600 rounded-full text-sm font-medium hover:bg-cyan-100 transition-colors"
            >
              Equipment Sales
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 bg-cyan-500 text-white rounded-full text-sm font-medium hover:bg-cyan-600 transition-colors"
            >
              Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}