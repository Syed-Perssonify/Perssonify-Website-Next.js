import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { title } from "process";

export default function TimelineDemo() {
  const data = [
    {
      title: <span style={{ color: '#2abed1' }}>Creative Solutions</span>,
      content: (
        <div>
          <div className="mb-6 space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <p>
              Visual Storytelling that Captivates & Converts. Creativity is the cornerstone of effective communication. 
              From engaging social media visuals to high-impact marketing collateral, Perssonify's creative solutions 
              ensure your brand stands out in a crowded digital landscape.
            </p>
            <p>
              Our approach blends strategic messaging with compelling design to deliver assets that drive engagement, 
              reinforce brand identity, and accelerate conversions.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Social Media Graphics – Static images, GIFs, carousel ads, and post templates for brand consistency
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Ad Creatives – High-performance static and motion graphics for paid media campaigns
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Video Content – Short-form promotional videos, explainer videos, and branded reels
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Landing Page & Email Designs – Visually optimized pages and email templates that drive action
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Custom Branding Assets – Business presentations, marketing brochures, and sales enablement materials
            </div>
          </div>
        </div>
      ),
    },
    {
      title: <span style={{ color: '#2abed1' }}>Email Marketing</span>,
      content: (
        <div>
          <div className="mb-6 space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <p>
              Turning Prospects into Customers with Automated, Data-Driven Nurturing. Email marketing and marketing automation 
              are critical for sustained engagement, lead nurturing, and customer conversion.
            </p>
            <p>
              By automating workflows, integrating CRM systems, and delivering high-impact email sequences, 
              we help businesses streamline customer journeys, improve retention, and maximize ROI.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Automated Email Sequences – Behavior-triggered email workflows for onboarding, promotions, abandoned carts, re-engagement, and retention
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Lead Nurturing Campaigns – Targeted email sequences that move leads through the funnel and drive higher conversion rates
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • CRM & Marketing Automation Integration – Connecting email campaigns with HubSpot, Salesforce, Klaviyo, or other platforms
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Performance Analytics & Optimization – A/B testing, deliverability monitoring, and engagement tracking
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Segmentation & Personalization – Tailoring email content based on customer behavior, demographics, and intent signals
            </div>
          </div>
        </div>
      ),
    },
    {
      title: <span style={{ color: '#2abed1' }}>Performance Marketing</span>,
      content: (
        <div>
          <div className="mb-6 space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <p>
              Driving Customers, Users & Revenue with Precision Advertising and Multi-Platform Reach. 
              Digital advertising should be an investment with a measurable return.
            </p>
            <p>
              Our performance-driven ad campaigns are structured to maximize conversions, optimize budgets, 
              and generate high-value leads, customers, and users across multiple platforms.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Ad Strategy & Setup – Identifying high-intent audiences, keyword research, and targeting optimization
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Cross-Platform Execution – Google Ads, Display Network, YouTube, Meta, LinkedIn, Content Recommendation Networks, and more
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Creative Development – High-converting ad creatives, including static, carousel, and video formats
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Bid & Budget Optimization – Maximizing ROI through dynamic budget allocation and A/B testing
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Landing Page Optimization – Custom landing pages built for high engagement and conversion rates
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Real-Time Analytics & Reporting – Continuous campaign monitoring and strategic adjustments
            </div>
          </div>
        </div>
      ),
    },
    {
      title: <span style={{ color: '#2abed1' }}>Social Media Marketing</span>,
      content: (
        <div>
          <div className="mb-6 space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <p>
              Building Conversations, Communities & Conversions. Social media is more than just content—it's about 
              building authentic relationships and driving audience engagement that leads to action.
            </p>
            <p>
              Our social media strategies are data-driven, creative, and results-focused, ensuring your brand 
              connects with the right audience in meaningful ways.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Content Strategy & Planning – Defining and implementing your brand's voice, visual identity, and engagement roadmap
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Content Creation & Distribution – High-impact creatives including image-based posts, GIFs, carousels, and videos
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Platform Management – Facebook, Instagram, LinkedIn, YouTube, X (Formerly Twitter), TikTok and Google My Business
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Engagement & Community Building – Active response management, audience interaction, and social listening
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Paid Social Advertising / Boosting – Targeted campaigns that drive awareness, engagement and audience growth
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              • Influencer & UGC Management – Partnerships with relevant influencers for credibility and reach
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
