import { createPublicClient, http } from 'viem'
import { base } from 'viem/chains'
 
export const publicClient = createPublicClient({
  chain: base,
  transport: http("https://rpc.ankr.com/base/ee0a8164bea2f800a788de2550a2171e4f908f2e911ed21499ec792d110aa631")
})