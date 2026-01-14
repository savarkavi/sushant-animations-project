const Header = () => {
  return (
    <div className="flex items-center justify-between text-xl font-bold uppercase text-black">
      <p>Sushant Studios</p>
      <div className="flex items-center gap-6">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Projects</p>
        <p className="cursor-pointer underline">About us</p>
      </div>
    </div>
  );
};

export default Header;
