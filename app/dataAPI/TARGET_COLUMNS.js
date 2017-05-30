// relevant keys to extract from GETC query serialsied JSON objects .COLUMNS property
var keys = ['scoid','sequenceno','type','prominence','content','autoid','status','css_width','css_valign','css_hide','css_halign','css_marginleft','css_marginright','css_margintop','css_marginbottom','css_maxwidth','css_delay','css_entry'];

//create an object with keys from 'keys' array
module.exports = keys.reduce(function(acc,c,i){
  acc[c] = null;
  return acc;
}, {});
