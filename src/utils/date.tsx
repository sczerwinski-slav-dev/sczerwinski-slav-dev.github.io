import moment from 'moment'

const dateFormat = 'D MMMM YYYY'

/**
 * Format a date using English date format: "1 January 2025".
 *
 * @param {string} date Date formated using ISO standard.
 *
 * @returns {string} The same date, but formatted using English date format.
 */
export function formatDate(date: string): string {
  return moment(date).format(dateFormat)
}
