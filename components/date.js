import { isValid, parseISO, format } from 'date-fns'

export default function Date({ dateString, dateFormat =  'LLLL	d, yyyy'}) {
  if (!isValid(parseISO(dateString))) {
    return 'Current'
  }
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, dateFormat)}</time>
}
