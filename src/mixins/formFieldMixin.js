export const formFieldMixin = {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: 0
    },
    value: [String, Number]
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
};
