import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Button } from "@/components/ui/button";
import holo from "@/assets/holo.jpg";
import crm from "@/assets/p2.jpg";
export function ProjectCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full pb-20 ">
      <Carousel items={cards} />
    </div>
  );
}

const ContentContainer = ({ href }) => {
  console.log(href);
  return (
    <a href={href} className="px-4 py-2 text-white bg-black rounded-full">
      Github
    </a>
  );
};

const data = [
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
