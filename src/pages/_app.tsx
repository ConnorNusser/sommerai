import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import type { AppProps } from 'next/app'
'use client'

export default function App({ Component, pageProps }: AppProps) {
  return <CacheProvider><ChakraProvider><Component {...pageProps} /></ChakraProvider></CacheProvider>
}
