import GlobalModal from '../components/common/GlobalModal';

export default {
    install(Vue) {
        var ModalConstructor = Vue.extend(GlobalModal);
        var modalInstance = new ModalConstructor({
            el: document.createElement('div')
        });
        document.body.appendChild(modalInstance.$el);

        Vue.prototype.$alert = (message, title) => {
            return new Promise((resolve, reject) => {
                modalInstance.isShow = true;
                modalInstance.type = 'alert';
                modalInstance.title = title || '안내';
                modalInstance.message = message;
                modalInstance.promiseResolve = resolve;
                modalInstance.promiseReject = reject;
            });
        }
        Vue.prototype.$confirm = (message, title) => {
            return new Promise((resolve, reject) => {
                modalInstance.isShow = true;
                modalInstance.type = 'confirm';
                modalInstance.title = title || '안내';
                modalInstance.message = message;
                modalInstance.promiseResolve = resolve;
                modalInstance.promiseReject = reject;
            });
        }
    }
}