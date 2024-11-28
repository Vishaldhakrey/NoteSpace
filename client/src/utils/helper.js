export const getInitials = (name) => {
    if(!name) return ""

    const words = name.split(" ")

    let initials = ''
    for(let i=0; i<Math.min(words.length, 2); i++){
        initials += words[i][0]
    }

    return initials.toUpperCase()
}

export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const validateName = (name) => {
    const regex = /^[a-zA-Z\s]+$/; 
    return regex.test(name);
};

export const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
};