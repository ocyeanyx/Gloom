import Container from "@/components/container";
import { ImageComponent } from "@/components/image";
import { TextScroll } from "@/components/ui/text-scroll";
import { GamingSection } from "@/components/gaming-section";
import { LastFMStats } from "@/components/lastfm-stats";
import {
  Book,
  HandMetal,
  ThumbsUp,
  Vote,

} from "lucide-react";
import { Metadata } from "next";
import AwooImage from "@/assets/img/awoo.jpg";
import type { WebPage, WithContext } from "schema-dts";

export const metadata: Metadata = {
  title: "About",
  description: "Young & Dumb!",
  openGraph: {
    title: "About",
    description: "Young & Dumb!",
  },
};

export default function About() {
  const jsonLd: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About",
    alternateName: "gloom. | About",
    mainEntityOfPage: "https://thesonofnyx.vercel.app/about",
    description: "Young & Dumb!",
    url: "https://thesonofnyx.vercel.app/about",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Landing",
          item: "https://thesonofnyx.vercel.app/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://thesonofnyx.vercel.app/about",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Blog",
          item: "https://thesonofnyx.vercel.app/blog",
        },
      ],
    },
  };

  const infoWidgets = [
    {
      title: "Age",
      value: "18",
      unit: "Teen",
    },
    {
      title: "Gender",
      value: "M",
      unit: "Male",
    },
    {
      title: "Language",
      value: "ENG",
      unit: "(English)",
    },
    {
      title: "Rizz Level",
      value: "💀",
      unit: "Unspoken",
    },
    {
      title: "Mental Stability",
      value: "???",
      unit: "Brain Fog",
    },
    {
      title: "Favorites",
      value: "Dog",
      unit: "Husky",
    },
  ];

  return (
    <>
      <Container>
        <div className="relative rounded-lg overflow-clip">
          <ImageComponent
            img={AwooImage}
            alt="Awoo"
            className="w-full relative max-h-96 z-10 rounded-lg"
            height={720}
          />
          <p className="z-20 md:w-fit w-3/4 text-center font-bold absolute bottom-3 left-1/2 rounded-full -translate-x-1/2 px-7 py-3 font-doto bg-background/80 text-foreground md:text-xl backdrop-blur-lg">
            ABOUT ME AND STUFFS
          </p>
        </div>
        <div className="w-full bg-background rounded-lg border border-border">
          <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
            <Book className="size-4" />
            <span className="text-sm font-mono">SHITPOST.md</span>
          </h2>
          <p className="px-5 py-3">
            I’m what you’d call an unapologetic jack of all trades—if something catches my eye or I randomly decide I need it, I’ll learn it. Fast learner? Sure. Slow as hell when it comes to actually doing it? Also yes. Brain cells are on life support but they’re pushing through. Give ’em some credit.
          <br />
          <br />
            Bad design makes me physically uncomfortable. I like things that <i>look</i> good, not just function. Retro slaps, modern calms my brain—somewhere between VHS and minimalism is my aesthetic therapy.
          <br />
          <br />
            Food? Not picky. Spice? Yes please. Burn my soul, thanks.
          <br />
          <br />
            Shows, movies, all that blah blah? Yeah, I watch ’em—when I’m not busy overthinking life or deep-diving into some random obsession.
          </p>
        </div>
        <div className="w-full bg-background rounded-lg border border-border">
          <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
            <ThumbsUp className="size-4" />
            <span className="text-sm font-mono">USEFUL_CARDS.md</span>
          </h2>
          <div className="w-full p-5 grid grid-cols-2 md:grid-cols-4 gap-5">
            {infoWidgets.map((item, i) => (
              <div
                key={i}
                className="md:aspect-square size-full overflow-clip rounded-md border border-border flex flex-col"
              >
                <div className="w-full bg-muted/20 px-4 py-2 border-b border-border">
                  <h3 className="text-sm text-center line-clamp-1">
                    {item.title}
                  </h3>
                </div>
                <div className="py-3 w-full h-full grow flex flex-col gap-1 items-center justify-center">
                  <p className="font-doto font-bold text-5xl">{item.value}</p>
                  <p className="text-foreground/60 font-mono text-center text-sm">
                    {item.unit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-background rounded-lg border border-border">
          <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
            <Vote className="size-4" />
            <span className="text-sm font-mono">ABOUT_ME.md</span>
          </h2>
          <p className="px-5 py-3">
            𝗕𝗼𝗼𝗸𝘀 𝗜 𝗹𝗼𝘃𝗲? The kind that feel like secret manuals for taking over empires, seducing minds, or outwitting fate. If it’s dark, strategic, or slightly dangerous, it’s probably on my shelf.
          <br />
          <br />
            𝗙𝗮𝘃𝗼𝗿𝗶𝘁𝗲 𝗰𝗼𝗹𝗼𝗿𝘀?  Black for the drama, red for the passion, grey for the mystery, brown for the grounded elegance, and anything else that doesn’t scream, “Look at me, I’m neon!”
          <br />
          <br />
            𝗛𝗼𝗯𝗯𝗶𝗲𝘀? Cooking like I’m feeding ancient gods, painting like I’m summoning old spirits, and reading like I’m decoding the universe one page at a time.
          <br />
          <br />
            𝗜𝗻𝘁𝗲𝗿𝗲𝘀𝘁𝘀? I ’m into all the deliciously dark and curious corners of the world: angels with questionable motives, demons with charm, forgotten mythologies, forbidden philosophies, psychology’s twisted tunnels, witchcraft, vampires, and the kind of history that makes you say, “Wait… did that really happen?”
          <br />
          <br />
            𝗠𝘆 𝗶𝗱𝗼𝗹𝘀? A rather legendary bunch: Adolf Hitler—for raw, terrifying force (history, not morals); Cleopatra—for seductive strategy; Medusa—for weaponized silence; Napoleon—for ruthless ambition; Nikola Tesla—for beautiful madness; and Nyx—for being night itself.
          </p>
        </div>
        <GamingSection />
        <div className="w-full bg-background rounded-lg border border-border">
          <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
            <HandMetal className="size-4" />
            <span className="text-sm font-mono">ABOUT_MUSIC.md</span>
          </h2>
          <p className="px-5 py-3">
            My music taste? A blend of alternative rock, dark pop, dreamy indie, slow-burning R&amp;B, and a touch of vintage soul. I vibe with 𝗟𝗮𝗻𝗮 𝗗𝗲𝗹 𝗥𝗲𝘆, 𝗔𝗿𝗰𝘁𝗶𝗰 𝗠𝗼𝗻𝗸𝗲𝘀, 𝗧𝗵𝗲 𝗪𝗲𝗲𝗸𝗻𝗱, 𝗔𝘃𝗿𝗶𝗹 𝗟𝗮𝘃𝗶𝗴𝗻𝗲, 𝗖𝗶𝗴𝗮𝗿𝗲𝘁𝘁𝗲𝘀 𝗔𝗳𝘁𝗲𝗿 𝗦𝗲𝘅, 𝗘𝗹𝘃𝗶𝘀 𝗣𝗿𝗲𝘀𝗹𝗲𝘆 𝗮𝗻𝗱 𝗙𝗿𝗮𝗻𝗸 𝗦𝗶𝗻𝗮𝘁𝗿𝗮. it’s probably on my playlist.
          </p>
          <LastFMStats />
        </div>
      </Container>
      <TextScroll
        className="text-5xl md:text-7xl text-muted-foreground/50 dark:font-semibold font-bold py-24 md:space-y-2"
        textClassName="py-1 md:py-3 font-doto"
        default_velocity={0.66}
        text="THIS IS THE END OF THE PAGE, CUH.  "
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
