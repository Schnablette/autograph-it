export const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-fern-500"><p className="text-ebony-800 text-sm text-center py-2">
        Your NFT is about to get personal - Q1 2023
      </p></div>
      <div className="px-10 pt-10 overflow-hidden">{children}</div>
    </>
  );
};
