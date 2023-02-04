export const Button = ({ children, dispatch, onClick }) => {
  return <button onClick={onClick} dispatch={dispatch}
  >{children}</button>
};

