function rgb(r, g, b) {
  r = r>255?'FF':r<0?'00':r.toString(16).length==1?'0'+r.toString(16):r.toString(16);
  g = g>255?'FF':g<0?'00':g.toString(16).length==1?'0'+g.toString(16):g.toString(16);
  b = b>255?'FF':b<0?'00':b.toString(16).length==1?'0'+b.toString(16):b.toString(16);

  return (r+g+b).toUpperCase();
}

console.log(rgb(40,244,2), '000000');
console.log(rgb(0, 0, -20), '000000');
console.log(rgb(300,255,255), 'FFFFFF');
console.log(rgb(173,255,47), 'ADFF2F');