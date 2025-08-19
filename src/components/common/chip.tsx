const statusColors = {
  rejected: "bg-[#552807] text-[#FF9330]",
  accepted: "bg-color-gradient-purple-blue text-[#F7F7FF]",
  pending: "bg-[#594707] text-[#FFCC00]",
  none: "",
};

const Chip = ({ status }: { status: keyof typeof statusColors }) => {
  return (
    <>
      {status !== "none" && (
        <span
          className={`mt-2 sm:mt-0 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium leading-5 sm:leading-6 font-roboto self-center sm:self-auto capitalize ${statusColors[status]}`}
        >
          {status}
        </span>
      )}
    </>
  );
};

export default Chip;
