import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHOOSE_SEAT } from "../reducer/constant/seatOption";
import { message } from "antd";
export default function ListSeat() {
  let DanhSach = useSelector((state) => {
    return state.seat.DanhSach;
  });
  let ChooseSeat = useSelector((state) => {
    return state.seat.ChooseSeat;
  });
  let dispatch = useDispatch();

  let handleChooseSeat = (seat) => {
    if (ChooseSeat.includes(seat)) {
      dispatch({
        type: CHOOSE_SEAT,
        payload: ChooseSeat.filter((soGhe) => soGhe !== seat),
      });
      message.success("xóa thành công");
    } else {
      dispatch({
        type: CHOOSE_SEAT,
        payload: [...ChooseSeat, seat],
      });
      message.success("chọn thành công");
    }
  };

  let renderListSeat = () => {
    return DanhSach.slice(1).map((item, index) => {
      return (
        <tr key={index}>
          <td className="rowNumber">{item.hang}</td>
          {item.danhSachGhe.map((seat, seatIndex) => {
            return (
              <td key={seatIndex} style={{ padding: `3px` }}>
                <div
                  onClick={() => {
                    handleChooseSeat(seat);
                  }}
                  className={`ghe ${
                    ChooseSeat.includes(seat) ? "gheDangChon" : ""
                  } ${seat.daDat === true ? "gheDuocChon" : ""}`}
                >
                  {seat.soGhe}
                </div>
              </td>
            );
          })}
        </tr>
      );
    });
  };

  return (
    <div className="text-center container">
      <table>
        <tbody>
          <tr>
            <td className="rowNumber">{DanhSach[0].hang}</td>

            {DanhSach[0].danhSachGhe.map((position) => {
              return (
                <td
                  className="firstChar"
                  style={{ padding: `3px`, fontSize: `20px` }}
                >
                  {position.soGhe}
                </td>
              );
            })}
          </tr>
          {renderListSeat()}
        </tbody>
      </table>
    </div>
  );
}
