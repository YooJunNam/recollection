import { Calendar, Button, AutoComplete } from "antd";
import moment from "moment";
import React, { useState, useEffect } from "react";

const CalendarView = ({
  setYear,
  selectedDate,
  mode,
  year,
  setSelectedDate,
  data,
}) => {
  const months = Array.apply(null, Array(12)).map((monthNumber, i) => {
    // month 숫자 array([0,1,2,...,11])를 [Jan, Feb,...,Dec] string형 array로 바꾼다.
    return moment().month(i).format("MMM");
  });

  // 달력의 날짜 하나하나를 랜더링 하는 함수. 리턴하는 컴포넌트가 달력의 날짜 바둑판에 랜더링 된다.
  function dateCellRender(date) {
    // 있으면 다이어리 배열,없으면 undefined가 나온다.
    const diaryData = getDiaryData(date);
    // if (diaryData.length === 0) return;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>{date.date()}</div>
        {diaryData ? (
          <div className="circle" />
        ) : (
          <div style={{ height: "6px" }}></div>
        )}
      </div>
    );
  }
  //js의 기본 날짜 객체: Date 객체 (기본내장되어있음)
  // antd의 Calendar모듈은 날짜를 moment로 사용함.
  // 가짜 서버 데이터(data)에서 해당하는 날짜에 적은 다이어리 객체가 있는지 조회한다
  function getDiaryData(date) {
    const dateToString = date.format("YYYY-MM-DD");
    return data[dateToString];
  }

  return (
    <>
      {mode === "year" ? (
        <>
          <Button
            onClick={() => {
              setYear((year) => year - 1);
            }}
          >
            prev
          </Button>

          <Button
            onClick={() => {
              setYear((year) => year + 1);
            }}
          >
            next
          </Button>

          <div
            className="site-calendar-customize-header-wrapper"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              marginLeft: "0.2rem",
            }}
          >
            {months.map((month) => (
              <Calendar
                dateFullCellRender={dateCellRender}
                fullscreen={false}
                headerRender={({ value, type, onChange, onTypeChange }) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {/* https://momentjs.com/docs/#/displaying/format/ */}
                      {year}/{value.format("MMMM")}
                    </div>
                  );
                }}
                // moment() =  new Date()
                // moment() = 2021-09-07
                // moment().month('Feb') = 2021-02-07
                //https://momentjs.com/docs/#/get-set/month/
                value={moment().year(year).month(month)}
                onSelect={(selectedDate) => {
                  setSelectedDate(selectedDate);
                }}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          {/* {selectedDate.format("MMM YYYY")} */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
            }}
          >
            <div
              className="site-calendar-customize-header-wrapper"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Calendar
                dateFullCellRender={dateCellRender}
                fullscreen={false}
                headerRender={({ value, type, onChange, onTypeChange }) => {
                  return selectedDate.format("MMM YYYY");
                }}
                value={selectedDate}
                onSelect={(selectedDate) => {
                  setSelectedDate(selectedDate);
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CalendarView;
