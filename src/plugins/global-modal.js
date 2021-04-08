import GlobalModal from '../components/common/GlobalModal';

export default {
    install(Vue) {
        var ModalConstructor = Vue.extend(GlobalModal);
        var modalInstance = new ModalConstructor({
            el: document.createElement('div')
        });
        document.body.appendChild(modalInstance.$el);

        Vue.prototype.$alert = ({title, message, closeCallback}) => {
            modalInstance.isShow = true;
            modalInstance.type = 'alert';
            modalInstance.title = title;
            modalInstance.message = message;
            modalInstance.closeCallback = closeCallback;
        }
        Vue.prototype.$confirm = ({title, message, confirmCallback, closeCallback}) => {
            modalInstance.isShow = true;
            modalInstance.type = 'confirm';
            modalInstance.title = title;
            modalInstance.message = message;
            modalInstance.confirmCallback = confirmCallback;
            modalInstance.closeCallback = closeCallback;
        }
    }
}