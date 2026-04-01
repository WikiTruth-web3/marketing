import { BlogHeader } from '@/components/sections/BlogHeader';
import { BlogGrid } from '@/components/sections/BlogGrid';
import React from 'react';

const Blog: React.FC = () => {


    return (
        <>
            {/* Header */}
            <BlogHeader />

            {/* Grid */}
            <BlogGrid />

        </>
    );
};

export default Blog;