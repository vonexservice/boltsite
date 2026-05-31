import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "5 Signs Your Business Needs Managed Print Services",
    excerpt: "Discover the key indicators that your Saskatchewan business could benefit from professional managed print services to reduce costs and improve efficiency.",
    content: "...",
    author: "Vonex Team",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Managed Print",
    tags: ["Managed Print", "Cost Reduction", "Business Efficiency"],
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    slug: "signs-business-needs-managed-print-services"
  },
  {
    id: 2,
    title: "Emergency Printer Repair: What to Do When Your Printer Fails",
    excerpt: "Step-by-step guide for Saskatchewan businesses when facing printer emergencies, including when to call for professional repair services.",
    content: "...",
    author: "Technical Team",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Printer Repair",
    tags: ["Emergency Repair", "Troubleshooting", "Business Continuity"],
    image: "https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    slug: "emergency-printer-repair-guide"
  },
  {
    id: 3,
    title: "Konica Minolta vs HP: Which Printer is Right for Your Business?",
    excerpt: "Compare leading printer brands to help Saskatchewan businesses choose the right office equipment for their specific needs and budget.",
    content: "...",
    author: "Sales Team",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Equipment Guide",
    tags: ["Konica Minolta", "HP", "Equipment Comparison"],
    image: "https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    slug: "konica-minolta-vs-hp-printer-comparison"
  },
  {
    id: 4,
    title: "How to Reduce Printing Costs by 30% in Your Saskatchewan Business",
    excerpt: "Proven strategies and best practices to significantly reduce your business printing expenses while maintaining quality and productivity.",
    content: "...",
    author: "Vonex Team",
    date: "2024-01-01",
    readTime: "8 min read",
    category: "Cost Reduction",
    tags: ["Cost Reduction", "Print Management", "Business Savings"],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    slug: "reduce-printing-costs-saskatchewan-business"
  },
  {
    id: 5,
    title: "The Complete Guide to Printer Maintenance for Saskatchewan Businesses",
    excerpt: "Essential maintenance tips to extend your printer's lifespan, prevent costly repairs, and ensure consistent print quality.",
    content: "...",
    author: "Technical Team",
    date: "2023-12-28",
    readTime: "10 min read",
    category: "Maintenance",
    tags: ["Printer Maintenance", "Preventive Care", "Equipment Longevity"],
    image: "https://images.pexels.com/photos/4792286/pexels-photo-4792286.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    slug: "complete-printer-maintenance-guide"
  },
  {
    id: 6,
    title: "Understanding Toner vs Ink: What's Best for Your Business?",
    excerpt: "Learn the differences between toner and ink cartridges, their costs, applications, and which option provides the best value for your business needs.",
    content: "...",
    author: "Sales Team",
    date: "2023-12-25",
    readTime: "6 min read",
    category: "Supplies",
    tags: ["Toner", "Ink Cartridges", "Print Technology"],
    image: "https://images.pexels.com/photos/4792287/pexels-photo-4792287.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    slug: "toner-vs-ink-business-guide"
  },

  // ── NEW ARTICLES ────────────────────────────────────────────────────────────

  {
    id: 7,
    title: "Why Law Firms Are Overpaying for Printing (And How to Fix It Fast)",
    excerpt: "Confidential documents, tight deadlines, and a printer that jams mid-brief. Here's what a leased Kyocera or HP multifunction device — with managed print included — actually fixes for Canadian law firms.",
    content: `
<p>Your law firm runs on paper. Contracts, briefs, discovery documents, court filings — even in 2025, the paperless office is still a myth for most legal practices. And while your team is focused on billable hours, your printing infrastructure is quietly costing you more than it should.</p>

<p>This isn't about toner prices. It's about the hours lost to printer downtime, the IT support calls, the scramble when the machine jams 20 minutes before a filing deadline, and the fact that most law firms are running aging equipment that was never designed for the volume they throw at it.</p>

<h2>The Real Pain Points in a Law Firm Print Environment</h2>

<p><strong>Downtime at the worst possible moment.</strong> Courts don't care that your printer is offline. A jammed machine or an empty toner cartridge during a deadline crunch isn't an inconvenience — it's a crisis. Most law firms have no service agreement in place, which means waiting on hold with a manufacturer's support line or running to a copy shop.</p>

<p><strong>No control over who prints what.</strong> Without print management software, you have zero visibility into your firm's print usage. Associates print 80-page drafts in full colour. Multiple copies of the same document get printed by different people. There's no accountability and no audit trail — and your supply costs reflect that.</p>

<p><strong>Confidentiality risks from shared devices.</strong> Unsecured print queues are a compliance liability. Documents sitting in an output tray, print jobs sent to the wrong machine, or jobs stored in a device's memory after printing — these are real risks in a profession where client confidentiality is non-negotiable.</p>

<p><strong>Aging equipment that costs more to run than to replace.</strong> An older laser printer that cost $800 five years ago might be consuming $200/month in toner alone. A modern high-yield multifunction device on a lease can cut your cost-per-page dramatically while adding scanning, secure print release, and network management features your old machine never had.</p>

<h2>What the Right Office Equipment Actually Solves</h2>

<p>A modern multifunction device — like the <strong>Kyocera ECOSYS series</strong> or the <strong>HP LaserJet Enterprise MFP line</strong> — isn't just a printer. For a law firm, it's a document hub. Here's what it handles:</p>

<ul>
  <li><strong>High-volume, high-speed printing</strong> — 35–65 pages per minute, so nobody is standing at the machine waiting</li>
  <li><strong>Secure print release</strong> — jobs only print when the right person authenticates at the device, eliminating documents left in trays</li>
  <li><strong>Integrated scanning to email or cloud</strong> — scan executed agreements directly to your DMS (Clio, NetDocuments, iManage) in one step</li>
  <li><strong>Duplex printing as default</strong> — automatic double-sided printing cuts paper costs in half</li>
  <li><strong>User authentication and audit logs</strong> — know exactly who printed what, when, and how many pages</li>
</ul>

<h2>Response Time: What Managed Print Means for Your Firm</h2>

<p>When you lease a device through Vonex with our managed print service included, you're not just getting hardware. You're getting a service agreement with a defined response commitment.</p>

<p>Our standard managed print service for law firms includes:</p>

<ul>
  <li><strong>Same-business-day or next-business-day on-site response</strong> for hardware faults — no manufacturer phone queues, no waiting weeks for a technician</li>
  <li><strong>Automatic toner replenishment</strong> — our systems monitor your device's toner levels remotely and ship a replacement before you run out. You never order toner again</li>
  <li><strong>Remote monitoring and proactive maintenance</strong> — we identify issues before they cause downtime</li>
  <li><strong>A single point of contact</strong> — one call or email to Vonex handles everything: hardware, supplies, service, billing</li>
</ul>

<p>For a firm with 5–50 staff, this typically replaces 3–4 vendor relationships (printer manufacturer, toner supplier, IT support, paper supplier) with one.</p>

<h2>How Leasing Works — And Why It Makes More Sense Than Buying</h2>

<p>Most law firms that purchase equipment outright do it once, run the machine until it dies, then face a large capital expense at the worst possible time. Leasing flips that model entirely.</p>

<p>A Vonex equipment lease works like this:</p>

<ul>
  <li><strong>Fixed monthly payment</strong> — typically $89–$299/month depending on the device, fully covering the hardware. No large upfront capital outlay.</li>
  <li><strong>Lease terms of 36 or 60 months</strong> — giving you predictable, budgetable costs for the full term</li>
  <li><strong>Equipment is always current</strong> — at end of term, you upgrade to the latest model, or purchase the device at fair market value if you prefer</li>
  <li><strong>Managed print bundled in</strong> — service, toner, and support can be rolled into one monthly cost-per-page rate (typically $0.008–$0.015 per black and white page all-in)</li>
  <li><strong>Tax treatment</strong> — lease payments are typically fully deductible as a business operating expense in Canada, unlike capital purchases which must be depreciated</li>
</ul>

<p>For a firm spending $400–$800/month on toner, paper, and ad-hoc repairs, moving to a managed lease often results in equal or lower monthly spend — with dramatically better equipment and zero surprises.</p>

<h2>The Right Machine for Your Firm's Size</h2>

<p><strong>Solo practitioner or 2–5 staff:</strong> HP LaserJet Pro MFP or Kyocera ECOSYS M3645dn — compact, fast, low cost-per-page, handles 2,000–5,000 pages/month comfortably.</p>

<p><strong>Boutique firm, 5–20 staff:</strong> Kyocera TASKalfa 3553ci or HP LaserJet Enterprise Flow MFP — workgroup-class, 35–45 ppm, full scan/fax/network integration, secure print release ready.</p>

<p><strong>Mid-size or multi-office firm, 20+ staff:</strong> Kyocera TASKalfa 5054ci or HP LaserJet Enterprise MFP M635 — production-class reliability, 50–65 ppm, advanced finishing options, full fleet management capability.</p>

<h2>Ready to Stop Overpaying?</h2>

<p>Most law firms that talk to us haven't done a print cost analysis in years. We'll do one for free. In 20 minutes, we can tell you exactly what you're spending per page today, what a leased device with managed print would cost, and what the difference is monthly and annually.</p>

<p>There's no obligation and no sales pressure. If what you have is working and the numbers are fine, we'll tell you that too. But in our experience, most firms find $200–$600/month in savings they didn't know they had.</p>

<p>Call us at <strong>(306) 881-0341</strong> or click below to request a free print assessment.</p>
`,
    author: "Vonex Team",
    date: "2026-05-01",
    readTime: "8 min read",
    category: "Legal",
    tags: ["Law Firm", "Managed Print", "Equipment Lease", "Kyocera", "HP", "Legal Industry"],
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    slug: "law-firm-printer-leasing-managed-print",
    relatedService: {
      name: "Equipment Leasing & Managed Print",
      path: "/managed-print",
      description: "Kyocera & HP devices with service, toner, and support bundled into one monthly cost"
    }
  },

  {
    id: 8,
    title: "Medical Clinics: Is Your Printer Putting You at Risk? (And Costing You Too Much)",
    excerpt: "Patient charts, lab requisitions, referral letters — your clinic prints constantly. Here's why most medical offices are running the wrong equipment and how a managed lease solves it.",
    content: `
<p>Walk into the back office of almost any medical clinic in Canada and you'll find the same thing: an overworked printer that's too slow, too loud, constantly low on toner, and held together by institutional memory and hope. The front desk staff knows the workarounds. The physicians have learned not to rely on it when they're running behind.</p>

<p>This is normal — and it shouldn't be.</p>

<p>Printing is infrastructure in a medical clinic. It's not optional, it's not occasional, and when it fails, it affects patient flow, documentation compliance, and your team's ability to do their jobs. Let's talk about what's actually going wrong and how to fix it properly.</p>

<h2>The Print Problems Every Clinic Knows</h2>

<p><strong>The printer is always running out of toner at the worst time.</strong> Requisitions need to go out, a patient is waiting, and someone has to run to Staples or wait two days for an online order. This happens because most clinics buy toner reactively — after they've already run out.</p>

<p><strong>The machine is too slow for your volume.</strong> A 20-page-per-minute desktop printer was fine when you bought it. Now you have three physicians, a nurse practitioner, and a MOA who all need it at the same time. The queue is always backed up. People print and forget — documents pile up in the tray, some of which contain patient information.</p>

<p><strong>Patient information is sitting in an unsecured print tray.</strong> This is a PHIPA compliance issue that most clinics haven't formally addressed. Documents printed by one user can be picked up by anyone who walks past the machine. In a multi-physician practice, that's a real risk.</p>

<p><strong>Nobody knows what anything costs.</strong> Toner is purchased here and there, paper is ordered separately, service calls are billed as they come. There's no consolidated view of what your clinic actually spends on printing — which means there's no way to control it.</p>

<p><strong>The machine breaks and you have no service agreement.</strong> When a $600 desktop printer fails, your options are: wait for warranty service (if it's even in warranty), buy a new one, or call a tech who charges $125/hour. None of these are fast.</p>

<h2>What a Proper Medical Office Print Setup Looks Like</h2>

<p>The right solution for a medical clinic isn't a faster consumer-grade printer. It's a workgroup multifunction device — specifically built for the print volumes, security requirements, and reliability standards that healthcare demands.</p>

<p>Here's what a <strong>Kyocera ECOSYS M3655idn</strong> or <strong>HP LaserJet Enterprise MFP M634</strong> gives a clinic that a desktop printer can't:</p>

<ul>
  <li><strong>Speed:</strong> 42–50 pages per minute. A lab req that took 45 seconds now takes 8. Your MOA stops being the bottleneck.</li>
  <li><strong>Secure print release:</strong> Documents only print when the right staff member authenticates — PIN, proximity card, or password. No patient records sitting in a shared tray.</li>
  <li><strong>High-capacity paper trays:</strong> 500–1,000 sheet capacity means you're not refilling paper three times a day.</li>
  <li><strong>Integrated scanning:</strong> Scan requisitions, patient forms, and referral letters directly to your EMR or shared drive in one step. No separate scanner needed.</li>
  <li><strong>Network management:</strong> IT can manage the device remotely. Print policies can be set system-wide — default duplex, black-and-white for non-clinical documents, colour restricted to authorized users.</li>
  <li><strong>Duty cycle:</strong> These devices are rated for 10,000–25,000 pages per month. A desktop printer rated for 2,000 pages/month running at 4,000 pages/month is why you're always calling for service.</li>
</ul>

<h2>Response Time: What Happens When Something Goes Wrong</h2>

<p>With Vonex managed print, your clinic isn't left waiting. Our service agreement for medical clients includes:</p>

<ul>
  <li><strong>Same-business-day response</strong> for critical hardware failures during clinic hours</li>
  <li><strong>Remote diagnostics</strong> — many issues are resolved without a technician visit at all</li>
  <li><strong>Automatic toner monitoring and delivery</strong> — we ship your next toner cartridge when you reach 20% remaining. You never run out, you never have to order, and you never send a staff member to a supply store</li>
  <li><strong>Quarterly preventive maintenance</strong> — scheduled cleaning and inspection to catch issues before they cause downtime</li>
  <li><strong>One invoice, one contact</strong> — hardware, toner, service, and support consolidated into a single monthly amount</li>
</ul>

<p>For a busy clinic, this means the printer essentially manages itself. Your MOA is doing patient intake, not toner research.</p>

<h2>How the Lease Works</h2>

<p>Clinics that lease equipment through Vonex pay a predictable monthly amount that covers everything. Here's the structure:</p>

<ul>
  <li><strong>Hardware lease:</strong> $89–$249/month depending on device and features. No capital outlay, no depreciation tracking.</li>
  <li><strong>Cost-per-page managed print rate:</strong> Typically $0.008–$0.012 per black-and-white page, all-inclusive — toner, service, and parts. You pay for what you print, nothing else.</li>
  <li><strong>36 or 60 month terms</strong> — at end of term, upgrade to the newest model or purchase at fair market value</li>
  <li><strong>Fully tax-deductible</strong> — lease payments are a business operating expense, not a capital item</li>
  <li><strong>No surprise repair bills</strong> — service is included. A blown fuser? Covered. A feed roller replacement? Covered. Everything except physical damage.</li>
</ul>

<h2>What Vonex Managed Print Covers (The Full List)</h2>

<ul>
  <li>Hardware lease — Kyocera or HP multifunction device</li>
  <li>Professional installation and network configuration</li>
  <li>Staff training on the new device</li>
  <li>All toner cartridges, automatically replenished</li>
  <li>All service calls and parts (excluding physical damage)</li>
  <li>Remote monitoring 24/7</li>
  <li>Quarterly preventive maintenance visits</li>
  <li>End-of-lease upgrade to current model</li>
</ul>

<h2>Let's Run the Numbers for Your Clinic</h2>

<p>We offer a free, no-obligation print assessment for any medical practice. In about 20 minutes — either by phone or a quick visit — we can determine your current monthly print volume, your all-in cost today (toner, paper, service, staff time), and what a managed lease would cost you instead.</p>

<p>In most cases we find clinics saving $150–$500/month while upgrading to equipment that's significantly faster, more secure, and covered by a proper service agreement.</p>

<p>Call us at <strong>(306) 881-0341</strong> or request a free assessment below. We work with clinics across Saskatchewan and can usually have a proposal back to you within one business day.</p>
`,
    author: "Vonex Team",
    date: "2026-05-03",
    readTime: "9 min read",
    category: "Healthcare",
    tags: ["Medical Clinic", "Managed Print", "Equipment Lease", "Kyocera", "HP", "PHIPA", "Healthcare"],
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    slug: "medical-clinic-printer-leasing-managed-print",
    relatedService: {
      name: "Equipment Leasing & Managed Print",
      path: "/managed-print",
      description: "Kyocera & HP devices with service, toner, and support bundled — built for healthcare"
    }
  },

  {
    id: 9,
    title: "The SMB Owner's Guide to Stopping Printer Problems for Good",
    excerpt: "For small and medium businesses, a broken printer isn't a minor inconvenience — it's lost revenue and frustrated staff. Here's the permanent fix: the right machine, a service agreement, and a lease that makes financial sense.",
    content: `
<p>If you run a small or medium-sized business, you already know that printing problems hit differently than they do in a large corporation. There's no IT department to call. There's no spare machine sitting in a closet. When the printer goes down, someone — probably you, or your most capable employee — has to deal with it right now, in the middle of everything else that's happening.</p>

<p>This guide is written for business owners who are tired of dealing with it. Not tired enough to stop printing — because that's not realistic — but tired enough to actually fix the problem properly instead of patching it again.</p>

<h2>Why the Problem Keeps Coming Back</h2>

<p>Most small business printer problems trace back to one of three root causes:</p>

<p><strong>1. The wrong machine for the volume.</strong> You bought a $300 inkjet or a $600 laser printer because it seemed like enough. It printed fine for the first year. Now you're printing 3–4x what you expected, the drum is worn, the fuser is failing, and you're getting streaks, jams, and error codes every other week. Consumer-grade printers aren't built for business volumes — their duty cycles are often 10x lower than what a comparable business device handles.</p>

<p><strong>2. No service agreement.</strong> When something breaks, you have no fallback. You're calling manufacturer support lines, waiting days for a technician referral, or just buying a new machine — which restarts the cycle. Without a service agreement, every repair is an emergency and every cost is a surprise.</p>

<p><strong>3. Reactive supply management.</strong> You order toner when you run out. This seems logical until it happens during a proposal deadline, a payroll run, or a client presentation. Running out of toner isn't just inconvenient — it's a workflow interruption that costs you real time and potentially real money.</p>

<h2>What the Right Setup Actually Looks Like</h2>

<p>For a small or medium business printing 2,000–15,000 pages per month, the answer is a <strong>workgroup-class multifunction device on a managed lease</strong>. Here's what that gives you that your current setup doesn't:</p>

<p><strong>The right machine for the job.</strong> A <strong>Kyocera ECOSYS M3645dn</strong> (for smaller volumes) or a <strong>Kyocera TASKalfa 3553ci</strong> (for busier offices) is engineered for business printing. It's faster, more reliable, has a monthly duty cycle of 50,000–150,000 pages, and the cost-per-page is a fraction of what a consumer machine costs to run. The same is true of the <strong>HP LaserJet Enterprise MFP series</strong> — workhorses built to run all day, every day, without drama.</p>

<p><strong>Print, copy, scan, fax in one device.</strong> Consolidating to a single multifunction device typically eliminates 2–3 separate machines, reduces network complexity, and cuts your total supply spend significantly.</p>

<p><strong>Features your team will actually use:</strong></p>
<ul>
  <li>35–55 pages per minute — no more print queues backing up at the start of the day</li>
  <li>Automatic double-sided printing — cuts paper consumption in half by default</li>
  <li>Scan to email or shared folder — digitize documents in one step without a separate scanner</li>
  <li>Mobile print — staff can send print jobs from phones and tablets</li>
  <li>Usage reporting — see exactly how much you're printing, by user if needed</li>
</ul>

<h2>Response Time: What Managed Print Means Day-to-Day</h2>

<p>The most important thing managed print does for an SMB isn't the equipment — it's the peace of mind that comes from knowing someone else is responsible for keeping it running.</p>

<p>With Vonex managed print, here's what your experience looks like:</p>

<p><strong>Toner: fully automated.</strong> We monitor your device remotely. When your toner reaches a set threshold, we ship the next cartridge automatically. It arrives before you need it. You never order toner, never run out, and never send someone to a supply store mid-day.</p>

<p><strong>Service: same or next business day.</strong> If your device has a hardware fault we can't resolve remotely, a certified technician is dispatched. No phone queues, no waiting on a manufacturer's warranty process, no surprise labour bills — service is included in your agreement.</p>

<p><strong>Support: one number, one contact.</strong> Hardware question? Toner question? Network configuration question? One call to Vonex. We handle everything related to your print environment so you don't have to manage multiple vendors.</p>

<p><strong>Proactive, not reactive.</strong> Remote monitoring means we often know about a developing issue before it causes a failure. Preventive maintenance visits catch mechanical wear before it becomes a breakdown.</p>

<h2>How Leasing Works — The Complete Picture</h2>

<p><strong>Step 1: We assess your needs.</strong> Volume, users, document types, network setup. This is free and takes about 20 minutes. We recommend the right device — not the most expensive one, the right one.</p>

<p><strong>Step 2: We propose a lease structure.</strong> Typically a 36 or 60 month term. Your monthly payment covers the hardware. We layer managed print on top: a cost-per-page rate that covers all toner, all service, and all parts for the life of the lease.</p>

<p><strong>Step 3: We install and configure.</strong> Your new device arrives, gets connected to your network, and your team gets a walkthrough. Usually done in under two hours.</p>

<p><strong>Step 4: We manage everything from there.</strong> Toner ships automatically. Service calls are covered. You get one monthly invoice for everything.</p>

<p><strong>Step 5: End of lease — you upgrade.</strong> At the end of your term, you move to the current model. Your monthly cost stays predictable. You never own aging equipment.</p>

<p><strong>What it costs:</strong> Most SMBs pay $99–$249/month in hardware lease cost, plus $0.008–$0.015 per black-and-white page all-in for managed print. A business printing 5,000 pages/month is looking at roughly $150–$325/month total — often less than what they were spending reactively on toner alone, with far better equipment and full service coverage.</p>

<p><strong>Tax treatment:</strong> Lease payments are a fully deductible business operating expense in Canada. Unlike purchased equipment, there's no depreciation schedule to manage — the full monthly payment comes off your taxable income in the year it's paid.</p>

<h2>Common Questions from SMB Owners</h2>

<p><strong>"What if my volume changes?"</strong> Managed print is billed per page — if you print less, you pay less. If your volume grows significantly, we can discuss a device upgrade mid-term.</p>

<p><strong>"What if I need colour printing?"</strong> We have colour MFP options in the same lease structure. Colour pages are billed at a higher per-page rate (typically $0.05–$0.09) — but managed colour print is still far cheaper than running a consumer colour laser on your own.</p>

<p><strong>"What if I already own a printer?"</strong> We can often incorporate your existing device into a managed print agreement (if it's compatible), or we can time a lease to replace your current machine when it makes sense.</p>

<p><strong>"How long does setup take?"</strong> Typically 3–5 business days from signed agreement to installed device.</p>

<h2>The Next Step Is Simple</h2>

<p>We offer a free print assessment for any Canadian business. We'll review what you're currently spending, what you're currently running, and what a managed lease would cost you instead. If the numbers don't make sense for your situation, we'll tell you that honestly.</p>

<p>Most SMB owners who do the assessment find they've been overspending by $100–$400/month on a print setup that's also less reliable than what a managed lease would give them. That's money back in your business every month, and a printer that works every time someone needs it.</p>

<p>Call <strong>(306) 881-0341</strong> or request a free assessment below. We'll have a proposal back to you within one business day.</p>
`,
    author: "Vonex Team",
    date: "2026-05-05",
    readTime: "10 min read",
    category: "Small Business",
    tags: ["Small Business", "SMB", "Managed Print", "Equipment Lease", "Kyocera", "HP", "Cost Savings"],
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    slug: "smb-printer-leasing-managed-print-guide",
    relatedService: {
      name: "Equipment Leasing & Managed Print",
      path: "/managed-print",
      description: "The right Kyocera or HP device, fully managed — one monthly cost, no surprises"
    }
  },
];

const categories = [
  "All",
  "Managed Print",
  "Printer Repair",
  "Equipment Guide",
  "Cost Reduction",
  "Maintenance",
  "Supplies",
  "Legal",
  "Healthcare",
  "Small Business",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Print Industry Insights & Tips
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay informed with print technology insights from Saskatchewan experts.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles by title, content, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-cyan-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchTerm("");
                }}
                className="mt-4 text-cyan-500 hover:text-cyan-600 font-semibold"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  <div className="p-6">
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full mb-3">
                      {post.category}
                    </span>

                    {/* Date & Read Time */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">
                      <Link to={`/blog/${post.slug}`} className="hover:text-cyan-500 transition-colors">
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-cyan-500 font-semibold inline-flex items-center hover:text-cyan-600 transition-colors"
                    >
                      Read full article
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                      {post.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
                        >
                          <Tag className="h-3 w-3 inline mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}