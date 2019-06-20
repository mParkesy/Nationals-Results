var a = ['','One','Two','Three','Four', 'Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
var b = ['', '', 'Twenty','Thirty','Forty','Fifty', 'Sixty','Seventy','Eighty','Ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + a[n[5][1]]) : '';
    return str;
}

let accordions = [
        {
            raceName : "Test 1",
            entries : "race1entries.html",
            results : "race1results.html"
        },
        {
            raceName : "Test 2",
            entries : "race1entries.html",
            results : "race1results.html"
        },
        {
            raceName: "Test 3",
            entries : "race1entries.html",
            results : "race1results.html"
        },
    {
        raceName: "Test 4",
        entries : "race1entries.html",
        results : "race1results.html"
    }
]

let card = "";

for(let i = 0; i < accordions.length; i++){
    let num = inWords(i+1);
    card = '                    <div class="card">\n' +
        '                        <div class="card-header" id="heading'+num+'">\n' +
        '                            <h5 class="mb-0">\n' +
        '                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse'+num+'" aria-expanded="false" aria-controls="collapse'+num+'">\n' +
        '                                    '+accordions[i].raceName+'\n' +
        '                                </button>\n' +
        '                            </h5>\n' +
            '                        </div>\n' +
            '                        <div id="collapse'+num+'" class="collapse" aria-labelledby="heading'+num+'" data-parent="#accordionExample">\n' +
            '                               <div class="card-body text-dark p-0">\n' +
            '                            <ul class="list-group">\n' +
            '                              <li class="list-group-item">' +
            '                                   <a class="race-details" href="'+accordions[i].entries+'">Entries</a>' +
            '                              </li>\n' +
            '                              <li class="list-group-item">' +
            '                                   <a class="race-details" href="'+accordions[i].results+'">Results</a>' +
            '                              </li>\n' +
            '                           </ul>' +
        '                            </div>\n' +
        '                         </div>\n' +
        '                       </div>';

    $('.accordion').append(card);
}
