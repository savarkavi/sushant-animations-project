const Header = () => {
  return (
    <div className="sticky top-0 z-10 flex h-20 w-full items-center justify-between border-b border-gray-300 bg-white px-8 text-black">
      <p className="text-4xl font-bold uppercase">Royalty</p>
      <div className="flex items-center gap-6 text-2xl font-semibold">
        <p className="cursor-pointer">Works</p>
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Archive</p>
        <p className="cursor-pointer">Contact</p>
      </div>
    </div>
  );
};

export default Header;
