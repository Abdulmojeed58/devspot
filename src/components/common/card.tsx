const Card = ({
  isSmall = false,
  children,
}: {
  isSmall?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`bg-dev-card rounded-[12px] px-[24px] ${
        isSmall ? "py-[12px]" : "py-6"
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
