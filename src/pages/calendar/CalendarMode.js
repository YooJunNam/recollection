import React, { useState, useEffect } from "react";
import "../../css/CalendarMode.css";
import moment from "moment";
import CalendarHeader from "../../Header/CalendarHeader";
import ContentsHistories from "../../ContentsHistories";
import CalendarView from "./CalendarView";

// 서버에서 가져올 데이터 샘플
const data = {
  "2021-09-01": [
    {
      content: "text content",
      poi: "poi객체가 들어오겠지",
      date: new Date("2021-09-01 20:32:12"),
      photos: [],
    },
    {
      content: "text content",
      poi: "poi객체가 들어오겠지",
      date: new Date("2021-09-01"),
      photos: [],
    },
  ],
  "2021-09-11": [
    {
      content: "text content",
      poi: "poi객체가 들어오겠지",
      date: new Date("2021-09-11"),
      photos: [],
    },
  ],
  "2021-06-08": [
    {
      content: "text content",
      poi: "poi객체가 들어오겠지",
      date: new Date("2021-06-08"),
      photos: [],
    },
  ],
  "2021-08-13": [
    {
      content: "text content",
      poi: "poi객체가 들어오겠지",
      date: new Date("2021-08-13"),
      photos: [],
    },
  ],
};

export default function CalendarMode() {
  // 달력이 보여지는 모드. year, month
  const [mode, setMode] = useState("year");
  // 유저가 year 모드에서 특정 달을 자세히 보기 위해 달력을 클릭했을때, 클릭된 날짜(moment객체) 를 저장할 state
  const [selectedDate, setSelectedDate] = useState(moment());
  // 현재 유저가 보고 있는 년도
  const [year, setYear] = useState(2021);

  function changeModeProps() {
    return setMode("year");
  }
  // selectedDate의 역할은 두가지 이다.
  // 유저가 어떤 날짜의 달력을 확대해서 보고자 하는지 date를 저장하는 역할
  // selectedDate가 null인지 여부에 따라서 달력 모드를 바꾸는 역할
  // selectedDate가 null이면 유저가 년도별 달력을 보고자 하는 것이므로 mode를 year로 바꿔준다.
  // selectedDate가 특정 날짜로 set되면 유저가 해당 날짜의 달력을 확대해 보고자 하는 것이므로 mode를 month로 바꿔준다.
  // useEffect를 사용해 selectedDate 값이 변할 때 마다 mode를 변경해주는 작업을 한다.

  useEffect(() => {
    if (selectedDate) {
      setMode("month");
    } else {
      setMode("year");
    }
  }, [selectedDate]);

  return (
    <>
      <CalendarHeader changeModeProps={changeModeProps} />
      <CalendarView
        setYear={setYear}
        selectedDate={selectedDate}
        mode={mode}
        year={year}
        setSelectedDate={setSelectedDate}
        data={data}
      />

      {mode === "month" ? <ContentsHistories /> : null}
    </>
  );
}
