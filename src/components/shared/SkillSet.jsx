import { Badge } from "../ui/badge";

export function SkillSet() {
  return (
    <div className=" px-4 py-2  space-y-1 leading-relaxed sm:px-8 md:px-16 lg:px-24 xl:px-36 md:mt-24 lg:mt-10">
      <h3 className="mb-6 scroll-m-20 text-2xl font-semibold tracking-tight text-white">
        Skills & Tools
      </h3>
      <div className="flex flex-wrap gap-3 justify-center items-center">
        <Badge
          variant="secondary"
          className="text-xs sm:text-sm bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700"
        >
          React
        </Badge>
        <Badge
          variant="secondary"
          className="text-xs sm:text-sm bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700"
        >
          Next.js
        </Badge>
        <Badge
          variant="secondary"
          className="text-xs sm:text-sm bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700"
        >
          React Native
        </Badge>
        <Badge
          variant="secondary"
          className="text-xs sm:text-sm bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700"
        >
          Typescript
        </Badge>
        <Badge
          variant="secondary"
          className="text-xs sm:text-sm bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700"
        >
          Node.js
        </Badge>
        <Badge
          variant="secondary"
          className="text-xs sm:text-sm bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700"
        >
          PostgreSQL
        </Badge>
        <Badge
          variant="outline"
          className="text-xs sm:text-sm border-zinc-700 text-zinc-300 hover:bg-zinc-800"
        >
          Prisma
        </Badge>
        <Badge
          variant="outline"
          className="text-xs sm:text-sm border-zinc-700 text-zinc-300 hover:bg-zinc-800"
        >
          MongoDB
        </Badge>
        <Badge
          variant="outline"
          className="text-xs sm:text-sm border-zinc-700 text-zinc-300 hover:bg-zinc-800"
        >
          Nextauth
        </Badge>
        <Badge
          variant="outline"
          className="text-xs sm:text-sm border-zinc-700 text-zinc-300 hover:bg-zinc-800"
        >
          Zod
        </Badge>
        <Badge
          variant="secondary"
          className="text-xs sm:text-sm bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700"
        >
          Gsap
        </Badge>
        <Badge
          variant="secondary"
          className="text-xs sm:text-sm bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700"
        >
          Tailwind CSS
        </Badge>
        <Badge
          variant="secondary"
          className="text-xs sm:text-sm bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700"
        >
          Figma
        </Badge>
      </div>
    </div>
  );
}
