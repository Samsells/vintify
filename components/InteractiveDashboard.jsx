'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  LayoutDashboard, Bot, Zap, Truck, Calculator,
  Settings, ShoppingBag, MessageSquare, Sparkles, ArrowUpRight,
  Bell, Search, ChevronRight, Activity, Package, Clock
} from 'lucide-react';
import { motion } from 'framer-motion';

/* ── Mock data ── */
const STATS = [
  { label: 'Total Profit', value: '£3,412', change: '+18%', up: true, sub: 'vs last month' },
  { label: 'Items Sold', value: '87', change: '+12', up: true, sub: 'vs last month' },
  { label: 'Sell-through', value: '38%', change: '+4%', up: true, sub: 'vs last month', bar: 38 },
  { label: 'Avg Profit / Item', value: '£8.74', change: '+£1.20', up: true, sub: 'vs last' },
];

const CHART_BARS = [40, 55, 30, 70, 45, 60, 35, 80, 50, 65, 42, 90, 55, 70, 48, 75, 60, 85, 50, 95, 68, 72, 55, 88, 62, 78, 45, 92, 70, 100];

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: ShoppingBag, label: 'Purchases' },
  { icon: Sparkles, label: 'Listings' },
  { icon: MessageSquare, label: 'Inbox' },
  { icon: Truck, label: 'Orders' },
  { icon: Calculator, label: 'Accounting' },
  { icon: Bot, label: 'Growth Bot' },
  { icon: Zap, label: 'Automation' },
  { icon: Settings, label: 'Settings' },
];

const ACTION_ITEMS = [
  { count: 3, label: 'Orders need dispatch', color: 'accent' },
  { count: 5, label: 'Stale listings detected', color: 'brand' },
  { count: 2, label: 'Sales missing cost data', color: 'amber' },
];

const BOT_STATS = [
  { label: 'Price drops today', value: '12' },
  { label: 'Users pinged', value: '34' },
  { label: 'Reposts scheduled', value: '8' },
];

const PIPELINE = [
  { label: 'Completed', count: 39, color: 'bg-brand-500', width: '45%' },
  { label: 'In transit', count: 22, color: 'bg-brand-300', width: '25%' },
  { label: 'Needs sending', count: 13, color: 'bg-brand-200', width: '15%' },
  { label: 'Reserved', count: 9, color: 'bg-ink-300', width: '10%' },
  { label: 'Available', count: 4, color: 'bg-ink-200', width: '5%' },
];

const RECENT_SALES = [
  { item: 'Nike Tech Fleece Hoodie', size: 'M', profit: '+£14.20', status: 'Completed', time: '2h ago' },
  { item: 'Adidas Track Jacket', size: 'S', profit: '+£8.50', status: 'In transit', time: '5h ago' },
  { item: "Levi's 501 Jeans", size: '32W', profit: '+£11.00', status: 'Completed', time: '1d ago' },
  { item: 'North Face Puffer', size: 'L', profit: '+£22.75', status: 'Sending', time: '1d ago' },
];

/* ── Animation variants — each element gets a unique entrance ── */
const ANIMS = {
  // Flies in from the front of the screen (starts huge, shrinks to place)
  front: {
    initial: { opacity: 0, scale: 2.5, z: 200 },
    animate: { opacity: 1, scale: 1, z: 0 },
    transition: { type: 'spring', stiffness: 140, damping: 16, mass: 0.6 },
  },
  // Slides in from left with rotation
  slideLeft: {
    initial: { opacity: 0, x: -160, rotate: -12 },
    animate: { opacity: 1, x: 0, rotate: 0 },
    transition: { type: 'spring', stiffness: 110, damping: 13, mass: 0.5 },
  },
  // Slides in from right with rotation
  slideRight: {
    initial: { opacity: 0, x: 160, rotate: 12 },
    animate: { opacity: 1, x: 0, rotate: 0 },
    transition: { type: 'spring', stiffness: 110, damping: 13, mass: 0.5 },
  },
  // Drops from top
  drop: {
    initial: { opacity: 0, y: -140, rotate: -6 },
    animate: { opacity: 1, y: 0, rotate: 0 },
    transition: { type: 'spring', stiffness: 120, damping: 11, mass: 0.5 },
  },
  // Rises from bottom
  rise: {
    initial: { opacity: 0, y: 140, rotate: 8 },
    animate: { opacity: 1, y: 0, rotate: 0 },
    transition: { type: 'spring', stiffness: 120, damping: 11, mass: 0.5 },
  },
  // Pops from center (scale up from tiny)
  pop: {
    initial: { opacity: 0, scale: 0.3 },
    animate: { opacity: 1, scale: 1 },
    transition: { type: 'spring', stiffness: 160, damping: 14, mass: 0.4 },
  },
  // Flips in on Y axis
  flip: {
    initial: { opacity: 0, rotateY: 90, scale: 0.8 },
    animate: { opacity: 1, rotateY: 0, scale: 1 },
    transition: { type: 'spring', stiffness: 130, damping: 15, mass: 0.5 },
  },
  // Swings in from top-right like a pendulum
  swing: {
    initial: { opacity: 0, x: 120, y: -80, rotate: 15 },
    animate: { opacity: 1, x: 0, y: 0, rotate: 0 },
    transition: { type: 'spring', stiffness: 100, damping: 10, mass: 0.6 },
  },
};

function ThrowIn({ children, className = '', variant = 'slideLeft', delay = 0 }) {
  const a = ANIMS[variant] || ANIMS.slideLeft;
  return (
    <motion.div
      initial={a.initial}
      animate={a.animate}
      transition={{ ...a.transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function InteractiveDashboard() {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [chartHover, setChartHover] = useState(null);
  const [timeRange, setTimeRange] = useState('30d');

  return (
    <div className="flex w-full bg-[#f9f9ff]" style={{ minHeight: 520 }}>
      {/* ═══ Sidebar — slides in from left ═══ */}
      <ThrowIn variant="slideLeft" delay={0.05} className="hidden sm:flex">
        <div className="flex w-48 shrink-0 flex-col border-r border-ink-200 bg-white" style={{ minHeight: 520 }}>
          <div className="flex items-center gap-2 border-b border-ink-200 px-4 py-3.5">
            <Image
              src="/logo/app-icon.png"
              alt="Vintify"
              width={28}
              height={28}
              className="h-7 w-7 shrink-0 rounded-lg"
            />
            <span className="font-display text-sm font-bold text-ink-900">Vintify</span>
          </div>
          <div className="flex-1 space-y-0.5 p-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveNav(item.label)}
                className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left transition-colors ${
                  activeNav === item.label ? 'bg-brand-500/10 text-brand-700 font-semibold' : 'text-ink-500 hover:bg-ink-100 hover:text-ink-900'
                }`}
              >
                <item.icon size={15} className={activeNav === item.label ? 'text-brand-600' : 'text-ink-400'} />
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>
          <div className="m-2 rounded-xl bg-brand-500/5 p-3">
            <p className="font-mono text-[8px] uppercase tracking-wider text-brand-600">Growth Bot</p>
            <div className="mt-1.5 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              <span className="text-[10px] font-semibold text-emerald-600">Active</span>
            </div>
            <p className="mt-1.5 text-[9px] text-ink-400">12 drops today</p>
          </div>
        </div>
      </ThrowIn>

      {/* ═══ Main content ═══ */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar — drops from top */}
        <ThrowIn variant="drop" delay={0.1} className="w-full">
          <div className="flex items-center justify-between border-b border-ink-200 bg-white px-4 py-3">
            <div>
              <h2 className="font-display text-sm font-bold text-ink-900">Dashboard</h2>
              <p className="font-mono text-[9px] text-ink-400">June 2026 · All accounts</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-1.5 rounded-lg border border-ink-200 bg-ink-50 px-2.5 py-1.5 md:flex">
                <Search size={12} className="text-ink-400" />
                <span className="font-mono text-[9px] text-ink-400">Search...</span>
              </div>
              <button className="relative flex h-7 w-7 items-center justify-center rounded-lg border border-ink-200 bg-white hover:bg-ink-100 transition-colors">
                <Bell size={13} className="text-ink-500" />
                <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent-500 font-mono text-[7px] font-bold text-white">3</span>
              </button>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500">
                <span className="font-display text-[10px] font-bold text-white">SH</span>
              </div>
            </div>
          </div>
        </ThrowIn>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4" style={{ scrollbarWidth: 'thin' }}>
          {/* ── Stat cards — each thrown from a different direction ── */}
          <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {STATS.map((stat, i) => {
              const variants = ['front', 'slideLeft', 'slideRight', 'rise'];
              return (
                <ThrowIn key={i} variant={variants[i]} delay={0.15 + i * 0.08}>
                  <div className="group rounded-xl border border-ink-200 bg-white p-3 transition-all hover:border-brand-300 hover:shadow-md">
                    <p className="font-mono text-[8px] uppercase tracking-wider text-ink-400">{stat.label}</p>
                    <p className="font-display text-xl font-bold text-ink-900">{stat.value}</p>
                    <div className="mt-0.5 flex items-center gap-1">
                      <ArrowUpRight size={10} className={stat.up ? 'text-emerald-600' : 'text-accent-600'} />
                      <span className={`font-mono text-[9px] font-bold ${stat.up ? 'text-emerald-600' : 'text-accent-600'}`}>{stat.change}</span>
                      <span className="font-mono text-[8px] text-ink-400">{stat.sub}</span>
                    </div>
                    {stat.bar && (
                      <div className="mt-1.5 h-1 w-full rounded-full bg-ink-200">
                        <div className="h-1 rounded-full bg-brand-500" style={{ width: `${stat.bar}%` }} />
                      </div>
                    )}
                  </div>
                </ThrowIn>
              );
            })}
          </div>

          {/* ── Chart + Bot row ── */}
          <div className="mt-2.5 grid grid-cols-1 gap-2.5 lg:grid-cols-3">
            {/* Chart — flips in */}
            <ThrowIn variant="flip" delay={0.45} className="lg:col-span-2">
              <div className="rounded-xl border border-ink-200 bg-white p-3">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-ink-400">Sales cadence</p>
                  <div className="flex items-center gap-1">
                    {['7d', '14d', '30d'].map((range) => (
                      <button
                        key={range}
                        onClick={() => setTimeRange(range)}
                        className={`rounded-md px-2 py-0.5 font-mono text-[8px] font-bold transition-colors ${
                          timeRange === range ? 'bg-brand-500 text-white' : 'text-ink-400 hover:bg-ink-100'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <span className="flex items-center gap-1 font-mono text-[8px] text-ink-500">
                    <span className="h-2 w-2 rounded-sm bg-brand-500" />Revenue
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[8px] text-ink-500">
                    <span className="h-2 w-2 rounded-sm bg-brand-200" />Profit
                  </span>
                </div>
                {/* Bars grow from bottom with stagger */}
                <div className="mt-2 flex h-32 items-end gap-0.5">
                  {CHART_BARS.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 140, damping: 18, delay: 0.55 + i * 0.012 }}
                      style={{ transformOrigin: 'bottom' }}
                      onMouseEnter={() => setChartHover(i)}
                      onMouseLeave={() => setChartHover(null)}
                      className="group/bar relative flex flex-1 cursor-pointer flex-col items-center gap-px"
                    >
                      {chartHover === i && (
                        <div className="absolute -top-12 z-10 whitespace-nowrap rounded-lg border border-ink-200 bg-white px-2.5 py-1.5 shadow-lg">
                          <p className="font-mono text-[7px] uppercase tracking-wider text-ink-400">Day {i + 1}</p>
                          <p className="font-display text-[10px] font-bold text-ink-900">£{(h * 4.5).toFixed(0)}</p>
                          <p className="font-mono text-[8px] text-brand-600">+£{(h * 1.8).toFixed(0)} profit</p>
                        </div>
                      )}
                      <div className={`w-full rounded-sm transition-colors ${chartHover === i ? 'bg-brand-300' : 'bg-brand-200'}`} style={{ height: `${h * 0.6}%` }} />
                      <div className={`w-full rounded-sm transition-colors ${chartHover === i ? 'bg-brand-600' : 'bg-brand-500'}`} style={{ height: `${h * 0.4}%` }} />
                    </motion.div>
                  ))}
                </div>
                <div className="mt-1 flex justify-between">
                  {['1', '5', '10', '15', '20', '25', '30'].map((d) => (
                    <span key={d} className="font-mono text-[7px] text-ink-400">{d}</span>
                  ))}
                </div>
              </div>
            </ThrowIn>

            {/* Bot panel — swings in from top-right */}
            <ThrowIn variant="swing" delay={0.5}>
              <div className="rounded-xl border border-brand-200 bg-brand-500/5 p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Bot size={13} className="text-brand-600" />
                    <p className="font-mono text-[9px] uppercase tracking-wider text-brand-600">Growth Bot</p>
                  </div>
                  <span className="flex items-center gap-1 font-mono text-[8px] font-bold text-emerald-600">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    Active
                  </span>
                </div>
                <div className="mt-2.5 space-y-2">
                  {BOT_STATS.map((stat, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-[10px] font-medium text-ink-600">{stat.label}</span>
                      <span className="font-mono text-[11px] font-bold text-brand-600">{stat.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-lg bg-white/60 p-2">
                  <p className="font-mono text-[7px] uppercase tracking-wider text-ink-400">Next action</p>
                  <p className="mt-0.5 text-[9px] font-medium text-ink-700">Auto-repost 3 stale listings in 42 min</p>
                </div>
              </div>
            </ThrowIn>
          </div>

          {/* ── Bottom row — each from a different direction ── */}
          <div className="mt-2.5 grid grid-cols-1 gap-2.5 lg:grid-cols-3">
            {/* Action items — flies in from front */}
            <ThrowIn variant="front" delay={0.6}>
              <div className="rounded-xl border border-ink-200 bg-white p-3">
                <div className="flex items-center gap-1.5">
                  <Activity size={12} className="text-ink-400" />
                  <p className="font-mono text-[9px] uppercase tracking-wider text-ink-400">Action items</p>
                </div>
                <div className="mt-2 space-y-1.5">
                  {ACTION_ITEMS.map((item, i) => (
                    <div key={i} className="flex cursor-pointer items-center gap-2 rounded-lg px-1.5 py-1 transition-colors hover:bg-ink-50">
                      <div className={`flex h-5 w-5 items-center justify-center rounded-md ${
                        item.color === 'accent' ? 'bg-accent-500/10' : item.color === 'brand' ? 'bg-brand-500/10' : 'bg-amber-500/10'
                      }`}>
                        <span className={`font-mono text-[8px] font-bold ${
                          item.color === 'accent' ? 'text-accent-600' : item.color === 'brand' ? 'text-brand-600' : 'text-amber-600'
                        }`}>{item.count}</span>
                      </div>
                      <span className="text-[10px] font-medium text-ink-700">{item.label}</span>
                      <ChevronRight size={11} className="ml-auto text-ink-300" />
                    </div>
                  ))}
                </div>
              </div>
            </ThrowIn>

            {/* Pipeline — pops from center */}
            <ThrowIn variant="pop" delay={0.65}>
              <div className="rounded-xl border border-ink-200 bg-white p-3">
                <div className="flex items-center gap-1.5">
                  <Package size={12} className="text-ink-400" />
                  <p className="font-mono text-[9px] uppercase tracking-wider text-ink-400">Order pipeline</p>
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: 'left' }}
                  className="mt-2.5 flex h-2 w-full overflow-hidden rounded-full"
                >
                  {PIPELINE.map((stage, i) => (
                    <div key={i} className={stage.color} style={{ width: stage.width }} />
                  ))}
                </motion.div>
                <div className="mt-2 space-y-1">
                  {PIPELINE.map((stage, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-[9px] text-ink-500">
                        <span className={`h-2 w-2 rounded-sm ${stage.color}`} />
                        {stage.label}
                      </span>
                      <span className="font-mono text-[9px] font-bold text-ink-700">{stage.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ThrowIn>

            {/* Recent sales — slides from right */}
            <ThrowIn variant="slideRight" delay={0.7}>
              <div className="rounded-xl border border-ink-200 bg-white p-3">
                <div className="flex items-center gap-1.5">
                  <Clock size={12} className="text-ink-400" />
                  <p className="font-mono text-[9px] uppercase tracking-wider text-ink-400">Recent sales</p>
                </div>
                <div className="mt-2 space-y-1.5">
                  {RECENT_SALES.map((sale, i) => (
                    <div key={i} className="group/sale cursor-pointer">
                      <div className="flex items-center justify-between">
                        <span className="truncate text-[10px] font-medium text-ink-700 pr-2">{sale.item}</span>
                        <span className="font-mono text-[10px] font-bold text-emerald-600 shrink-0">{sale.profit}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[7px] text-ink-400">{sale.size}</span>
                        <span className="font-mono text-[7px] text-ink-300">·</span>
                        <span className={`font-mono text-[7px] ${
                          sale.status === 'Completed' ? 'text-emerald-600' : sale.status === 'In transit' ? 'text-brand-600' : 'text-amber-600'
                        }`}>{sale.status}</span>
                        <span className="font-mono text-[7px] text-ink-300">·</span>
                        <span className="font-mono text-[7px] text-ink-400">{sale.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ThrowIn>
          </div>
        </div>
      </div>
    </div>
  );
}
