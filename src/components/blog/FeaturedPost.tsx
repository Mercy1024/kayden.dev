import React from "react";
import { Link } from "react-router-dom";
import { Post } from "@/data/posts";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface FeaturedPostProps {
  post: Post;
}

export const FeaturedPost = ({ post }: FeaturedPostProps) => {
  if (!post) return null;

  return (
    <div className="relative overflow-hidden rounded-lg bg-muted/30 border border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="p-6 md:p-8 flex flex-col justify-center test">
          {post.imageUrl && (
            <div className="relative h-64 md:h-full ">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="absolute inset-0 h-full w-full rounded-2xl object-cover"
              />
            </div>
          )}
          <div>
            <span className="text-sm font-medium text-muted-foreground">
              {post.category}
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif font-medium tracking-tight">
              <Link
                to={`/post/${post.slug}`}
                className="hover:underline underline-offset-4"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-muted-foreground">
                {post.author} · {formatDate(post.date)}
              </span>
            </div>
            <div className="mt-6">
              <Button asChild variant="outline">
                <Link to={`/post/${post.slug}`}>
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {post.imageUrl && (
          <div className="relative md:h-full">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedPost;
