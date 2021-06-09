<template>
  <div class="invitation-create-page">
    <div class="left-section">
      <b-nav tabs class="tab-nav">
        <b-nav-item
          :active="currentNav === 'component'"
          @click="onChangeNav('component')"
          >Component</b-nav-item
        >
        <b-nav-item
          :active="currentNav === 'theme'"
          @click="onChangeNav('theme')"
          >Theme</b-nav-item
        >
      </b-nav>
      <div class="tab-detail">
        <div v-show="currentNav === 'component'">
          <Draggable
            :list="compoList"
            :group="{ name: 'invitation', pull: 'clone', put: false }"
            :clone="cloneCompo"
            class="compo-wrap"
          >
            <component
              v-for="c in compoList"
              :key="c.id"
              :is="'Invitation' + c.compo"
              v-bind="c"
            />
          </Draggable>
        </div>
        <div v-show="currentNav === 'theme'">theme</div>
      </div>
    </div>
    <div class="right-section">
      <PhoneTemplate>
        <Draggable
          :list="resultList"
          group="invitation"
          @change="onChangeCompo"
        >
          <component
            v-for="c in resultList"
            :key="c.id"
            :is="'Invitation' + c.compo"
            v-bind="c"
          />
        </Draggable>
      </PhoneTemplate>
      <b-button variant="primary" class="btn create">Create</b-button>
    </div>
  </div>
</template>
<script>
import PhoneTemplate from "@/components/invitation/PhoneTemplate.vue";
import InvitationTitle from "@/components/invitation/InvitationTitle.vue";
import InvitationGallery from "@/components/invitation/InvitationGallery.vue";
import InvitationInput from "@/components/invitation/InvitationInput.vue";
import Draggable from "vuedraggable";
let globalIndex = 1;

export default {
  name: "InvitationCreate",
  components: {
    PhoneTemplate,
    Draggable,
    InvitationTitle,
    InvitationGallery,
    InvitationInput,
  },
  data: () => ({
    currentNav: "component",
    compoList: [
      { id: 1, compo: "Title", type: "template" },
      { id: 2, compo: "Gallery", type: "template" },
      { id: 3, compo: "Input", type: "template" },
    ],
    resultList: [],
  }),
  methods: {
    onChangeNav(navName) {
      this.currentNav = navName;
    },
    cloneCompo({ compo }) {
      return {
        id: globalIndex++,
        compo,
        type: "setting",
      };
    },
    onChangeCompo(evt) {
      console.log("[debug] evt :", evt);
    },
  },
};
</script>
