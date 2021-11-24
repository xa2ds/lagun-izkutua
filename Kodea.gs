
function taulaPrestatu() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName("banaketa");
  var header = [["Nork","telefonoa","email","Nori","irudia"]]
var range = sheet.getRange(1,1,1,5);
range.setValues(header);
}

function banaketa(nortzuk) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var taulaJatorria = spreadsheet.getSheetByName("aukeraketa");
  var taulaHelburua = spreadsheet.getSheetByName("banaketa");
  /*luzeerak egokitu behar dira automatikoki*/
  var izenak=taulaJatorria.getRange(2,2,10,10);
  clrdisplay();
  taulaPrestatu();
  /*Lehenengo pertsonaren datuak bete
  luzeeerak egokitu automatikoki
  */
izenak.copyValuesToRange(taulaHelburua, 1,2, 2, 10);
/*bigarren pertsonen array bat eta bukle bat egokitzeko
baldintzak -> bere buruari ez emotea, posible izatea */


}

function bidalketa() {

}

/* Aurreko banaketa borratzeko, agian hobe da mantentzea? Horretarako banaketa bakoitzeko spreadsheet berria sortu beharko litzateke eta kontuz ibili izenen errepikapenarekin, agian data gehituz. */
function clrdisplay() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName("banaketa");
  sheet.clear();
}