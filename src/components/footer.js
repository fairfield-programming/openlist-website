import * as React from "react"
import { Link } from "gatsby"
import Logo from '../res/fpa.svg'

const Footer = ({ siteTitle }) => (
    <footer aria-label="Site Footer" class="shadow-2xl mt-8">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="flex justify-center text-teal-600 sm:justify-start">
          <img className="h-14" src={Logo} alt="The Fairfield Programming Association Logo" />
        </div>
  
        <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
          Copyright &copy; { new Date().getFullYear() }. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
