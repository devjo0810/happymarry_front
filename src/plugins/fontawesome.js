import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faImage,
  faChartLine,
  faUserAlt,
  faEnvelope,
  faSignOutAlt,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBars,
  faImage,
  faChartLine,
  faUserAlt,
  faEnvelope,
  faSignOutAlt,
  faCommentDots,
);

// eslint-disable-next-line prettier/prettier
Vue.component("font-awesome-icon", FontAwesomeIcon);