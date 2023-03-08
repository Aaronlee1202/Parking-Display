<template>
  <div class="container">
    <div class="flex title-box">
      <h1>Event</h1>
      <div class="flex suggestion-box">
        <h2 class="suggestion-title">建議處理步驟</h2>
        <div class="round">1</div>
        <div class="title2">請至現場查看狀況</div>
        <div class="round">2</div>
        <div class="title2">重啟充電樁</div>
        <div class="round">3</div>
        <div class="title2">如持續亮紅燈,請回報維運工程師</div>
      </div>
      <button class="btn btn-outline-pretso-blue">
        <span
          class="spinner-border spinner-border-sm text-light-grey"
          role="status"
          aria-hidden="true"
          v-show="false"
        ></span>
        <span class="title1">Normal</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventsView",
  setup() {},
};
</script>
<style lang="scss" scoped>
.title-box {
  height: 70px;
}
h1 {
  margin-right: 35px;
}
.flex {
  display: flex;
  align-items: center;
}

.suggestion-box {
  width: 780px;
  height: 90%;
  background-color: #ffffff;
  justify-content: center;
}
.suggestion-title {
  font-weight: 700;
  font-size: 16px;
}
.round {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  color: #ffffff;
  background-color: var(--bs-pretso-blue);
}
</style>
