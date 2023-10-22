interface Props {
  children: string;
  indicator?: number;
  isSelected: boolean;
  onClick: () => void;
}

export default function TabButton({
  children: title,
  indicator,
  isSelected,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 flex flex-grow justify-center gap-2 border-b-4 ${
        isSelected
          ? "border-black text-black font-bold"
          : "border-transparent text-gray-500"
      }`}
      key={title}
    >
      <span>{title}</span>
      {!!indicator && (
        <span className="bg-gray-600 rounded-full text-white aspect-square h-6 flex items-center justify-center">
          {indicator}
        </span>
      )}
    </button>
  );
}
