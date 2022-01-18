const csv = '25,21,14,17,30,15,25,27,28,10,21,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,37,27,36,40,30,35,26,38,17,29,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,20,34,20,20,23,34,27,38,20,24,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,20,16,9,20,16,31,27,38,17,20,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,38,19,21,26,35,25,22,42,15,18,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,31,20,17,34,17,29,24,42,24,30,27,0,0,0,0,0,0,0,0,0,0,0,0,0,0,mvp,mvp,mvp,mvp,mvp,mvp';

var rounds_so_far = 1; // def=1,after wc-2, after div-3, after conf-4, after sb-5, FOR POINT KEEPING
var ALIVEtms = [ 'GB','TB','LAR','ARZ','SF','TEN','KC','BUF','CIN'];
var REAL = [
	[ // DIVISIONAL TEAMS
		'TB',
		'SF',
		'LAR/ARZ',
		'KC',
		'BUF',
		'CIN'
	],
	[ // CONFERENCE TEAMS
		'GB/LAR/ARZ/SF/PHI',
		'TB/LAR/ARZ/SF',
		'TEN/CIN/PIT',
		'KC/BUF/CIN'
	], 
	['/', '/'],
	['/'] // uncomment superBowlPoints in script.js
];
var REALscores = [
	[['CIN','LV'], 26, 19],
	[['BUF','NE'], 47, 17],
	[['TB','PHI'], 31, 15],
	[['DAL','SF'], 17, 23],
	[['KC','PIT'], 42, 21],
	[['LAR','ARZ'], 34, 11],

	[['GB','SF'], 0, 0],
	[['TB','LAR'], 0, 0],
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
var scores_andres = [['CIN/LV', 100, 1000],['BUF/NE', 100, 1000],['TB/PHI', 100, 1000],['DAL/SF', 100, 1000],['KC/PIT', 100, 1000],['LAR/ARZ', 100, 1000],['GB/', 100, 1000],['/', 100, 1000],['TEN/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000, ""],];
var scores_ap = [['CIN/LV', 100, 1000],['BUF/NE', 100, 1000],['TB/PHI', 100, 1000],['DAL/SF', 100, 1000],['KC/PIT', 100, 1000],['LAR/ARZ', 100, 1000],['GB/', 100, 1000],['/', 100, 1000],['TEN/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000, ""],];
var scores_fabian = [['CIN/LV', 100, 1000],['BUF/NE', 100, 1000],['TB/PHI', 100, 1000],['DAL/SF', 100, 1000],['KC/PIT', 100, 1000],['LAR/ARZ', 100, 1000],['GB/', 100, 1000],['/', 100, 1000],['TEN/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000, ""],];
var scores_diego = [['CIN/LV', 100, 1000],['BUF/NE', 100, 1000],['TB/PHI', 100, 1000],['DAL/SF', 100, 1000],['KC/PIT', 100, 1000],['LAR/ARZ', 100, 1000],['GB/', 100, 1000],['/', 100, 1000],['TEN/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000, ""],];
var scores_mami = [['CIN/LV', 100, 1000],['BUF/NE', 100, 1000],['TB/PHI', 100, 1000],['DAL/SF', 100, 1000],['KC/PIT', 100, 1000],['LAR/ARZ', 100, 1000],['GB/', 100, 1000],['/', 100, 1000],['TEN/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000, ""],];
var scores_papi = [['CIN/LV', 100, 1000],['BUF/NE', 100, 1000],['TB/PHI', 100, 1000],['DAL/SF', 100, 1000],['KC/PIT', 100, 1000],['LAR/ARZ', 100, 1000],['GB/', 100, 1000],['/', 100, 1000],['TEN/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000],['/', 100, 1000, ""],];

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
