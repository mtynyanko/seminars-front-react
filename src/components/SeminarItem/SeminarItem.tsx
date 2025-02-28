import { useState } from "react";

interface ItemProps {
  title: string;
  description: string;
  photo: string;
  date: string;
  time: string;
}

const SeminarItem = ({
  title,
  description,
  photo,
  date,
  time,
}: ItemProps) => {
  const [imgSrc, setImgSrc] = useState(photo);

  const missingPicture = () => {
    setImgSrc("http://maspawio.net/static/documents/png-placeholder.png");
  }
  
  return (
  <div className="card">
    <h3 className="title">{title}</h3>
    <div className="description">{description}</div>
    <img 
      src={imgSrc}
      className="photo"
      onError={missingPicture}
    />
    <p className="date">{date}</p>
    <p className="time">{time}</p>
  </div>
  );
}
export default SeminarItem;