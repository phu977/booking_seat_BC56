import { message } from "antd";
import { arrSeat } from "../Book_Ticket/Data/Data";
import { CHOOSE_SEAT, DELETE_SEAT, PAY_SEAT } from "./constant/seatOption";

const initialState = {
  DanhSach: [...arrSeat],
  ChooseSeat: [],
  paySeat: [],
};

export let seat = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHOOSE_SEAT: {
      return { ...state, ChooseSeat: payload };
    }
    case DELETE_SEAT: {
      let cloneArr = [...state.ChooseSeat];
      let index = cloneArr.findIndex((item) => item.soGhe === payload.soGhe);
      cloneArr.splice(index, 1);
      message.error("xóa thành công");
      return { ...state, ChooseSeat: cloneArr };
    }
    case PAY_SEAT: {
      const updatedDanhSach = state.DanhSach.map((item) => {
        const updatedGhe = item.danhSachGhe.map((seat) => {
          if (
            state.ChooseSeat.some(
              (chosenSeat) => chosenSeat.soGhe === seat.soGhe
            )
          ) {
            return { ...seat, daDat: true };
          }
          return seat;
        });
        return { ...item, danhSachGhe: updatedGhe };
      });
      message.success("thanh toán thành công");
      return { ...state, DanhSach: updatedDanhSach, paySeat: state.ChooseSeat };
    }
    default:
      return state;
  }
};
