import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(customParseFormat)
dayjs.extend(relativeTime)

export const useFormat = () => {
  return {
    toTimestamp(value: string | undefined) {
      const date = dayjs(value, 'HH:mm:ss')
      return date.isValid() ? date.valueOf() : 0
    },
    toHours(seconds: number) {
      if (seconds === 0) {
        return 'Start the timer!'
      }
      return dayjs(seconds).format('HH:mm:ss')
    },
    isOver(formattedSeconds: string) {
      return formattedSeconds === '00:00:00'
    },
  }
}
