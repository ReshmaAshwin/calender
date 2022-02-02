import React from 'react';
import { Header } from './Header/Header';
import { Day } from './Day/Day';
import {useState,useEffect} from 'react';
import { NewEventModal } from './NewEventModal/NewEventModal';
import { DeleteEventModal } from './DeleteEventModel/DeleteEventModel';
import './style.css';
 
function App() {
  const [nav, setNav] = useState(0);
  const [days, setDays] = useState([]);
  const [dateDisplay, setDateDisplay] = useState('');
  const [clicked, setClicked] = useState<any>();
  const event = localStorage.getItem('events');
  const [events, setEvents] = useState(event !== null ? JSON.parse(event) : []);
  const eventForDate=(d:string) => events.find((e: { date: any; }) => e.date === d)
  
    useEffect(() => {
      localStorage.setItem('events', JSON.stringify(events));
    }, [events]);
     useEffect(() => {
        const weekDays=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        const dt=new Date();
        if(nav!==0) {
          dt.setMonth(new Date().getMonth()+nav)
      }
const year = dt.getFullYear();
const month = dt.getMonth();
const day = dt.getDate();//31
const firstDayOfMonth = new Date(year,month,1);
const daysInMonth = new Date(year,month+1,0).getDate();
setDateDisplay(`${dt.toLocaleDateString('en-us',{month:'long'})} ${year}`);
const paddingDays = weekDays.indexOf(firstDayOfMonth.toString().split(" ")[0]);
const dayArr : any = [];
for(let i = 1; i <= paddingDays + daysInMonth; i++){
  const dayString = `${month + 1}/${i - paddingDays} / ${year}`;
    if (i > paddingDays) {
    dayArr.push({
      value: i - paddingDays,
      event: eventForDate(dayString),
      isCurrentDay: i - paddingDays === day && nav === 0,
      date: dayString,
    })
  }
  else {
    dayArr.push({
      value: 'padding',
      event: null,
      isCurrentDay: false,
      date: '',
    })
  }
}
setDays(dayArr);
}, [events,nav]) ;

return (
  <div>
    <div id = 'container'>
          <Header 
          dateDisplay = {dateDisplay}
          onNext = {() => setNav(nav + 1)}
          onBack = {() => setNav(nav - 1)}
          />   
          <div id = 'weekdays'>
            <div> Sun </div>
            <div> Mon </div>
            <div> Tue </div>
            <div> Wed </div>
            <div> Thu </div>
            <div> Fri </div>
            <div> Sat </div>
           </div>  
           <div id = 'calendar'>
             {days.map((d:any,index) => (
               <Day 
               key = {index}
               day = {d}
               onClick = {() => {
                 if(d.value !== 'padding') {
                   setClicked(d.date);
                 }
               }} />
          ))
             }
             </div>     
      </div>
    {
        clicked && !eventForDate(clicked) &&
        <NewEventModal
          onClose = {() => setClicked(null)}
          onSave = {(title: any) => {
            setEvents([ ...events, { title, date: clicked }]);
            setClicked(null);
          }}
        />
    }
    
    {
        clicked && eventForDate(clicked) &&
        <DeleteEventModal 
          eventText = {eventForDate(clicked).title}
          onClose = {() => setClicked(null)}
          onDelete = {() => {
            setEvents(events.filter((e: { date: any; }) => e.date !== clicked));
            setClicked(null);
          }}
        />
      }
    </div>
  );
}
export{App}; 