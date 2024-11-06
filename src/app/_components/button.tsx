export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="block w-1/2 mx-auto text-center bg-sky-300 hover:opacity-75 rounded">
      {children}
    </button>
  );
}
