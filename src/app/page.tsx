import Link from 'next/link';
import Button from './_components/button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center gap-y-1">
      <Button>
        <Link href="/uniqlo-no-image-resize">Uniqlo No Resize</Link>
      </Button>
      <Button>
        <Link href="/flexbox-tdy-full-height">Flexbox TDY Full Height</Link>
      </Button>
    </div>
  );
}
