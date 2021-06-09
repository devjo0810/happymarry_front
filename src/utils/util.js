import { OS_TYPE } from "./constant";

/**
 * 고유값 생성 함수
 * @param {Number} len default = 10
 * @returns {String}
 */
export const createId = (len = 10) => {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < len; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};

/**
 * 브라우저 버전 체크
 * @returns {String} browser version ["chrome", "ie"]
 */
export const checkBrowser = () => {
  const agent = navigator.userAgent.toLowerCase();
  let result = "chrome";
  if (
    (navigator.appName == "Netscape" &&
      navigator.userAgent.search("Trident") != -1) ||
    agent.indexOf("msie") != -1
  ) {
    result = "ie";
  }

  return result;
};

/**
 * 현재 운영체제 확인
 * @returns {String} currentOS ["ios", "android", "nomobile"]
 */
export const getCurrentOS = () => {
  const agent = navigator.userAgent.toLowerCase();
  let currentOS = OS_TYPE.NOMOBILE;
  if (/iphone|ipad|ipod/i.test(agent)) currentOS = OS_TYPE.IOS;
  else if (/android/i.test(agent)) currentOS = OS_TYPE.ANDROID;

  return currentOS;
};

/**
 * Array 중복 제거
 * @param {Array} array
 * @returns {Array}
 */
export const getUniqueObjectArray = array => {
  return array.filter((item, i) => {
    return (
      array.findIndex(item2 => {
        return item.function_name === item2.function_name;
      }) === i
    );
  });
};

/**
 * 객체 깊은 복사
 * @param {Object} obj
 * @returns {Object} copy object
 */
export const cloneObject = obj => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const result = Array.isArray(obj) ? [] : {};

  for (let key of Object.keys(obj)) {
    result[key] = cloneObject(obj[key]);
  }

  return result;
};

/**
 * 파일 Base64 인코딩
 * @param {File} file
 * @returns {String} base64 encoding text
 */
export const getBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let encoded = reader.result.toString().replace(/^data:(.*,)?/, "");
      if (encoded.length % 4 > 0) {
        encoded += "=".repeat(4 - (encoded.length % 4));
      }
      resolve(encoded);
    };
    reader.onerror = error => reject(error);
  });
};

/**
 * dataURL을 File 객체로 변환
 * @param {String} url
 * @param {String} filename
 * @returns {File}
 */
export const dataURLtoFile = (url, filename) => {
  try {
    const arr = url.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  } catch (e) {
    return null;
  }
};

/**
 * dataURL을 Blob 객체로 변환
 * @param {String} url
 * @returns {Blob}
 */
export const dataURLtoBlob = url => {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  const byteString = atob(url.split(",")[1]);

  // separate out the mime component
  const mimeString = url.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to an ArrayBuffer
  const ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  const ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  const blob = new Blob([ab], { type: mimeString });
  return blob;
};

/**
 * Blob 객체를 dataURL로 변환
 * @param {Blob} blob
 * @returns {Promise}
 */
export const blobToDataURL = blob =>
  new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = e => {
      return resolve(e.target.result);
    };
    reader.readAsDataURL(blob);
  });

/**
 * 이미지를 dataURL로 변경
 * @param {File} img
 * @returns {String} dataURL
 */
export const imageToDataURL = img => {
  // Create canvas
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  // Set width and height
  canvas.width = img.width;
  canvas.height = img.height;
  // Draw the image
  ctx.drawImage(img, 0, 0);
  return canvas.toDataURL("image/jpeg");
};

/**
 * dataURL을 로컬 디바이스에 저장
 * @param {String} path
 * @param {String} fileName
 */
export const downloadFileToURL = (path, fileName) => {
  const link = document.createElement("a");
  link.href = path;
  link.download = fileName;
  link.click();
  link.remove();
};

/**
 * Blob을 로컬 디바이스에 저장
 * @param {Blob} blob
 * @param {String} fileName
 */
export const downloadFileToBlob = (blob, fileName) => {
  const url = window.URL.createObjectURL(blob);
  downloadFileToURL(url, fileName);
  window.URL.revokeObjectURL(url);
};

/**
 * 이미지 Element를 캔버스 Element를 이용하여 저장하는 함수
 * android chrome에서 blob을 이용한 디바이스 저장이 안되서 생성
 * @param {Element} imgElem
 * @param {String} fileName
 */
export const downloadFileForCanvas = (imgElem, fileName) => {
  const downloadCanvas = document.createElement("canvas");
  // canvas에 image 복사
  downloadCanvas.width = imgElem.width;
  downloadCanvas.height = imgElem.height;
  const context = downloadCanvas.getContext("2d");
  context.drawImage(imgElem, 0, 0, imgElem.width, imgElem.height);
  downloadFileToURL(downloadCanvas.toDataURL(), fileName);
  downloadCanvas.remove();
};

// 필터 관련 함수가 존재하는 파일
export const formatDate = value => {
  const date = new Date(value);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month > 9 ? month : `0${month}`;
  const day = date.getDate();
  let hours = date.getHours();
  hours = hours > 9 ? hours : `0${hours}`;
  const minutes = date.getMinutes();
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

/**
 * 입력시 숫자만 입력
 * @param {Event} event
 * @param {String} message
 */
export const isNumber = (event, message) => {
  if (!/\d/.test(event.key) && (event.key !== "." || /\./.test(message)))
    return event.preventDefault();
};

/**
 * 브라우저 전체화면으로 전환 (IOS 미지원)
 */
export const openFullScreen = () => {
  const doc = document.documentElement;
  if (doc.requestFullscreen) doc.requestFullscreen();
  else if (doc.webkitRequestFullscreen) doc.webkitRequestFullscreen();
  else if (doc.mozRequestFullScreen) doc.mozRequestFullScreen();
  else if (doc.msRequestFullscreen) doc.msRequestFullscreen();
};

/**
 * 브라우저 전체화면 해제 (IOS 미지원)
 */
export const closeFullScreen = () => {
  const doc = document;
  if (doc.exitFullscreen) doc.exitFullscreen();
  else if (doc.webkitExitFullscreen) doc.webkitExitFullscreen();
  else if (doc.mozCancelFullScreen) doc.mozCancelFullScreen();
  else if (doc.msExitFullscreen) doc.msExitFullscreen();
};

// 특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식
export const isPassword = pwd => {
  const regExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  return regExp.test(pwd);
};

// 이메일 정규표현식
export const isEmail = email => {
  const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(email);
};

// 휴대전화 정규표현식
export const isTel = tel => {
  const regExp = /^\d{3}-\d{3,4}-\d{4}$/;
  return regExp.test(tel);
};

// 닉네임 정규표현식
export const isNick = nick => {
  const regExp = /^[0-9a-zA-Z-_가-힣]{3,10}/i;
  return regExp.test(nick);
};
