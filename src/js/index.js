function bySel(x) { return document.querySelector(x) };
function byId(x) { return document.getElementById(x) };

module.exports = { bySel: bySel, byElementId: byId };