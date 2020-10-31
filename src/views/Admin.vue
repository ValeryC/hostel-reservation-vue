<template>
  <div>
    <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <!-- <i class="fas fa-hotel"></i>  -->
        <img :src="require('../assets/nestor.jpg')" height="20px" width="20px">
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
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container fluid class="bv-example-row mt-4">
      <b-row>
        <b-col cols="6">
          <h2 class>Room-single</h2>
          <b-img :src="require('@/assets/img1.jpg')" fluid alt="Responsive image"></b-img>
          <b-table :fields="fields" bordered striped hover :items="single">
            <template v-slot:cell(delete)="row">
              <b-button
                size="md"
                variant="danger"
                block
                @click="deletekey('Single',row.item.id)"
              >Delete Reservation</b-button>
            </template>
          </b-table>
        </b-col>
        <b-col cols="6">
          <h2 class>Room-Double</h2>
          <b-img :src="require('@/assets/img2.jpg')" fluid alt="Responsive image"></b-img>
          <b-table :fields="fields" bordered striped hover :items="double">
            <template v-slot:cell(delete)="row">
              <b-button
                size="md"
                variant="danger"
                block
                @click="deletekey('Double',row.item.id)"
              >Delete Reservation</b-button>
            </template>
          </b-table>
        </b-col>

        <b-col cols="6">
          <h2 class>Room - Family</h2>
          <b-img :src="require('@/assets/img3.jpg')" fluid alt="Responsive image"></b-img>
          <b-table :fields="fields" bordered striped hover :items="family">
            <template v-slot:cell(delete)="row">
              <b-button
                size="md"
                variant="danger"
                block
                @click="deletekey('Family', row.item.id)"
              >Delete Reservation</b-button>
            </template>
          </b-table>
        </b-col>

        <b-col cols="6">
          <h2 class>Room - Deluxe</h2>
          <b-img :src="require('@/assets/img4.jpg')" fluid alt="Responsive image"></b-img>
          <b-table :fields="fields" bordered striped hover :items="deluxe">
            <template v-slot:cell(delete)="row">
              <b-button
                size="md"
                variant="danger"
                block
                @click="deletekey('Deluxe', row.item.id)"
              >Delete Reservation</b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { db } from "@/firebase";
export default {
  data() {
    return {
      single: [],
      double: [],
      family: [],
      deluxe: [],
      clients: [],
      messages: [],
      fields: [
        { key: "id", label: "Id", sortable: true },
        { key: "clientID", label: "ClientID", sortable: true },
        { key: "room", label: "Room", sortable: true },
        { key: "price", label: "Price", sortable: true },
        { key: "day", label: "Day", sortable: true },
        { key: "delete", label: "Delete Reservation", sortable: true }
      ],
      fieldsClient: [
        { key: "id", label: "Id", sortable: true },
        { key: "name", label: "Name", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        { key: "delete", label: "Delete Client", sortable: true }
      ],
      fieldsMessage: [
        { key: "id", label: "Id", sortable: true },
        { key: "message", label: "Message", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        { key: "delete", label: "Delete Message", sortable: true }
      ]
    };
  },
  created() {
    db.collection("Single").onSnapshot(querySnapshot => {
      this.single = [];
      querySnapshot.forEach(doc => {
        const x = doc.data();
        x.id = doc.id;
        this.single.push(x);
      });
    });

    db.collection("Double").onSnapshot(querySnapshot => {
      this.double = [];
      querySnapshot.forEach(doc => {
        const x = doc.data();
        x.id = doc.id;
        this.double.push(x);
      });
    });

    db.collection("Family").onSnapshot(querySnapshot => {
      this.family = [];
      querySnapshot.forEach(doc => {
        const x = doc.data();
        x.id = doc.id;
        this.family.push(x);
      });
    });

    db.collection("Deluxe").onSnapshot(querySnapshot => {
      this.deluxe = [];
      querySnapshot.forEach(doc => {
        const x = doc.data();
        x.id = doc.id;
        this.deluxe.push(x);
      });
    });

    db.collection("clients").onSnapshot(querySnapshot => {
      this.clients = [];
      querySnapshot.forEach(doc => {
        const x = doc.data();
        x.id = doc.id;
        this.clients.push(x);
      });
    });

    db.collection("messages").onSnapshot(querySnapshot => {
      this.messages = [];
      querySnapshot.forEach(doc => {
        const x = doc.data();
        x.id = doc.id;
        this.messages.push(x);
      });
    });
  },

  methods: {
    deletekey(collection, id) {
      db.collection(collection)
        .doc(id)
        .delete()
        .then(function() {
          console.log("Document successfully deleted");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    }
  }
};
</script>

<style scoped>
/* i {
  color: orange;
} */
img {
  height: 40vh !important;
  width: 100%;
}
</style>
