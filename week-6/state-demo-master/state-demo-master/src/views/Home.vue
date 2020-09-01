<template>
  <div class="home">
    <HelloWorld/>
    <ComponentA/>
    <ComponentB/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ComponentA from '@/components/ComponentA.vue'
import ComponentB from '@/components/ComponentB.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ComponentA,
    ComponentB
  }
}
</script>
