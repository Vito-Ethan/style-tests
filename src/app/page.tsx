import Link from 'next/link';
export default function Home() {
  return (
    <Link
      href="/uniqlo-no-image-resize"
      className="block w-1/2 mx-auto text-center bg-sky-300 hover:opacity-75 rounded"
    >
      Uniqlo No Resize
    </Link>
  );
}
