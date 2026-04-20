"use client";

import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { FeaturedCommunityCard } from "@/components/organisms/featured-community-card";
import { IdeaPostCard } from "@/components/organisms/idea-post-card";

type VolunteerSlide = {
  featured: {
    title: string;
    description: string;
    rewardLabel: string;
    participantsLabel: string;
  };
  volunteer: {
    title: string;
    description: string;
    tag: string;
    author: string;
    timeLabel: string;
    colorClassName: string;
  };
};

type VolunteerSwiperSectionProps = {
  slides: VolunteerSlide[];
};

export function VolunteerSwiperSection({ slides }: VolunteerSwiperSectionProps) {
  return (
    <section className="space-y-3">
      <div>
        <h3 className="text-2xl font-bold text-brand-primary">Mutirão e voluntariado</h3>
        <p className="text-sm text-slate-600">Explore campanhas da comunidade e participe com suas horas.</p>
      </div>

      <Swiper
        className="volunteer-swiper"
        modules={[Autoplay, A11y]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={1}
        spaceBetween={16}
        loop={slides.length > 1}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.featured.title}>
            <div className="grid items-stretch gap-4 xl:grid-cols-[2fr_1fr]">
              <div className="h-full min-h-90 xl:h-96">
                <FeaturedCommunityCard
                  description={slide.featured.description}
                  participantsLabel={slide.featured.participantsLabel}
                  rewardLabel={slide.featured.rewardLabel}
                  title={slide.featured.title}
                />
              </div>

              <div className="h-full min-h-90 xl:h-96">
                <IdeaPostCard
                  author={slide.volunteer.author}
                  colorClassName={slide.volunteer.colorClassName}
                  description={slide.volunteer.description}
                  showTimeIcon
                  tag={slide.volunteer.tag}
                  timeLabel={slide.volunteer.timeLabel}
                  title={slide.volunteer.title}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
