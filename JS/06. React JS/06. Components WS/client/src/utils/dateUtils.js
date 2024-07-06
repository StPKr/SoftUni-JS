export const formatDate = (dateString) => {
    const date = new Date(dateString);

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formatedDate = date.toLocaleDateString('en-US', dateOptions);

    return formatedDate;
}; 