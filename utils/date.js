import fr from 'date-fns/locale/fr'
import { Timestamp } from '@firebase/firestore'
import { format, formatDistance, differenceInCalendarDays } from 'date-fns'

export const firebaseDateFormat = (date, formatString = 'PP') => {
  if (!date) return
  let convertedDate = date

  if (typeof date === 'number') {
    convertedDate = firebaseDateFormatWithoutFormat(
      Timestamp.fromDate(new Date(date))
    )
  } else {
    convertedDate = firebaseDateToTimestamp(date)
  }

  return format(convertedDate, formatString, { locale: fr })
}

export const timeSince = (firebaseDate) => {
  const date = firebaseDateToTimestamp(firebaseDate)
  return formatDistance(date, new Date(), { addSuffix: true, locale: fr })
}

export const timeBetween = (firebaseDateStart, firebaseDateEnd) => {
  const dateStart = firebaseDateToTimestamp(firebaseDateStart)
  const dateEnd = firebaseDateToTimestamp(firebaseDateEnd)
  return differenceInCalendarDays(dateEnd, dateStart)
}


const firebaseDateToTimestamp = (firebaseDate) => {
  let { _seconds, _nanoseconds } = firebaseDate

  if (!_seconds) {
    ; (_seconds = firebaseDate.seconds),
      (_nanoseconds = firebaseDate.nanoseconds)
  }

  const timestamp = new Timestamp(_seconds, _nanoseconds)
  return timestamp.toDate()
}

export const getOnlineDate = async () => {
  const data = await fetcher(
    'https://www.timeapi.io/api/Time/current/zone?timeZone=Africa/Conakry'
  )
  return data.date
}

export const getCurrentDate = () => {
  const date = new Date()
  return format(date, 'PP', { locale: fr })
}

export const getCurrentHour = () => {
  const date = new Date()
  return format(date, 'HH:MM', { locale: fr })
}

export const firebaseDateToJsDate = (firebaseDate) => {
  return new Date(firebaseDate.seconds * 1000)
}

export const firebaseDateFormatWithoutFormat = (date) =>
  firebaseDateToTimestamp(date)
