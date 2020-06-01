/* jshint esversion: 6 */

const transform = (s) => {
  var res = '';
  for (let i = 0; i < s.length; i++) {
    const elem = s[i];
    if (!res.includes(elem)) {
      var len = s.split(elem).length;
      if (len > 2) {
        res += `${elem}${len - 1}`;
      } else {
        res += `${elem}`;
      }
    }
  }
  return res;
};

console.log(transform('elevation'), 'e2lvation');
console.log(transform('transplantology'), 't2ra2n2spl2o2gy');
console.log(transform('economics'), 'ec2o2nmis');
console.log(transform('embarrassed'), 'e2mba2r2s2d');
console.log(transform('impressive'), 'i2mpre2s2v');