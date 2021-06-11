<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  props: {
    data: {
      type: Object,
      default: null,
    },
    option: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.renderChart(this.data, this.option);
  },
};
</script>
