"use client"

// import React from "react"
import { motion } from "framer-motion"

type NodeStatus =
  | "inactive"
  | "storing"
  | "selling"
  | "auctioning"
  | "paid"
  | "delaying"
  | "refunding"
  | "published"

type AnchorSide = "top" | "right" | "bottom" | "left"

type FlowNode = {
  id: string
  label: string
  x: number
  y: number
  colorType: NodeStatus
}

type FlowEdge = {
  id: string
  from: string
  to: string
  fromSide: AnchorSide
  toSide: AnchorSide
}

const NODE_WIDTH = 140
const NODE_HEIGHT = 52
const CORNER_RADIUS = 25

const NODE_COLORS: Record<NodeStatus, string> = {
  inactive: "#6B7280",
  storing: "#2F80ED",
  selling: "#F2994A",
  auctioning: "#F2994A",
  paid: "#22C55E",
  delaying: "#A855F7",
  refunding: "#FB7185",
  published: "#A3E635",
}

const FLOW_SKELETON_NODES: FlowNode[] = [
  { id: "storing", label: "Storing", x: 100, y: 100, colorType: "storing" },
  { id: "selling", label: "Selling", x: 350, y: 30, colorType: "selling" },
  { id: "auctioning", label: "Auctioning", x: 350, y: 170, colorType: "auctioning" },
  { id: "paid", label: "Paid", x: 600, y: 100, colorType: "paid" },
  { id: "delaying", label: "Delaying", x: 850, y: 30, colorType: "delaying" },
  { id: "refunding", label: "Refunding", x: 850, y: 170, colorType: "refunding" },
  { id: "published", label: "Published", x: 1100, y: 100, colorType: "published" },
]

const FLOW_SKELETON_EDGES: FlowEdge[] = [
  { id: "e9", from: "storing", to: "selling", fromSide: "right", toSide: "left" },
  { id: "e1", from: "storing", to: "auctioning", fromSide: "right", toSide: "left" },
  { id: "e5", from: "selling", to: "paid", fromSide: "right", toSide: "left" },
  { id: "e2", from: "auctioning", to: "paid", fromSide: "right", toSide: "left" },
  { id: "e3", from: "paid", to: "delaying", fromSide: "right", toSide: "left" },
  { id: "e6", from: "paid", to: "refunding", fromSide: "right", toSide: "left" },
  { id: "e4", from: "delaying", to: "published", fromSide: "right", toSide: "left" },
  { id: "e7", from: "refunding", to: "published", fromSide: "right", toSide: "left" },
  { id: "e8", from: "storing", to: "published", fromSide: "bottom", toSide: "bottom" },
]

/**
 * =========================================================
 * HELPERS
 * =========================================================
 */

function getAnchor(node: FlowNode, side: AnchorSide) {
  switch (side) {
    case "top": return { x: node.x, y: node.y - NODE_HEIGHT / 2 }
    case "right": return { x: node.x + NODE_WIDTH / 2, y: node.y }
    case "bottom": return { x: node.x, y: node.y + NODE_HEIGHT / 2 }
    case "left": return { x: node.x - NODE_WIDTH / 2, y: node.y }
  }
}

function createRoundedPath(start: { x: number; y: number }, end: { x: number; y: number }, edge: FlowEdge) {
  if (edge.id === "e8") {
    const bottomY = 250
    const isForward = end.x > start.x
    return `
      M ${start.x} ${start.y}
      V ${bottomY - CORNER_RADIUS}
      Q ${start.x} ${bottomY} ${start.x + (isForward ? CORNER_RADIUS : -CORNER_RADIUS)} ${bottomY}
      H ${end.x - (isForward ? CORNER_RADIUS : -CORNER_RADIUS)}
      Q ${end.x} ${bottomY} ${end.x} ${bottomY - CORNER_RADIUS}
      V ${end.y}
    `
  }

  const dx = end.x - start.x
  const dy = end.y - start.y

  if (Math.abs(dy) < 2) return `M ${start.x} ${start.y} H ${end.x}`

  if ((edge.fromSide === "left" || edge.fromSide === "right") && (edge.toSide === "left" || edge.toSide === "right")) {
    const midX = start.x + dx / 2
    return `
      M ${start.x} ${start.y}
      H ${midX - CORNER_RADIUS}
      Q ${midX} ${start.y} ${midX} ${start.y + (dy > 0 ? CORNER_RADIUS : -CORNER_RADIUS)}
      V ${end.y - (dy > 0 ? CORNER_RADIUS : -CORNER_RADIUS)}
      Q ${midX} ${end.y} ${midX + CORNER_RADIUS} ${end.y}
      H ${end.x}
    `
  }

  if ((edge.fromSide === "left" || edge.fromSide === "right") && (edge.toSide === "top" || edge.toSide === "bottom")) {
    return `
      M ${start.x} ${start.y}
      H ${end.x - (dx > 0 ? CORNER_RADIUS : -CORNER_RADIUS)}
      Q ${end.x} ${start.y} ${end.x} ${start.y + (dy > 0 ? CORNER_RADIUS : -CORNER_RADIUS)}
      V ${end.y}
    `
  }

  if ((edge.fromSide === "top" || edge.fromSide === "bottom") && (edge.toSide === "left" || edge.toSide === "right")) {
    return `
      M ${start.x} ${start.y}
      V ${end.y - (dy > 0 ? CORNER_RADIUS : -CORNER_RADIUS)}
      Q ${start.x} ${end.y} ${start.x + (dx > 0 ? CORNER_RADIUS : -CORNER_RADIUS)} ${end.y}
      H ${end.x}
    `
  }

  return `M ${start.x} ${start.y} L ${end.x} ${end.y}`
}

/**
 * =========================================================
 * COMPONENT
 * =========================================================
 */

interface WorkflowFlowProps {
  activePath?: string[] // e.g. ["storing", "auctioning", "paid"]
}

export default function WorkflowFlow({
  activePath = ["storing", "auctioning", "paid", "delaying", "published"],
}: WorkflowFlowProps) {
  // 1. Calculate active nodes
  const nodes = FLOW_SKELETON_NODES.map((node) => ({
    ...node,
    status: activePath.includes(node.id) ? node.colorType : ("inactive" as NodeStatus),
  }))

  const nodeMap = Object.fromEntries(nodes.map((node) => [node.id, node]))

  // 2. Calculate active edges
  const edgesWithActive = FLOW_SKELETON_EDGES.map((edge) => {
    const fromIdx = activePath.indexOf(edge.from)
    const toIdx = activePath.indexOf(edge.to)
    const active = fromIdx !== -1 && toIdx !== -1 && toIdx === fromIdx + 1
    return { ...edge, active }
  })

  // 3. Sort edges for layering
  const sortedEdges = [...edgesWithActive].sort((a, b) => {
    if (a.active && !b.active) return 1
    if (!a.active && b.active) return -1
    return 0
  })

  return (
    <div className="w-full py-3">
      <svg
        viewBox="0 0 1200 270"
        className="h-auto w-full"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* EDGES */}
          {sortedEdges.map((edge) => {
            const fromNode = FLOW_SKELETON_NODES.find((n) => n.id === edge.from)!
            const toNode = FLOW_SKELETON_NODES.find((n) => n.id === edge.to)!
            const start = getAnchor(fromNode, edge.fromSide)
            const end = getAnchor(toNode, edge.toSide)
            const path = createRoundedPath(start, end, edge)

            return (
              <g key={edge.id}>
                <path d={path} stroke="#3F3F46" strokeWidth="7" strokeLinecap="round" fill="none" />
                {edge.active && (
                  <motion.path
                    d={path}
                    stroke="#B7FF3C"
                    strokeWidth="7"
                    strokeLinecap="round"
                    fill="none"
                    filter="url(#glow)"
                    strokeDasharray="14 16"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -60 }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </g>
            )
          })}

          {/* NODES */}
          {nodes.map((node) => {
            const active = node.status !== "inactive"
            const color = NODE_COLORS[node.status]

            return (
              <g key={node.id}>
                <foreignObject
                  x={node.x - NODE_WIDTH / 2}
                  y={node.y - NODE_HEIGHT / 2}
                  width={NODE_WIDTH}
                  height={NODE_HEIGHT}
                >
                  <div
                    className="flex h-full w-full items-center justify-center rounded-2xl border text-[20px] font-semibold backdrop-blur-md transition-all select-none"
                    style={{
                      color: active ? color : "#94A3B8",
                      borderColor: active ? color : "#3F3F46",
                      background: active
                        ? `linear-gradient(180deg, ${color}22, ${color}11)`
                        : `linear-gradient(180deg, #2A2A32, #24242B)`,
                      boxShadow: active
                        ? `0 0 24px ${color}55, inset 0 0 24px ${color}22`
                        : `inset 0 0 12px rgba(255,255,255,0.04)`,
                    }}
                  >
                    {node.label}
                  </div>
                </foreignObject>
              </g>
            )
          })}
        </svg>
    </div>
  )
}