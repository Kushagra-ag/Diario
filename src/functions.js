export const input_click = (new_message) => {
  console.log("value: ", new_message);
  return({
    type: 'INSERT',
    payload: new_message
  })
};

// Date and Time functions

export function time(str) {
  let timeObj = {
    hour: str.slice(16,18),
    min: str.slice(19,21),
    sec: str.slice(22,24)
  }
  return timeObj;
}

export function timezone_str(str) {
  return str.slice(35,-1);
}

export function timezone(str) {
  return str.slice(25,33);
}

export function date(str) {
  return str.slice(5,16);
}

export function twelvehrformat(str) {
  let hr = str.slice(0,2);
  let time = "AM";
  let obj = {hr,time}
  
  if(obj.hr>=12) {
    obj.hr = obj.hr%12;
    obj.time="PM";
  }

  return obj;
}