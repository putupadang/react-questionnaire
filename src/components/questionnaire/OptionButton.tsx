import { IoCheckmark } from "react-icons/io5";

import { cx } from "@/components/brutal";

type Props = {
  option: string;
  isSelected: boolean;
  onSelect: (option: string) => void;
};

export function OptionButton({ option, isSelected, onSelect }: Props) {
  return (
    <button
      type="button"
      onClick={() => onSelect(option)}
      className={cx(
        "group flex w-full items-center gap-3 border-2 border-black px-4 py-4 text-left shadow-[6px_6px_0_#000] transition",
        "hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[8px_8px_0_#000]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
        isSelected ? "bg-indigo-200" : "bg-white"
      )}
    >
      <span
        className={cx(
          "flex h-5 w-5 shrink-0 items-center justify-center border-2 border-black",
          isSelected ? "bg-indigo-500" : "bg-white"
        )}
        aria-hidden
      >
        {isSelected ? <IoCheckmark className="text-white" size={16} /> : null}
      </span>
      <span className="text-sm font-bold text-black">{option}</span>
    </button>
  );
}
