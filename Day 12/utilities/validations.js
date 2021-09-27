const validEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(mail);
}

const passwordValidations = (pswd) => {
    const p = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/;
    return re.test(pswd);
}

module.export = {
    validEmail,
    passwordValidations
}