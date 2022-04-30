/**
 * sorts pages array according to page number
 * @param {Array} pages
 */
function sortPages(pages) {
  pages.sort((a, b) => a.match(/\d+/)[0] - b.match(/\d+/)[0]);
}
module.exports = sortPages;
