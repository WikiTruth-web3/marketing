import { BlogHeader } from '@/components/sections/BlogHeader';
import { BlogGrid } from '@/components/sections/BlogGrid';
import Grid from '@/components/background/Grid';
import React from 'react';

const Blog: React.FC = () => {


    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <Grid
                    color="rgba(122, 187, 58, 0.14)"
                    size={40}
                    lineWidth={1}
                    opacity={1}
                />
            </div>

            {/* Header */}
            <BlogHeader />

            {/* Grid */}
            <BlogGrid />
        </div>
    );
};

export default Blog;