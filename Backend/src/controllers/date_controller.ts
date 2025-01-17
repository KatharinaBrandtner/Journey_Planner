//Datumswerte das korrekte Format DD.MM.YYYY hatte davor ja input feld date aber da gabs dann bei mongodb diese dumme formatierung und das hat mich zu viele nerven gekostet tbh
export default function validateTripData(data: {startDate: string; endDate: string; numbercityone?: number; numbercitytwo?: number; numbercitythree?: number;}): string[] {
    const errors: string[] = [];
    const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

    // Datum prüfen
    if (!dateRegex.test(data.startDate)) {errors.push('Start date must be in the format DD.MM.YYYY.');}
    if (!dateRegex.test(data.endDate)) {errors.push('End date must be in the format DD.MM.YYYY.');}

    const [startDay, startMonth, startYear] = data.startDate.split('.').map(Number);
    const [endDay, endMonth, endYear] = data.endDate.split('.').map(Number);

    if (startDay < 1 || startDay > 31) {errors.push('Start date day must be between 1 and 31.');}
    if (startMonth < 1 || startMonth > 12) {errors.push('Start date month must be between 1 and 12.');}
    if (endDay < 1 || endDay > 31) {errors.push('End date day must be between 1 and 31.');}
    if (endMonth < 1 || endMonth > 12) {errors.push('End date month must be between 1 and 12.');}

    const start = new Date(startYear, startMonth - 1, startDay);
    const end = new Date(endYear, endMonth - 1, endDay);

    if (start > end) {errors.push('Start date must be before the end date.');}

    // Länge der Aufenthalte die Tage abdeckt
    const totalDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24) + 1;
    const totalStay = Number(data.numbercityone || 0) + Number(data.numbercitytwo || 0) + Number(data.numbercitythree || 0);

    // Prüfen, ob Eingaben gültige Zahlen sind
    if (isNaN(Number(data.numbercityone))) {errors.push('Length of stay for City One must be a valid number.');}
    if (isNaN(Number(data.numbercitytwo))) {errors.push('Length of stay for City Two must be a valid number.');}
    if (isNaN(Number(data.numbercitythree))) {errors.push('Length of stay for City Three must be a valid number.');}

    // Negative Zahlen verhindern
    if (Number(data.numbercityone || 0) < 0) {errors.push('Length of stay for City One cannot be negative.');}
    if (Number(data.numbercitytwo || 0) < 0) {errors.push('Length of stay for City Two cannot be negative.');}
    if (Number(data.numbercitythree || 0) < 0) {errors.push('Length of stay for City Three cannot be negative.');}

    // Gesamtdauer überprüfen
    if (totalStay > totalDays) {
        errors.push(`Total length of stay (${totalStay} days) exceeds the trip duration (${totalDays} days).`);
    }


    // Keine negativen Zahlen erlauben
    if ((data.numbercityone || 0) < 0) {errors.push('Length of stay for City One cannot be negative.');}
    if ((data.numbercitytwo || 0) < 0) {errors.push('Length of stay for City Two cannot be negative.');}
    if ((data.numbercitythree || 0) < 0) {errors.push('Length of stay for City Three cannot be negative.');}

    return errors;
}
