import MeetupDetailPage from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

export default function MeetupDetail(props) {
  const data = props.meetupDetail;
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.title} />
      </Head>
      <MeetupDetailPage
        image={data.image}
        title={data.title}
        id={data.id}
        address={data.address}
        description={data.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://avicodesmith_db_user:A4ebsIAF7pEUaLoa@cluster0.bvq1vp5.mongodb.net/meetups?retryWrites=true&w=majority&authSource=admin",
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupSlug: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const id = context.params.meetupSlug;

  const client = await MongoClient.connect(
    "mongodb+srv://avicodesmith_db_user:A4ebsIAF7pEUaLoa@cluster0.bvq1vp5.mongodb.net/meetups?retryWrites=true&w=majority&authSource=admin",
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(id),
  });

  client.close();

  return {
    props: {
      meetupDetail: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}
