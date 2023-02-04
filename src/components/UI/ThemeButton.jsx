
export const ThemeButton = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
};
