// global operational functions for controlling the format of dates //

// function to take date as iso string and return in yyyy-mm-dd format //
function formatDateToString(date) {
  let year = date.getUTCFullYear()
  let month = (date.getUTCMonth() + 1)
  let day = date.getUTCDate()
  return `${year}-${month}-${day}`
}

// function to take date as yyyy-mm-dd and return in iso format //
function formatStringToDate(date) {
  let res = new Date(date);
  return res;
}

// export module //
module.exports.formatDateToString = formatDateToString
module.exports.formatStringToDate = formatStringToDate