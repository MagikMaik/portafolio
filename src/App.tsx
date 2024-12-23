import "./App.css";
import Header from "./components/Header";
import { Button } from "./components/ui/button";
import Section from "./components/Section";

import CarouselT from "./components/CarouselT";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Section className=" bg-zinc-400 flex flex-row justify-center h-[900px] items-center ">
        <div className=" bg-red-700 h-full w-[40%] justify-center items-center flex flex-col space-y-10">
          <p className="font-bold text-white text-6xl w-[500px]">
            "Bringing <span className="text-red-300">Design</span> to{" "}
            <span className="text-red-300">Life</span>"
          </p>
          
            <Button className="rounded-full px-6 py-2 text-white self-start ml-[100px]">
              Resume
            </Button>
          
        </div>
        <div className=" w-[40%] flex justify-center items-center">
          <CarouselT className="w-full h-full" />
        </div>
      </Section>
      <Section className="bg-blue-400 h-[900px]">
        <h2>mike</h2>
      </Section>
      <Section>
        <h2>mike</h2>
      </Section>
      <Section>
        <h2>mike</h2>
      </Section>
    </>
  );
}

export default App;
