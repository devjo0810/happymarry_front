/* eslint-disable prettier/prettier */
import * as logger from "@/utils/logger";

export default {
    setWindowSize({ commit }, payload) {
        logger.log("[setWindowSize]", payload);
        commit("setWindowSize", payload);
    },
    selectOneImg() {
        logger.log("[selectOneImg]");
        const img = document.getElementById("input-one-img");
        img.onchange = function() {
            logger.log("asd");
        };
        img.click();
    },
    selectMultiImg() {
        logger.log("[selectMultiImg]");
        const img = document.getElementById("input-multi-img");
        img.onchange = function() {
            logger.log("asd");
        };
        img.click();
    },
};