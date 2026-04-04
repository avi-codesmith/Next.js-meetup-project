import MeetupDetailPage from "../../components/meetups/MeetupDetail";

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
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupSlug: "m1",
        },
      },
      {
        params: {
          meetupSlug: "m2",
        },
      },
    ],
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
