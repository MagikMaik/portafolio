import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "./ui/carousel";
  import { Card, CardContent } from "./ui/card";
  
  export default function CarouselT({ className }: { className: string }) {
    return (
      <Carousel
        opts={{
          align: "center",
        }}
        className={`${className}`}
      >
        <CarouselContent>
          <CarouselItem>
            <Card  className="rounded-lg overflow-hidden">
              <CardContent className="flex aspect-square items-center justify-center p-0">
                <img src="../src/assets/golf.jpg" alt="golf" className="h-full w-full object-cover" />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card  className="rounded-lg overflow-hidden">
              <CardContent className="flex aspect-square items-center justify-center p-0">
                <img src="../src/assets/golf.jpg" alt="golf" className="h-full w-full object-cover" />
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }