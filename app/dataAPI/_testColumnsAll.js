// relevant keys to extract from GETC query serialsied JSON objects .COLUMNS property
var keys = ["SCOID","DAYNO","SEQUENCENO","TYPE","PROMINENCE","CONTENT","CONTENT_TR","PREREQID","CATTITLE","RAID","AUTOID","STATUS","SCOTYPE","LOCATION","TITLE","TITLE_TR","LOCATION_TR","CSS_WIDTH","CSS_VALIGN","CSS_HIDE","CSS_BGCOLOR","CSS_BORDER","CSS_BORDERCOLOR","CSS_HALIGN","CSS_MARGINLEFT","CSS_MARGINRIGHT","CSS_MARGINTOP","CSS_MARGINBOTTOM","CSS_MAXWIDTH","CSS_DELAY","CSS_ENTRY"];
//create an object with keys from 'keys' array
module.exports = keys.reduce(function(acc,c,i){
  acc[c.toLowerCase()] = i;
  return acc;
}, {});
