const Container = ({ children, classname }) => {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-10 ${classname}`}>
      {children}
    </div>
  );
};

export default Container;
