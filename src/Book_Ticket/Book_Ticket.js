import React, { useState } from "react";
import "./Style.css";
import bgmovie from "./bgmovie.jpg";
import ListSeat from "./ListSeat";
import ChooseSeat from "./ChooseSeat";
import { arrSeat } from "./Data/Data";

export default function Book_Ticket() {
  // let DanhSach = [...arrSeat];
  // const [selectedSeats, setSelectedSeats] = useState([]);

  // let handleChooseSeat = (seat) => {
  //   let updateselectedSeats = [...selectedSeats];
  //   let seatIndex = updateselectedSeats.findIndex(
  //     (selectedSeat) => selectedSeat.seat === seat
  //   );
  //   if (seatIndex !== -1) {
  //     updateselectedSeats.splice(seatIndex, 1);
  //   } else {
  //     updateselectedSeats.push({ ...seat, daDat: true });
  //   }
  //   setSelectedSeats(updateselectedSeats);
  //   console.log(updateselectedSeats);
  // };

  return (
    <div className="bookingMovie">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <ListSeat />
          </div>
          <div className="col-5">
            <ChooseSeat />
          </div>
        </div>
      </div>
    </div>
  );
}
