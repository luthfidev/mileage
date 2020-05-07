const jaraktempuh = (start, end) => {

    let speed       = 6
    let jaraktempuh = 0
    let second      = 0
   // let awalWaktu        = '10:12:21'

   var awal = new Date('2020-01-01T'+start).getTime()
   var akhir = new Date('2020-01-01T'+end).getTime()
  
   /* console.log(awal) */
   let diff = (akhir-awal) / 1000


   while(diff !== 0 ){
       diff--
       second++ //nilai second ini akan menjadi 1

       let timeInminutes = second / 60 //untuk mencari menit maka 1 / 60

       if(timeInminutes === 5){
           speed+=2
          
       }
       if((timeInminutes-5) % 10 === 0 ){ 
           if(timeInminutes !== 5){
            speed++
           
           }   
       }
   jaraktempuh+=speed
   
 }
   
return jaraktempuh

}       
   
module.exports = jaraktempuh
