const fclData = [

['LW16685',  // All dependency data to be input here.  Currently needs to be in multiples of 12 for bootstrap layout.
'??',
'??'],

['UL19294',
'??',
'??',
'??'],

['UL14470',
'??',
'??',
'??'],

['LK81716',
'??',
'??',
'??'],

['UL19316',
'??',
'??',
'??']
,

['UL19321',
'??',
'??',
'??']
,

['UL19321',
'??',
'??',
'??']
,

['OLK68847',
'??',
'??',
'??']
,
['UL19294',
'??',
'??',
'??'],

['UL14470',
'??',
'??',
'??'],

['LK81716',
'??',
'??',
'??'],

['UL19316',
'??',
'??',
'??']
,

['UL19321',
'??',
'??',
'??']
,

['UL19321',
'??',
'??',
'??']
,

['OLK68847',
'??',
'??',
'??'],
['UL19294',
'??',
'??',
'??'],

['UL14470',
'??',
'??',
'??'],

['LK81716',
'??',
'??',
'??'],

['UL19316',
'??',
'??',
'??']
,

['UL19321',
'??',
'??',
'??']
,

['UL19321',
'??',
'??',
'??']
,

['OLK68847',
'??',
'??',
'??']

];

let i = 0;
let container = document.querySelector('.container-fluid'); // variable for innerHTML workings below


for (i=0; i < fclData.length; i++) {  // loops through each item in the fclData array, and creates a new div with class row for each

container.innerHTML += '<div class="row'+' rw'+i+' text-center"></div>';  // assign a new class rwi (rw0, rw1, rw2) to each row

for (j=0; j < fclData[i].length; j++) {  // loops through each of the subarray items and creates a bootstrap column for each

let row = document.querySelector('.rw'+i);
let colQty = 12 / fclData[i].length;
row.innerHTML += '<div class="col-md-' + colQty  + '"><div class="data">' + fclData[i][j] + '</div></div>' ;
}
}
