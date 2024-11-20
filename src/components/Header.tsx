export default function Header() {
  return (
    <header className="bg-zinc-600 py-8">
      <nav className="flex flex-row justify-center gap-10">
        <div>MC</div>
        <div className="space-x-10">
          <a href="" className="font-bold">Home</a>
          <a href="">Projects</a>
          <a href="">Me</a>
          <a href="">Experience</a>
        </div>
      </nav>
    </header>
  );
}
