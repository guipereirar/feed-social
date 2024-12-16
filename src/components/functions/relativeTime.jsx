export default function RelativeTime(dateString) {
  const now = new Date();
  const past = new Date(dateString);
  const diffInSeconds = Math.floor((now - past) / 1000);

  const intervals = [
    { unit: "year", seconds: 31536000 },
    { unit: "month", seconds: 2592000 },
    { unit: "day", seconds: 86400 },
    { unit: "hour", seconds: 3600 },
    { unit: "minute", seconds: 60 },
    { unit: "second", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count > 0) {
      const rtf = new Intl.RelativeTimeFormat("pt-BR", { numeric: "auto" });
      return rtf.format(-count, interval.unit);
    }
  }

  return "agora mesmo";
}
