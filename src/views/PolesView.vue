<template>
  <div class="fault">
    <div class="row">
      <div id="Layer" class="col">
        <div class="parking-name">物業大樓停車場</div>
        <div class="layer-stack_wrap">
          <div
            class="layer-stack_layer layer-stack_layer1"
            @click="clickLayer(1)"
          >
            <div
              class="arrow-box"
              :class="[layerSwitch == 1 ? 'arrow-right' : '']"
            ></div>
            <h2 :class="[layerSwitch == 1 ? 'click-color' : '']">B3</h2>
          </div>
          <div
            class="layer-stack_layer layer-stack__layer2"
            @click="clickLayer(2)"
          >
            <div
              class="arrow-box"
              :class="[layerSwitch == 2 ? 'arrow-right' : '']"
            ></div>
            <h2 :class="[layerSwitch == 2 ? 'click-color' : '']">B2</h2>
          </div>
          <div
            class="layer-stack_layer layer-stack__layer3"
            @click="clickLayer(3)"
          >
            <div
              class="arrow-box"
              :class="[layerSwitch == 3 ? 'arrow-right' : '']"
            ></div>
            <h2 :class="[layerSwitch == 3 ? 'click-color' : '']">B1</h2>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col bg-white">
        <polesStatus />
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import polesStatus from "@/components/PolesComponents/polesStatus.vue";
import { ref } from "vue";

export default {
  name: "PolesView",
  components: { polesStatus },
  setup() {
    let layerSwitch = ref(0);
    const clickLayer = (event) => {
      if (layerSwitch.value == event) {
        layerSwitch.value = 0;
      } else {
        layerSwitch.value = event;
      }
    };

    return { clickLayer, layerSwitch };
  },
};
</script>

<style lang="scss" scoped>
// .fault {
//   height: 100%;
// }
.bg-white {
  height: 100%;
}
#Layer {
  width: 600px;
  height: 600px;
  background-color: #ffffff;
}
.parking-name {
  position: relative;
  top: 7%;
  left: 14%;
  font-weight: 700;
  font-size: 18px;
  color: var(--bs-dark-grey);
}

.layer-stack_wrap {
  position: relative;
  top: 45%;
  left: 25%;
}

// 每一層地板
.layer-stack_layer {
  width: 409px;
  height: 219px;
  position: absolute;
  transform: rotateX(50deg) rotateZ(25deg) translateZ(0);
  transition: all 0.3s ease-out;
  text-align: start;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  user-select: none;
}

.layer-stack_layer1 {
  background: #e6ecf0;
  opacity: 0.9;
}
.layer-stack_layer1:hover {
  width: 438.23px;
  height: 239.08px;
  box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.275);
  transition: (all 0.15s);
}

// 第二層浮起來
.layer-stack__layer2 {
  transform: rotateX(50deg) rotateZ(25deg) translateZ(100px);
  background: #eff4f7;
  opacity: 0.9;
}
.layer-stack__layer2:hover {
  width: 438.23px;
  height: 239.08px;
  box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.15);
  transition: (all 0.15s);
}

// 第三層浮起來
.layer-stack__layer3 {
  transform: rotateX(50deg) rotateZ(25deg) translateZ(210px);
  background: #f6f9fc;
  opacity: 0.9;
}
.layer-stack__layer3:hover {
  width: 438.23px;
  height: 239.08px;
  box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.15);
  transition: (all 0.15s);
}

h2 {
  margin: 0 0 15px 0px;
  font-weight: 700;
  display: flex;
  text-align: center;
  align-items: flex-start;
  color: #b7c6d1;
}
.click-color {
  color: #363636;
}

.arrow-right {
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid var(--bs-pretso-blue);
}
.arrow-box {
  width: 22px;
  height: 30px;
  margin: 0 0 19px 20px;
}
</style>
