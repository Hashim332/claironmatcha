type UserEntryProps = {
  name: string;
  matcha: number;
  listens: number;
};

export default function UserEntry({ name, matcha, listens }: UserEntryProps) {
  const score = matcha * 10 + listens;

  return (
    <li
      className='
    flex justify-between items-center text-sm border border-black rounded-xl p-4
    transition-transform duration-200 ease-in-out
    hover:scale-105 hover:shadow-lg
  '
    >
      <div className='flex flex-col'>
        <span className='font-medium'>{name}</span>
        <div className='flex gap-3 text-xs mt-1'>
          <span>🧋 {matcha}</span>
          <span>🎵 {listens}</span>
        </div>
      </div>
      <span className='font-bold'>{score} pts</span>
    </li>
  );
}
