"use server"

export async function getProfileByEmailAction(email: string) {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/kyc/getProfileByEmail`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.THREEWB_API_KEY
            },
            body: JSON.stringify({ email: email })
        })
        if (!response.ok) {
            throw new Error("Failed to get profile")
        }
        return response.json()
    } catch (error) {
        console.log(error)
        return null;
    }
}