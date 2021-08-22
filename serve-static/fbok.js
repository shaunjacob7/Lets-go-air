function isCityValid(city){
    var validCities=['delhi','bombay','bangalore','kolkata','kochi'];
    var cityFound=false;
    validCities.forEach(element => {
        if (element == city){
            cityFound=true;
        }
    });
    //console.log(cityFound);
    return cityFound;
    
}


function validateCity(){
   var  orgCity=document.getElementById('tb_orgn_cty').value.toLowerCase();
   var destCity=document.getElementById('tb_dest_cty').value.toLowerCase();

   var bookingDate=document.getElementById('tb_destdate').value;
   var dateInput= new Date(bookingDate).toLocaleDateString();
   var currentDt=new Date(Date.now()).toLocaleDateString();
   console.log(dateInput);
  console.log(currentDt);

   var numPsngr=document.getElementById('sel_psngr').value;


   
   console.log(numPsngr);
   console.log(orgCity);
   console.log(destCity);
   document.getElementById('h6_errmsg').innerHTML="";
   if(dateInput<currentDt){
    console.log("past date detected!!");
    document.getElementById('h6_errmsg').innerHTML="past date entered!";
   }
  
   if(!isCityValid(orgCity)||!isCityValid(destCity)){
    document.getElementById('h6_errmsg').innerHTML="Invalid city" ; 
   }
    if (orgCity==destCity){
    document.getElementById('h6_errmsg').innerHTML="origin and destination should not be the same";
   }
    
   if(orgCity==""){
    document.getElementById('h6_errmsg').innerHTML="origin city cant be blank" ;
   }
   if(destCity==""){
    document.getElementById('h6_errmsg').innerHTML="destination city cant be blank" ;
   }
   //redirect logic
   window.location = 'http://localhost:3000/flight_qry?src=' + orgCity + '&dest=' + destCity+'&date='+dateInput+'&npsgr='+numPsngr;
  // window.location = 'http://localhost:3000/details';
}
   
