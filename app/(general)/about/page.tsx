import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About Page',
 description: 'Página donde encuentras información sobre mí.',
 keywords: ['About Page', 'Adrián', 'información', '...'],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}