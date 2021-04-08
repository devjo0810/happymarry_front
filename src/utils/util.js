//Random ID
export const createId = () => {
    var text = "";
    var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

//브라우저 버전 체크
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
}

//Array 중복 제거
export const getUniqueObjectArray = (array) => {
    return array.filter((item, i) => {
        return (
            array.findIndex(item2 => {
                return item.function_name === item2.function_name;
            }) === i
        );
    });
}

//Object Clone
export const cloneObject = (obj) => {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    const result = Array.isArray(obj) ? [] : {};

    for (let key of Object.keys(obj)) {
        result[key] = cloneObject(obj[key]);
    }

    return result;
}

export const getBase64 = (file) => {
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
}

// 필터 관련 함수가 존재하는 파일
export const formatDate = (value) => {
    const date = new Date(value);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month > 9 ? month : `0${month}`;
    const day = date.getDate();
    let hours = date.getHours();
    hours = hours > 9 ? hours : `0${hours}`;
    const minutes = date.getMinutes();
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// Input Type Number
export const isNumber = (event, message) => {
    if (!/\d/.test(event.key) && (event.key !== "." || /\./.test(message)))
        return event.preventDefault();
}

// 특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식
export const isPassword = (pwd) => {
    const regExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    return regExp.test(pwd)
}

// Input Type Email
export const isEmail = (email) => {
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(email);
}