function jaraktempuh(waktuawal,waktuakhir){

    // s = v x t

    var waktuawal = '10:12:21'
    var waktuakhir = '12:00:00'

    var selisih = parseInt(waktuakhir) - parseInt(waktuawal);
    if (!isNaN(selisih)) {
       console.log(selisih)
    }



    var s = 8 * 120
    
    console.log(s) 



}

module.exports = jaraktempuh