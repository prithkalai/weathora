import { useEffect, useRef } from "react";
import {
  AnimatedWeatherIcon,
  AnimatedWeatherTypes,
  AnimatedWeatherTimes,
} from "animated-weather-icon";

interface Props {
  weatherType: AnimatedWeatherTypes;
  weatherTime: AnimatedWeatherTimes;
  disableAnimations: boolean;
  className: string;
}

const WeatherIcon = ({
  weatherType,
  weatherTime,
  disableAnimations,
  className,
}: Props) => {
  // useRef(null) tells TypeScript that this ref's current value can be null
  // We use HTMLElement because it will hold a reference to a DOM element
  const iconContainerRef = useRef<HTMLDivElement | null>(null);

  // We use AnimatedWeatherIcon because this ref will hold a reference to the AnimatedWeatherIcon instance
  const iconRef = useRef<AnimatedWeatherIcon | null>(null);

  useEffect(() => {
    if (iconContainerRef.current) {
      iconRef.current = new AnimatedWeatherIcon(iconContainerRef.current);
      iconRef.current.setType(weatherType, weatherTime, disableAnimations);
    }

    // assuming there's a dispose or similar method to cleanup
    return () => {
      if (iconRef.current) {
        iconRef.current.unsetIcon();
      }
    };
  }, [weatherType, weatherTime, disableAnimations]); // Listen for changes in these props

  return <div className={className} ref={iconContainerRef} />;
};

export default WeatherIcon;
