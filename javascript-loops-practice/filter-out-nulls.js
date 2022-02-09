/* exported filterOutNulls */

function filterOutNulls(values) {
  var filterNulls = [];

  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filterNulls.push(values[i]);
    }
  }
  return filterNulls;
}
