import { useEffect, useState } from "react";
import { deleteSeminar, getSeminars, updateSeminar } from "../../api/apiSeminars";
import { ISeminar } from "../../types";
import SeminarItem from "../SeminarItem/SeminarItem";
import "./SeminarsContainer.css"
import ModalItem from "../ModalItem/ModalItem";

const SeminarsContainer = () => {
  const [seminarsArray, setSeminarsArray] = useState<ISeminar[]>([]);
  const [isOpen, setOpenState] = useState<boolean>(false);
  const [modifySeminar, setSeminarToModify] = useState<ISeminar | null>(null);

  useEffect(() => {
    getSeminars()
    .then(response => {
      setSeminarsArray(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      console.log("Ошибка при загрузке страницы:", error)
    })
  }, [])

  const handleDelete = (id: number) => {
    deleteSeminar(id)
    .then(() => {
      setSeminarsArray(seminarsArray.filter((seminar) => Number(seminar.id) !== id));
    })
    .catch((error) => {
      console.error("Ошибка при удалении семинара:", error);
    });
  };

  const handleEdit = (id: number) => {
    const seminarToEdit = seminarsArray.find(item => Number(item.id) === id) || null;
    setSeminarToModify(seminarToEdit);
    setOpenState(true);
  }

  const handleUpdate = (updatedSeminar: ISeminar) => {
    updateSeminar(Number(modifySeminar?.id), updatedSeminar)
      .then(response => {
        console.log(response.data)
        setSeminarsArray(seminarsArray.map(item => (item.id === modifySeminar?.id ? response.data : item))
        );
        console.log(seminarsArray)
        setOpenState(false);
      })
      .catch(error => console.error("Ошибка обновления:", error));
  };

  return (<>
    {isOpen && modifySeminar && 
      <ModalItem  
        seminar={modifySeminar}
        onClose={() => setOpenState(false)}
        onSave={handleUpdate}
      />}
    <div className="container">
      {seminarsArray.map((seminar) => (
        <SeminarItem
          key={Number(seminar.id)}
          title={seminar.title}
          photo={seminar.photo}
          description={seminar.description}
          date={seminar.date}
          time={seminar.time}
          onDelete={() => handleDelete(Number(seminar.id))}
          onEdit={() => handleEdit(Number(seminar.id))}
        />
      ))}
    </div>
  </>);
} 
export default SeminarsContainer;