const Button = ({ title, onClick, ...remainingProps }) => {
  return (
    <>
      <button
        onClick={onClick}
        className=" bg-primary text-white font-bold px-6 py-2 hover:bg-secondary shadow-xl active:translate-y-1 m-8 rounded-md disabled:bg-slate-500"
        {...remainingProps}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
