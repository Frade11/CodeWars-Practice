//You Can't Code Under Pressure #2
function Counter() {
  let count = 0;

  this.check = function() {
    return count;
  };

  this.increment = function() {
    count++;
  };
}
