import './Eventschedule.css';

function Eventschedule({event}) {
    const sortedevent=event.sort((a,b)=>new Date(a.date) - new Date(b.date));
  return (
    <div className="Eventschedule">
      {sortedevent.map((event, i) => (
        <div className="event">
          <h2>{event.title}</h2>
          <p>{event.date}</p>
          <p>{event.location}</p>
          <p>{event.description}</p>
        </div>
      ))};
    </div>
  );
}
export default Eventschedule;
