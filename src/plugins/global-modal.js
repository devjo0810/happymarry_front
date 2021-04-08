import GlobalModal from '../components/common/GlobalModal';

export default {
    install(Vue) {
        var ModalConstructor = Vue.extend(GlobalModal);
        var modalInstance = new ModalConstructor({
            el: document.createElement('div')
        });
        document.body.appendChild(modalInstance.$el);

        Vue.prototype.$alert = ({title, message, callback}) => {
            modalInstance.isShow = true;
            modalInstance.type = 'alert';
            modalInstance.title = title || '안내';
            modalInstance.message = message;
            modalInstance.callback = callback;
        }
        Vue.prototype.$confirm = ({title, message, callback}) => {
            modalInstance.isShow = true;
            modalInstance.type = 'confirm';
            modalInstance.title = title || '안내';
            modalInstance.message = message;
            modalInstance.callback = callback;
        }
    }
}