'use client';

import {
  Calculator, Landmark, Receipt, Boxes, Target, BarChart3,
  TrendingUp, RefreshCw, FileText, Check, ShoppingBag, Sparkles,
  Zap, Tag, Bot, MessageCircle, MessageSquare, Printer, Truck,
  Clock, Settings, Link2, Search, Package, ArrowRight, X,
  AlertCircle, Lightbulb, Shield,
} from 'lucide-react';
import Link from 'next/link';
import { SIGNUP_URL } from '@/lib/site';

/* ── Feature detail data ── */
/* Each feature has: problem, whyItMatters, solution, result */
/* Keyed by exact feature title string */

export const FEATURE_DETAILS = {
  /* ── ACCOUNTING ── */
  'True profit per item': {
    icon: Calculator,
    category: 'Accounting',
    problem: 'Vinted shows you the sale price and the buyer fee, but not your actual profit. After the seller fee, shipping, packaging, and what you paid for the item, you might think you made £15 on a sale when you actually made £4. You are running a business blindfolded.',
    whyItMatters: 'If you do not know your true profit per item, you cannot make informed decisions about pricing, sourcing, or what to stock. You might keep buying items that lose money because the revenue looks good.',
    solution: 'Vintify automatically calculates true profit on every single sale: cost price minus Vinted buyer fee, seller fee, shipping cost, and packaging. The moment an item sells, you see exactly what you earned.',
    result: 'You know your real margin on every item. You can stop stocking things that lose money and double down on what actually profits.',
  },
  'HMRC-ready tax reports': {
    icon: Landmark,
    category: 'Accounting',
    problem: 'January arrives and you spend days pulling together spreadsheets. You manually add up hundreds of sales, calculate fees, figure out what counts as an expense, and try to remember what you paid for items six months ago. Your accountant charges extra for the mess.',
    whyItMatters: 'Getting your self-assessment wrong means either overpaying tax (because you forgot expenses) or underpaying and risking penalties. Either way, the stress and time cost is enormous.',
    solution: 'Export CSV or PDF summaries for self-assessment in one click. Supports both cash basis and traditional (accruals) basis. Includes all sales, fees, expenses, and other income. Hand it straight to your accountant.',
    result: 'Tax season goes from a 3-day nightmare to a 30-second export. Your accountant gets clean, accurate data. You pay the right amount of tax.',
  },
  'Expense tracking': {
    icon: Receipt,
    category: 'Accounting',
    problem: 'Packaging rolls from eBay, postage from the Post Office, petrol for sourcing trips, poly bags, tissue paper, tape. These costs are scattered across your bank statements and half of them get forgotten when it comes to tax time.',
    whyItMatters: 'Every expense you forget to claim is money you are overpaying in tax. If you spend £500/year on packaging and postage but only claim £200, you are paying tax on £300 of income that was actually eaten by costs.',
    solution: 'Log packaging, postage, travel, and software costs with predefined categories. Every expense is automatically deducted from your net profit and included in your tax export.',
    result: 'You claim every legitimate expense, reduce your tax bill, and have a complete record if HMRC asks questions.',
  },
  'Inventory lot tracking': {
    icon: Boxes,
    category: 'Accounting',
    problem: 'You buy 50 items from a wholesaler for £200. Your spreadsheet says "£200 — various items." Which items sold? What was the cost per unit? What is the ROI on that lot? You cannot answer these questions.',
    whyItMatters: 'Without per-item cost tracking, you cannot calculate profit on individual sales. You also cannot compare sourcing trips to see which ones deliver the best margins.',
    solution: 'Buy 50 items for £200? Split into individual units at £4 each. Every item gets its own cost basis. Edit individual costs when needed. Track ROI per lot and link items to individual sales.',
    result: 'You know exactly which sourcing trips deliver the best ROI. You can double down on profitable suppliers and stop wasting money on dead-end hauls.',
  },
  'Other income management': {
    icon: Receipt,
    category: 'Accounting',
    problem: 'You sell on Vinted but maybe also on Depop, or you do car boot sales, or you have a part-time job. Your tax return needs all of it, but your Vinted spreadsheet only shows Vinted.',
    whyItMatters: 'HMRC requires you to declare all income. If you only track Vinted, you either miss income (risking penalties) or have to manually combine multiple sources every January.',
    solution: 'Track non-Vinted income sources alongside your reselling revenue for a complete tax picture. Include everything in your HMRC export with one click.',
    result: 'One report, all your income. No more juggling multiple spreadsheets. Complete and accurate for HMRC.',
  },
  'Monthly profit targets': {
    icon: Target,
    category: 'Accounting',
    problem: 'Are you having a good month? A bad one? You will not know until the month ends and you tally everything up. By then it is too late to adjust your sourcing or pricing.',
    whyItMatters: 'Without real-time goal tracking, you cannot course-correct. A bad month becomes a bad month with no opportunity to fix it mid-way through.',
    solution: 'Set monthly profit, revenue, items sold, items listed, items sourced, and ROI targets. Watch your progress update in real-time as sales come in.',
    result: 'You can see mid-month that you are behind target and push harder, or see you are ahead and ease off. You run your business proactively, not reactively.',
  },
  'Real-time profit dashboard': {
    icon: Calculator,
    category: 'Accounting',
    problem: 'You have no visibility into your actual financial performance. Your profit is a guess. Your revenue is scattered. You cannot answer the simple question: "Am I making money?"',
    whyItMatters: 'Running a reselling business without a profit dashboard is like driving with your eyes closed. You need to see total profit, known profit (excluding unknown-cost items), and profit delta vs last period to make decisions.',
    solution: 'See your total profit, known profit (excluding unknown-cost items), and profit delta vs the previous period — all on one dashboard, updated in real-time as sales come in.',
    result: 'You always know your financial position. No guessing, no spreadsheet updates, no end-of-month surprises.',
  },
  'Sales cadence chart': {
    icon: BarChart3,
    category: 'Accounting',
    problem: 'You cannot see trends in your sales. Is this week better than last? Are you growing or stagnating? You just see a stream of individual sales without any pattern.',
    whyItMatters: 'Without trend visibility, you cannot plan. You do not know if you need to source more, list more, or adjust pricing. You are reacting instead of strategizing.',
    solution: 'Daily or monthly buckets showing sales revenue, profit, items sold, and items listed over time. Visualise your growth trajectory at a glance.',
    result: 'You can see growth trends, identify slow periods, and plan sourcing and listing activity around your actual sales patterns.',
  },
  'Sell-through rate': {
    icon: TrendingUp,
    category: 'Accounting',
    problem: 'You have 200 active listings and sell 10 items a week. Is that good? Bad? You have no benchmark. You do not know if your inventory is moving fast enough.',
    whyItMatters: 'Sell-through rate tells you how efficiently your inventory converts to sales. A low rate means capital tied up in unsold stock. A high rate means you need to source more.',
    solution: 'Calculated live from your sold count vs active listings. Know exactly how fast your inventory moves and adjust your sourcing accordingly.',
    result: 'You stop over-buying slow-moving categories and focus your sourcing budget on items that actually sell.',
  },
  'Pending revenue': {
    icon: Receipt,
    category: 'Accounting',
    problem: 'You sold 5 items yesterday but they have not been delivered yet. The money is not in your bank. You do not know how much is outstanding, so you cannot plan your cash flow.',
    whyItMatters: 'Without knowing your pending revenue, you might think you had a bad week when actually you have £200 of sales about to complete. Or you might overspend thinking money is coming that will not.',
    solution: 'See money from sold-but-not-completed orders separately from confirmed revenue. Know exactly what is in the pipeline.',
    result: 'You have an accurate picture of your cash flow. You know what is confirmed, what is pending, and what is still listed.',
  },
  'Status mix': {
    icon: BarChart3,
    category: 'Accounting',
    problem: 'You have orders in every stage — paid, needs shipping, shipped, in transit, delivered, completed, issues, cancelled. You cannot see the breakdown without manually counting.',
    whyItMatters: 'If 30% of your orders are stuck in "needs shipping," you have a fulfilment problem. If 10% are cancelled, you have a listing accuracy problem. You need to see the mix to identify issues.',
    solution: 'Visual breakdown of orders by status on one dashboard. See your entire pipeline at a glance.',
    result: 'You spot bottlenecks instantly. Too many orders needing dispatch? You prioritise shipping. Too many cancelled? You review your listings.',
  },
  'Expense breakdown': {
    icon: Receipt,
    category: 'Accounting',
    problem: 'You know you spent £500 on expenses last month but you do not know where it went. Packaging? Postage? Travel? Without a breakdown, you cannot cut costs.',
    whyItMatters: 'If packaging is eating 40% of your expense budget, you need to find a cheaper supplier. If travel is costing more than your sourcing profits, you need to source closer to home.',
    solution: 'See your top expense categories at a glance with monthly totals and recent entries. Know where your money goes beyond inventory costs.',
    result: 'You identify cost-cutting opportunities and keep more of your profit.',
  },
  'Goal tracking widget': {
    icon: Target,
    category: 'Accounting',
    problem: 'You set a goal to make £5,000 profit this month. By day 15, you have no idea if you are on track. The goal exists in your head but you have no live feedback.',
    whyItMatters: 'Goals without tracking are wishes. Without real-time progress, you cannot adjust your effort mid-month. You only find out you missed it when the month is over.',
    solution: 'Active goals with live progress bars. Track profit, revenue, items sold, items listed, items sourced, and ROI targets. Active and paused states.',
    result: 'You see your progress every time you open Vintify. You can push harder when behind or ease off when ahead. Goals become actionable, not aspirational.',
  },
  'Action items': {
    icon: Check,
    category: 'Accounting',
    problem: 'You have 3 orders that need dispatch, 5 listings with no cost data, 2 stale listings, and an overdue task from yesterday. These are all in different places. Things fall through the cracks.',
    whyItMatters: 'Missing a dispatch deadline hurts your Vinted rating. Missing cost data means inaccurate profit numbers. Stale listings waste potential. Every dropped ball costs you money.',
    solution: 'Overdue tasks, sales missing cost data, stale listings, and orders needing dispatch — all surfaced on the dashboard in one list so nothing falls through the cracks.',
    result: 'You open Vintify and immediately see what needs attention. No more forgotten dispatches or incomplete data.',
  },
  'Performance analytics': {
    icon: BarChart3,
    category: 'Accounting',
    problem: 'You do not know your best-selling items, best brands, or optimal listing days. You source blindly, list whenever you have time, and hope for the best.',
    whyItMatters: 'If Nike hoodies sell in 3 days but Zara blazers sit for 3 weeks, you should source more Nike. If Sunday listings sell faster than Wednesday ones, you should list on Sundays. Without data, you are guessing.',
    solution: 'Deep-dive into sales trends, best-selling items, best brands, optimal listing days, and data quality insights. Make data-driven sourcing decisions.',
    result: 'You source what sells, list when buyers are active, and stop wasting money on items that sit.',
  },
  'Multiple period views': {
    icon: Calculator,
    category: 'Accounting',
    problem: 'Sometimes you want to see this week. Sometimes this quarter. Sometimes all-time. Your spreadsheet only shows one view, and switching means manually re-filtering everything.',
    whyItMatters: 'Different decisions need different timeframes. A 7-day view shows this week\'s momentum. A 90-day view shows seasonal trends. You need both.',
    solution: 'Switch between 7-day, 30-day, 90-day, and all-time views. Charts adapt to show daily or monthly buckets depending on your history length.',
    result: 'You get the right timeframe for every decision, instantly.',
  },
  'Auto-sync': {
    icon: RefreshCw,
    category: 'Accounting',
    problem: 'Your data is always out of date. You have to manually click "sync" to pull in new sales, orders, and messages. Half the time you forget, so your dashboard shows yesterday\'s numbers.',
    whyItMatters: 'Decisions based on stale data are bad decisions. If your dashboard shows 80 items sold but you actually sold 87, you might think you are behind target when you are not.',
    solution: 'Data syncs automatically while the CRM is open. No manual "sync now" buttons needed. Your dashboard is always current.',
    result: 'You always see today\'s numbers. No manual syncing, no stale data, no bad decisions based on yesterday\'s information.',
  },
  'CSV export': {
    icon: FileText,
    category: 'Accounting',
    problem: 'Your accountant wants raw data. You need to share your inventory with cost, revenue, profit, and ROI data. But your data is locked inside the app.',
    whyItMatters: 'Without export capability, you are locked in. Your accountant cannot do their job. You cannot do your own analysis in Excel. You cannot migrate if you need to.',
    solution: 'Export your full inventory with cost, revenue, profit, and ROI data to CSV at any time. Perfect for accountants or your own records.',
    result: 'You own your data. Share it with your accountant, analyse it in Excel, or keep a backup. No lock-in.',
  },

  /* ── GROWTH BOT ── */
  'AI listing writer': {
    icon: Sparkles,
    category: 'Growth Bot',
    problem: 'You sit there typing out titles, descriptions, and hashtags for every single item. 20 listings a day means 2 hours of typing. And you still miss keywords that would help buyers find your items.',
    whyItMatters: 'Time spent writing listings is time not spent sourcing, shipping, or growing your business. Poorly written listings also mean fewer views and slower sales.',
    solution: 'Type "Nike hoodie red medium" — get a full SEO-optimised title, description, and 8+ hashtags instantly. AI suggests the best Vinted category too. Review, edit if you want, and push to Vinted.',
    result: '20 listings in 10 minutes instead of 2 hours. Better SEO means more views and faster sales.',
  },
  'One-click Vinted listing': {
    icon: Zap,
    category: 'Growth Bot',
    problem: 'You write your listing in a separate app, then open Vinted, create a new listing, copy-paste the title, copy-paste the description, manually add hashtags, set the price, upload photos. 5 minutes of copy-pasting per item.',
    whyItMatters: 'Copy-pasting is not just slow — it introduces errors. You paste the wrong description, forget a hashtag, or mismatch prices. Every error costs sales.',
    solution: 'Push drafted listings straight to Vinted via our secure Chrome extension. No copy-pasting, no switching tabs. One click and it is live.',
    result: 'Listings go from draft to live in seconds. No errors from copy-pasting. No tab-switching.',
  },
  'Auto price-drop bot': {
    icon: Bot,
    category: 'Growth Bot',
    problem: 'Items that have been live for 3 weeks with no views sit there forever. You know you should drop the price, but you forget. Or you do not want to manually edit 50 listings. So they sit and never sell.',
    whyItMatters: 'Stale listings are dead capital. Every item sitting unsold is money tied up that could be reinvested. Price drops are the single most effective way to revive stale listings.',
    solution: 'The bot runs every 12 minutes while your CRM is open. It finds stale listings (configurable: 7, 14, 21 days), drops their price by your configured percentage, respects your lifetime floor and cost floor, and pings users who favourited the item.',
    result: 'Stale listings start selling again. Favourited users get notified of the price drop and often buy immediately. Capital is freed up for re-sourcing.',
  },
  'Smart relist suggestions': {
    icon: TrendingUp,
    category: 'Growth Bot',
    problem: 'You have 300 listings and no idea which ones are stale. You would relist them if you knew which ones needed it, but checking each one manually would take hours.',
    whyItMatters: 'Relisting is one of the most effective ways to boost sales on Vinted. A fresh listing gets pushed to the top of search results. But you can only relist what you know is stale.',
    solution: 'Automatically identifies listings that have been live too long without selling. Flags them as relist candidates with engagement stats — views, favourites, and days listed.',
    result: 'You know exactly which listings to relist without checking 300 items manually. Relisted items get fresh visibility and sell faster.',
  },
  'Smart Offers (auto accept/counter/decline)': {
    icon: Tag,
    category: 'Growth Bot',
    problem: 'You get 15 offers a day. Some are reasonable. Some are insulting. You have to open each one, decide whether to accept, counter, or decline, and type a message back. It is exhausting and eats your entire evening.',
    whyItMatters: 'Slow offer responses lose sales. Buyers move on to other sellers. But manually handling every offer is unsustainable as you scale. You need a system that works while you sleep.',
    solution: 'Set your rules: accept anything above 90% of listing price, counter between 75-89%, decline below 75%. Smart Offers does the rest — automatically accepting, countering, or declining based on your thresholds. Every action sends a personalised message with the buyer\'s name and your counter price.',
    result: 'You wake up to accepted offers and replied messages. Buyers get instant responses. You never lose a sale because you were too slow to reply.',
  },
  'AI listing rewriter': {
    icon: RefreshCw,
    category: 'Growth Bot',
    problem: 'You know you should relist stale items, but Vinted detects duplicates. You try changing a word or two, but it still gets flagged. So you give up and the item never sells.',
    whyItMatters: 'Relisting is critical for sales velocity, but duplicate detection prevents it. Without a way to create genuinely unique versions, your stale items are stuck forever.',
    solution: 'Rewrite titles and descriptions into completely unique versions. Choose title-only, description-only, or both. Adjustable intensity from light tweak to full rewrite. AI restructures sentences, swaps synonyms, and rephrases to bypass Vinted\'s duplicate detection.',
    result: 'Relisted items pass duplicate detection and get fresh visibility. Stale inventory starts selling again.',
  },
  'AI reply suggestions': {
    icon: MessageCircle,
    category: 'Growth Bot',
    problem: '"Is this still available?" "Can you do £20?" "What size is this?" The same questions, over and over. You know you should reply fast — Vinted rewards quick responders — but you are out sourcing and cannot type on your phone.',
    whyItMatters: 'Slow replies lose sales. Buyers message multiple sellers and buy from whoever responds first. Every delayed reply is a potential sale lost to a faster competitor.',
    solution: 'Every buyer message gets an AI-drafted reply suggestion. Personalised, context-aware, and editable before sending. "Is this still available?" gets "Yes, it\'s still available! Interested?" — not a generic template.',
    result: 'Reply in seconds, not hours. Never lose a sale because you were too slow to respond. Buyers buy from you because you replied first.',
  },
  'Reprice ledger': {
    icon: FileText,
    category: 'Growth Bot',
    problem: 'You drop prices on listings but have no record of what you changed, when, or why. Did that price drop help? Did the item sell faster after? You have no data.',
    whyItMatters: 'Without a price change history, you cannot learn what works. Maybe 10% drops work better than 5%. Maybe dropping on day 14 is better than day 7. You are guessing without data.',
    solution: 'Every price drop is tracked with original price, new price, and timestamp. Full audit trail of every automated and manual price change.',
    result: 'You can analyse which pricing strategies work and refine your bot rules over time. Data-driven repricing instead of guesswork.',
  },
  'Pinned items': {
    icon: Target,
    category: 'Growth Bot',
    problem: 'The bot manages stale items automatically, but what about new listings you want to push hard from day one? Or that premium item you want to actively manage before it goes stale?',
    whyItMatters: 'Some items need proactive management from the start. Waiting 14 days for the bot to notice them means lost selling opportunities during peak interest.',
    solution: 'Hand-pick specific listings for the bot to manage, even before they become stale. The bot will monitor, reprice, and ping favourited users on your schedule. Unpin to remove from automation.',
    result: 'You control which items get active management and when. Premium or strategic listings get attention from day one, not day 14.',
  },
  'Central inbox': {
    icon: MessageSquare,
    category: 'Growth Bot',
    problem: 'Your Vinted messages are in one place, but you have to scroll through endless threads to find the ones that need a reply. Offers, questions, and completed sales are all mixed together.',
    whyItMatters: 'Missing a message means missing a sale. But finding the messages that need attention in a cluttered inbox is time-consuming and error-prone.',
    solution: 'Read and reply to Vinted messages from one place. Filter by "needs reply", unread, or offers. See full message threads with formatted timestamps.',
    result: 'You see exactly what needs attention. No more scrolling through completed sales to find the buyer waiting for a reply.',
  },
  'Offer management': {
    icon: MessageCircle,
    category: 'Growth Bot',
    problem: 'Offers come in at all hours. You see them when you open Vinted, but by then the buyer may have moved on. You also cannot see all offers in one view to compare and prioritise.',
    whyItMatters: 'Offers are time-sensitive. A buyer who offers £22 on your £28 listing will buy from someone else if you take 6 hours to respond. Speed wins sales.',
    solution: 'See all offers in one view. Accept, counter, or decline with auto-generated personalised messages. Configurable accept/counter/decline thresholds.',
    result: 'You respond to offers in minutes, not hours. Buyers buy from you because you responded first. Higher acceptance rates mean more sales.',
  },
  'Listing engagement stats': {
    icon: BarChart3,
    category: 'Growth Bot',
    problem: 'You list items and hope they sell. You have no idea which listings get views, which get favourites, and which are completely invisible. You cannot tell the difference between a listing that is working and one that is dead.',
    whyItMatters: 'Without engagement data, you cannot optimise. A listing with 200 views and no favourites has a pricing problem. A listing with 10 views has a visibility problem. Different problems need different fixes.',
    solution: 'See views, favourites, and days listed for every item. Know exactly what is and is not getting attention. Use data to decide what to relist or reprice.',
    result: 'You can diagnose why an item is not selling and take the right action — reprice, relist, or rewrite — instead of guessing.',
  },
  'Stale listing detection': {
    icon: RefreshCw,
    category: 'Growth Bot',
    problem: 'You have 300 live listings. Some have been sitting for 30 days with no views. You cannot check each one manually to find the stale ones.',
    whyItMatters: 'Stale listings waste space in your shop and tie up capital. They also drag down your overall sell-through rate. But identifying them manually across hundreds of listings is impractical.',
    solution: 'Identifies listings that have been live too long without selling. Flags them as relist candidates with views, favourites, and days listed.',
    result: 'You instantly see which listings need action. No manual checking. Stale items get relisted or repriced instead of sitting forever.',
  },
  'Custom SKU patterns': {
    icon: Tag,
    category: 'Growth Bot',
    problem: 'Your listings have no SKUs. Your accountant asks for inventory codes. You want to track items properly. But creating SKUs for 300 existing listings manually is a full day\'s work.',
    whyItMatters: 'SKUs are essential for inventory management, accounting, and multi-channel selling. Without them, you cannot track items across systems or match sales to purchases.',
    solution: 'Configure your own SKU format with variables (brand, category, date, sequence). Preview before applying. Auto-assign SKUs on sync. Overwrite existing or skip — your choice.',
    result: 'Every listing gets a proper SKU automatically. Your inventory is traceable. Your accountant is happy. Zero manual work.',
  },
  'Bulk Vinted actions': {
    icon: Zap,
    category: 'Growth Bot',
    problem: 'You need to delete 20 old listings or relist 15 items. You open each one on Vinted, click delete, confirm, go back, open the next one. 20 items × 20 seconds each = 7 minutes of clicking.',
    whyItMatters: 'These small tasks add up. 7 minutes here, 10 minutes there. Before you know it, you have spent an hour on tasks that should take seconds.',
    solution: 'Delete or relist multiple items on Vinted directly from Vintify — no need to open Vinted in another tab. Select, action, done.',
    result: '20 actions in 5 seconds instead of 7 minutes. No tab-switching. No repetitive clicking.',
  },
  'Multiple Vinted accounts': {
    icon: RefreshCw,
    category: 'Growth Bot',
    problem: 'You run two Vinted shops — one for clothes, one for homeware. You have to log out of one and into the other to manage them. Your data is split across two accounts with no unified view.',
    whyItMatters: 'Managing multiple shops without a unified view means you cannot see your total profit, combined inventory, or overall performance. You are running two businesses blind instead of one business smart.',
    solution: 'Connect and switch between multiple Vinted accounts. Data stays separate and cached per account. Perfect for managing multiple shops.',
    result: 'All your shops in one place. Switch with a click. See each shop\'s performance separately, no logging in and out.',
  },
  'Chrome Extension sync': {
    icon: Settings,
    category: 'Growth Bot',
    problem: 'You are wary of giving your Vinted password to a third-party app. You have heard stories of accounts being hacked or banned. You want the automation but not the security risk.',
    whyItMatters: 'Your Vinted account is your livelihood. If it gets banned because a tool violated terms of service, you lose your business. Security is not optional.',
    solution: 'Securely connects to your Vinted account via Chrome Extension. Uses your active browser session. No passwords stored, ever. GDPR compliant.',
    result: 'You get full automation with zero security risk. Your password never leaves your browser. Your account stays safe.',
  },

  /* ── AUTOMATION ── */
  'Bulk price editing': {
    icon: Tag,
    category: 'Automation',
    problem: 'You need to drop prices on 50 items for a weekend sale. You open each listing, edit the price, save, go back, open the next one. 50 items × 30 seconds each = 25 minutes of mind-numbing clicking.',
    whyItMatters: 'Sales and promotions are proven to boost revenue, but the manual effort puts you off running them. So you miss sales opportunities because the admin is too painful.',
    solution: 'Select multiple listings (or all of them) and update prices in bulk. Apply a percentage discount (e.g., 20% off everything) or set absolute prices. Preview the changes before applying.',
    result: '50 items updated in 10 seconds. Run promotions whenever you want. No more missed sales opportunities because the admin was too painful.',
  },
  'Bulk SKU assignment': {
    icon: Tag,
    category: 'Automation',
    problem: 'You have 300 live listings and not one has a SKU. Your accountant wants inventory codes. You want to track items properly. But going through 300 listings to manually add SKUs? That is a full day\'s work.',
    whyItMatters: 'Without SKUs, you cannot match sales to purchases, track inventory accurately, or generate proper accounting reports. It is a foundational requirement for running a professional reselling business.',
    solution: 'Configure your own SKU format with variables. Generate and assign SKUs to multiple existing listings at once. Preview before applying. Choose to overwrite existing SKUs or skip them.',
    result: '300 listings get SKUs in under a minute. Your inventory is traceable. Your accountant gets what they need. Zero manual data entry.',
  },
  'Bulk repost': {
    icon: RefreshCw,
    category: 'Automation',
    problem: 'You need to repost 15 stale items. For each one: delete the old listing, create a new one, re-upload photos, re-write the title and description, re-set the price. 15 items × 5 minutes each = over an hour of repetitive work.',
    whyItMatters: 'Reposting is one of the most effective ways to boost sales on Vinted — fresh listings get pushed to the top of search. But the manual effort means you do not do it often enough.',
    solution: 'Select multiple stale listings and repost them all at once — Vintify handles the delete-and-relist cycle automatically. Use AI-rewritten titles and descriptions to bypass duplicate detection.',
    result: '15 items reposted in seconds instead of an hour. Fresh visibility on Vinted. More views, more sales.',
  },
  'Auto repost': {
    icon: RefreshCw,
    category: 'Automation',
    problem: 'You know reposting stale items helps them sell, but you never get around to it. It is not urgent on any given day, so it keeps getting pushed down your to-do list. Items sit unsold for weeks.',
    whyItMatters: 'Every day an item sits unsold is a day of tied-up capital. Auto-reposting ensures no item goes stale without getting a fresh push. It is set-and-forget growth.',
    solution: 'Enable auto-repost: Vintify detects stale listings and reposts them on your schedule, using AI-rewritten titles and descriptions to bypass duplicate detection. Zero manual work.',
    result: 'Stale items get reposted automatically. You never have to think about it. Items sell faster because they always have fresh visibility.',
  },
  'Scheduled reposts': {
    icon: Clock,
    category: 'Automation',
    problem: 'Reposting on Sunday evening gets more views than Monday morning. But you are having dinner with your family on Sunday. You keep meaning to set a reminder, but you never do. The optimal window passes.',
    whyItMatters: 'Timing matters on Vinted. Listings posted during peak browsing hours get more views and sell faster. But peak hours are often evenings and weekends — your personal time.',
    solution: 'Set a schedule and Vintify does the rest. Schedule reposts for Sunday at 7pm. Set it once, and it runs every week automatically.',
    result: 'Your listings hit peak traffic every time. You enjoy your Sunday dinner. Vintify handles the timing.',
  },
  'Scheduled price drops': {
    icon: Clock,
    category: 'Automation',
    problem: 'Saturday morning is when buyers browse with weekend money. Dropping prices then maximises sales. But you are at a car boot sale on Saturday mornings. The price drop never happens.',
    whyItMatters: 'Price drops during peak browsing hours convert better than drops during quiet hours. But peak hours are not always when you are at your computer.',
    solution: 'Schedule price drops for Saturday morning when traffic peaks. Set it once and it runs automatically every week.',
    result: 'Price drops hit at the perfect moment every week. Buyers see the reduced price when they are most likely to buy.',
  },
  'Label Hub — import all Vinted labels': {
    icon: Printer,
    category: 'Automation',
    problem: 'You have 12 orders to ship. That means opening 12 Vinted order pages, downloading 12 PDF labels, and then printing them one by one. It takes 20 minutes just to get the labels ready. Then you have to match them to orders.',
    whyItMatters: 'Shipping is the most time-consuming part of reselling. The faster you ship, the better your Vinted rating. But the label download process is slow, repetitive, and error-prone.',
    solution: 'Vintify imports all your Vinted shipping labels into one Label Hub. View every label, sorted by dispatch deadline. Print them all at once — one click, one print job. QR-ready labels for InPost.',
    result: '12 labels printed in one click instead of 12 separate downloads. 20 minutes becomes 20 seconds. You ship faster, your rating improves.',
  },
  'Auto-lister with AI': {
    icon: Zap,
    category: 'Automation',
    problem: 'You come back from a sourcing trip with 30 items. You need to photograph, title, describe, price, and list each one. Even at 5 minutes per item, that is 2.5 hours before any of them are live and earning.',
    whyItMatters: 'Items sitting unlisted are items not earning. The faster you list, the faster you sell. But the listing process is a bottleneck that keeps your sourcing trips from paying off quickly.',
    solution: 'Type a few words about each item. AI generates the title, description, hashtags, suggested price, and Vinted category. Review and push to Vinted in one click.',
    result: '30 items listed in 30 minutes. Your sourcing trip turns into live listings before the day is over. Items start selling the same day you source them.',
  },
  'Shipping lifecycle': {
    icon: Truck,
    category: 'Automation',
    problem: 'You have orders in every stage — some need sending, some are in transit, some are delivered. You lose track of which is which. You open Vinted order pages to check status, wasting time.',
    whyItMatters: 'Losing track of orders means missing dispatch deadlines, failing to follow up on stuck parcels, and not knowing which orders have completed. Each of these costs you money or ratings.',
    solution: 'Track every order from "needs sending" through "in transit" to "delivered". Visual status pipeline. Never lose track of a parcel again.',
    result: 'You see your entire shipping pipeline at a glance. You know exactly what needs attention. No more lost parcels or missed deadlines.',
  },
  'Carrier auto-detection': {
    icon: Truck,
    category: 'Automation',
    problem: 'For every order, you manually check the shipping label to figure out if it is Evri, InPost, Yodel, or Royal Mail. Then you manually enter the carrier in your tracking system. It is tedious and error-prone.',
    whyItMatters: 'Wrong carrier information means you track parcels on the wrong website, cannot follow up on delays, and give buyers incorrect tracking information. It creates confusion and extra support messages.',
    solution: 'Automatically detects Evri, InPost, Yodel, and Royal Mail from shipping labels. No manual carrier entry needed.',
    result: 'Carrier is identified instantly and accurately. You track parcels on the right website. Buyers get correct tracking information.',
  },
  'Dispatch deadlines': {
    icon: Zap,
    category: 'Automation',
    problem: 'Vinted gives you a dispatch deadline for every order, but you have to check each order to see it. You miss a deadline, your buyer complains, and your seller rating drops.',
    whyItMatters: 'Your Vinted seller rating directly affects your visibility in search results. Low ratings mean fewer views and fewer sales. Missing dispatch deadlines is one of the fastest ways to damage your rating.',
    solution: 'See dispatch deadlines for every order in one view. Urgent deadlines are highlighted. Never miss a Vinted shipping deadline and protect your seller rating.',
    result: 'You never miss a dispatch deadline. Your seller rating stays high. Your listings stay visible.',
  },
  'Tracking numbers': {
    icon: FileText,
    category: 'Automation',
    problem: 'A buyer asks "where is my parcel?" You have to open Vinted, find the order, scroll to the tracking number, then go to the carrier website to check status. 5 minutes for what should be 5 seconds.',
    whyItMatters: 'Buyer messages about tracking are common. Slow responses frustrate buyers and can lead to bad reviews. You need tracking information at your fingertips.',
    solution: 'Every order\'s tracking number is synced and displayed. Click to track on the carrier\'s website. No hunting through Vinted order pages.',
    result: 'You answer "where is my parcel?" in 5 seconds instead of 5 minutes. Buyers are happy. Bad reviews are avoided.',
  },
  'Manual status overrides': {
    icon: Settings,
    category: 'Automation',
    problem: 'Vinted says an order is "in transit" but it was delivered yesterday. Or it says "needs sending" but you already posted it. Your dashboard shows wrong information and you cannot fix it.',
    whyItMatters: 'Inaccurate status data means your action items are wrong, your status mix is wrong, and you waste time checking orders that do not need attention. Your dashboard becomes unreliable.',
    solution: 'Override shipping status when Vinted\'s data is stale or wrong. Keep your dashboard accurate even when Vinted lags behind reality.',
    result: 'Your dashboard always reflects reality. You trust your data and make decisions with confidence.',
  },
  'Purchase tracking': {
    icon: ShoppingBag,
    category: 'Automation',
    problem: 'You come back from a charity shop haul with 15 items. You know you spent £45 but you cannot remember what you paid for individual items. Two months later, you have no record of what came from that trip.',
    whyItMatters: 'Without purchase records, you cannot calculate profit per item, compare sourcing trips, or track which suppliers give the best ROI. You are sourcing blind.',
    solution: 'Log every sourcing trip — charity shops, car boot sales, wholesale, online. Track date, total cost, and items received per trip.',
    result: 'You have a complete sourcing history. You know which trips were profitable and which suppliers to revisit.',
  },
  'Bulk lot splitting': {
    icon: Boxes,
    category: 'Automation',
    problem: 'You buy 50 items from a wholesaler for £200. Your spreadsheet says "£200 — various items." Which items sold? What was the cost per unit? What is the ROI on that lot? You cannot answer these questions.',
    whyItMatters: 'Without per-item cost tracking, you cannot calculate profit on individual sales from that lot. You also cannot compare bulk buys to see if they are worth it versus individual sourcing.',
    solution: 'Buy 50 items for £200? Split into individual units at £4 each. Every item gets its own cost basis automatically. Edit individual costs when needed.',
    result: 'Every item from a bulk buy has its own cost. Profit is calculated accurately on every sale. You know if bulk buying is worth it.',
  },
  'Smart Matches': {
    icon: Link2,
    category: 'Automation',
    problem: 'You log a purchase of 15 items. You also have 15 new Vinted listings. Which purchase item links to which listing? Manually matching them one by one is tedious and error-prone.',
    whyItMatters: 'Without linking purchases to listings, you cannot calculate true profit per item. The cost data exists but is not connected to the sale. Your profit numbers are incomplete.',
    solution: 'Auto-links your purchases to live Vinted listings using title and price matching. Suggests the best match with confidence scoring. Accept or reject suggestions individually.',
    result: 'Purchases are linked to sales automatically. Profit per item is accurate. You save hours of manual matching.',
  },
  'Auto-match engine': {
    icon: Zap,
    category: 'Automation',
    problem: 'Smart Matches suggests links, but you still have to accept each one manually. For 50 items, that is 50 clicks. It is better than manual matching but still tedious.',
    whyItMatters: 'The faster your purchases are linked to listings, the faster your profit data is accurate. Manual acceptance is a bottleneck that keeps your data incomplete.',
    solution: 'Enable auto-matching in settings to link purchases to listings without lifting a finger. Toggle on or off anytime.',
    result: 'Purchases are linked to listings automatically. Your profit data is always complete and accurate. Zero manual work.',
  },
  'Packaging cost defaults': {
    icon: Receipt,
    category: 'Automation',
    problem: 'You forget to include packaging costs in your profit calculations. A poly bag costs 15p, tissue paper 10p, tape 5p. On a £10 sale, that 30p matters. But you never log it.',
    whyItMatters: '30p per item across 87 items per month is £26.10 of untracked costs. Over a year, that is £313 of profit you think you made but did not. Your numbers are wrong.',
    solution: 'Set a default packaging cost per item. Automatically included in profit calculations so your margins are always accurate.',
    result: 'Your profit numbers account for every penny of packaging. No more inflated margins. No more surprises at tax time.',
  },
  'Sync controls': {
    icon: Settings,
    category: 'Automation',
    problem: 'You want your listings and orders to sync automatically, but you do not want your old conversations syncing because it slows everything down. You have no control over what syncs.',
    whyItMatters: 'Syncing everything means slower syncs and more data than you need. Syncing nothing means stale data. You need granular control to balance freshness with speed.',
    solution: 'Toggle what syncs: listings, sold orders, purchases, conversations, shipping. You are in control of what data flows into Vintify.',
    result: 'You sync what you need and skip what you do not. Faster syncs, relevant data, no waste.',
  },
  'Blank cost profit mode': {
    icon: Calculator,
    category: 'Automation',
    problem: 'Some items have no purchase cost recorded — maybe you got them free, or you forgot to log the cost. Your profit dashboard either excludes them (making your profit look low) or includes them at £0 (making it look high). Neither is accurate.',
    whyItMatters: 'Inaccurate profit numbers lead to bad decisions. If your profit looks £500 higher than reality because of blank-cost items, you might reinvest money you do not have.',
    solution: 'Choose how items with no purchase cost are treated: exclude from profit (honest, default) or assume £0 (optimistic). Your numbers, your rules.',
    result: 'Your profit dashboard reflects reality. You make decisions based on accurate data, not inflated or deflated numbers.',
  },

  /* ── Extra features from stages ── */
  'Match confidence scoring': {
    icon: Target,
    category: 'Automation',
    problem: 'Auto-matching links purchases to listings, but some matches are wrong. A "Nike hoodie" purchase might get linked to the wrong Nike hoodie listing. You do not know which matches to trust.',
    whyItMatters: 'Wrong matches mean wrong cost data, which means wrong profit calculations. You need to know which matches are reliable and which need review.',
    solution: 'Every suggested match comes with a confidence score so you know which links to trust and which to review. Accept or reject suggestions individually.',
    result: 'You trust high-confidence matches automatically and review low-confidence ones. Your cost data is accurate without manual checking every match.',
  },
  'CSV export': {
    icon: FileText,
    category: 'Accounting',
    problem: 'Your accountant wants raw data. You need to share your inventory with cost, revenue, profit, and ROI data. But your data is locked inside the app.',
    whyItMatters: 'Without export capability, you are locked in. Your accountant cannot do their job. You cannot do your own analysis in Excel.',
    solution: 'Export your full inventory with cost, revenue, profit, and ROI data to CSV at any time. Perfect for accountants or your own records.',
    result: 'You own your data. Share it with your accountant, analyse it in Excel, or keep a backup. No lock-in.',
  },
  'Label Hub — all labels in 1 place': {
    icon: Printer,
    category: 'Automation',
    problem: 'You have 12 orders to ship. That means opening 12 Vinted order pages, downloading 12 PDF labels, and then printing them one by one. It takes 20 minutes just to get the labels ready.',
    whyItMatters: 'Shipping is the most time-consuming part of reselling. The faster you ship, the better your Vinted rating.',
    solution: 'Vintify imports all your Vinted shipping labels into one Label Hub. View every label, sorted by dispatch deadline. Print them all at once.',
    result: '12 labels printed in one click. 20 minutes becomes 20 seconds. You ship faster, your rating improves.',
  },
};

/* ── Modal component ── */
export function FeatureDetailModal({ feature, onClose }) {
  if (!feature) return null;
  const detail = FEATURE_DETAILS[feature.title];
  if (!detail) return null;
  const Icon = detail.icon || feature.icon;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl border border-ink-200 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'fadeUp 0.3s ease-out forwards' }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ink-200 bg-white px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10">
              <Icon size={20} className="text-brand-600" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-ink-900">{feature.title}</h3>
              <span className="font-mono text-[10px] uppercase tracking-wider text-brand-600">{detail.category}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-900"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-6 px-6 py-6">
          {/* Problem */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-500/10">
                <AlertCircle size={14} className="text-accent-600" />
              </div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent-600">The Problem</span>
            </div>
            <p className="text-sm leading-relaxed text-ink-600">{detail.problem}</p>
          </div>

          {/* Why it matters */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-500/10">
                <Lightbulb size={14} className="text-amber-600" />
              </div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-600">Why It Matters</span>
            </div>
            <p className="text-sm leading-relaxed text-ink-600">{detail.whyItMatters}</p>
          </div>

          {/* Solution */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-500/10">
                <Zap size={14} className="text-brand-600" />
              </div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-600">How Vintify Solves It</span>
            </div>
            <p className="text-sm leading-relaxed text-ink-600">{detail.solution}</p>
          </div>

          {/* Result */}
          <div className="rounded-xl border border-brand-200 bg-brand-500/5 p-4">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-500">
                <Check size={14} className="text-white" />
              </div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-600">The Result</span>
            </div>
            <p className="text-sm leading-relaxed text-ink-900 font-medium">{detail.result}</p>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between border-t border-ink-200 pt-4">
            <Link href="/features" className="text-sm font-bold text-brand-600 transition-all hover:gap-3 inline-flex items-center gap-2">
              Explore {detail.category} <ArrowRight size={15} />
            </Link>
            <a href={SIGNUP_URL} className="text-sm font-bold text-ink-500 transition-colors hover:text-ink-900">
              Start free trial →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
