
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PostContent from '@/components/blog/PostContent';
import PostCard from '@/components/blog/PostCard';
import { getPostBySlug, getRecentPosts } from '@/data/posts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = slug ? getPostBySlug(slug) : undefined;
  const relatedPosts = post ? getRecentPosts(post.id, 3) : [];
  
  useEffect(() => {
    // Redirect to 404 if post doesn't exist
    if (slug && !post) {
      navigate('/not-found');
    }
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [slug, post, navigate]);
  
  if (!post) return null;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <article className="py-10 md:py-16">
          <div className="container-blog">
            <PostContent post={post} />
          </div>
        </article>
        
        {/* Related Posts Section */}
        <section className="py-12 bg-muted/30">
          <div className="container-blog">
            <h2 className="text-2xl font-serif font-medium mb-6">You might also like</h2>
            <div className="divide-y divide-border/60">
              {relatedPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
