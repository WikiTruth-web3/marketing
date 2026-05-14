import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { BoxStatus } from '@/types/typesDapp/contracts/evidenceBox';

export const useBoxSwapSimulation = (
    status: BoxStatus,
    box: any,
    updateBox: (updates: any) => void
) => {
    // Pricing and Auction state
    const setFinalPrice = (val: number) => updateBox({ finalPrice: val });

    // Core simulation logic
    useEffect(() => {
        let timer: NodeJS.Timeout;
        let progressInterval: NodeJS.Timeout;

        if (status === 'Storing') {
            updateBox({
                progress: 100,
                daysLeft: 30,
                purchaseIncome: 0,
                delayIncome: 0,
                totalReward: 0,
                lastAddedReward: 0,
                currentBid: 0,
                finalPrice: 0,
            });
        } else if (status === 'Selling') {
            updateBox({ progress: 100 });
            // Simulate waiting 4 seconds for buyer
            timer = setTimeout(() => {
                updateBox({ status: 'Paid' });
            }, 4000);
        } else if (status === 'Auctioning') {
            updateBox({ 
                progress: 100,
                currentBid: box.price 
            });

            let bidCount = 0;
            let current = box.price;

            progressInterval = setInterval(() => {
                bidCount++;
                current = Math.floor(current * 1.1);
                
                updateBox({ currentBid: current });

                // Finish auction after 5 bids
                if (bidCount >= 5) {
                    clearInterval(progressInterval);
                    updateBox({ finalPrice: current });
                    setTimeout(() => {
                        updateBox({ status: 'Paid' });
                    }, 1000);
                }
            }, 1200);
        } else if (status === 'Paid') {
            updateBox({ progress: 100 });
            // Simulate waiting 3 seconds for buyer to confirm receipt / transition to Delaying
            timer = setTimeout(() => {
                updateBox({ 
                    purchaseIncome: box.finalPrice || box.price, 
                    lastAddedReward: box.finalPrice || box.price,
                    status: 'Delaying'
                });
            }, 3000);
        } else if (status === 'Delaying') {
            // Start the countdown timer simulation
            updateBox({ progress: 100 });
            
            let currentDaysLeft = 30; // initially 30 days
            let maxDays = 30;
            let currentDelayIncome = box.delayIncome;
            let currentDelayReward = box.finalPrice || box.price || 10;

            let trig1 = false, trig2 = false, trig3 = false;

            const triggerDelayFee = () => {
                currentDelayIncome += currentDelayReward;
                
                updateBox({
                    delayIncome: currentDelayIncome,
                    lastAddedReward: currentDelayReward,
                    showFlash: true
                });
                
                setTimeout(() => updateBox({ showFlash: false }), 1500);

                currentDelayReward *= 2; // Next fee will double
                currentDaysLeft += 365; // Extend timer by 365 days
                maxDays += 365;
            };

            progressInterval = setInterval(() => {
                currentDaysLeft -= 1; // Subtract 1 day every 30ms (slower, more readable)
                const currentProgress = (currentDaysLeft / maxDays) * 100;

                if (currentProgress <= 65 && !trig1) {
                    trig1 = true;
                    triggerDelayFee();
                } else if (currentProgress <= 40 && !trig2) {
                    trig2 = true;
                    triggerDelayFee();
                } else if (currentProgress <= 15 && !trig3) {
                    trig3 = true;
                    triggerDelayFee();
                }

                if (currentDaysLeft <= 0) {
                    currentDaysLeft = 0;
                    clearInterval(progressInterval);
                    updateBox({ status: 'Published' });
                }
                
                updateBox({
                    daysLeft: currentDaysLeft,
                    progress: (currentDaysLeft / maxDays) * 100
                });
            }, 30);

        } else if (status === 'Published') {
            updateBox({ progress: 0, daysLeft: 0 });
            // Trigger celebration!
            const count = 200;
            const defaults = { origin: { y: 0.7 } };

            const fire = (particleRatio: number, opts: confetti.Options) => {
                confetti({
                    ...defaults,
                    ...opts,
                    particleCount: Math.floor(count * particleRatio)
                });
            }

            fire(0.25, { spread: 26, startVelocity: 55 });
            fire(0.2, { spread: 60 });
            fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
            fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
            fire(0.1, { spread: 120, startVelocity: 45 });
        }

        return () => {
            clearTimeout(timer);
            clearInterval(progressInterval);
        };
    }, [status]); // Only restart simulation when status changes

    return {
        // Return getters for backward compatibility or simple usage
        progress: box.progress,
        daysLeft: box.daysLeft,
        totalReward: box.totalReward,
        lastAddedReward: box.lastAddedReward,
        showFlash: box.showFlash,
        basePrice: box.price,
        currentBid: box.currentBid,
        finalPrice: box.finalPrice,
        setFinalPrice
    };
};
