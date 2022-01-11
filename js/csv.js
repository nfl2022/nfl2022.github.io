const csv = "1,2,3,4,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,mvp,mvp,mvp,mvp,mvp,mvp,"



var REALscores = [
	[['LV','CIN'], 0, 0],
	[['BUF','NE'], 0, 0],
	[['TB','PHI'], 0, 0],
	[['DAL','SF'], 0, 0],
	[['KC','PIT'], 0, 0],
	[['LAR','ARZ'], 0, 0],

	[['GB','/'], 0, 0],
	[['/','/'], 0, 0],
	[['TEN','/'], 0, 0],
	[['/','/'], 0, 0],

	[['/','/'], 0, 0],
	[['/','/'], 0, 0],

	[['/','/'], 0, 0, ""]
];
///////////////////////////////////////////

var split = csv.split(',');
var andresCSV = split.slice(0,26);
var apCSV = split.slice(26,52);
var fabianCSV = split.slice(52,78);
var diegoCSV = split.slice(78,104);
var mamiCSV = split.slice(104,130);
var papiCSV = split.slice(130,156);
var mvpCSV = split.slice(156,162);

var CSVs = [andresCSV, apCSV,fabianCSV,diegoCSV,mamiCSV,papiCSV,mvpCSV];

// [ game(for easier inputing), score dif(+Home win, -Away win), total pts(tiebreaker) ]
var scores_andres = [['LV/CIN', 100, 1000],['BUF/NE', 100, 1000],['TB/PHI', 100, 1000],['DAL/SF', 100, 1000],['KC/PIT', 100, 1000],['LAR/ARZ', 100, 1000],['GB/', 100, 1000],['/', 100, 1000],['TEN/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000, ""],];
var scores_ap = [['LV/CIN', 100, 1000],['BUF/NE', 100, 1000],['TB/PHI', 100, 1000],['DAL/SF', 100, 1000],['KC/PIT', 100, 1000],['LAR/ARZ', 100, 1000],['GB/', 100, 1000],['/', 100, 1000],['TEN/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000, ""],];
var scores_fabian = [['LV/CIN', 100, 1000],['BUF/NE', 100, 1000],['TB/PHI', 100, 1000],['DAL/SF', 100, 1000],['KC/PIT', 100, 1000],['LAR/ARZ', 100, 1000],['GB/', 100, 1000],['/', 100, 1000],['TEN/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000, ""],];
var scores_diego = [['LV/CIN', 100, 1000],['BUF/NE', 100, 1000],['TB/PHI', 100, 1000],['DAL/SF', 100, 1000],['KC/PIT', 100, 1000],['LAR/ARZ', 100, 1000],['GB/', 100, 1000],['/', 100, 1000],['TEN/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000, ""],];
var scores_mami = [['LV/CIN', 100, 1000],['BUF/NE', 100, 1000],['TB/PHI', 100, 1000],['DAL/SF', 100, 1000],['KC/PIT', 100, 1000],['LAR/ARZ', 100, 1000],['GB/', 100, 1000],['/', 100, 1000],['TEN/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000, ""],];
var scores_papi = [['LV/CIN', 100, 1000],['BUF/NE', 100, 1000],['TB/PHI', 100, 1000],['DAL/SF', 100, 1000],['KC/PIT', 100, 1000],['LAR/ARZ', 100, 1000],['GB/', 100, 1000],['/', 100, 1000],['TEN/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000, ""],];

var scores_arr = [scores_andres,scores_ap,scores_fabian,scores_diego,scores_mami,scores_papi];
for (i=0; i < 6; i++) {
    let CSV_data = CSVs[i];
    for (j=0; j < 26; j+=2) {
        let home = parseInt(CSV_data[j]);
        let away = parseInt(CSV_data[j+1]);
        let winner = home - away;
        let summ = home + away;
        if (winner != 0) {
            scores_arr[i][j/2][1] = winner; 
            scores_arr[i][j/2][2] = summ; 
            if (j == 24) {
                scores_arr[i][j/2][3] = mvpCSV[i]; 
            }
        }
    }
}