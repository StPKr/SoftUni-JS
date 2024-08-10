export function getCurrentWeek() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const diffToMonday = (dayOfWeek === 0 ? 6 : dayOfWeek - 1);

    const monday = new Date(today);
    monday.setDate(today.getDate() - diffToMonday);

    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const formatOptions = { day: '2-digit', month: 'short', year: 'numeric' };

    const formattedMonday = monday.toLocaleDateString('en-GB', formatOptions);
    const formattedSunday = sunday.toLocaleDateString('en-GB', formatOptions);

    return `${formattedMonday} - ${formattedSunday}`
}

export function unixToTime(unixTimestamp) {
    var date = new Date(unixTimestamp);

    var year = date.getFullYear();
    var monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var month = monthNames[date.getMonth()];
    var day = ("0" + date.getDate()).slice(-2);
    var hours = ("0" + date.getHours()).slice(-2);
    var minutes = ("0" + date.getMinutes()).slice(-2);


    var formattedTime = day + '-' + month + '-' + year + ' at ' + hours + ':' + minutes;

    return formattedTime;
}