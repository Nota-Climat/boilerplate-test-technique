const validatePhone = (phone) => {
    const regex = /^\+?\d{0,10}$/;
    return regex.test(phone);
};

export default validatePhone;