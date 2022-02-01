import MeetupList from "../component/meetups/MeetupList";
import { useState, useEffect } from 'react'


function MeetupPage() {

  const [isLoading, setIsloading] = useState(true);
  const [loadedeMeetups,setLoadedMeetups]=useState([]);

  useEffect(()=>{
    setIsloading(true);
    fetch('https://my-first-react-app-from-g-default-rtdb.firebaseio.com/meetups.json').then(
      response => {
        return response.json();
      }
    ).then(data => {
      const meetups=[];
      for (const key in data){
        const meetup={
          id:key,
          ...data[key]
        };
        meetups.push(meetup);
      }
      setIsloading(false);
      setLoadedMeetups(meetups);
    });//this code execute under certain condition, not always run.
  }, [])

  
  if(isLoading){
    return <section>
      <p>Loading...</p>
    </section>
  }
  return (
    < section >
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedeMeetups}/>
    </ section>
  );
}
export default MeetupPage;
