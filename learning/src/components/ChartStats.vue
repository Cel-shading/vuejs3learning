<script setup lang="ts">
import { onMounted, ref, watch, defineProps } from 'vue'
import * as d3 from 'd3'
import type Pokemon from '@/models/Pokemon'

defineProps<{
  data: Pokemon
}>()


</script>

<template>
  <svg ref="svgRef" width="960" height="500"></svg>
</template>
