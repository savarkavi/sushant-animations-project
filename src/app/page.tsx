import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <Link href="/navigation-menu-1">Navigation menu 1</Link>
      <Link href="/image-reveal-on-hover">Image reveal on hover</Link>
      <Link href="/scroll-trigger-1">Scroll trigger 1</Link>
      <Link href="/landing-page-reveal-1">Landing page reveal 1</Link>
      <Link href="/scroll-trigger-2">Scroll trigger 2</Link>
    </div>
  );
}
