export default function Input({ value, setValue }: any) {
  console.log(value);
  return (
    <>
      <input
        value={value}
        onChange={setValue}
        className="h-16 w-102 outline-none rounded-xl p-8 text-grey"
      />
    </>
  );
}
