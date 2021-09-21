import moment from "moment";

export function getHashValues(hash) {
  return Object.values(hash) // needs modern browser
}

export function hashById(array) {
  let hash = {}

  for (let item of array) {
    hash[item.id] = item
  }

  return hash
}


const FULL_CALENDAR_FORMAT = 'yyyy-MM-DDTHH:mm:ssZ';
const DAY_FORMAT = 'MMMM Do YYYY';
const TIME_FORMAT = 'h:mm a';


export const formatPromptMessage = (startStr, endStr) => {
  const start = moment(startStr, FULL_CALENDAR_FORMAT);
  const end = moment(endStr, FULL_CALENDAR_FORMAT);
  return `Your want to create a meeting on ${start.format('MMMM Do YYYY')} between ${start.format(TIME_FORMAT)} and ${end.format(TIME_FORMAT)}`
};