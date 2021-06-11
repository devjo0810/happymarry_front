<template>
  <div class="user-mainboard">
    <b-container>
      <b-row>
        <b-col>
          <b-card header="Bar Chart Header">
            <BarChart :data="barData" :option="barOption" />
          </b-card>
        </b-col>
        <b-col>
          <b-card header="Line Chart Header">
            <LineChart :data="lineData" :option="lineOption" />
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import BarChart from "@/components/chart/Bar";
import LineChart from "@/components/chart/Line";
export default {
  name: "UserDashboard",
  components: {
    BarChart,
    LineChart,
  },
  data: () => ({
    // BarChart START
    barData: {
      labels: ["일", "월", "화", "수", "목", "금", "토"],
      datasets: [
        {
          label: "청첩장 조회수",
          backgroundColor: "#5e72e4",
          data: [40, 20, 9, 10, 15, 26, 55],
        },
      ],
    },
    barOption: {
      responsive: true,
      maintainAspectRatio: false,
    },
    // BarChart END
    // LineChart START
    lineData: {
      labels: ["일", "월", "화", "수", "목", "금", "토"],
      datasets: [
        {
          label: "청첩장 조회수",
          backgroundColor: "rgba(255, 255, 255, 0)",
          borderColor: "#ffd600",
          data: [40, 20, 9, 10, 15, 26, 55],
        },
      ],
    },
    lineOption: {
      responsive: true,
      maintainAspectRatio: false,
    },
    // LineChart END
  }),
};
</script>
