export function getTimeRemaining(deadline: Date): string {
  const now = new Date();
  const timeDifference = deadline.getTime() - now.getTime();

  if (timeDifference <= 0) {
    return "Deadline has passed";
  }

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days}d left`;
  } else if (hours > 0) {
    return `${hours}h left`;
  } else if (minutes > 0) {
    return `${minutes}m left`;
  } else {
    return `${seconds}s left`;
  }
}
