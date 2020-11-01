<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <i class="fas fa-hotel"></i>
        <!-- <img :src="require('../assets/nestor.jpg')" height="20px" width="20px"> -->
        Nestor reservation App
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <router-link to="/">
              <b-button size="sm" class="my-2 mr-2 my-sm-0">
                <i class="fas fa-door-open"></i> Exit
              </b-button>
            </router-link>

            <router-link to="/admin">
              <b-button size="sm" class="my-2 mr-2 my-sm-0">
                <i class="fas fa-user"></i> Admin
              </b-button>
            </router-link>

            <router-link to="/message">
              <b-button size="sm" class="my-2 mr-2 my-sm-0">
                <i class="fas fa-envelope"></i> Message
              </b-button>
            </router-link>

            <router-link to="/clients">
              <b-button size="sm" class="my-2 mr-2 my-sm-0">
                <i class="fas fa-users"></i> clients
              </b-button>
            </router-link>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container fluid class="bv-example-row mt-4">
      <b-row>
        <b-col cols="12">
          <b-table :fields="fieldsClient" bordered striped hover :items="clients"></b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { db } from "@/firebase";
//import Swal from "sweetalert2";
export default {
  data() {
    return {
      clients: [],
      fieldsClient: [
        //  { key: "id", label: "Client id", sortable: true },
        { key: "lastname", label: "lastname", sortable: true },
        { key: "firstname", label: "firstname", sortable: true },
        { key: "nationality", label: "nationality", sortable: true },
        { key: "phone", label: "phone", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        { key: "room", label: "Room", sortable: true }
      ]
    };
  },
  created() {
    db.collection("clients").onSnapshot(querySnapshot => {
      this.clients = [];
      querySnapshot.forEach(doc => {
        const x = doc.data();
        x.id = doc.id;
        this.clients.push(x);
      });
    });
  },

  methods: {}
};
</script>

<style scoped>
i {
  color: #48a9a6;
}
img {
  height: 20xvh !important;
  width: 100%;
}
</style>
