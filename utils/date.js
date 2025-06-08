const fs = require("fs");

function format(date) {
  if (!date) {
    return "Undated";
  }
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}

function formatLong(date) {
  if (!date) {
    return "Undated";
  }
  formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short"
  });
  formatted = formatter.format(date);
  return `${formatted} (GMT-8)`;
}

function lastModified(input) {
  if (!input) {
    throw new Error("lastModified: No date provided.");
  }
  const date = new Date(input);
  if (isNaN(date)) {
    throw new Error(`lastModified: Invalid date input "${dateInput}"`);
  }
  formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short"
  });
  const parts = formatter.formatToParts(date);
  const tzAbbr = parts.find(p => p.type === "timeZoneName")?.value || "";
  const gmtOffset = {
    PST: "-8",
    PDT: "-7"
  }[tzAbbr] || "";
  const formatted = formatter.format(date);
  return `${formatted} (GMT${gmtOffset})`;
}

function createdOn(filePath) {
  const stats = fs.statSync(filePath);
  return stats.birthtime;
}

module.exports = { format, formatLong, lastModified, createdOn };
