/* eslint-disable prettier/prettier */
import * as logger from "@/utils/logger";

export default {
    setWindowSize({ commit }, payload) {
        logger.log("[setWindowSize]", payload);
        commit("setWindowSize", payload);
    },
    setOneImg() {
        logger.log("[setOneImg]");
        const img = document.getElementById("input-one-img");
        img.onchange = function() {
            logger.log("asd");
        };
        img.click();
    },
    setMultiImg() {
        logger.log("[setMultiImg]");
        const img = document.getElementById("input-multi-img");
        img.onchange = function() {
            logger.log("asd");
        };
        img.click();
    },
};