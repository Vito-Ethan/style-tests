// uniqlo has a weird feature when you resize their page vertically, the video playing in the background doesn't resize. part of the image
// just gets cropped as you size up.
// press f12 and slide the dev tools up or just resize the browser vertically.
// you'll notice the image just gets cropped
import Image from 'next/image';

export default function Page() {
  return (
    <section className="relative flex flex-col h-screen overflow-hidden md:block justify-center">
      <Image
        src="/sean.jpg"
        priority
        alt="bob"
        width={1920}
        height={1080}
        quality={100}
      />
    </section>
  );
}
