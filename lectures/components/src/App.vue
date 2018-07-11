<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-servers
        >
      </app-servers>
      <app-server-details
        >
      </app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Shared/Header';
import Servers from './components/Server/Servers';
import Server from './components/Server/Server';
import ServerDetails from './components/Server/ServerDetails';
import Footer from './components/Shared/Footer';
export default {
  components: {
   'app-header': Header,
   'app-servers': Servers,
   'app-server': Server,
   'app-server-details': ServerDetails,
   'app-footer': Footer
  }
}
</script>

<style>

</style>
