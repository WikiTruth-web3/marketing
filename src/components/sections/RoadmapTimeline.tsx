import React from 'react';
import { RoadmapCard } from '@/components/customer/RoadmapCard';
import { roadmapPhases } from '@/content/roadmap';

export const RoadmapTimeline: React.FC = () => {
  // SVG Path constants
  const startY = 200; // First node Y
  const gapY = 400;   // Vertical distance between same-side nodes (e.g. Left 1 to Left 2) - wait, nodes are alternating.
  // Actually the design is Zig-Zag. 
  // Center -> Left (Phase 1) -> Right (Phase 2) -> Left (Phase 3)
  // Let's analyze the Y spacing.
  // Original Phase 1 (Left) was at some Y. Phase 2 (Right) was lower.
  // In `RoadmapCard.tsx` they are stacked in a flex-col, space-y-48 (lg:space-y-64).
  // space-y-64 = 16rem = 256px. 
  // But Phase 1 is a block. Phase 2 is a block.
  // Let's assume nodes are centered vertically relative to the card?
  // The SVG needs to connect the nodes (circles).
  // Let's try to calculate the path dynamically.
  
  // Phase 1 (Left): Center 350, 450
  // Phase 2 (Right): Center 850, 850
  // Phase 3 (Left): Center 350, 1250 (450 + 800 gap?) No, 450 to 850 is +400 Y. 850 to 1250 is +400 Y.
  // So spacing Y is 400.
  // X coordinates: Left 350, Right 850. Center line is 600.
  
  const initialY = 200; // Start of vertical line
  const node1Y = 450;
  const yIncrement = 360;
  const xCenter = 600;
  const xLeft = 350;
  const xRight = 850;

  const totalHeight = node1Y + (roadmapPhases.length - 1) * yIncrement + 200; // Add some padding calculation

  // Generate SVG Path
  // M600 0 V200
  // M600 200 L350 450 (if first is Left)
  // node to node: M(currentX, currentY) V(currentY + 200) L(nextX, nextY)
  // Wait, let's look at previous logic: `M600 200 L350 450`, `M350 450 V650`, `M350 650 L850 850`.
  // So from a node: Go down 200 (vertical segment), then diagonal to next node.
  
  const generatePath = () => {
    let path = `M${xCenter} 0 V${initialY}`; // Initial Drop
    let currentX = xCenter;
    let currentY = initialY;

    // Connect Initial Drop to First Node
    const firstNodeX = roadmapPhases[0].alignment === 'left' ? xLeft : xRight;
    const firstNodeY = node1Y;
    
    //path += ` M${currentX} ${currentY} L${firstNodeX} ${firstNodeY}`; // Original was separate commands but single path string works too.
    // Actually the original was separate Move commands for cleaner strokes? No, it was one `d` string.
    // The original d: "M600 0V200 M600 200L350 450 M350 450V650 M350 650L850 850 M850 850V1050"
    // It creates disconnected segments if we use M. But we want a continuous look? 
    // Actually the `dashed` line looks better if continuous or carefully segmented. 
    // The original uses M to "jump" effectively making them separate segments but visually connected.
    // Segment 1: Center Line.
    // Segment 2: Center to Node 1.
    // Segment 3: Node 1 Out (Vertical).
    // Segment 4: Node 1 to Node 2.
    
    path += ` M${currentX} ${currentY} L${firstNodeX} ${firstNodeY}`;

    for (let i = 0; i < roadmapPhases.length - 1; i++) {
        const isLeft = roadmapPhases[i].alignment === 'left';
        const startX = isLeft ? xLeft : xRight;
        const startY = node1Y + i * yIncrement;
        
        const nextIsLeft = roadmapPhases[i+1].alignment === 'left'; // Should alternate usually
        const endX = nextIsLeft ? xLeft : xRight;
        const endY = node1Y + (i + 1) * yIncrement;

        const verticalDrop = 150; // The vertical length after a node
        
        // Vertical segment down from current node
        path += ` M${startX} ${startY} V${startY + verticalDrop}`;
        
        // Diagonal to next node
        path += ` M${startX} ${startY + verticalDrop} L${endX} ${endY}`;
    }
    
    // Final vertical tail
    const lastIsLeft = roadmapPhases[roadmapPhases.length - 1].alignment === 'left';
    const lastX = lastIsLeft ? xLeft : xRight;
    const lastY = node1Y + (roadmapPhases.length - 1) * yIncrement;
    path += ` M${lastX} ${lastY} V${lastY + 200}`;

    return path;
  };

  return (
    <section className="relative w-full max-w-7xl px-4 py-32">
      {/* SVG Background Path (Desktop Only) */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none overflow-hidden" style={{ top: '10%', height: `${totalHeight}px` }}>
        <svg className="w-full h-full" viewBox={`0 0 1200 ${totalHeight}`} fill="none" preserveAspectRatio="xMidYMin meet">
          <path 
            className="circuit-line" 
            d={generatePath()} 
            stroke="#00f3ff" 
            strokeDasharray="12 12" 
            strokeWidth="2.5" 
            opacity="0.4"
          />
          {/* Always Center Dot */}
          <circle cx={xCenter} cy={initialY} fill="#00f3ff" r="5" className="animate-pulse" />

          {/* Dynamic Nodes Dots */}
          {roadmapPhases.map((phase, index) => {
             const cx = phase.alignment === 'left' ? xLeft : xRight;
             const cy = node1Y + index * yIncrement;
             return (
                 <circle key={index} cx={cx} cy={cy} fill={phase.color === 'primary' ? '#c6a9fc' : '#00f3ff'} r="5" />
             );
          })}
        </svg>
      </div>

      <div className="relative z-10 space-y-20 lg:space-y-30">
        {roadmapPhases.map((phase, index) => (
             <RoadmapCard 
                key={index}
                {...phase}
            />
        ))}
      </div>
    </section>
  );
};
