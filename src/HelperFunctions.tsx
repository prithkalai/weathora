import moment from "moment-timezone";
import { Shimmer } from "react-shimmer";

// Function that returns the current time
export function getCurrentTime(): string {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes; // Add leading zero if needed
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

// Function that generates an array of times. Length of the array is based on the 'n' value.
export function generateTimes(n: number): string[] {
  const times: string[] = [];

  // Get current date
  const currentDate = new Date();

  // Set the minutes and seconds to 0 and add one hour to get the next full hour
  currentDate.setHours(currentDate.getHours() + 1, 0, 0);

  // Generate the array of times
  for (let i = 0; i < n; i++) {
    let hours = currentDate.getHours();
    const amOrPm = hours >= 12 ? "PM" : "AM";

    // Convert hour from 24-hour to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    times.push(`${hours} ${amOrPm}`);

    // Move to the next hour
    currentDate.setHours(currentDate.getHours() + 1);
  }

  return times;
}

// Function the rounds numbers up or down based on the decimal point
export function customRound(num: number): number {
  let decimalPart = num - Math.floor(num);
  return decimalPart > 0.5 ? Math.ceil(num) : Math.floor(num);
}

// Important Function
// Finds the index of the current hour to display the relevant data for the current hour
export function findTodayIndex(dates: string[], timezone: string): number {
  // Create a moment object for today's date in the specified timezone
  const today = moment.tz(timezone).format("YYYY-MM-DD");

  // Find the index of today's date in the dates array
  return dates.findIndex((date) => date === today);
}

export function findIndexOfClosestTimeBeforeNow(
  timeArray: string[],
  timezone: string
): number {
  // Get the current time in the specified timezone
  const now = moment.tz(timezone);

  let closestTimeIndex = -1;

  timeArray.forEach((time, index) => {
    // Parse the time string in the specified timezone
    const timeMoment = moment.tz(time, timezone);
    if (timeMoment.isSameOrBefore(now)) {
      closestTimeIndex = index;
    }
  });

  return closestTimeIndex;
}

// Funtion to return the shimmer list
export const ShimmerList = ({
  count,
  width,
  height,
}: {
  count: number;
  width: number;
  height: number;
}) => {
  const shimmerItems = Array.from({ length: count }, (_, index) => (
    <div key={index}>
      <Shimmer width={width} height={height} className="rounded-xl" />
    </div>
  ));

  return <>{shimmerItems}</>;
};

// Function to convert celsius to faranheit
export function celsiusToFahrenheit(celsius: number) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return customRound(fahrenheit);
}
