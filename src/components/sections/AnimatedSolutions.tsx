import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <div className="mb-6 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
            <p>
              In 2024, Perssonify has reached new heights in our mission to transform digital experiences. 
              Our commitment to innovation and excellence has led to significant breakthroughs in our service offerings.
            </p>
            <p>
              We've expanded our reach globally while maintaining the quality and personal touch that defines our brand. 
              This year marks a pivotal moment in our journey of growth and technological advancement.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              • Launched Perssonify's AI-powered personalization engine
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              • Expanded operations to European markets
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              • Achieved ISO 27001 certification for security standards
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              • Developed new enterprise-grade analytics platform
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div className="mb-6 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
            <p>
              2023 was a year of strategic growth and technological innovation for Perssonify. 
              We focused on building robust infrastructure and expanding our service capabilities.
            </p>
            <p>
              Our team grew significantly, bringing in top talent from across the industry. 
              We established key partnerships that would shape our future growth trajectory.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              • Secured Series A funding of $5M
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              • Launched Perssonify's core platform
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              • Established strategic partnerships with major tech firms
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              • Built and deployed scalable cloud infrastructure
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="mb-6 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
            <p>
              The founding year of Perssonify marked the beginning of our journey to revolutionize 
              digital personalization. We started with a clear vision and a dedicated team.
            </p>
            <p>
              Our initial focus was on developing our core technology and establishing our market presence. 
              We laid the groundwork for what would become a transformative platform.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              • Founded Perssonify with seed funding
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              • Developed initial prototype and MVP
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              • Established first client partnerships
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              • Built core development team
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
