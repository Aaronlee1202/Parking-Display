<template>
  <div class="container">
    <div class="button-bg">
      <div class="row">
        <div class="col-8">
          <div class="row">
            <div class="col typography">Button states</div>
          </div>
          <div class="row">
            <div class="col-4 h2-color">
              <h2 class="">Primary button</h2>
            </div>
            <div class="col">
              <button class="btn btn-pretso-blue">
                <span class="title1">Normal</span>
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-4 h2-color">
              <h2 class="">Secondary button</h2>
            </div>
            <div class="col">
              <button class="btn btn-outline-pretso-blue">
                <span class="title1">Normal</span>
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-4 h2-color">
              <h2 class="">Button link</h2>
            </div>
            <div class="col">
              <button type="button" class="btn btn-link text-pretso-blue">
                <span class="title1">Normal</span>
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-4 h2-color">
              <h2 class="">Disabled</h2>
            </div>
            <div class="col">
              <button class="btn btn-pretso-blue disabled">
                <span class="title1">Disabled</span>
              </button>
              <button class="btn btn-pretso-blue disabled">
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>
              <button class="btn btn-outline-pretso-blue disabled">
                <span
                  class="spinner-border spinner-border-sm text-light-grey"
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-4 h2-color">
              <h2 class="">"More" button</h2>
            </div>
            <div class="col">
              <button type="button" class="btn btn-more"></button>
            </div>
          </div>
          <div class="row">
            <div class="col-4 h2-color">
              <h2 class="">"Close" button</h2>
            </div>
            <div class="col">
              <button type="button" class="btn btn-close"></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col typography">Typography</div>
          </div>
          <div class="row mb-4 mt-4">
            <div class="col-3">
              <h1>H1</h1>
            </div>
            <div class="col">
              <h1>Noto Sans Bold 18pt</h1>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-3">
              <h2>H2</h2>
            </div>
            <div class="col">
              <h2>Noto Sans Bold 16pt</h2>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-3">
              <div class="title1">title1</div>
            </div>
            <div class="col">
              <div class="title1">Noto Sans Bold 14pt</div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-3">
              <div class="title2">title2</div>
            </div>
            <div class="col">
              <div class="title2">Noto Sans Medium 14pt</div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-3">
              <div class="body">body</div>
            </div>
            <div class="col">
              <div class="body">Noto Sans Bold 12pt</div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-3">
              <div class="text1">text1</div>
            </div>
            <div class="col">
              <div class="text1">Noto Sans Bold 10pt</div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-3">
              <div class="text2">text2</div>
            </div>
            <div class="col">
              <div class="text2">Noto Sans Medium 10pt</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesignView",
};
</script>
<style lang="scss" scoped>
.button-bg {
  background-color: #f5faff;
  padding: 50px;
  margin: 50px;
}
button {
  margin: 25px 25px 25px 0;
}
.btn-close {
  width: 1.5em;
  height: 1.5em;
}
.btn-more {
  width: 1.5em;
  height: 1.5em;
}
.h2-color {
  display: flex;
  align-items: center;
  color: #91aac1;
}
.typography {
  height: 100px;
  font-weight: 700;
  font-size: 30px;
  line-height: 41px;
  display: flex;
  align-items: center;
}
.title-box {
  height: 70px;
}
h1 {
  margin-right: 35px;
}
</style>
