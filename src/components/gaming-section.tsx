"use client";

import { Joystick, Crown, Monitor, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";

export function GamingSection() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const toggleFlip = (game: string) => {
    setFlippedCard(flippedCard === game ? null : game);
  };

  const openPlatformLink = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, "_blank");
  };

  // Close flipped card when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.game-card')) {
        setFlippedCard(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-background rounded-xl border border-border shadow-sm overflow-hidden">
      <h2 className="w-full flex items-center gap-3 text-muted-foreground px-4 py-3 border-b border-border">
        <Joystick className="size-4" />
        <span className="text-sm font-mono">ABOUT_GAMES.md</span>
      </h2>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Genshin Impact Card */}
        <div
          className={`game-card relative overflow-hidden rounded-xl w-full aspect-[3/4] shadow-sm cursor-pointer perspective ${flippedCard === 'coc' ? 'is-flipped' : ''} hover:shadow transition-shadow`}
          onClick={() => toggleFlip('coc')}
        >
          <div className="card-content absolute w-full h-full transition-all duration-500 preserve-3d">
            {/* Front of the card */}
            <div className="card-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden border border-border">
              <div className="w-full h-full relative">
                <Image
                  src="/games/genshin-impact.jpg"
                  alt="Genshin Impact"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-3">
                  <h3 className="text-white text-base font-bold">Genshin Impact</h3>
                  <p className="text-slate-300 text-xs">Action RPG Adventure</p>
                </div>
              </div>
            </div>

            {/* Back of the card */}
            <div className="card-back absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-card p-3 flex flex-col justify-between rotate-y-180 border border-border">
              <div>
                <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center mb-2">
                  <Crown className="size-4 text-yellow-500" />
                </div>
                <h3 className="text-base font-medium mb-1">Genshin Impact</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Explore a vast open world, harness elemental powers, and embark on epic adventures across the land of Teyvat.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs gap-1.5 bg-muted/5 hover:bg-muted/50"
                    onClick={(e) => openPlatformLink("https://genshin.hoyoverse.com/en/home", e)}
                  >
                    <Monitor className="size-3" />
                    PC
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs gap-1.5 bg-muted/5 hover:bg-muted/50"
                    onClick={(e) => openPlatformLink("https://apps.apple.com/us/app/genshin-impact/id1517783697", e)}
                  >
                    <Smartphone className="size-3" />
                    iOS
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs gap-1.5 bg-muted/5 hover:bg-muted/50"
                    onClick={(e) => openPlatformLink("https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact", e)}
                  >
                    <Smartphone className="size-3" />
                    Android
                  </Button>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-xs text-muted-foreground">My Account</h4>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 p-1.5 rounded-md bg-muted/5 text-[10px]">
                    <div className="p-1 rounded-md bg-yellow-500/10">
                      <Crown className="size-3 text-purple-500" />
                    </div>
                    <span className="font-medium">Milk Man</span>
                    <span className="ml-auto font-mono text-muted-foreground">Will Upload Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wuthering Waves Card */}
        <div
          className={`game-card relative overflow-hidden rounded-xl w-full aspect-[3/4] shadow-sm cursor-pointer perspective ${flippedCard === 'ww' ? 'is-flipped' : ''} hover:shadow transition-shadow`}
          onClick={() => toggleFlip('ww')}
        >
          <div className="card-content absolute w-full h-full transition-all duration-500 preserve-3d">
            {/* Front of the card */}
            <div className="card-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden border border-border">
              <div className="w-full h-full relative">
                <Image
                  src="/games/wuwa.jpg"
                  alt="Wuthering Waves"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-3">
                  <h3 className="text-white text-base font-medium">Wuthering Waves</h3>
                  <p className="text-slate-300 text-xs">Action RPG adventure</p>
                </div>
              </div>
            </div>

            {/* Back of the card */}
            <div className="card-back absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-card p-3 flex flex-col justify-between rotate-y-180 border border-border">
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mb-2">
                  <Joystick className="size-4 text-blue-500" />
                </div>
                <h3 className="text-base font-medium mb-1">Wuthering Waves</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  A beautiful open-world ARPG with resonator combat and stunning visuals
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs gap-1.5 bg-muted/5 hover:bg-muted/50"
                    onClick={(e) => openPlatformLink("https://wutheringwaves.kurogames.com/en/", e)}
                  >
                    <Monitor className="size-3" />
                    PC
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs gap-1.5 bg-muted/5 hover:bg-muted/50"
                    onClick={(e) => openPlatformLink("https://apps.apple.com/us/app/wuthering-waves/id6475033368", e)}
                  >
                    <Smartphone className="size-3" />
                    iOS
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs gap-1.5 bg-muted/5 hover:bg-muted/50"
                    onClick={(e) => openPlatformLink("https://play.google.com/store/apps/details?id=com.kurogame.wuthering.waves.global", e)}
                  >
                    <Smartphone className="size-3" />
                    Android
                  </Button>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-xs text-muted-foreground">My Account</h4>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 p-1.5 rounded-md bg-muted/5 text-[10px]">
                    <div className="p-1 rounded-md bg-yellow-500/10">
                      <Crown className="size-3 text-purple-500" />
                    </div>
                    <span className="font-medium">Onyx</span>
                    <span className="ml-auto font-mono text-muted-foreground">Will Upload Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Zenless Zone Zero Card */}
        <div
          className={`game-card relative overflow-hidden rounded-xl w-full aspect-[3/4] shadow-sm cursor-pointer perspective ${flippedCard === 'dbz' ? 'is-flipped' : ''} hover:shadow transition-shadow`}
          onClick={() => toggleFlip('dbz')}
        >
          <div className="card-content absolute w-full h-full transition-all duration-500 preserve-3d">
            {/* Front of the card */}
            <div className="card-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden border border-border">
              <div className="w-full h-full relative">
                <Image
                  src="/games/zenless-zone-zero.jpg"
                  alt="Zenless Zone Zero"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-3">
                  <h3 className="text-white text-base font-medium">Zenless Zone Zero</h3>
                  <p className="text-slate-300 text-xs">Action RPG Adventure</p>
                </div>
              </div>
            </div>

            {/* Back of the card */}
            <div className="card-back absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-card p-3 flex flex-col justify-between rotate-y-180 border border-border">
              <div>
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mb-2">
                  <Joystick className="size-4 text-red-500" />
                </div>
                <h3 className="text-base font-medium mb-1">Zenless Zone Zero</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Dive into a stylish urban fantasy world, battle mysterious creatures called Ethereals.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs gap-1.5 bg-muted/5 hover:bg-muted/50"
                    onClick={(e) => openPlatformLink("https://zenless.hoyoverse.com/en-us/", e)}
                  >
                    <Monitor className="size-3" />
                    PC
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs gap-1.5 bg-muted/5 hover:bg-muted/50"
                    onClick={(e) => openPlatformLink("https://apps.apple.com/us/app/zenless-zone-zero-1st-anniv/id1606356401", e)}
                  >
                    <Smartphone className="size-3" />
                    iOS
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs gap-1.5 bg-muted/5 hover:bg-muted/50"
                    onClick={(e) => openPlatformLink("https://play.google.com/store/apps/details?id=com.HoYoverse.Nap", e)}
                  >
                    <Smartphone className="size-3" />
                    Android
                  </Button>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-xs text-muted-foreground">My Account</h4>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 p-1.5 rounded-md bg-muted/5 text-[10px]">
                    <div className="p-1 rounded-md bg-yellow-500/10">
                      <Crown className="size-3 text-purple-500" />
                    </div>
                    <span className="font-medium">Onyx</span>
                    <span className="ml-auto font-mono text-muted-foreground">Will Upload Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}