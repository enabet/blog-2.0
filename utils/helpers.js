/*
 * Helpers by Dan Abramov's Overreacted.io
 * https://github.com/gaearon/overreacted.io/blob/master/src/utils/helpers.js
 */

export function formatReadingTime (minutes) {
  let cups = Math.round(minutes / 5)
  return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`
}

export function formatPostDate (date) {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date
  }

  date = new Date(date)
  const args = [
    'en-EN',
    { day: 'numeric', month: 'long', year: 'numeric' }
  ].filter(Boolean)
  return date.toLocaleDateString(...args)
}

export function debounce (func, wait, immediate) {
  var timeout
  console.log('123456')
  return function () {
    console.log('testtttt')
    var context = this; var args = arguments
    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
};
