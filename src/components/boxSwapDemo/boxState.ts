import { useState, useCallback } from "react"
import { BoxStatus } from '@/types/typesDapp/contracts/evidenceBox';
// import type { LanguageItem } from "@/types/typesDapp/language";

const testBox = {
    boxId: '9999',
    whistleblower: '0x...8902',
    typeOfCrime: 'Modular',
    title: "Classified Evidence Blind Box - Operation: Shadow",
    boxImage: '/nft/boxImage.png',
    nftImage: '/nft/nft-light-2.jpg',
    judgingImage: '/images/swapDemo/judging.jpg',
    prisonImage: '/images/swapDemo/prison.jpg',
    country: 'United States',
    state: 'New York',
    description: "This is a highly secretive black box, containing undeniable criminal evidence. Once the countdown reaches zero, the smart contract will automatically execute irreversible operations to make it public. Unless... The criminal is willing to sell all his assets, pay a high delay fee to cover up the truth.",
    createDate: '2026-03-15',
    eventDate: '2026-03-15',
    timestamp: 1714531200,
    label: ['Classified'],
    listedMode: 'N/A' as 'Selling' | 'Auctioning' | 'N/A',
    price: 100,
    tokenSymbol: 'ETH',
    tokenDecimals: 6,
    precision: 2,
    deadline: 1714531200,
    status: 'Storing' as BoxStatus,
    // Simulation states
    progress: 100,
    daysLeft: 30,
    serviceFeeRate: 0.03,
    purchaseIncome: 0,
    delayIncome: 0,
    totalReward: 0,
    lastAddedReward: 0,
    showFlash: false,
    currentBid: 0,
    finalPrice: 0,
}

export default function useBoxState() {
    const [box, setBox] = useState(testBox);

    const resetBox = useCallback(() => {
        setBox(testBox);
    }, []);

    const updateBox = useCallback((updates: Partial<typeof testBox>) => {
        setBox(prev => {
            const next = { ...prev, ...updates };
            // Auto-calculate totalReward if incomes or fee rate changed
            if ('purchaseIncome' in updates || 'delayIncome' in updates || 'serviceFeeRate' in updates) {
                const gross = (next.purchaseIncome || 0) + (next.delayIncome || 0);
                next.totalReward = gross * (1 - next.serviceFeeRate);
            }
            return next;
        });
    }, []);

    const updateStatus = useCallback((status: BoxStatus) => {
        setBox(prev => ({ ...prev, status }));
    }, []);

    const updateListedMode = useCallback((mode: 'Selling' | 'Auctioning' | 'N/A') => {
        setBox(prev => ({ ...prev, listedMode: mode }));
    }, []);

    return {
        box,
        setBox,
        updateBox,
        status: box.status,
        updateStatus,
        listedMode: box.listedMode,
        updateListedMode,
        resetBox
    }
}
