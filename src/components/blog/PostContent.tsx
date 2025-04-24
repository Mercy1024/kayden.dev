
import React from 'react';
import { Post } from '@/data/posts';
import { formatDate } from '@/lib/utils';
import { Facebook, Twitter, Linkedin, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReactMarkdown from 'react-markdown';

interface PostContentProps {
  post: Post;
}

export const PostContent = ({ post }: PostContentProps) => {
  const handleShareClick = (platform: string) => {
    const url = window.location.href;
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(post.title)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };
  
  return (
    <article className="max-w-3xl mx-auto">
      {/* Article Header */}
      <div className="mb-8 text-center">
        <div className="mb-4">
          <span className="text-sm font-medium text-muted-foreground">
            {post.category}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-4">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>{post.author}</span>
          <span>•</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
      </div>
      
      {/* Featured Image */}
      {post.imageUrl && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </div>
      )}
      
      {/* Article Content */}
      <div className="prose-custom">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      
      {/* Tags */}
      <div className="my-8 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span 
            key={tag}
            className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Share Buttons */}
      <div className="mt-10 pt-6 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Share this article</span>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => handleShareClick('twitter')}
              aria-label="Share on Twitter"
            >
              <Twitter className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => handleShareClick('facebook')}
              aria-label="Share on Facebook"
            >
              <Facebook className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => handleShareClick('linkedin')}
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => handleShareClick('copy')}
              aria-label="Copy link"
            >
              <Link className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostContent;
