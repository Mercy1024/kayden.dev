import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FeaturedPost from "@/components/blog/FeaturedPost";
import PostCard from "@/components/blog/PostCard";
import SearchBar from "@/components/common/SearchBar";
import { getFeaturedPost, getRecentPosts } from "@/data/posts";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  const featuredPost = getFeaturedPost();
  const recentPosts = getRecentPosts(featuredPost?.id, 4);

  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container-blog">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <div className="mb-8 flex justify-center">
                <Avatar className="h-24 w-24 hover:scale-105 transition duration-200 border-4 border-primary/20">
                  <AvatarImage
                    src="/lovable-uploads/5d2b45d5-db9b-4835-8d98-82a48c3d658f.png"
                    alt="Kayden"
                    className="object-cover"
                  />
                  <AvatarFallback>KD</AvatarFallback>
                </Avatar>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-4">
                Clean Scribe
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A minimalist blog focused on personal insights, tech,
                spirituality and thoughtful content.
              </p>
            </div>

            <div className="max-w-xs mx-auto">
              <SearchBar />
            </div>
          </div>
        </section>

        {/* Featured Post Section */}
        <section className="py-6">
          <div className="container-blog">
            {featuredPost && (
              <div className="animate-fade-in-up">
                <FeaturedPost post={featuredPost} />
              </div>
            )}
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="py-12">
          <div className="container-blog">
            <h2 className="text-2xl font-serif font-medium mb-6">
              Recent Articles
            </h2>
            <div className="divide-y divide-border/60">
              {recentPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
