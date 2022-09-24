export const depositAmount = (amount: Number) => {
    return {
        type: "deposit",
        payload: amount
    }
}

export const withdrawAmount = (amount: Number) => {
    return {
        type: "withdraw",
        payload: amount
    }
}
