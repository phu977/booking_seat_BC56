import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ClEAN_CHOOSE_SEAT_RENDER,
  DELETE_SEAT,
  PAY_SEAT,
} from "../reducer/constant/seatOption";

export default function ChooseSeat() {
  let ChooseSeat = useSelector((state) => {
    return state.seat.ChooseSeat;
  });
  let DanhSach = useSelector((state) => {
    return state.seat.DanhSach;
  });
  let dispatch = useDispatch();

  let handleDelteSeat = (seat) => {
    dispatch({
      type: DELETE_SEAT,
      payload: seat,
    });
  };

  let renderListPaySeat = () => {
    return ChooseSeat.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.soGhe}</td>
          <td>{item.gia.toLocaleString()}VNĐ</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                handleDelteSeat(item.soGhe);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  let totalPrice = (ChooseSeat) => {
    let sum = 0;
    for (let index = 0; index < ChooseSeat.length; index++) {
      var seat = ChooseSeat[index];
      sum += seat.gia;
    }
    return sum;
  };

  let renderTotal = () => {
    let total = totalPrice(ChooseSeat);
    return (
      <tr>
        <td colSpan={2}>Total </td>
        <td>{total.toLocaleString()}VND</td>
      </tr>
    );
  };

  let handlePaySeat = () => {
    dispatch({
      type: PAY_SEAT,
    });
    dispatch({
      type: ClEAN_CHOOSE_SEAT_RENDER,
    });
  };

  return (
    <div>
      <strong className="text-white text-align-center">Choose Seat</strong>
      <table className="table">
        <thead>
          <tr>
            <th>Number seat</th>
            <th>Price</th>
            <th>function</th>
          </tr>
        </thead>
        <tbody>
          {renderListPaySeat()}
          {renderTotal()}
          <button className="btn btn-info text-center" onClick={handlePaySeat}>
            Pay Seat
          </button>
        </tbody>
      </table>
    </div>
  );
}
