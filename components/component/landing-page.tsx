/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/k8ennDZ9Jg6
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { TabsDemo } from "./tabsren"
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlights";


export function LandingPage() {
  return (

    <div className="space-y-16">
      
      <header className="flex items-center justify-between p-4 bg-white shadow">
        <div className="flex items-center space-x-4">
          <LogInIcon className="h-8 w-8 text-blue-600" />
          <nav className="flex space-x-4">
            <Button variant="link">
            <a href="#" className="text-lg text-gray-700 font-mediumhover:text-gray-900">
              Products
            </a>
            </Button>
            <Button variant="link">
            <a href="#" className="text-lg text-gray-700 font-mediumhover:text-gray-900">
              Teams
            </a>
            </Button>
            <Button variant="link">
            <a href="#" className="text-lg text-gray-700 font-mediumhover:text-gray-900">
              Why?
            </a>
            </Button>
            <Button variant="link">
            <a href="#" className=" text-lg font-medium text-gray-700 hover:text-gray-900">
              something
            </a>
            </Button>
            <Button variant="link">
            <a href="#" className="text-lg text-gray-700 font-mediumhover:text-gray-900">
              something
            </a>
            </Button>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
    Sign in
  </a>
</div>

      </header>
      <br /><br /><br /><br />
      <section className="flex flex-col items-center text-center space-y-8">
      
        <h1 className="text-5xl font-bold">
          The new Jira: <br />
          <span className="text-blue-600">
            from <span className="text-black underline">teams</span> to dreams
          </span>
        </h1>
        <Button
  variant="outline"
  className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg transition-transform transform hover:scale-105"
>
  Get started
</Button>

      </section>
     
      <br /><br />
      <br /><br />
      <section className="text-center space-y-8">
        <TabsDemo></TabsDemo>
      </section>

      <section className="text-center space-y-8">
        <h2 className="text-2xl font-bold">Teamwork solutions for high-performing teams</h2>
        <div className="flex flex-col items-center space-y-4">
          <SparkleIcon className="h-8 w-8 text-gray-400" />
          <Button
  className="bg-blue-600 text-white px-6 py-3 rounded-full transition-transform transform hover:scale-105 hover:bg-blue-700"
>
  Get started with Confluence
</Button>

        </div>
      </section>
      <footer className="bg-gray-100 py-8 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Jira
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Confluence
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Bitbucket
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Trello
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Learn</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Certification
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button className="bg-blue-600 text-white px-6 py-3 rounded-full">Sign up for free</Button>
            <div className="relative">
              <Button variant="ghost" className="flex items-center space-x-2">
                <GlobeIcon className="h-5 w-5" />
                <span>English</span>
                <ChevronDownIcon className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <GlobeIcon className="h-5 w-5" />
                    <span>English</span>
                    <ChevronDownIcon className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>Español</DropdownMenuItem>
                  <DropdownMenuItem>Français</DropdownMenuItem>
                  <DropdownMenuItem>Deutsch</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Atlassian. All rights reserved.</p>
        </div>
      </footer>
      
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}


function LogInIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  )
}


function SparkleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  )
}