import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  console.log('............in components/date.js...........', dateString, date);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
