import { BoxStatus } from '@/types/typesDapp/contracts/evidenceBox';
import { content } from '@/components/boxSwapDemo/content';
import { t } from '@/lib/i18nUtils';
import type { LanguageType } from '@/types/typesDapp/language';

export default function useStoryState(status: BoxStatus, lang: LanguageType) {
    
    const storyMapping: Record<string, any> = {
        Storing: content.story.storing,
        Selling: content.story.selling,
        Auctioning: content.story.auctioning,
        Paid: content.story.paid,
        Delaying: content.story.delaying,
        Published: content.story.published,
    };

    const currentStory = storyMapping[status];
    
    const story = currentStory ? {
        title: t(currentStory.title, lang),
        desc: t(currentStory.desc, lang)
    } : { title: '', desc: '' };

    return {
        story
    }
}
