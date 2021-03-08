<template>
  <div>
    <transition name="fade">
      <div v-if="show">
        <div class="modal" v-on:click.self="$emit('close')">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">{{ content.title }}</h4>
                <button type="button" class="close" v-on:click="$emit('close')">
                  ×
                </button>
              </div>
              <div class="modal-body">
                <p>{{ content.message }}</p>
              </div>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  v-on:click="$emit('close')"
                >
                  {{ $t("message.close") }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-backdrop show"></div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "AlertDialog",
  props: ["show", "content",  "close"],
};
</script>
<style scoped>
.modal {
  display: block;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
