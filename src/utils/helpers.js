export const formatTime = (dateTimeStr) => {
     if (!dateTimeStr || typeof dateTimeStr !== "string") {
       console.warn("Invalid dateTimeStr:", dateTimeStr);
       return "";
     }
   
     // Match time formats with optional space before AM/PM and optional seconds
     const match = dateTimeStr.match(/(\d{1,2}):(\d{2})(?::\d{2})?\s?(AM|PM)/i);
     if (!match) {
       console.warn("Time format mismatch for:", dateTimeStr);
       return "";
     }
   
     const hour = match[1];
     const period = match[3].toUpperCase();
   
     return `${parseInt(hour)} ${period}`;
   };