function londonCityHacker ( journey ) {
  count = 0;
  addnextnum = true;
  journey.forEach( function ( item, i, journey ) {
    if ( typeof item == 'string' ) { count += 2.40; addnextnum = true; }
    if ( typeof item == 'number' && addnextnum ) { count += 1.5; addnextnum = false; }
    else { addnextnum = true; }
  } );
  console.log( 'count: £' + count.toFixed( 2 ) );
  return '£' + count.toFixed( 2 );
}

console.clear();

londonCityHacker( [ 12, 'Central', 'Circle', 21 ] ); // , "£7.80");
londonCityHacker( [ 'Piccidilly', 56 ] ); // , "£3.90");
londonCityHacker( [ 'Northern', 'Central', 'Circle' ] ); //, "£7.20");
londonCityHacker( [ 'Piccidilly', 56, 93, 243 ] ); // , "£5.40");
londonCityHacker( [ 386, 56, 1, 876 ] ); // , "£3.00");
londonCityHacker( [] ); // , "£0.00");