<template>

    <div class="form-group">
      <label for="first name">First Name</label>
      <input
        class="form-control"
        type="text"
        id="firstname"
        @keyup="changed(true, $event.target.value)"
        @focusout="focusLost($event.target.id)"
        :class="{'invalid': !firstNameValid('firstname')}"
        :value="firstName"
      >
      <label for="last name">Last Name</label>
      <input
        class="form-control"
        type="text"
        id="lastname"
        @keyup="changed(false, $event.target.value)"
        @focusout="focusLost($event.target.id)"
        :class="{'invalid': !lastNameValid('lastname')}"
        :value="lastName"
      >
  </div>

</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({
    touched: []
  }),
  methods: {
    changed(isFirstName, val) {
      if(isFirstName) {
        
        this.$emit('input', val + ' ' + this.lastName);
      }
      else {
       
        this.$emit('input', this.firstName + ' ' + val);
      }
    },
    isTouched(id) {
      return this.touched.find(item => item === id) ? true : false;
    },
    focusLost(id) {
      console.log('focusOut');
      if(!this.isTouched(id)) {
        this.touched.push(id);
      }
    },
    firstNameValid(id) {
      return !this.isTouched(id) || this.firstName === 'Patrik';
    },
    lastNameValid(id) {
      return !this.isTouched(id) || this.lastName === 'Keller';
    }
  },
  computed: {
    firstName() {
      return this.value.split(' ')[0]
    },
    lastName() {
      const s = this.value.split(' ');
      if(s.length < 1 || !s[1]) {
        return '';
      }
      return this.value.split(' ')[1];
    }
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');      
  },
  created() {
    console.log('created');
  }
}
</script>

<style scoped>
  .invalid {
    border: 1px solid red;
  }
</style>
