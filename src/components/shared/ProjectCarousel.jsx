import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Button } from "@/components/ui/button";
import holo from "@/assets/holo.jpg";
import crm from "@/assets/p2.jpg";
import leetcode from "@/assets/leetcode.png"
import { Activity, Github } from "lucide-react";
import { BackgroundGradient } from "../ui/background-gradient";
import budgetseo from "@/assets/budgetseo.png";

export function ProjectCarousel() {
  const cards = data.map((card, index) => (
    <BackgroundGradient animate="true" >
      <Card key={card.src} card={card} index={index} />
    </BackgroundGradient>
  ));

  return (
    <div className="w-full h-full ">
      <Carousel items={cards} />
    </div>
  );
}

const ContentContainer = ({ href }) => {
  return (
    <a
      href={href}
      className="px-4 py-2 text-white bg-[#EB5B00] rounded-full flex gap-2 items-center w-fit hover:bg-[#5F8B4C] transition-all duration-300 ease-in-out"
    >
      <Github /> Github
    </a>
  );
};

const LiveContainer = ({ href }) => {
  return (
    <a
      href={href}
      className="px-4 py-2 text-black hover:text-white  bg-[#F6F1E9] rounded-full flex gap-2 items-center w-fit hover:bg-[#EB5B00] transition-all duration-300 ease-in-out"
    >
      <Activity /> Live
    </a>
  );
};

const data = [
  {
    category: "Leetcode Journal",
    title:
      "Track, organize, and review your Leetcode solutions with an intuitive interface.",
    src: leetcode,
    content: (
      <ContentContainer href="https://github.com/yashksaini-coder/Leetcode-Journal" />
    ),
  },
  {
    category: "BudgetSeo",
    title:
      "Create SEO-optimized content that drives growth and autoPublish to you WordPress, Wix and Shopify sites.",
    src: budgetseo,
    content: (
      <LiveContainer href="https://www.budgetseo.xyz/" />
    ),
  },
  {
    category: "HOLO",
    title: "A Minimalist Web Wallet.",
    src: holo,
    content: <ContentContainer href="https://github.com/momo-shogun/HOLO" />,
  },
  {
    category: "CRM WEBSITE",
    title: "A Minimalist CRM website to manage your business.",
    src: crm,
    content: "",
  },
  
];
