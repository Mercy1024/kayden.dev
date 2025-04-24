
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PostCard from '@/components/blog/PostCard';
import SearchBar from '@/components/common/SearchBar';
import { Button } from '@/components/ui/button';
import { posts, getAllCategories, searchPosts } from '@/data/posts';
import type { Post } from '@/data/posts';

const Archive = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search') || '';
  
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const categories = ['all', ...getAllCategories()];
  
  useEffect(() => {
    if (searchQuery) {
      setFilteredPosts(searchPosts(searchQuery));
      setSelectedCategory('all');
    } else {
      if (selectedCategory === 'all') {
        setFilteredPosts(posts);
      } else {
        setFilteredPosts(posts.filter(post => 
          post.category.toLowerCase() === selectedCategory.toLowerCase()
        ));
      }
    }
  }, [searchQuery, selectedCategory]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container-blog">
          <h1 className="text-3xl md:text-4xl font-serif font-medium mb-8">
            {searchQuery ? `Search Results: ${searchQuery}` : 'Blog Archive'}
          </h1>
          
          <div className="mb-8">
            <SearchBar />
          </div>
          
          {!searchQuery && (
            <div className="mb-8">
              <h2 className="text-sm font-medium mb-3">Filter by Category</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          {filteredPosts.length > 0 ? (
            <div className="divide-y divide-border/60">
              {filteredPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {searchQuery 
                  ? `No posts found matching "${searchQuery}"`
                  : `No posts found in the ${selectedCategory} category`}
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Archive;
