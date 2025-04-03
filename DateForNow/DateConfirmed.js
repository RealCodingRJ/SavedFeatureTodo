export let now = new Date();
export const duedate = now.getDay() + 1;

const currentMonth = now.getMonth();
const currentYear = now.getFullYear();

export const message = `${currentMonth}/${duedate}/${currentYear}`;
