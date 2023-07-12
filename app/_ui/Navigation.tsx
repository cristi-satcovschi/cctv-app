"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 h-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div>
            <Link className="text-white text-xl font-semibold" href="/">
              CCTV Video Analytics Software
            </Link>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link
                  className={`rounded-md px-3 py-2 text-sm font-medium
                    ${
                      pathname === "/"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  href="/"
                >
                  Live View
                </Link>
              </li>
              <li>
                <Link
                  className={`rounded-md px-3 py-2 text-sm font-medium
                    ${
                      pathname.startsWith("/search")
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  href="/search"
                >
                  Search
                </Link>
              </li>
              <li>
                <Link
                  className={`rounded-md px-3 py-2 text-sm font-medium
                    ${
                      pathname.startsWith("/alerts")
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  href="/alerts"
                >
                  Alerts
                </Link>
              </li>
              <li>
                <Link
                  className={`rounded-md px-3 py-2 text-sm font-medium
                    ${
                      pathname.startsWith("/cases")
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  href="/cases"
                >
                  Cases
                </Link>
              </li>
              <li>
                <Link
                  className={`rounded-md px-3 py-2 text-sm font-medium
                    ${
                      pathname.startsWith("/camera-health")
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  href="/camera-health"
                >
                  Camera and Server Health
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
