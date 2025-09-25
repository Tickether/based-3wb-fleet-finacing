"use client"

import { wagmiAdapter, projectId } from "@/utils/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import { base, optimism } from "@reown/appkit/networks";
import { cookieToInitialState, WagmiProvider, type Config } from "wagmi";




const queryClient = new QueryClient()


// Set up metadata
const metadata = {
  name: "3 Wheeler Bike Club",
  description: "P2P Financing Platform for the 3 Wheeler Bike Club",
  url: "https://based-3wb-fleet-finacing.vercel.app/", // origin must match your domain & subdomain
  icons: ["https://finance.3wb.club/icons/logo.png"]
}


// Create the modal
const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [base, optimism],
  defaultNetwork: base,
  metadata: metadata,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export const WagmiContext = ({ children, cookies }: { children: React.ReactNode, cookies: string | null }) => {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

  return (
      <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
  )
};
