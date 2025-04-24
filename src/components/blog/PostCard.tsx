
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '@/data/posts';
import { formatDate } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="py-6 border-b border-border/60 last:border-0 group animate-fade-in-up">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {post.imageUrl && (
          <div className="md:col-span-1">
            <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg bg-muted">
              <Link to={`/post/${post.slug}`} className="block w-full h-full">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="object-cover w-full h-full transition duration-300 group-hover:scale-105"
                />
              </Link>
            </AspectRatio>
          </div>
        )}
        
        <div className={`flex flex-col gap-2 ${post.imageUrl ? 'md:col-span-3' : 'md:col-span-4'}`}>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{post.category}</span>
            <span>•</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          
          <h3 className="text-xl font-playfair font-medium tracking-tight">
            <Link to={`/post/${post.slug}`} className="hover:text-primary transition-colors duration-200">
              {post.title}
            </Link>
          </h3>
          
          <p className="text-muted-foreground leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-2 text-sm pt-2">
            <span>{post.author}</span>
            <span>•</span>
            <span className="text-muted-foreground">
              {post.tags.slice(0, 2).join(', ')}
              {post.tags.length > 2 && '...'}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
