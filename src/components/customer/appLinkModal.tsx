"use client";

import { Modal } from "antd";
import TextP from "../base/text_p";
import TextH from "../base/text_h";
import { appLink } from "@/content/header";
import { ExternalLink, Globe, Shield } from "lucide-react";

interface AppLinkModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function AppLinkModal({ open, onOpenChange }: AppLinkModalProps) {
    const handleLinkClick = (href: string) => {
        window.open(href, '_blank', 'noopener,noreferrer');
        onOpenChange(false);
    };

    const appEntries = [
        {
            ...appLink.app,
            icon: <Globe className="w-5 h-5" />,
        },
        {
            ...appLink.appIpfs,
            icon: <Shield className="w-5 h-5" />,
        },
    ];

    return (
        <Modal
            open={open}
            onCancel={() => onOpenChange(false)}
            footer={null}
            centered
            title={
                <TextH size="h5" weight="bold" className="text-center">
                    App Link
                </TextH>
            }
            className="!p-0"
            width={600}
        >
            {/* Description */}
            <div className="mb-6">
                <TextP size="sm" className="text-center text-neutral-400">
                    {appLink.description}
                </TextP>
            </div>

            {/* App Entry Buttons */}
            <div className="flex flex-col gap-3">
                {appEntries.map((entry, index) => (
                    <button
                        key={index}
                        onClick={() => handleLinkClick(entry.href)}
                        disabled={entry.disabled}
                        className="
                            flex items-start gap-4 p-4 rounded-lg
                            bg-neutral-900 border border-neutral-600 hover:border-theme
                            hover:bg-theme/10 transition-all duration-200
                            disabled:opacity-50 disabled:cursor-not-allowed
                            text-left group
                        "
                    >
                        {/* Icon */}
                        <div className="shrink-0 p-2 rounded-lg bg-neutral-800 group-hover:bg-neutral-700 transition-colors duration-200">
                            <div className="text-white">
                                {entry.icon}
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-lg text-white">
                                    {entry.name}
                                </h3>
                                <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-neutral-300 transition-colors duration-200" />
                            </div>
                            <TextP size="xs" className="text-neutral-400">
                                {entry.description}
                            </TextP>
                        </div>
                    </button>
                ))}
            </div>
        </Modal>
    );
}