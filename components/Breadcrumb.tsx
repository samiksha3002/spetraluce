"use client";

import Link from "next/link";

interface BreadcrumbProps {
  current: string;
}

export default function Breadcrumb({ current }: BreadcrumbProps) {
  return (
    <nav className="text-sm text-gray-600">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>/</li>
        <li className="font-medium text-gray-800">{current}</li>
      </ol>
    </nav>
  );
}
