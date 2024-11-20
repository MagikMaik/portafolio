export default function Header() {
  return (
    <header className="bg-red-600 py-8 flex justify-center text-2xl">
      <nav className="flex flex-row justify-between gap-10 w-[80%] bg-white">
        <div className="ml-10 flex items-center font-bold text-4xl">
            <img src="../src/assets/logomike.png" alt="" className="w-[50px]" />
            <h1 >MC</h1></div>
        <div className="inline-flex justify-around w-[50%] bg-red-300 items-center">
          <a href="" className="font-bold">Home</a>
          <a href="">Projects</a>
          <a href="">Me</a>
          <a href="">Experience</a>
        </div>
      </nav>
    </header>
  );
}
