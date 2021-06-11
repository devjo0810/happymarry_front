<script>
import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
  props: {
    data: {
      type: Object,
      default: null,
    },
    option: {
      type: Object,
      defulat: null,
    },
  },
  mounted() {
    this.renderChart(this.data, this.option);
  },
};
</script>
