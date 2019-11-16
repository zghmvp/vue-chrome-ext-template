<template>
  <Drawer>
    <div slot="header">
      <h2 style="line-height: 3;">vue-chrome-ext-template</h2>
    </div>
    <div slot>
      <div style="padding: 15px;">
        <About />
      </div>
    </div>
    <div slot="footer">页脚</div>
  </Drawer>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator';
import Drawer from './components/Drawer.vue';
import About from './components/About.vue';

@Component({
  name: 'app',
  components: {
    Drawer,
    About,
  },
})
export default class Manage extends Vue {
  @Provide()
  private drawer: boolean = true;

  @Provide()
  private direction: string = 'rtl';
}
</script>