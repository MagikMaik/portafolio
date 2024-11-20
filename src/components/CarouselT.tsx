import React from "react";
import { Carousel, CarouselContent, CarouselItem,CarouselNext,
    CarouselPrevious, } from "./ui/carousel";
import { Card } from "./ui/card";

export default function CarouselT() {
  return (
    <>
      <Carousel opts={{
        align: "center",
      }}
      className="w-full h-full">
        <CarouselContent>
          <CarouselItem>
            <Card>
                <img  src='../src/assets/golf.jpg' alt="placeholder" />
            </Card>
          </CarouselItem>
          <CarouselItem>
            {" "}
            <span>2</span>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
