import Link from 'next/link';
import Button from './_components/button';

export default function Home() {
  return (
    <Button>
      <Link href="/uniqlo-no-image-resize">Uniqlo No Resize</Link>
    </Button>
  );
}
