"use client"

import React, { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { BoxStatus, } from '@/types/typesDapp/contracts/truthBox';
import NFTWorkflowFlow from '../custom/statusStep/index';

/**
 * The status step
 * 1. [Storing, Selling/Auctioning, Paid, Delaying/Refunding, Published]
 * 2. [Storing, Published]
 */

interface StatusStepProps {
    status: BoxStatus;
    listedMode?: string; 
    requestRefundTimestamp?: string | number; 
    className?: string;
}

const StatusStep: React.FC<StatusStepProps> = ({
    status,
    listedMode, // selling or auctioning or null
    requestRefundTimestamp,  // null = Delaying
    className,
}) => {
    const getActivePath = () => {
        const mode = listedMode?.toLowerCase()
        const branch = requestRefundTimestamp ? "refunding" : "delaying"

        // 1. Storing (Root)
        if (status === "Storing") return ["storing"]

        // 2. Mid States (Selling / Auctioning)
        if (status === "Selling") return ["storing", "selling"]
        if (status === "Auctioning") return ["storing", "auctioning"]

        // 3. Paid
        if (status === "Paid") {
            return mode ? ["storing", mode, "paid"] : ["storing", "paid"]
        }

        // 4. Branch States (Refunding / Delaying)
        if (status === "Refunding") {
            return mode ? ["storing", mode, "paid", "refunding"] : ["storing", "paid", "refunding"]
        }
        if (status === "Delaying") {
            return mode ? ["storing", mode, "paid", "delaying"] : ["storing", "paid", "delaying"]
        }

        // 5. Final State (Published)
        if (status === "Published") {
            // Shortcut case: Storing -> Published
            if (!mode) return ["storing", "published"]
            // Full path case: Storing -> Mode -> Paid -> Branch -> Published
            return ["storing", mode, "paid", branch, "published"]
        }

        // 6. Error/Special state
        if (status === "Blacklisted") return ["storing", "blacklisted"]

        return ["storing"]
    }

    return (
        <div className={twMerge("w-full rounded-xl border border-white/20 bg-black", className)}>
            <NFTWorkflowFlow activePath={getActivePath()} />
        </div>
    )
}

export default StatusStep;
