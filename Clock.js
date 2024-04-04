let dt=document.getElementById("dt");

   let dat=new Date();
   let day=dat.getDate();
   let mnth=dat.getMonth()+1;
   let yr=dat.getFullYear();

   dt.innerHTML=`${day}/${mnth}/${yr}`

   let dt1=new Date();

      let dy= (dt1.getDay());

      switch(dy)
      {
      case 0:document.write("SUNDAY");break;
      case 1:document.write("MONDAY");break;
      case 2:document.write("TUESDAY");break;
      case 3:document.write("WEDNESDAY");break;
      case 4:document.write("THURSDAY");break;
      case 5:document.write("FRIDAY");break;
      case 6:document.write("SATURDAY");break;
      }

      let tm=document.getElementById("tm");

      function displayTime() {

         let time = new Date();
         let hr=(time.getHours())%12;
         let mn=time.getMinutes();
         let sc=time.getSeconds();
         // let ms=time.getMilliseconds();

         tm.innerHTML=`${hr}:${mn}:${sc}`
      }

      setInterval(displayTime,100);

   