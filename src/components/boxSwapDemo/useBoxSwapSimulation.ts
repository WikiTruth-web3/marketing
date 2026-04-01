import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { BoxStatus } from '@/types/typesDapp/contracts/truthBox';

export const useBoxSwapSimulation = (status: BoxStatus, setStatus: (status: BoxStatus) => void) => {
    const [progress, setProgress] = useState(100);
    const [daysLeft, setDaysLeft] = useState(30);
    const [totalReward, setTotalReward] = useState(0);
    const [lastAddedReward, setLastAddedReward] = useState(0);
    const [showFlash, setShowFlash] = useState(false);

    // Pricing and Auction state
    const [basePrice, setBasePrice] = useState<number>(10);
    const [currentBid, setCurrentBid] = useState<number>(0);
    const [finalPrice, setFinalPrice] = useState<number>(0);

    // Core simulation logic
    useEffect(() => {
        let timer: NodeJS.Timeout;
        let progressInterval: NodeJS.Timeout;

        if (status === 'Storing') {
            setProgress(100);
            setDaysLeft(30);
            setTotalReward(0);
            setLastAddedReward(0);
            setCurrentBid(0);
            setFinalPrice(0);
        } else if (status === 'Selling') {
            setProgress(100);
            // Simulate waiting 4 seconds for buyer
            timer = setTimeout(() => {
                setStatus('Paid');
            }, 4000);
        } else if (status === 'Auctioning') {
            setProgress(100);
            setCurrentBid(basePrice);

            let bidCount = 0;
            let current = basePrice;

            progressInterval = setInterval(() => {
                bidCount++;
                current = Math.floor(current * 1.1);
                setCurrentBid(current);

                // Finish auction after 5 bids
                if (bidCount >= 5) {
                    clearInterval(progressInterval);
                    setFinalPrice(current);
                    setTimeout(() => {
                        setStatus('Paid');
                    }, 1000);
                }
            }, 1200);
        } else if (status === 'Paid') {
            setProgress(100);
            // Simulate waiting 3 seconds for buyer to confirm receipt / transition to Delaying
            timer = setTimeout(() => {
                setTotalReward(finalPrice); // Initial reward is the final transaction price
                setLastAddedReward(finalPrice);
                setStatus('Delaying');
            }, 3000);
        } else if (status === 'Delaying') {
            // Start the countdown timer simulation
            setProgress(100);
            let currentDaysLeft = 30; // initially 30 days
            let maxDays = 30;

            let currentDelayReward = finalPrice; // Start delay fee at 100% of final price
            if (currentDelayReward === 0) currentDelayReward = 10;

            let trig1 = false, trig2 = false, trig3 = false;

            const triggerDelayFee = () => {
                setTotalReward(prev => prev + currentDelayReward);
                setLastAddedReward(currentDelayReward);
                setShowFlash(true);
                setTimeout(() => setShowFlash(false), 1500);

                currentDelayReward *= 2; // Next fee will double
                currentDaysLeft += 365; // Extend timer by 365 days
                maxDays += 365;
            };

            progressInterval = setInterval(() => {
                currentDaysLeft -= 10; // Rapidly decrement days (10 days every 50ms)
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
                    setStatus('Published');
                }
                setDaysLeft(currentDaysLeft);
                setProgress((currentDaysLeft / maxDays) * 100);
            }, 50);
        } else if (status === 'Published') {
            setProgress(0);
            setDaysLeft(0);
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
    }, [status, basePrice, finalPrice, setStatus]);

    return {
        progress,
        daysLeft,
        totalReward,
        lastAddedReward,
        showFlash,
        basePrice,
        setBasePrice,
        currentBid,
        finalPrice,
        setFinalPrice
    };
};
