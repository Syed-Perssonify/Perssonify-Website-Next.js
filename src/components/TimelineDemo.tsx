import { Timeline } from "./Timeline"

export default function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="mb-8">
            <h4 className="font-medium text-base mb-3 text-neutral-900 dark:text-neutral-100">Key Achievements:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-emerald-600">•</span>
                <span className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                  Developed a comprehensive UI component library with 50+ reusable components
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-emerald-600">•</span>
                <span className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                  Created responsive templates for startups, SaaS, and e-commerce platforms
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-emerald-600">•</span>
                <span className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                  Implemented dark mode support across all components and templates
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-emerald-600">•</span>
                <span className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                  Optimized performance with code splitting and lazy loading techniques
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Focused on research and development for next-generation UI components
          </p>
          <div className="mb-8">
            <h4 className="font-medium text-base mb-3 text-neutral-900 dark:text-neutral-100">Research Areas:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                  Explored animation libraries and techniques for smooth UI transitions
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                  Studied accessibility standards and implemented ARIA attributes
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                  Tested various design systems and component architectures
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                  Conducted user research to identify pain points in existing UI libraries
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Random file upload lol
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="mb-8">
            <h4 className="font-medium text-base mb-3 text-neutral-900 dark:text-neutral-100">Future Roadmap:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                  Advanced animation components with framer-motion integration
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                  E-commerce specific components and templates
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                  Dashboard and admin panel component library
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-600">•</span>
                <span className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                  Mobile-first responsive design system
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ]
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  )
}
