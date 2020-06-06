export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export const generateNumbers = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i++) {
    result.push(i);
  }

  return result;
};

export const getTime = (timeItem) =>
  timeItem <= 9 ? `0${timeItem}:00` : `${timeItem}:00`;

export const getEventTime = (time) => {
  const stringH =
    time.getHours() <= 9 ? `0${time.getHours()}` : `${time.getHours()}`;

  const stringM =
    time.getMinutes() <= 9 ? `0${time.getMinutes()}` : `${time.getMinutes()}`;

  return `${stringH}:${stringM}`;
};

export const getEventDate = (date, startTime) =>
  `${new Date(`${date} ${startTime}`).getDate()}/${new Date(
    `${date} ${startTime}`
  ).getMonth()}/${new Date(`${date} ${startTime}`).getFullYear()}`;
