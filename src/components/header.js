import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <nav
    aria-label="Site Nav"
    class="mx-auto flex max-w-3xl items-center justify-between p-4"
  >
    <Link
      to="/"
      className="flex h-10 px-4 font-bold items-center justify-center rounded-lg border-2 border-slate-100"
    >
      <span class="sr-only">OpenList Logo</span>
      🦋 OpenList
    </Link>

    <ul class="flex items-center gap-2 text-sm font-medium text-gray-500">

      <li><Link className="rounded-lg px-3 py-2" to="/licenses"> Licenses </Link></li>
      <li><Link className="rounded-lg px-3 py-2" to="/api"> API </Link></li>
      <li><Link className="rounded-lg px-3 py-2" to="/sdk"> SDK </Link></li>

      <li>
        <Link
          class="inline-flex items-center rounded-lg px-3 py-2"
          to="https://github.com/fairfield-programming/openlist"
          target="_blank"
        >
          Github
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="ml-1.5 h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
