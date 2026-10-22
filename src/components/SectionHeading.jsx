export default function SectionHeading({ kicker, title, text, action }) {
  return <div className="section-heading"><div><span className="eyebrow">{kicker}</span><h2>{title}</h2></div>{text ? <p>{text}</p> : action}</div>;
}
