import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "The page you’re looking for doesn’t exist at KDT Restaurant.",
  alternates: { canonical: "/404/" },
};

export default function NotFound() {
  return (
    <main className="text-white min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl font-extrabold mb-4">404</h1>
        <p className="text-lg mb-6">Sorry, we couldn’t find that page.</p>
        <Link href="/" className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-600">
          Go to Home
        </Link>
      </div>
    </main>
  );
}
