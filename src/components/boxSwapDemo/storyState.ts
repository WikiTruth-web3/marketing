import { BoxStatus } from '@/types/typesDapp/contracts/truthBox';
import { boxSwapDemo } from '@/content/i18n/boxSwapDemo';
import { t } from '@/lib/i18nUtils';
import type { LanguageType } from '@/types/typesDapp/language';

export default function useStoryState(status: BoxStatus, lang: LanguageType) {
    
    const storyMapping: Record<string, any> = {
        Storing: boxSwapDemo.story.storing,
        Selling: boxSwapDemo.story.selling,
        Auctioning: boxSwapDemo.story.auctioning,
        Paid: boxSwapDemo.story.paid,
        Delaying: boxSwapDemo.story.delaying,
        Published: boxSwapDemo.story.published,
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
