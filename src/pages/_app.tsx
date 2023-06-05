import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/client";
import { FC } from 'react'
import Application from '@/components/Application'

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <Application />
    </ApolloProvider>
  )
}

export default App;