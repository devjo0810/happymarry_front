import GlobalSpinner from "../components/common/GlobalSpinner";

export default {
  install(Vue) {
    var SpinnerConstructor = Vue.extend(GlobalSpinner);
    var spinnerInstance = new SpinnerConstructor({
      el: document.createElement("div"),
    });
    document.body.appendChild(spinnerInstance.$el);

    Vue.prototype.$spinStart = () => {
      spinnerInstance.isShow = true;
    };
    Vue.prototype.$spinEnd = () => {
      spinnerInstance.isShow = false;
    };
  },
};
