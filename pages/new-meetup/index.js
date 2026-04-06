import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

export default function NewMeetup() {
  const router = useRouter();
  async function newMeetupHandler(enteredValue) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredValue),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    router.push("/");
  }
  return (
    <>
      <Head>
        <title>Add new meetup</title>
        <meta name="description" content="Add meetups to this world" />
      </Head>
      <NewMeetupForm onAddMeetup={newMeetupHandler} />
    </>
  );
}
