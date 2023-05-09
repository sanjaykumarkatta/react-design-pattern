export const formatDate = (givenDate: string | number | Date) => {
    const inputDate = new Date(givenDate);
    const dateOptions: any = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions: any = { hour: 'numeric', minute: 'numeric', hour12: true };
    const dateString = inputDate.toLocaleDateString('en-US', dateOptions);
    const timeString = inputDate.toLocaleTimeString('en-US', timeOptions);
    return `${timeString}, ${dateString}`;
};