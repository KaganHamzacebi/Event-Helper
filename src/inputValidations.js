export const validations = {
    "title": {
        errorMessage: "Title can't be empty!",
        validate: (value) => { return (value.length > 0) }
    },

    "channel": {
        errorMessage: "",
        validate: (value) => { return true }
    },
    "date": {
        errorMessage: "Date can't be empty!",
        validate: (value) => { return value !== "" }
    },
    "time": {
        errorMessage: "Time can't be empty!",
        validate: (value) => { return value !== "" }
    }

}

export function validate(name, value, setter){
    const lowerName = name.toLowerCase();
    if(validations[lowerName]=== undefined) return true; 
    const isValid = validations[lowerName].validate(value);
    setter(isValid);
    return isValid;
}

export function getErrorMessage(name){
    const lowerName = name.toLowerCase();
    if(validations[lowerName]=== undefined) return ""; 
    return validations[lowerName].errorMessage;
}





