import NewMeetupForm from "../component/meetups/NewMeetupForm";
import { useHistory} from 'react-router-dom'
function NewMeetuPage(){
    const history=useHistory();
    function addMeetupHandler(meetupData){
fetch('https://my-first-react-app-from-g-default-rtdb.firebaseio.com/meetups.json',
{
    method:'POST',
    body:JSON.stringify(meetupData),
    headers:{
        'content-Type':'application/json'
    }
}
).then(()=>
{
    history.replace("/");
});
    }
    return(<section>
        <h1>
            Add New Meetup
        </h1>
        <NewMeetupForm addMeetup={addMeetupHandler}/>
    </section>)
}
export default NewMeetuPage;