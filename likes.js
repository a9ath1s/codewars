/* jshint esversion: 6 */
// function likes(names) {
//     switch (names.length) {
//         case 0: return 'no one likes this';
//         case 1: return `${names[0]} likes this`;
//         case 2: return `${names[0]} and ${names[1]} like this`;
//         case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//         case 4: return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
//     }
// }

function likes ( names ) {
    if ( names.length == 0 ) { res = 'no one likes this'; }
    else if ( names.length == 1 ) { res = `${ names[ 0 ] } likes this`; }
    else if ( names.length == 2 ) { res = `${ names[ 0 ] } and ${ names[ 1 ] } like this`; }
    else if ( names.length == 3 ) { res = `${ names[ 0 ] }, ${ names[ 1 ] } and ${ names[ 2 ] } like this`; }
    else { res = `${ names[ 0 ] }, ${ names[ 1 ] } and ${ names.length - 2 } others like this`; }

    return res;
}

console.log( likes( [] ) );
console.log( likes( [ 'Peter' ] ) );
console.log( likes( [ 'Jacob', 'Alex' ] ) );
console.log( likes( [ 'Max', 'John', 'Mark' ] ) );
console.log( likes( [ 'Alex', 'Jacob', 'Mark', 'Max' ] ) );