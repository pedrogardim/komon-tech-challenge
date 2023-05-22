import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl uppercase font-bold mb-4">Home</h1>
      <p className="mb-4">Welcome to thee Komon Admin Page!</p>
      <p>
        To connect social media accounts with Komon, please{' '}
        <Link href="/integrations">
          <u className="text-gray-500">click here</u>
        </Link>
        , or head to the Integrations section.
      </p>
    </div>
  );
}
