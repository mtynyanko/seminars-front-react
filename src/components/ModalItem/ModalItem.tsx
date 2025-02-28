import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISeminar } from "../../types";
import "./ModalItem.css"


interface IModalProps {
  seminar: ISeminar;
  onClose: () => void;
  onSave: (updatedSeminar: ISeminar) => void;
}

const ModalItem = ({
  seminar,
  onClose,
  onSave,
}: IModalProps) => {
  const {register, handleSubmit} = useForm<ISeminar>({
    defaultValues: {
      title: seminar.title,
      description: seminar.description,
      date: seminar.date,
      time: seminar.time,
      photo: seminar.photo,
    },
  })
  const submit: SubmitHandler<ISeminar> = (data) => {
    onSave(data)
  }


  return (<>
    <div className="background">
      <form className="card light" onSubmit={handleSubmit(submit)}>
        <p className="info">название</p>
        <input type="text" className="title input-field" {...register('title')}/>
        <p className="info">описание</p>
        <textarea className="description input-field" {...register('description')}/>
        <p className="info">дата</p>
        <input type="text" className="date input-field" {...register('date')}/>
        <p className="info">время</p>
        <input type="text" className="time input-field" {...register('time')}/>
        <p className="info">ссылка на картинку</p>
        <input type="text" className="photo input-field" {...register('photo')}/>
        <div className="footer">
          <button className="button done" onClick={onClose}>
            <CloseIcon />
          </button>
          <button className="button close" type="submit">
            <DoneIcon />
          </button>
        </div>
      </form>
    </div>
    </>);
}
export default ModalItem;