import classes from "./meetup-detail.module.css";

export default function MeetupDetailPage(props) {
  return (
    <section className={classes.detail}>
      <img alt={props.title} src={props.image} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}
