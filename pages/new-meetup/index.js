import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
  function newMeetuphandler(enterdValue) {
    console.log(enterdValue);
  }
  return <NewMeetupForm onAddMeetup={newMeetuphandler} />;
}
