<template>
  <div class="drawer-box">
    <div v-show="visible" class="drawer-body-box" :style="`width:${width};`">
      <div class="drawer-header">
        <slot name="header"></slot>
      </div>
      <div class="drawer-body">
        <slot></slot>
      </div>
      <div class="drawer-footer">
        <slot name="footer"></slot>
      </div>
    </div>
    <span class="drawer-switch el-icon-s-grid" @click="onSwitch"></span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide, Prop } from 'vue-property-decorator';

@Component({})
export default class Manage extends Vue {
  @Prop({ default: '400px', type: String })
  private width: string;

  @Provide()
  private visible: boolean = localStorage.getItem('drawer-visible') === 'true';

  private onSwitch(event: MouseEvent) {
    this.visible = !this.visible;
    localStorage.setItem('drawer-visible', this.visible.toString());
  }
}
</script>

<style lang="scss" scoped>
.drawer-box {
  z-index: 2000;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;

  background: #fff;
  border-left: 1px solid #eee;

  /* 滚动条简单美化 */
  & > * {
    /*滚动条的宽度*/
    ::-webkit-scrollbar {
      width: 2px;
    }
    /*外层轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果*/
    ::-webkit-scrollbar-track {
      background-color: #eaeaea;
    }
    /*滚动条的设置*/
    ::-webkit-scrollbar-thumb {
      background-color: #777;
    }
    /*滚动条移上去的背景*/
    ::-webkit-scrollbar-thumb:hover {
      background-color: #888;
    }
  }

  .drawer-body-box {
    display: flex;
    flex-direction: column;
    height: 100%;

    .drawer-header {
      text-align: center;
      // padding: 15px 0;
    }
    .drawer-body {
      font-size: 1em;
      flex-grow: 1;
      overflow: auto;
    }
    .drawer-footer {
      text-align: right;
      padding: 8px 15px;
      color: #888;
    }
  }
}
.drawer-switch {
  position: absolute;
  top: 50%;
  right: 100%;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #eee;
  cursor: pointer;
  transform: translateY(-50%);

  &:hover {
    background-color: #eee;
  }
}
</style>
