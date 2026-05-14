// import { BoxStatus } from '@/types/typesDapp/contracts/truthBox';

export const LIFECYCLE_STEPS = [
    { status: 'Storing', label: 'Minted' },
    { status: 'Selling', label: 'Listed' },
    { status: 'Auctioning', label: 'Auctioning' }, // Alternative path
    { status: 'Paid', label: 'Purchased' },
    { status: 'Delaying', label: 'Delaying Reveal' },
    { status: 'Published', label: 'Revealed' },
];
