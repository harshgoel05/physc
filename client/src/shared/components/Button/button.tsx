interface Props {
  title: string;
  onClick: any;
  isLoading?: boolean;
}
export default function Button({ title, onClick, isLoading = false }: Props) {
  return (
    <>
      <button
        title={title}
        className="w-102 h-16 uppercase bg-black rounded-xl text-white font-bold text-lg"
        onClick={onClick}
        type="button"
        disabled={isLoading}
      >
        {isLoading ? <Loader /> : title}
      </button>
    </>
  );
}

export function Loader() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="
      loader
      ease-linear
      rounded-full
      border-4 border-gray-200
      h-8
      w-8
    "
      ></div>
    </div>
  );
}
