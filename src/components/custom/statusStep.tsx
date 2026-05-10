"use client"

import React, { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import StatusStepFlow from '@/components/base/statusStepFlow';
import { BoxStatus, } from '@/types/typesDapp/contracts/truthBox';
import StatusLabel from '../base/statusLabel';

interface StatusStepProps {
    status: BoxStatus;
    listedMode?: string;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    responsive?: boolean;
    showBackground?: boolean;
    showIndicator?: boolean;
    enableHorizontalScroll?: boolean;
}

const StatusStep: React.FC<StatusStepProps> = ({
    status,
    listedMode,
    className,
    size = 'md',
    responsive = true,
}) => {

    // Return different inner container styles based on whether scrolling is enabled
    const getInnerContainerStyle = () => {
        return {
            width: '100%',
            overflow: 'hidden' as const
        };
    };

    // If listedMode != 'Auctioning', then equals 'Selling'
    const getListedMode = () => {
        if (listedMode !== 'Auctioning') {
            return 'Selling';
        }
        return listedMode;
    };

    // Determine content container style based on whether scrolling is enabled
    const getContentStyle = () => {

        return {
            width: '100%',
            height: '100%'
        };
    };

    return (
        <div
            className={twMerge(
                "bg-background relative",
                className
            )}
            style={{ width: '100%', position: 'relative' }}
        >
            {/* Inner scroll container */}
            <div
                className={twMerge(
                    "status-step-flow-container" // Apply scroll bar style
                )}
                style={getInnerContainerStyle()}
            >
                <div style={getContentStyle()}>
                    <StatusStepFlow
                        status={status}
                        listedMode={getListedMode()}
                        responsive={responsive}
                    />
                </div>
            </div>

        </div>
    );
};

export default StatusStep;
