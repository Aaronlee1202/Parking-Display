<template>
  <div class="container">
    <div class="flex title-box">
      <p class="event-title">Event</p>
      <div class="flex suggestion-box">
        <p class="suggestion-title">建議處理步驟</p>
        <div class="round">1</div>
        <p>請至現場查看狀況</p>
        <div class="round">2</div>
        <p>重啟充電樁</p>
        <div class="round">3</div>
        <p>如持續亮紅燈,請回報維運工程師</p>
      </div>
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
  p {
    margin: 0;
  }
}
.event-title {
  font-weight: 700;
  font-size: 18px;
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
