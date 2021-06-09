import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars, faImage);

// eslint-disable-next-line prettier/prettier
Vue.component("font-awesome-icon", FontAwesomeIcon);