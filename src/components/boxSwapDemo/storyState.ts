import { useState } from "react";
import { STORY_CONTENT } from './constants';
import { BoxStatus } from '@/types/typesDapp/contracts/truthBox';

export default function useStoryState(status: BoxStatus) {
    
    // We can derive the current story from status, or keep it in state if it needs to be dynamic
    const story = STORY_CONTENT[status] || { title: '', desc: '' };

    return {
        story
    }
}
