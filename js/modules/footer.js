/** Keep the copyright year current without manual edits. */
export function setCurrentYear() {
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
}
