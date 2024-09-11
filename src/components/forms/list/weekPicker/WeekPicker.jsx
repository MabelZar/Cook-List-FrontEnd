import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./WeekPicker.css";
import { useState } from "react";
import moment from "moment";

function WeekPicker({ onWeekSelected }) {
  const [objWeek, setObjWeek] = useState({
    date: null,
    dateFrom: null,
    dateTo: null,
    weekNumber: null,
  });

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const onChange = (date) => {
    if (date) {
      const dateFrom = moment(date).startOf("isoWeek").toDate();
      const dateTo = moment(date).endOf("isoWeek").toDate();
      const weekDays = Array(7)
        .fill(0)
        .map((_, i) => moment(dateFrom).add(i, "days").format("YYYY-MM-DD"));

      setObjWeek({
        date,
        dateFrom,
        dateTo,
        weekNumber: moment(date).isoWeek(),
        weekDays, // Añadir aquí la lista de días de la semana
      });

      if (onWeekSelected) {
        onWeekSelected(weekDays); // Pasamos los días de la semana seleccionados al componente padre
      }
    } else {
      setObjWeek({
        date: null,
        dateFrom: null,
        dateTo: null,
        weekNumber: null,
        weekDays: null, // Añadir aquí la lista de días de la semana
      });
      onWeekSelected(null);
    }
  };

  const renderValue = (date) => {
    const weekNumber = moment(date).isoWeek();
    const year = moment(date).year();

    return `W: ${weekNumber} Y: ${year}`;
  };

  return (
    <>
      <div className="WeekPicker">
        <span>Selecciona tu semana: </span>
        <DatePicker
          placeholder="Week picker"
          isoWeek
          showWeekNumbers
          value={objWeek.date}
          onChange={onChange}
          renderValue={renderValue}
        />
        <div className="weekInfos">
          <div>
            <span>
              Desde:{" "}
              <b>
                {objWeek && objWeek.dateFrom
                  ? objWeek.dateFrom.toLocaleDateString("es-SP", options)
                  : ""}
              </b>
            </span>
          </div>
          <div>
            <span>
              Hasta:{" "}
              <b>
                {objWeek && objWeek.dateTo
                  ? objWeek.dateTo.toLocaleDateString("es-SP", options)
                  : ""}
              </b>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default WeekPicker;
