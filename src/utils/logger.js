import { DEBUG_LEVEL, DEBUG_CONSOLE_MODE } from "./constant";

const VERSION = "1.0.0";
const MAX_LOG_LEVEL = 5;

let logLevel = DEBUG_LEVEL;
let consoleMode = DEBUG_CONSOLE_MODE;
let timeLogShow = false;
let debugLevelShow = true;

export const getVersion = () => VERSION;

export const getLogLevel = () => logLevel;

export const setLogLevel = level => {
  logLevel = level;
};

export const getConsoleMode = () => consoleMode;

export const setConsoleMode = boolean => {
  consoleMode = boolean;
};

// log style
const STYLE = {
  basic: "background: #222; color: white; font-weight: 600;",
  error: "background: red; color: white; font-weight: 600;",
};

// log write
const write = (msg, obj, level, type) => {
  if (type === undefined && typeof level === "string") {
    type = level;
  }

  // obj, level 판단
  // obj 가 넘버인 경우, 로그데이터가 우선이니, obj 그대로 찍고 레벨은 5로 설정
  if (level === undefined) {
    level = MAX_LOG_LEVEL;
  }

  obj = obj === undefined ? "" : obj;

  // 로그 부가내용설정
  const dateTime = timeLogShow ? getDateTime() : "";
  let debugLevelDesc = "";
  let style = STYLE.basic;
  if (debugLevelShow) {
    switch (level) {
      case 0:
        debugLevelDesc = "[ERROR] ";
        style = STYLE.error;
        break;
      case 1:
        debugLevelDesc = "[WARNING] ";
        break;
      case 2:
        debugLevelDesc = "[INFO] ";
        break;
      case 3:
        debugLevelDesc = "[DEBUG] ";
        break;
      case 4:
        debugLevelDesc = "[LOG] ";
        break;
      case 5:
        debugLevelDesc = "[DEV] ";
        break;
      default:
        "[" + level + "]";
    }
  }

  // type에 따른 로그 기록
  let text = "%c " + dateTime + debugLevelDesc + msg;
  if (logLevel >= level && debugLevelShow) {
    switch (type) {
      case "LOG":
        console.log(text, style, obj);
        break;
      case "GROUP":
        console.group(text, style, obj);
        break;
      case "GROUP_COLLAPSED":
        console.groupCollapsed(text, style, obj);
        break;
      case "GROUP_END":
        console.groupEnd(text, style, obj);
        break;
      case "WARN":
        console.warn(text, style, obj);
        break;
      case "ERROR":
        console.error(text, style, obj);
        break;
      default:
        console.warn("unkownType : ", type);
    }
  }
};

export const log = (msg, obj, level) => {
  write(msg, obj, level, "LOG");
};

export const error = (msg, obj, level) => {
  write(msg, obj, level, "ERROR");
};

export const warn = (msg, obj, level) => {
  write(msg, obj, level, "WARN");
};

export const group = (msg, obj, level) => {
  write(msg, obj, level, "GROUP");
};

export const groupCollapssed = (msg, obj, level) => {
  write(msg, obj, level, "GROUP_COLLAPSED");
};

export const groupEnd = (msg, obj, level) => {
  write(msg, obj, level, "GROUP_END");
};

export const clear = () => {
  console.clear();
};

/**********************
 * 기타
 **********************/
const getDateTime = () => {
  const date = new Date();
  const hours = date.getHours();
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let seconds = date.getSeconds();
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let mili = date.getMilliseconds();
  var strTime = hours + ":" + minutes + ":" + seconds + " " + mili;
  return (
    "[" +
    date.getFullYear() +
    "-" +
    date.getMonth() +
    1 +
    "-" +
    date.getDate() +
    " " +
    strTime +
    "]"
  );
};

export const objectToString = data => {
  let cache = [];
  // 클래스 파일은 변환되지 않고 {} 로 반환된다
  return typeof data === "string"
    ? data
    : JSON.stringify(data, (key, value) => {
        if (typeof value === "object" && value !== null) {
          if (cache.includes(value)) return;
          cache.push(value);
        }
        return value;
      }) || "";
};
