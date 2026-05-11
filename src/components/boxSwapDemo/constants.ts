import { BoxStatus } from '@/types/typesDapp/contracts/truthBox';

export const LIFECYCLE_STEPS = [
    { status: 'Storing', label: 'Minted' },
    { status: 'Selling', label: 'Listed' },
    { status: 'Auctioning', label: 'Auctioning' }, // Alternative path
    { status: 'Paid', label: 'Purchased' },
    { status: 'Delaying', label: 'Delaying Reveal' },
    { status: 'Published', label: 'Revealed' },
];

export const STORY_CONTENT: Record<BoxStatus | string, { title: string; desc: string }> = {
    Storing: {
        title: "First Act: The Whistleblower",
        desc: "You are a brave whistleblower, holding a secret criminal evidence, and casting it into a Truth Box. Now, it is securely stored on the blockchain, only you can decide its fate. You can choose to list it for sale or publicly reveal it:"
    },
    Selling: {
        title: "Second Act: The Market of Suspicion",
        desc: "You listed this Truth Box at a fixed price. The OpenClaw AI bot broadcast it to the entire network, and every black market buyer, intelligence agency, and even related criminals noticed this evidence. We are quietly waiting for the first buyer to make an offer..."
    },
    Auctioning: {
        title: "Second Act: The Darknet Auction",
        desc: "You started this dangerous auction. The forces of all parties began to bid crazily, and the price continued to rise. The time is running out, and the auction is about to be decided..."
    },
    Paid: {
        title: "Third Act: The Transaction Completed",
        desc: "Ding! Your Truth Box was just purchased by a mysterious buyer, and paid a huge amount of money. This money is currently securely locked in the smart contract, waiting for the buyer's final extraction and confirmation..."
    },
    Delaying: {
        title: "Fourth Act: The Buyer Confirmed, Crazy Renewal!",
        desc: "The buyer confirmed receipt, and the transaction was successfully executed! You as a whistleblower received the first basic reward. To your surprise, this buyer was actually the exposed criminal. To delay the public exposure of the evidence, they began to pay Delay Fee to prolong the life of the evidence. Every time you delay, you will receive an additional bonus that grows exponentially by 2 times!"
    },
    Published: {
        title: "Fifth Act: The Truth Revealed",
        desc: "Finally, lies cannot hide the truth forever. As the delay fee becomes increasingly unbearable, the criminal's funds are completely exhausted, and the countdown reaches zero. The smart contract executed the last step: automatically decrypt the Truth Box. All encrypted criminal evidence was revealed to the world! The criminal was finally arrested and tried..."
    },
    Refunding: { title: "", desc: "" },
    Blacklisted: { title: "", desc: "" }
};
