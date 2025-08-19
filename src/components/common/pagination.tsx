import { ChevronLeftIcon, ChevronRightIcon } from "../icons";

interface PaginationProps {
  onPrev: () => void;
  onNext: () => void;
  disablePrev?: boolean;
  disableNext?: boolean;
}

export default function Pagination({ onPrev, onNext, disablePrev, disableNext }: PaginationProps) {
  return (
    <div className="flex gap-[15px]">
      <button
        className="bg-[#2B2B31] rounded-[12px] p-[10px] border border-dev-border disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={onPrev}
        disabled={disablePrev}
        aria-label="Previous"
      >
        <ChevronLeftIcon />
      </button>
      <button
        className="bg-[#2B2B31] rounded-[12px] p-[10px] border border-dev-border disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={onNext}
        disabled={disableNext}
        aria-label="Next"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}