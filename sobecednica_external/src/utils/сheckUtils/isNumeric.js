export const isNumeric = (num) => (typeof (num) === 'number' || typeof (num) === "string" && num.trim() !== '') && !isNaN(num);

