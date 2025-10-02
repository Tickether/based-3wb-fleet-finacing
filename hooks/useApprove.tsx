import { publicClient } from "@/utils/client"
import { fleetOrderBook, fleetOrderToken } from "@/utils/constants/addresses"
import { getReferralTag, submitReferral } from "@divvi/referral-sdk"
import { useState } from "react"
import { toast } from "sonner"
import { encodeFunctionData, erc20Abi, maxUint256 } from "viem"
import { base } from "viem/chains"
import { useAccount, useSendTransaction, useSwitchChain } from "wagmi";


export const useApprove = () => {
  
    const [loadingApproval, setLoadingApproval] = useState(false)
    const { sendTransactionAsync } = useSendTransaction();
    const { chainId } = useAccount()
    const { switchChainAsync } = useSwitchChain()

    async function approve(account: `0x${string}`) {
      try {
        setLoadingApproval(true)
        

        const data = encodeFunctionData({
          abi: erc20Abi,
          functionName: "approve",
          args: [fleetOrderBook, maxUint256]
        })
        
        // consumer is your Divvi Identifier
        // generate a referral tag for the user
        const referralTag  = getReferralTag({
          user: account,
          consumer: "0x99342D3CE2d10C34b7d20D960EA75bd742aec468",
        })

        if (chainId !== base.id) {
          await switchChainAsync({ chainId: base.id })
        }

        const hash = await sendTransactionAsync({
          to: fleetOrderToken,
          data: data + referralTag as `0x${string}`,
          value: BigInt(0),
          chainId: base.id
        })
        
        const transaction = await publicClient.waitForTransactionReceipt({
          confirmations: 1,
          hash: hash
        })

        // Step 2: Report the transaction to the attribution tracking API
        if (transaction) {
          await submitReferral({
            txHash: hash,
            chainId: base.id
          })
        }
        setLoadingApproval(false) 
        toast.info("Approval successful", {
          description: "You can now purchase the 3-Wheelers",
        })
      } catch (error) {
        console.log(error)
        setLoadingApproval(false)
        toast.error("Approval failed", {
          description: `Something went wrong, please try again`,
        })
      }   
    }
    return { approve, loadingApproval }
  
}