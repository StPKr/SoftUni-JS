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

export function getCurrentTime() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
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


    var formattedTime = month + '-' + day + '-' + year + ' ' + hours + ':' + minutes;

    return formattedTime;
}