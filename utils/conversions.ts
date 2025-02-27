export const formatTime = (seconds: number): string => {
    if (isNaN(seconds) || seconds < 0) return "00:00";
  
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
  
    if (hrs > 0) {
      return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    } else {
      return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }
  };
  

  export const formatTimeForFfmpeg = (seconds: number): string => {
    if (isNaN(seconds) || seconds < 0) return "00:00:00";

    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};
