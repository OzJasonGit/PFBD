"use client";
import * as React from "react";
import Link from "next/link";
import { useTheme } from "../../Context/ThemeContext";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function ListItem({ title, children, href, theme, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className={`text-sm leading-none font-medium ${theme === 'light' ? 'text-black' : 'text-stone-50'}`}>{title}</div>
          <p className={`line-clamp-2 text-sm leading-snug ${theme === 'light' ? 'text-gray-600' : 'text-stone-400'}`}>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export function ShadCN_Header() {
  const { theme } = useTheme();
  
  return (
    <div className="dark-theme-nav" style={{ color: theme === 'light' ? '#000000' : '#f5f5f4' }}>
      <NavigationMenu viewport={false}>
        <NavigationMenuList className="bg-transparent">
          {/* Home Menu */}
          <NavigationMenuItem>
            <Link 
              href="/plastic_free_by_design"
              className={`bg-transparent font-avant_garde_bold px-4 py-2 rounded-md transition-colors ${
                theme === 'light' 
                  ? 'text-black hover:bg-gray-200' 
                  : 'text-stone-50 hover:bg-stone-700/30'
              }`}
              style={{ 
                color: theme === 'light' ? '#000000' : '#f5f5f4', 
                fontSize: '14px', 
              }}
            >
              Home
            </Link>
          </NavigationMenuItem>

          {/* Shop/Products Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className={`bg-transparent font-avant_garde_bold border-none shadow-none ${
                theme === 'light'
                  ? 'text-black hover:bg-gray-200 data-[state=open]:bg-gray-200 data-[state=open]:text-black focus:bg-gray-200 focus:text-black'
                  : 'text-stone-50 hover:bg-stone-700/30 data-[state=open]:bg-stone-700/30 data-[state=open]:text-stone-50 focus:bg-stone-700/30 focus:text-stone-50'
              }`}
              style={{ 
                color: theme === 'light' ? '#000000' : '#f5f5f4', 
                fontSize: '14px', 
                backgroundColor: 'transparent !important',
                border: 'none !important',
                boxShadow: 'none !important'
              }}
            >
              Shop
            </NavigationMenuTrigger>
            <NavigationMenuContent className={theme === 'light' ? 'bg-white border-gray-200' : 'bg-stone-900 border-stone-700'}>
              <ul className="grid w-[300px] gap-2 p-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/products" 
                      className={`flex flex-col items-start gap-1 p-2 rounded ${
                        theme === 'light' 
                          ? 'hover:bg-gray-100' 
                          : 'hover:bg-stone-800/50'
                      }`}
                    >
                      <div className={`font-avant_garde_bold text-sm ${theme === 'light' ? 'text-black' : 'text-stone-50'}`}>All Products</div>
                      <div className={`text-xs ${theme === 'light' ? 'text-gray-600' : 'text-stone-400'}`}>
                        Browse our products
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Newsletter Menu */}
          <NavigationMenuItem>
            <Link 
              href="/newsletter"
              className={`bg-transparent font-avant_garde_bold px-4 py-2 rounded-md transition-colors ${
                theme === 'light' 
                  ? 'text-black hover:bg-gray-200' 
                  : 'text-stone-50 hover:bg-stone-700/30'
              }`}
              style={{ 
                color: theme === 'light' ? '#000000' : '#f5f5f4', 
                fontSize: '14px', 
              }}
            >
              Newsletter
            </Link>
          </NavigationMenuItem>

          {/* Blog Menu */}
          <NavigationMenuItem>
            <Link 
              href="/bloghome"
              className={`bg-transparent font-avant_garde_bold px-4 py-2 rounded-md transition-colors ${
                theme === 'light' 
                  ? 'text-black hover:bg-gray-200' 
                  : 'text-stone-50 hover:bg-stone-700/30'
              }`}
              style={{ 
                color: theme === 'light' ? '#000000' : '#f5f5f4', 
                fontSize: '14px', 
              }}
            >
              Blog
            </Link>
          </NavigationMenuItem>

          {/* Pages Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className={`bg-transparent font-avant_garde_bold border-none shadow-none ${
                theme === 'light'
                  ? 'text-black hover:bg-gray-200 data-[state=open]:bg-gray-200 data-[state=open]:text-black focus:bg-gray-200 focus:text-black'
                  : 'text-stone-50 hover:bg-stone-700/30 data-[state=open]:bg-stone-700/30 data-[state=open]:text-stone-50 focus:bg-stone-700/30 focus:text-stone-50'
              }`}
              style={{ 
                color: theme === 'light' ? '#000000' : '#f5f5f4', 
                fontSize: '14px', 
                backgroundColor: 'transparent !important',
                border: 'none !important',
                boxShadow: 'none !important'
              }}
            >
              More
            </NavigationMenuTrigger>
            <NavigationMenuContent className={theme === 'light' ? 'bg-white border-gray-200' : 'bg-stone-900 border-stone-700'}>
              <ul className="grid w-[300px] gap-2 p-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/welcome_page" 
                      className={`flex flex-col items-start gap-1 p-2 rounded ${
                        theme === 'light' 
                          ? 'hover:bg-gray-100' 
                          : 'hover:bg-stone-800/50'
                      }`}
                    >
                      <div className={`font-avant_garde_bold text-sm ${theme === 'light' ? 'text-black' : 'text-stone-50'}`}>Welcome</div>
                      <div className={`text-xs ${theme === 'light' ? 'text-gray-600' : 'text-stone-400'}`}>
                        Visit welcome page
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/bloghome" 
                      className={`flex flex-col items-start gap-1 p-2 rounded ${
                        theme === 'light' 
                          ? 'hover:bg-gray-100' 
                          : 'hover:bg-stone-800/50'
                      }`}
                    >
                      <div className={`font-avant_garde_bold text-sm ${theme === 'light' ? 'text-black' : 'text-stone-50'}`}>Stories</div>
                      <div className={`text-xs ${theme === 'light' ? 'text-gray-600' : 'text-stone-400'}`}>
                        Read our stories
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Hidden Dashboard - for old navigation structure */}
          <NavigationMenuItem style={{ display: 'none' }}>
            <NavigationMenuTrigger 
              className={`bg-transparent font-avant_garde_bold border-none shadow-none ${
                theme === 'light'
                  ? 'text-black hover:bg-gray-200 data-[state=open]:bg-gray-200 data-[state=open]:text-black focus:bg-gray-200 focus:text-black'
                  : 'text-stone-50 hover:bg-stone-700/30 data-[state=open]:bg-stone-700/30 data-[state=open]:text-stone-50 focus:bg-stone-700/30 focus:text-stone-50'
              }`}
              style={{ 
                color: theme === 'light' ? '#000000' : '#f5f5f4', 
                fontSize: '14px', 
                backgroundColor: 'transparent !important',
                border: 'none !important',
                boxShadow: 'none !important'
              }}
            >


















              
              Dashboard
            </NavigationMenuTrigger>
            <NavigationMenuContent className={theme === 'light' ? 'bg-white border-gray-200' : 'bg-stone-900 border-stone-700'}>
              <ul className="grid w-[300px] gap-2 p-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/welcome_page" 
                      className={`flex flex-col items-start gap-1 p-2 rounded ${
                        theme === 'light' 
                          ? 'hover:bg-gray-100' 
                          : 'hover:bg-stone-800/50'
                      }`}
                    >
                      <div className={`font-avant_garde_bold text-sm ${theme === 'light' ? 'text-black' : 'text-stone-50'}`}>Welcome</div>
                      <div className={`text-xs ${theme === 'light' ? 'text-gray-600' : 'text-stone-400'}`}>
                        Visit welcome page
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/bloghome" 
                      className={`flex flex-col items-start gap-1 p-2 rounded ${
                        theme === 'light' 
                          ? 'hover:bg-gray-100' 
                          : 'hover:bg-stone-800/50'
                      }`}
                    >
                      <div className={`font-avant_garde_bold text-sm ${theme === 'light' ? 'text-black' : 'text-stone-50'}`}>Stories</div>
                      <div className={`text-xs ${theme === 'light' ? 'text-gray-600' : 'text-stone-400'}`}>
                        Read our stories
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Blog/Stories Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className={`bg-transparent font-avant_garde_bold border-none shadow-none ${
                theme === 'light'
                  ? 'text-black hover:bg-gray-200 data-[state=open]:bg-gray-200 data-[state=open]:text-black focus:bg-gray-200 focus:text-black'
                  : 'text-stone-50 hover:bg-stone-700/30 data-[state=open]:bg-stone-700/30 data-[state=open]:text-stone-50 focus:bg-stone-700/30 focus:text-stone-50'
              }`}
              style={{ 
                color: theme === 'light' ? '#000000' : '#f5f5f4', 
                fontSize: '14px', 
                backgroundColor: 'transparent !important',
                border: 'none !important',
                boxShadow: 'none !important'
              }}
            >
              Stories
            </NavigationMenuTrigger>
            <NavigationMenuContent className={theme === 'light' ? 'bg-white border-gray-200' : 'bg-stone-900 border-stone-700'}>
              <ul className="grid w-[300px] gap-2 p-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/bloghome" 
                      className={`flex flex-col items-start gap-1 p-2 rounded ${
                        theme === 'light' 
                          ? 'hover:bg-gray-100' 
                          : 'hover:bg-stone-800/50'
                      }`}
                    >
                      <div className={`font-avant_garde_bold text-sm ${theme === 'light' ? 'text-black' : 'text-stone-50'}`}>Our Blog</div>
                      <div className={`text-xs ${theme === 'light' ? 'text-gray-600' : 'text-stone-400'}`}>
                        Latest insights on BIM, AI, and architecture
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
     
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}