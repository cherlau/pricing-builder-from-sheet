<template>
  <div class="input-range">
    <div class="card">

      <div class="card-header">
        <div class="label-group">
          <label for="slider">{{ tipo }}</label>
          <span>Personalize a quantidade desejada.</span>
        </div>
        <div class="value-badge">{{ selectedValue }}</div>
      </div>

      <div class="slider-wrapper">
        <input
          type="range"
          id="slider"
          class="slider"
          v-model="selectedValue"
          :min="limitsRange[1]"
          :max="limitsRange[2]"
          :step="limitsRange[0]"
          :style="{
            '--fill': ((selectedValue - limitsRange[1]) / (limitsRange[2] - limitsRange[1])) * 100 + '%'
          }"
        />

        <div class="step-markers">
          <span
            v-for="step in Array.from(
              { length: Math.round((limitsRange[2] - limitsRange[1]) / limitsRange[0]) + 1 },
              (_, i) => limitsRange[1] + i * limitsRange[0]
            )"
            :key="step"
            class="step-dot"
            :class="{ 'step-dot--filled': step <= Number(selectedValue) }"
          />
        </div>
      </div>

    </div>
  </div>
</template>
  
<script>
import { modulesStore } from '@/store/modules.js';
import { ref, watch, onMounted } from 'vue';

export default {
  name: 'InputRange',
  props: {
    limits: {
      type: Array,
    },
    tipo: {
      type: String,
    }
  },
setup(props) {
  const store = modulesStore();
  const tipo = ref(props.tipo);
  const limitsRange = store.getLimits(tipo.value);
  const selectedValue = ref(limitsRange[1]);

  watch(selectedValue, (selected) => {
    store.setRange(tipo.value, selected);
  });

  onMounted(() => {
    store.setRange(tipo.value, selectedValue.value);
  })

  return { selectedValue, limitsRange };
},

};
</script>
  
<style scoped>
/* ── Card ──────────────────────────────────────────── */
.card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  padding: 28px 30px 24px;
  margin-bottom: 28px;
}

/* ── Header row ─────────────────────────────────────── */
.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 24px;
}

.label-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

label {
  font-size: 18px;
  font-weight: 700;
  color: #32445E;
  line-height: 1.2;
}

span {
  font-size: 12px;
  font-weight: 400;
  color: #8fa3be;
}

/* ── Value badge ────────────────────────────────────── */
.value-badge {
  font-size: 20px;
  font-weight: 700;
  color: #0091FF;
  line-height: 1;
  align-self: center;
}

/* ── Slider wrapper ─────────────────────────────────── */
.slider-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* ── Range input — reset & track ────────────────────── */
.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  background: linear-gradient(
    to right,
    #0091FF var(--fill, 0%),
    #C8D7E8 var(--fill, 0%)
  );
}

/* webkit track (background already on the element) */
.slider::-webkit-slider-runnable-track {
  height: 6px;
  border-radius: 3px;
}

/* firefox track + progress */
.slider::-moz-range-track {
  height: 6px;
  border-radius: 3px;
  background: #C8D7E8;
}
.slider::-moz-range-progress {
  height: 6px;
  border-radius: 3px;
  background: #0091FF;
}

/* ── Thumb ──────────────────────────────────────────── */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #1CCA85;
  box-shadow: 0 2px 8px rgba(28, 202, 133, 0.45);
  cursor: pointer;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
  margin-top: -8px;
}
.slider:active::-webkit-slider-thumb {
  transform: scale(1.18);
  box-shadow: 0 4px 14px rgba(28, 202, 133, 0.55);
}

.slider::-moz-range-thumb {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #1CCA85;
  border: none;
  box-shadow: 0 2px 8px rgba(28, 202, 133, 0.45);
  cursor: pointer;
  transition: transform 0.12s ease;
}
.slider:active::-moz-range-thumb {
  transform: scale(1.18);
}

/* ── Step markers ───────────────────────────────────── */
.step-markers {
  display: flex;
  justify-content: space-between;
  padding: 0 11px; /* alinha com o centro do thumb nas extremidades */
}

.step-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #C8D7E8;
  transition: background 0.15s ease;
}
.step-dot--filled {
  background: #0091FF;
}

/* ── Responsive ─────────────────────────────────────── */
@media (max-width: 768px) {
  .card {
    padding: 20px 16px 18px;
    margin-bottom: 16px;
  }

  label {
    font-size: 15px;
  }

  .value-badge {
    font-size: 26px;
  }

  .slider::-webkit-slider-thumb {
    width: 28px;
    height: 28px;
    margin-top: -11px;
  }
}
</style>