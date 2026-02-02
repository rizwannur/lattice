import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTenantData } from '@/lib/tenants';
import { protocol, rootDomain } from '@/lib/utils';

export async function generateMetadata({
  params
}: {
  params: Promise<{ subdomain: string }>;
}): Promise<Metadata> {
  const { subdomain } = await params;
  const subdomainData = await getTenantData(subdomain);

  if (!subdomainData) {
    return {
      title: rootDomain
    };
  }

  return {
    title: `${subdomain}.${rootDomain}`,
    description: `Subdomain page for ${subdomain}.${rootDomain}`
  };
}

export default async function SubdomainPage({
  params
}: {
  params: Promise<{ subdomain: string }>;
}) {
  const { subdomain } = await params;
  const subdomainData = await getTenantData(subdomain);

  if (!subdomainData) {
    notFound();
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-gradient-to-b from-blue-50 to-white sm:p-4">
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
        <Link
          href={`${protocol}://${rootDomain}`}
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          {rootDomain}
        </Link>
      </div>

      <div className="flex min-h-0 flex-1 flex items-center justify-center p-4">
        <div className="text-center max-w-lg">
          <div className="text-6xl sm:text-8xl lg:text-9xl mb-4 sm:mb-6">{subdomainData.emoji}</div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            {subdomainData.title}
          </h1>
          <p className="mt-2 text-base text-gray-600 sm:mt-3 sm:text-lg">
            {subdomainData.description}
          </p>
        </div>
      </div>
    </div>
  );
}
