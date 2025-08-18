import { ChevronLeftIcon, ChevronRightIcon } from "../icons";

export default function Pagination() {
  return (
    <div className="flex gap-[15px]">
      <button className="bg-[#2B2B31] rounded-[12px] p-[10px] border border-dev-border"><ChevronLeftIcon /></button>
      <button className="bg-[#2B2B31] rounded-[12px] p-[10px] border border-dev-border"><ChevronRightIcon /></button>
    </div>
  );
}