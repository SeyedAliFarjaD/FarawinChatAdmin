//                                                بسم الله الرحمن الرحیم
// نکات
//          ** یادداشت برداری **
//          ** تمرکز و دوری از حاشیه  **
// 1- مقدمه
//     _ پیش نیاز های ری اکت
//        _ JS Html tags CSS
//        _ JSX
// 2- ری اکت
//
//

import { useState, useEffect } from "react";

function useTest() {
  console.count("render hooking");
  const [time, setTime] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return time;
}

function TestComponent() {
  console.count("render");
  const time = useTest();

  return (
    <div>
      <div>output: {time}</div>
    </div>
  );
}

export default TestComponent;
