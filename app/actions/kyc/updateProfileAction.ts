"use server"


export async function updateProfileAction(
    address: `0x${string}`,
    firstname: string,
    othername: string,
    lastname: string,
    id: string,
    files: string[]
) {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/kyc/updateProfile`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.THREEWB_API_KEY
            },
            body: JSON.stringify({ 
                address: address,
                firstname: firstname,
                othername: othername,
                lastname: lastname,
                id: id,
                files: files
            })
        })
        if (!response.ok) {
            throw new Error("Failed to update profile")
        }
        return response.json()
    } catch (error) { 
        console.log(error)
    }
}