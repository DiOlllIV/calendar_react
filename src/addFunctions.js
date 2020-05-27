export const generateNumbers = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i);
    }

    return result;
};

export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export const getTime = timeItem => 
    timeItem <= 9 ?
        `0${timeItem}:00` :
        `${timeItem}:00`