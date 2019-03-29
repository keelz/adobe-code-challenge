import { Lead, LEAD_UNIQUE_KEY } from '../model/Lead';

export const uniqueLeadReducer = (key: LEAD_UNIQUE_KEY, caseInsensitive: boolean) =>
  (accumulator: Lead[], nextLead: Lead) => {
    // determine if the accumulator contains a unique key match
    const matchIndex = accumulator.findIndex((lead) => {
      const currentUniqueKey = caseInsensitive ? lead[key].toLowerCase() : lead[key];
      const nextUniqueKey = caseInsensitive ? nextLead[key].toLowerCase() : nextLead[key];
      return currentUniqueKey === nextUniqueKey;
    });

    // if match not found, append the next record and return.
    if (matchIndex < 0) return [...accumulator, nextLead];

    // define current record and next record entry dates.
    const currentEntryDate = new Date(accumulator[matchIndex].entryDate).getTime();
    const nextEntryDate = new Date(nextLead.entryDate).getTime();

    // compose accumulator and return
    // entry date greater than or equal is preferred per AC
    return currentEntryDate <= nextEntryDate
      ? [...accumulator.slice(0, matchIndex), nextLead, ...accumulator.slice(matchIndex + 1, accumulator.length)]
      : accumulator;
  };
