"use client"

import React, { useCallback, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import StatusLabel from './statusLabel';
import { BoxStatus } from '@/types/typesDapp/contracts/truthBox';

// Status step interface
export interface StatusStepFlowProps {
    status: BoxStatus;
    listedMode: 'Selling' | 'Auctioning';
    className?: string;
    responsive?: boolean;
    fixedSize?: boolean;
}

const StatusStepFlow: React.FC<StatusStepFlowProps> = ({
    status = 'Storing',
    listedMode = 'Selling',
    className,
    responsive = true,
    fixedSize = false
}) => {
    // Check if the status is activated based on the current path
    const isStatusActive = useCallback((checkStatus: BoxStatus): boolean => {
        if (!status) return false;

        const statusPaths: Record<BoxStatus, BoxStatus[]> = {
            'Storing': ['Storing'],
            'Selling': ['Storing', 'Selling'],
            'Auctioning': ['Storing', 'Auctioning'],
            'Paid': ['Storing', listedMode, 'Paid'],
            'Refunding': ['Storing', listedMode, 'Paid', 'Refunding'],
            'Delaying': ['Storing', listedMode, 'Paid', 'Delaying'],
            'Published': ['Storing', listedMode, 'Paid', 'Delaying', 'Published'],
            'Blacklisted': ['Storing', 'Blacklisted']
        };

        const activePath = statusPaths[status] || [];
        return activePath.includes(checkStatus);
    }, [status, listedMode]);

    // Logical node positions based on size
    const positions = useMemo(() => {
        const configs = {
            md: {
                storing: { x: 0, y: 60 },
                selling: { x: 150, y: 30 },
                auctioning: { x: 150, y: 90 },
                paid: { x: 300, y: 60 },
                delaying: { x: 450, y: 30 },
                refunding: { x: 450, y: 90 },
                published: { x: 600, y: 60 }
            },
        };
        return configs.md;
    }, []);

    // Mapping node status names to position keys
    const nodeStatusMap: Record<string, keyof typeof positions> = {
        'Storing': 'storing',
        'Selling': 'selling',
        'Auctioning': 'auctioning',
        'Paid': 'paid',
        'Delaying': 'delaying',
        'Refunding': 'refunding',
        'Published': 'published'
    };

    // Calculate bounding box for SVG viewBox and relative positioning
    const bounds = useMemo(() => {
        const xs = Object.values(positions).map(p => p.x);
        const ys = Object.values(positions).map(p => p.y);
        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);
        
        // Add padding to ensure labels are not clipped (approximate label dimensions)
        const paddingX = 60; 
        const paddingY = 30;
        
        return {
            x: minX - paddingX,
            y: minY - paddingY,
            width: (maxX - minX) + paddingX * 2,
            height: (maxY - minY) + paddingY * 2
        };
    }, [positions]);

    // Define connections between nodes
    const edges = useMemo(() => [
        { from: 'Storing', to: 'Selling' },
        { from: 'Storing', to: 'Auctioning' },
        { from: 'Selling', to: 'Paid' },
        { from: 'Auctioning', to: 'Paid' },
        { from: 'Paid', to: 'Delaying' },
        { from: 'Paid', to: 'Refunding' },
        { from: 'Delaying', to: 'Published' },
        { from: 'Refunding', to: 'Published' },
        // Special long connection mentioned in the previous iteration
        { from: 'Storing', to: 'Published' },
    ], []);

    // Helper to generate an orthogonal path with rounded corners
    const getRoundedPath = (x1: number, y1: number, x2: number, y2: number, radius = 12) => {
        if (Math.abs(y1 - y2) < 1) return `M ${x1} ${y1} L ${x2} ${y2}`;

        const dx = x2 - x1;
        const dy = y2 - y1;
        const xMid = x1 + dx / 2;
        
        // Horizontal -> Vertical -> Horizontal routing
        const r = Math.min(radius, Math.abs(dx) / 2, Math.abs(dy) / 2);
        const signY = Math.sign(dy);

        return `M ${x1} ${y1} L ${xMid - r} ${y1} Q ${xMid} ${y1}, ${xMid} ${y1 + r * signY} L ${xMid} ${y2 - r * signY} Q ${xMid} ${y2}, ${xMid + r} ${y2} L ${x2} ${y2}`;
    };

    return (
        <div 
            className={twMerge(
                "relative w-full overflow-hidden flex justify-center items-center", 
                "h-[200px]",
                className)} 
        >
            {/* SVG Layer for connectors - fixed size for internal drawing */}
            <svg 
                className="absolute inset-0 w-[350px] h-[200px] pointer-events-none left-1/2 -translate-x-1/2"
                viewBox={`${bounds.x} ${bounds.y} ${bounds.width} ${bounds.height}`}
                preserveAspectRatio="xMidYMid meet"
            >
                {edges.map((edge, i) => {
                    const fromPos = positions[nodeStatusMap[edge.from]];
                    const toPos = positions[nodeStatusMap[edge.to]];
                    if (!fromPos || !toPos) return null;

                    const isActive = isStatusActive(edge.from as BoxStatus) && isStatusActive(edge.to as BoxStatus);

                    return (
                        <path
                            key={i}
                            d={getRoundedPath(fromPos.x, fromPos.y, toPos.x, toPos.y)}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            className={isActive ? "text-primary/60" : "text-white/10"}
                        />
                    );
                })}
            </svg>

            {/* HTML Layer for StatusLabels */}
            <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
                <div className="relative w-[350px] h-[200px]">
                    {Object.entries(nodeStatusMap).map(([statusName, posKey]) => {
                        const pos = positions[posKey];
                        const isActive = isStatusActive(statusName as BoxStatus);
                        
                        // Calculate percentage positions relative to the viewBox bounds
                        const left = ((pos.x - bounds.x) / bounds.width) * 100;
                        const top = ((pos.y - bounds.y) / bounds.height) * 100;

                        return (
                            <div
                                key={statusName}
                                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                                style={{ left: `${left}%`, top: `${top}%` }}
                            >
                                <StatusLabel
                                    status={statusName}
                                    disabled={!isActive}
                                    size='md'
                                    responsive={responsive}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default StatusStepFlow;
 
