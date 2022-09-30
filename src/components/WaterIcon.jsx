import { Image } from "react-bootstrap";

export default function WaterIcon(props) {
  const { src, borderColor } = { ...props };
  return (
    <Image
      src={src}
      roundedCircle={true}
      style={{
        width: "3rem",
        position: "absolute",
        marginTop: "0.5rem",
        marginLeft: "0.5rem",
        backgroundColor: "white",
        border: "2px solid",
        borderColor: borderColor,
      }}
    />
  );
}
