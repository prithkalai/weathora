export function getCurrentDay(): string {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const dayIndex = now.getDay(); // getDay returns a number between 0 (Sunday) and 6 (Saturday)
  return days[dayIndex];
}

export function getCurrentTime(): string {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes; // Add leading zero if needed
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

export function customRound(num: number): number {
  let decimalPart = num - Math.floor(num);
  return decimalPart > 0.5 ? Math.ceil(num) : Math.floor(num);
}

export function findTodayIndex(dates: string[]): number {
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are 0 based, so add 1 and format to 2 digits
  const day = ("0" + date.getDate()).slice(-2); // Format to 2 digits

  const today = `${year}-${month}-${day}`;

  return dates.findIndex((date) => date === today);
}

export function findIndexOfClosestTimeBeforeNow(timeArray: string[]): number {
  const now = new Date();

  let closestTimeIndex = -1;

  timeArray.forEach((time, index) => {
    const timeDate = new Date(time);
    if (timeDate.getTime() <= now.getTime()) {
      closestTimeIndex = index;
    }
  });

  return closestTimeIndex;
}
