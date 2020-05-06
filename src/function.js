const jaraktempuh = () => {

    let speed       = 6
    let jaraktempuh = 0
    let second      = 0

   awal = new Date('2020-01-01T10:12:21').getTime()
   akhir = new Date('2020-01-01T12:00:00').getTime()
  
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
   console.log(jaraktempuh)
 }
   
return jaraktempuh

}       
   
module.exports = jaraktempuh
