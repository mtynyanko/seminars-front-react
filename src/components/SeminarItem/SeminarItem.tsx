import { useState } from "react";
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import "./SeminarItem.css"
import { ISeminar } from "../../types";



export interface ItemProps extends Omit<ISeminar, "id">{
  onDelete: () => void;
  onEdit: () => void;
}

const SeminarItem = ({
  title,
  description,
  photo,
  date,
  time,
  onDelete,
  onEdit,
}: ItemProps) => {

  const [imgSrc, setImgSrc] = useState(photo);

  const missingPicture = () => {
    setImgSrc("http://maspawio.net/static/documents/png-placeholder.png");
  }
  
  return (
  <div className="card">
    <h3 className="title">{title}</h3>
    <img 
      src={imgSrc}
      className="photo"
      onError={missingPicture}
    />
    <div className="description">{description}</div>
    <div className="footer-area">
      <div className="event-date">
        <p className="date">{date}</p>
        <p className="time">{time}</p>
      </div>
      <button className="edit button" onClick={onEdit}>
        <EditNoteIcon />
      </button>
      <button className="delete button" onClick={onDelete}>
        <DeleteIcon />
      </button>
    </div>
    
  </div>
  );
}
export default SeminarItem;