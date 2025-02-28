import { useEffect, useState } from "react";
import { getSeminars } from "../../api/apiSeminars";
import { ISeminar } from "../../types";
import SeminarItem from "../SeminarItem/SeminarItem";

const SeminarsContainer = () => {
  const [seminarsArray, setSeminarsArray] = useState<ISeminar[]>([]);

  useEffect(() => {
    getSeminars()
    .then(response => {
      setSeminarsArray(response.data)
      console.log(response.data)
    })
  }, [])

  return (<>
    <div className="container">
      {seminarsArray.map((seminar) => (
        <SeminarItem
          key={Number(seminar.id)}
          title={seminar.title}
          photo={seminar.photo}
          description={seminar.description}
          date={seminar.date}
          time={seminar.time}
        />
      ))}
    </div>
  
  
  
  </>);
} 
export default SeminarsContainer;