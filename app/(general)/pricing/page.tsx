import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'Página donde puedes ver todos los precios de mis servicios',
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  );
}