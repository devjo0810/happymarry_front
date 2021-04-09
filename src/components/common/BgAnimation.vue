<template>
    <particles-bg
        type="custom"
        :config="config"
        :bg="isBg"
        :style="bgStyle"
    />
</template>
<script>
import { ParticlesBg } from "particles-bg-vue";
import icon from "@/assets/icons/icon_heart.js";

export default {
    name: "BgAnimation",
    components: {
        ParticlesBg
    },
    props: {
        bgStyle: {
            type: String,
            default: 'z-index:0;'
        },
        isBg: {
            type: Boolean,
            default: true
        }
    },
    data: () => ({
        config: {
            num: [4, 7],
            rps: 0.1,
            radius: [5, 40],
            life: [1.5, 3],
            v: [2, 3],
            tha: [-30, 30],
            body: icon,
            alpha: [0.6, 0],
            scale: [0.1, 0.4],
            position: "all",
            cross: "dead",
            random: 15
        }
    }),
}
</script>