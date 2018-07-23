
export const dataMixin = {
  data: () => ({
    text1: 'Reverse this mixin text'
  }),
  computed: {
    reverseMixin() {
      return this.text1.split('').reverse().join('');
    }
  }
}