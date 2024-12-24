export const ValidateData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
    if (!isEmailValid) {
        return { isValid: false, message: "Invalid email" };
    }
    if (!isPasswordValid) {
        return { isValid: false, message: "Invalid password" };
    }
    return { isValid: true };
}
