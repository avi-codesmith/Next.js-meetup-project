import MeetupDetailPage from "../../components/meetups/MeetupDetail";
import { MongoClient } from "mongodb";

export default function MeetupDetail(props) {
  const data = props.meetupDetail;
  return (
    <MeetupDetailPage
      image={data.image}
      title={data.title}
      id={data.id}
      address={data.address}
      description={data.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://avicodesmith_db_user:A4ebsIAF7pEUaLoa@cluster0.bvq1vp5.mongodb.net/meetups?retryWrites=true&w=majority&authSource=admin",
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupSlug: meetup._id.toString(),
      },
    })),
    // paths: [
    //   {
    //     params: {
    //       meetupSlug: "m1",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupSlug: "m2",
    //     },
    //   },
    // ],
  };
}

export async function getStaticProps(context) {
  const id = context.params.meetupSlug;

  return {
    props: {
      meetupDetail: {
        image:
          "https://images.pexels.com/photos/374059/pexels-photo-374059.jpeg?cs=srgb&dl=pexels-burst-374059.jpg&fm=jpg",
        title: "My first meetup",
        id: id,
        address: "Some city 123",
        description: "Very wonderful",
      },
    },
  };
}
