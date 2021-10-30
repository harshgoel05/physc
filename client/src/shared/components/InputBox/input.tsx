interface Props {
  value: string;
  setValue: any;
  placeholder: string;
  type?: string;
}

export default function Input({
  value,
  setValue,
  placeholder,
  type = "text",
}: Props) {
  console.log(value);
  return (
    <>
      <input
        value={value}
        onChange={setValue}
        className="h-16 w-102 outline-none rounded-xl p-8 text-grey"
        placeholder={placeholder}
        type={type}
      />
    </>
  );
}
