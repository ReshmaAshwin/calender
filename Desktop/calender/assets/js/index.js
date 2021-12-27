


let calendarShow=1;
let calendarMonth=1;
let tdDay=1;
let demo=1;
let demodup=2;


window.onload=function deep(){
  for(let i=1;i<=demo;i++){
    
    
    this[`add_${i}`]=()=>{
      
      
      
     
  
    document.getElementById("events_"+i).style.display="block";
    }
    }
}

function settingDate(date,day){
  date=new Date(date);
  date.setDate(day);
  date.setHours(23);
  return date;
}

function getDatesBetween(date1,date2){
  let range1= new Date(date1);
  let range2= new Date(date2);
  date1=settingDate(date1,31);
  date2=settingDate(date2,31);
  let temp;
  let dates=[];
  while(date1<=date2){
    if(date1.getDate() != 31){
      temp=settingDate(date1,0);
      if(temp>=range1 && temp<=range2)
        dates.push(temp);
        date1=settingDate(date1,31);
    }
      else{
        temp=new Date(date1);
        if(temp>=range1 && temp<=range2)
          dates.push(temp);
          date1.setMonth(date1.getMonth()+1);
      
      
      }
  }
let content=" ";
let weekDays=[
  {shortDay: "Sun", fullDay: "Sunday"},
  {shortDay: "Mon", fullDay: "Monday"},
  {shortDay: "Tue", fullDay: "Tueday"},
  {shortDay: "Wed", fullDay: "Wednesday"},
  {shortDay: "Thu", fullDay: "Thursday"},
  {shortDay: "Fri", fullDay: "Friday"},
  {shortDay: "Sat", fullDay: "Saturday"}
  
];
let firstDate;
let lastDate;
for(let i=0;i<dates.length;i++){
  lastDate=dates[i];
  firstDate= new Date(dates[i].getFullYear(),dates[i].getMonth(),1);
  
  content += "<div id='allItems'>";
  content += "<div id='modal_popup'>";
  content += "<div id='contain'>";
  content += "<label>Add Event</label>";
  content += "<input id='input' type='text'>";
  content += "<div id='description'></div>"
  content += "<button id='add' onclick='save()'>Save</button>"
  content += "</div>";
  content += "</div>";
  
  content +="<div id='months_"+(i+1)+"' class='allMonths'>";
  
  content += "<div class='calendarbtns'><span id='calendarprev' onclick='callprev()' disabled><i class='fas fa-angle-left'></i></span><span>"+firstDate.getFullYear()+"</span><span id='calendarnext' onclick='callnext()'><i class='fas fa-angle-right'></i></span></div>";
  content += "<div class='mont' id='jan_"+calendarMonth+"' onclick='jan()'>January</div> "  ;
  content += "<div class='mont' id='feb_"+calendarMonth+"'onclick='feb()'>February</div> "  ;
  content += "<div class='mont' id='mar_"+calendarMonth+"'onclick='mar()'>March</div> "  ;
  content += "<div class='mont' id='apr_"+calendarMonth+"'onclick='apr()'>April</div> "  ;
  content += "<div class='mont' id='may_"+calendarMonth+"'onclick='may()'>May</div> "  ;
  content += "<div class='mont' id='jun_"+calendarMonth+"'onclick='jun()'>June</div> "  ;
  content += "<div class='mont' id='jul_"+calendarMonth+"'onclick='jul()'>July</div> "  ;
  content += "<div class='mont' id='aug_"+calendarMonth+"'onclick='aug()'>August</div> "  ;
  content += "<div class='mont' id='sep_"+calendarMonth+"'onclick='sep()'>September</div> "  ;
  content += "<div class='mont' id='oct_"+calendarMonth+"'onclick='oct()'>October</div> "  ;
  content += "<div class='mont'id='nov_"+calendarMonth+"'onclick='nov()'>November</div> "  ;
  content += "<div class='mont'id='dec_"+calendarMonth+"'onclick='dec()'>December</div> "  ;
  content +="</div>";
  content +="<div id='calendarTable_"+(i+1)+"'class='calendarDiv'>";
  content += "<div id=mainHead>"
  content +="<table class='calendarTable'>";
  content +="<thead>";
  weekDays.map(item=>{
    content+="<th>"+ " "+item.shortDay+" " +"</th>";

  })

  content +="</thead>";
  
  content +="<tbody>";
  let j=1;
  let displayNum;
  content +="<tr>";
  if(j<=lastDate.getDate()){
    
 
    for(let k=0;k<7;k++){
      displayNum=j <10 ? "0" + j : j; 
      if(j==1){
        if(firstDate.toString().split(" ")[0]==weekDays[k].shortDay){
          content += "<td class='td' id='td_"+demo+"' onclick='add_"+demo+"()'>"+displayNum+"</td>";
          
          
          j++;
          
          console.log("events_"+demo)
          content  += "<div id='events_"+demo+"' class='allEvents'>Todays Events<div id='eve_"+demo+"'</div></div>";
          
          demo++; 
          
          
        }
        else{
          
        content += "<td></td>";
        }
      
    }
    else{
      content += "<td class='td' id='td_"+demo+"' onclick='add_"+demo+"()'>"+displayNum+"</td>";
          
          j++;
          content  += "<div id='events_"+demo+"' class='allEvents'>Todays Events<div id='eve_"+demo+"'</div></div>";
          demo++;
          
          
    }
    
  
    }
    
}
    if (j>lastDate.getDate()) {
      content += "<td></td>";
    }
  content +="</tr>";
  content +="<tr>";
  if(j<=lastDate.getDate()){
    
 
    for(let k=0;k<7;k++){
      displayNum=j <10 ? "0" + j : j; 
      
      content += "<td class='td' id='td_"+demo+"' onclick='add_"+demo+"()'>"+displayNum+"</td>";
      
          j++;
       
          content  += "<div id='events_"+demo+"' class='allEvents'>Todays Events<div id='eve_"+demo+"'</div></div>";
          demo++;
    }
    
  
    }
    

    if (j>lastDate.getDate()) {
      content += "<td></td>";
    }
  content +="</tr>";
  content +="<tr>";
  if(j<=lastDate.getDate()){
    
 
    for(let k=0;k<7;k++){
      displayNum=j <10 ? "0" + j : j; 
      
      content += "<td class='td' id='td_"+demo+"' onclick='add_"+demo+"()'>"+displayNum+"</td>";
    
          j++;
       
          content  += "<div id='events_"+demo+"' class='allEvents'>Todays Events<div id='eve_"+demo+"'</div></div>";
          demo++;
    }
    
  
    }
    

    if (j>lastDate.getDate()) {
      content += "<td></td>";
    }
  content +="</tr>";
  content +="<tr>";
  if(j<=lastDate.getDate()){
    
 
    for(let k=0;k<7;k++){
      displayNum=j <10 ? "0" + j : j; 
      
          content += "<td class='td' id='td_"+demo+"' onclick='add_"+demo+"()'>"+displayNum+"</td>";
          
          j++;
       
          content  += "<div id='events_"+demo+"' class='allEvents'>Todays Events<div id='eve_"+demo+"'</div></div>";
          demo++;
    }
    
  
    }
    

    if (j>lastDate.getDate()) {
      content += "<td></td>";
    }
  content +="</tr>";
  content +="<tr>";
  if(j<=lastDate.getDate()){
    
 
    for(let k=0;k<7;k++){
      displayNum=j <10 ? "0" + j : j; 
          if (j>lastDate.getDate()) {
            tdDay++;
      content += "<td></td>";}
      else{
        content += "<td class='td' id='td_"+demo+"' onclick='add_"+demo+"()'>"+displayNum+"</td>";
        
        j++;

        content  += "<div id='events_"+demo+"' class='allEvents'>Todays Events<div id='eve_"+demo+"'</div></div>";
        demo++;
      }
      
    }
    }
    
  
    
    

    
  content +="</tr>";
  content +="<tr>";
  if(j<=lastDate.getDate()){
    
 
    for(let k=0;k<7;k++){
      displayNum=j <10 ? "0" + j : j; 
          if (j>lastDate.getDate()) {
            tdDay++;
      content += "<td></td>";}
      else{
        content += "<td class='td' id='td_"+demo+"' onclick='add_"+demo+"()'>"+displayNum+"</td>";
        
          j++;

          content  += "<div id='events_"+demo+"' class='allEvents'>Todays Events<div id='eve_"+demo+"'</div></div>";
          demo++;
      }
      
    }
    }
    
  
    
    

    
  content +="</tr>";
  content +="</tbody>";

  content +="</table>";
  content +="</div>";

  

  content +="</div>"

 
  
  content +="</div>";
}
return content;
}
for(let i=0;i<=demo;i++){
  console.log(demo);
}

function callnext(){
   calendarShow += 12;
   
   
    let alltable=document.getElementsByClassName("calendarDiv");
  let allyear=document.getElementById("months_"+calendarShow);
  
  let allmonth=document.getElementsByClassName("allMonths");
  document.getElementById("calendarprev").disabled=false;
  
  
  if(calendarShow<= alltable.length){
  for(let i=0;i<alltable.length;i++){
    alltable[i].style.display="none";
    allmonth[i].style.display="none";
  }
  document.getElementById("calendarTable_"+calendarShow).style.display="block";
  document.getElementById("months_"+calendarShow).style.display="block";
  if(calendarShow==alltable.length){
    document.getElementById("calendarnext").disabled=true;
  }

  }
}
console.log(calendarShow);
function callprev(){
  calendarShow -= 12;
 
    let alltable=document.getElementsByClassName("calendarDiv");
  let allyear=document.getElementById("months_"+calendarShow);
  
  let allmonth=document.getElementsByClassName("allMonths");
  document.getElementById("calendarprev").disabled=false;
  
  
  if(calendarShow>=1){
  for(let i=0;i<alltable.length;i++){
    alltable[i].style.display="none";
    allmonth[i].style.display="none";
  }
  document.getElementById("calendarTable_"+calendarShow).style.display="block";
  document.getElementById("months_"+calendarShow).style.display="block";
  
  if(calendarShow==alltable.length){
    document.getElementById("calendarnext").disabled=true;
  }

  }
}
function jan(){
  let alltable=document.getElementsByClassName("calendarDiv");
    let allmonth=document.getElementsByClassName("allMonths");
  let specMonth=document.getElementsByClassName('mont');
  
  
  if(calendarShow<=alltable.length){
  for(let i=0;i<alltable.length;i++){
    alltable[i].style.display="none";
    allmonth[i].style.display="none";
  }
  document.getElementById("calendarTable_"+calendarShow).style.display="block";
  document.getElementById("months_"+calendarShow).style.display="block";
  
  

  }

}

function feb(){
  let alltable=document.getElementsByClassName("calendarDiv");
    let allmonth=document.getElementsByClassName("allMonths");
  let specMonth=document.getElementsByClassName('mont');
  
  
  if(calendarShow<=alltable.length){
  for(let i=0;i<alltable.length;i++){
    alltable[i].style.display="none";
    allmonth[i].style.display="none";
  }
  document.getElementById("calendarTable_"+(calendarShow+1)).style.display="block";
  document.getElementById("months_"+(calendarShow+1)).style.display="block";
  console.log(calendarShow);
  

  }

}
function mar(){
  let alltable=document.getElementsByClassName("calendarDiv");
    let allmonth=document.getElementsByClassName("allMonths");
  let specMonth=document.getElementsByClassName('mont');
  
  
  if(calendarShow<=alltable.length){
  for(let i=0;i<alltable.length;i++){
    alltable[i].style.display="none";
    allmonth[i].style.display="none";
  }
  document.getElementById("calendarTable_"+(calendarShow+2)).style.display="block";
  document.getElementById("months_"+(calendarShow+2)).style.display="block";
  console.log(calendarShow);
  

  }

}
function apr(){
  let alltable=document.getElementsByClassName("calendarDiv");
    let allmonth=document.getElementsByClassName("allMonths");
  let specMonth=document.getElementsByClassName('mont');
  
  
  if(calendarShow<=alltable.length){
  for(let i=0;i<alltable.length;i++){
    alltable[i].style.display="none";
    allmonth[i].style.display="none";
  }
  document.getElementById("calendarTable_"+(calendarShow+3)).style.display="block";
  document.getElementById("months_"+(calendarShow+3)).style.display="block";
  console.log(calendarShow);
  

  }

}
function may(){
  let alltable=document.getElementsByClassName("calendarDiv");
    let allmonth=document.getElementsByClassName("allMonths");
  let specMonth=document.getElementsByClassName('mont');
  
  
  if(calendarShow<=alltable.length){
  for(let i=0;i<alltable.length;i++){
    alltable[i].style.display="none";
    allmonth[i].style.display="none";
  }
  document.getElementById("calendarTable_"+(calendarShow+4)).style.display="block";
  document.getElementById("months_"+(calendarShow+4)).style.display="block";
  console.log(calendarShow);
  

  }

}
function jun(){
  let alltable=document.getElementsByClassName("calendarDiv");
    let allmonth=document.getElementsByClassName("allMonths");
  let specMonth=document.getElementsByClassName('mont');
  
  
  if(calendarShow<=alltable.length){
  for(let i=0;i<alltable.length;i++){
    alltable[i].style.display="none";
    allmonth[i].style.display="none";
  }
  document.getElementById("calendarTable_"+(calendarShow+5)).style.display="block";
  document.getElementById("months_"+(calendarShow+5)).style.display="block";
  console.log(calendarShow);
  

  }

}
function jul(){
  let alltable=document.getElementsByClassName("calendarDiv");
    let allmonth=document.getElementsByClassName("allMonths");
  let specMonth=document.getElementsByClassName('mont');
  
  
  if(calendarShow<=alltable.length){
  for(let i=0;i<alltable.length;i++){
    alltable[i].style.display="none";
    allmonth[i].style.display="none";
  }
  document.getElementById("calendarTable_"+(calendarShow+6)).style.display="block";
  document.getElementById("months_"+(calendarShow+6)).style.display="block";
  console.log(calendarShow);
  

  }

}
function aug(){
  let alltable=document.getElementsByClassName("calendarDiv");
    let allmonth=document.getElementsByClassName("allMonths");
  let specMonth=document.getElementsByClassName('mont');
  
  
  if(calendarShow<=alltable.length){
  for(let i=0;i<alltable.length;i++){
    alltable[i].style.display="none";
    allmonth[i].style.display="none";
  }
  document.getElementById("calendarTable_"+(calendarShow+7)).style.display="block";
  document.getElementById("months_"+(calendarShow+7)).style.display="block";
  console.log(calendarShow);
  

  }

}
function sep(){
  let alltable=document.getElementsByClassName("calendarDiv");
    let allmonth=document.getElementsByClassName("allMonths");
  let specMonth=document.getElementsByClassName('mont');
  
  
  if(calendarShow<=alltable.length){
  for(let i=0;i<alltable.length;i++){
    alltable[i].style.display="none";
    allmonth[i].style.display="none";
  }
  document.getElementById("calendarTable_"+(calendarShow+8)).style.display="block";
  document.getElementById("months_"+(calendarShow+8)).style.display="block";
  console.log(calendarShow);
  

  }

}
function oct(){
  let alltable=document.getElementsByClassName("calendarDiv");
    let allmonth=document.getElementsByClassName("allMonths");
  let specMonth=document.getElementsByClassName('mont');
  
  
  if(calendarShow<=alltable.length){
  for(let i=0;i<alltable.length;i++){
    alltable[i].style.display="none";
    allmonth[i].style.display="none";
  }
  document.getElementById("calendarTable_"+(calendarShow+9)).style.display="block";
  document.getElementById("months_"+(calendarShow+9)).style.display="block";
  console.log(calendarShow);
  

  }

}
function nov(){
  let alltable=document.getElementsByClassName("calendarDiv");
    let allmonth=document.getElementsByClassName("allMonths");
  let specMonth=document.getElementsByClassName('mont');
  
  
  if(calendarShow<=alltable.length){
  for(let i=0;i<alltable.length;i++){
    alltable[i].style.display="none";
    allmonth[i].style.display="none";
  }
  document.getElementById("calendarTable_"+(calendarShow+10)).style.display="block";
  document.getElementById("months_"+(calendarShow+10)).style.display="block";
  console.log(calendarShow);
  

  }

}
function dec(){
  let alltable=document.getElementsByClassName("calendarDiv");
    let allmonth=document.getElementsByClassName("allMonths");
  let specMonth=document.getElementsByClassName('mont');
  
  
  if(calendarShow<=alltable.length){
  for(let i=0;i<alltable.length;i++){
    alltable[i].style.display="none";
    allmonth[i].style.display="none";
  }
  document.getElementById("calendarTable_"+(calendarShow+11)).style.display="block";
  document.getElementById("months_"+(calendarShow+11)).style.display="block";
  console.log(calendarShow);
  

  }

}


let content = getDatesBetween("2022/01/01","2030/01/01");
document.getElementById("calendar").innerHTML=content;