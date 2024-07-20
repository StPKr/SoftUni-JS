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