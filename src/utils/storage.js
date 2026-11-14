export const PILOT_STORAGE_KEY = "landedledger_pilot_submissions";

/**
 * Saves a pilot submission to browser localStorage only.
 * Strictly adheres to LandedLedger pilot form requirements.
 *
 * @param {Object} values
 * @param {string} values.fullName
 * @param {string} values.phoneNumber
 * @param {string} values.emailAddress
 * @param {string} values.organisationName
 * @returns {Object} The saved submission object
 */
export function savePilotSubmission(values) {
  const fullName = (values.fullName || "").trim();
  const phoneNumber = (values.phoneNumber || "").trim();
  const emailAddress = (values.emailAddress || "").trim();
  const organisationName = (values.organisationName || "").trim();

  if (!fullName || !phoneNumber || !emailAddress || !organisationName) {
    throw new Error("Please complete all required fields.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
    throw new Error("Please enter a valid email address.");
  }

  let raw = null;
  try {
    raw = window.localStorage.getItem(PILOT_STORAGE_KEY);
  } catch {
    throw new Error(
      "Your details could not be saved in this browser. Please check your browser storage settings and try again."
    );
  }

  let existing = [];

  if (raw !== null) {
    try {
      existing = JSON.parse(raw);
    } catch {
      throw new Error(
        "Existing saved data could not be read. Nothing has been overwritten."
      );
    }

    if (!Array.isArray(existing)) {
      throw new Error(
        "Existing saved data has an unexpected format. Nothing has been overwritten."
      );
    }
  }

  const submission = {
    id:
      globalThis.crypto?.randomUUID?.() ??
      `pilot-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    fullName,
    phoneNumber,
    emailAddress,
    organisationName,
    submissionDateTime: new Date().toISOString()
  };

  try {
    window.localStorage.setItem(
      PILOT_STORAGE_KEY,
      JSON.stringify([...existing, submission])
    );
  } catch {
    throw new Error(
      "Your details could not be saved in this browser. Please check your browser storage settings and try again."
    );
  }

  return submission;
}

/**
 * Formats an ISO-8601 string into a human-readable UK English date/time representation.
 * @param {string} isoString 
 * @returns {string}
 */
export function formatUKDateTime(isoString) {
  try {
    const d = new Date(isoString);
    return d.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  } catch {
    return isoString;
  }
}
