export const concatDate = (date, time) => {
    let fecha = time.split(" ")[0];

    fecha.length == 4 ? (fecha = "0" + fecha + ":00") : (fecha = fecha + ":00");

    let fechaCompleta = date + " " + fecha;

    let convertirFecha = new Date(fechaCompleta);

    return convertirFecha;
};
export const currentWeek = (date) => {
    let todaydate = date;

    var oneJan = new Date(todaydate.getFullYear(), 0, 1);

    var numberOfDays = Math.floor((todaydate - oneJan) / (24 * 60 * 60 * 1000));

    var result = Math.ceil((todaydate.getDay() + 1 + numberOfDays) / 7);

    return result;
};

export const arrayByCurrentYear = (array) => {

    let onlycurrentYear = array.filter((item) => {
        let currentYear =
            concatDate(item.createdDate, item.createdTime).getFullYear() ===
            new Date().getFullYear();
        return currentYear;

    });
    return onlycurrentYear;
};

export const arrayByCurrentMonth = (array) => {

    let onlycurrentMonth = arrayByCurrentYear(array).filter((item) => {
        let currentMonth =
            concatDate(item.createdDate, item.createdTime).getMonth() ===
            new Date().getMonth();
        return currentMonth;
    });
    return onlycurrentMonth;
};