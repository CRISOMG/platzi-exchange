Vue.component('modal', {
  props: ['title'],
  template: `
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h3>{{ title }}</h3>
          <slot name="body">
          
          </slot>
          <footer>
            <button v-on:click="closeModal">Cerrar</button>
          </footer>
        </div>
      </div>
    </div>`,
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
});

new Vue({
  el: '#app',
  data() {
    return {
      title: 'Modal title',
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
});
