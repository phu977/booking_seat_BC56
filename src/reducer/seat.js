import { message } from "antd";
import { arrSeat } from "../Book_Ticket/Data/Data";
import { CHOOSE_SEAT, DELETE_SEAT } from "./constant/seatOption";

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
      let index = cloneArr.findIndex((item) => item.soGhe == payload.soGhe);
      cloneArr.splice(index, 1);
      message.error("xóa thành công");
      return { ...state, ChooseSeat: cloneArr };
    }
    default:
      return state;
  }
};
