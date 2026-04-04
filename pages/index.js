import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://plus.unsplash.com/premium_photo-1681255760839-6581e2eb3e96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcGxhY2VzfGVufDB8fDB8fHww",
    address: "This is my address",
    description: "This is my first meetup as I mentioned before!",
  },

  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://plus.unsplash.com/premium_photo-1681255760839-6581e2eb3e96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcGxhY2VzfGVufDB8fDB8fHww",
    address: "This is my second address",
    description: "This is my second meetup as I mentioned before!",
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://plus.unsplash.com/premium_photo-1681255760839-6581e2eb3e96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcGxhY2VzfGVufDB8fDB8fHww",
    address: "This is my address",
    description: "This is my third meetup as I mentioned before!",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
