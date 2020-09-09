class TimeHelper {
  /**
   * Converts a date/time string into a simple date string
   */
  static getDate(dateTime: string): string {
    return dateTime.substr(0, 10).split('-').reverse().join('.');
  }
}

export default TimeHelper;
