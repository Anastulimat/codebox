"use client"

import * as React from "react"
import {ThemeProvider as NextThemesProvider} from "next-themes"

/**
 * Renders a theme provider element that forwards received props and children.
 *
 * @param children - React nodes to be rendered inside the provider
 * @param props - Props to forward to the theme provider component
 * @returns A React element representing the theme provider with the forwarded props and children
 */
export function ThemeProvider({
                                  children,
                                  ...props
                              }: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}