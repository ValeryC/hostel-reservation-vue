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

            <!-- Right aligned nav items -->
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

            <template v-slot:cell(Edit)="row">
              <b-button
                size="md"
                variant="info"
                block
                @click="modaldata('Single',row.item)"
              >Edit Reservation</b-button>
            </template>
          </b-table>
        </b-col>
        <b-col cols="12">
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
            <template v-slot:cell(Edit)="row">
              <b-button
                size="md"
                variant="info"
                block
                @click="modaldata('Double',row.item.id)"
              >Edit Reservation</b-button>
            </template>
          </b-table>
        </b-col>

        <b-col cols="12">
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
            <template v-slot:cell(Edit)="row">
              <b-button
                size="md"
                variant="info"
                block
                @click="modaldata('Family',row.item.id)"
              >Edit Reservation</b-button>
            </template>
          </b-table>
        </b-col>

        <b-col cols="12">
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
            <template v-slot:cell(Edit)="row">
              <b-button
                size="md"
                variant="info"
                block
                @click="modaldata('Deluxe',row.item.id)"
              >Edit Reservation</b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>

    <b-modal hide-footer id="my-modal" :title="form.room">
      <b-form @submit.prevent="onUpdate">
        <b-form-group id="input-group-1" label="Firstname:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.firstname"
            type="text"
            placeholder="Enter firstname"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-1" label="Lastname:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.lastname"
            type="text"
            placeholder="Enter Lastname"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-1" label="Nationality:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.nationality"
            type="text"
            placeholder="Enter Nationality"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Birth:" label-for="input2">
          <b-form-input id="input-2" v-model="form.birth" type="date" placeholder="Select Day"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-1" label="Phone:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.phone"
            type="number"
            placeholder="Enter a Phone number"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="E-mail" label-for="input-2">
          <b-form-input id="input-2" v-model="form.email" placeholder="Enter Email"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Day to Book:" label-for="input2">
          <b-form-input id="input-2" v-model="form.day" type="date" placeholder="Select Day"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Price per Night:" label-for="input-2">
          <b-form-input id="input-2qa" v-model="form.price" required disabled></b-form-input>
        </b-form-group>
        <b-button class="text-white" block type="submit" :variant="color">Book</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { db } from "@/firebase";
export default {
  data() {
    return {
      form: {
        email: "",
        firstname: "",
        lastname: "",
        nationality: "",
        birth: "",
        phone: "",
        room: "",
        price: "",
        day: "",
        id: "",
        clientID: ""
      },
      color: "",

      single: [],
      double: [],
      family: [],
      deluxe: [],
      clients: [],
      messages: [],
      fields: [
        { key: "id", label: "Reservation Id", sortable: true },
        { key: "clientID", label: "ClientID", sortable: true },
        { key: "firstname", label: "Firstname", sortable: true },
        { key: "lastname", label: "Lastname", sortable: true },
        { key: "nationality", label: "Nationality", sortable: true },

        { key: "phone", label: "Phone", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        { key: "room", label: "Room", sortable: true },
        { key: "price", label: "Price", sortable: true },
        { key: "day", label: "Day", sortable: true },
        { key: "delete", label: "Delete Reservation", sortable: true },
        { key: "Edit", label: "Edit Reservation", sortable: true }
      ],
      fieldsClient: [
        { key: "id", label: "Id", sortable: true },
        { key: "lastname", label: "lastname", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        { key: "delete", label: "Delete Client", sortable: true }
      ],
      fieldsMessage: [
        { key: "id", label: "Id", sortable: true },
        { key: "message", label: "Message", sortable: true },
        { key: "lastname", label: "lastname", sortable: true },

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
      if (window.confirm("Do you really want to delete?")) {
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
    },
    modaldata(room, item) {
      this.$bvModal.show("my-modal");
      this.form = item;
    },

    onUpdate(evt) {
      evt.preventDefault();
      console.log(this.form);

      db.collection("clients")
        .doc(this.form.clientID)
        .update({
          firstname: this.form.firstname,
          lastname: this.form.lastname,
          nationality: this.form.nationality,
          phone: this.form.phone,
          email: this.form.email,
          room: this.form.room
        })
        .then(() => {
          console.log(this.form.id);
          db.collection(this.form.room)
            .doc(this.form.id)
            .update({
              clientID: this.form.clientID,
              firstname: this.form.firstname,
              lastname: this.form.lastname,
              nationality: this.form.nationality,
              room: this.form.room,
              price: this.form.price,
              day: this.form.day,
              birth: this.form.birth,
              phone: this.form.phone,
              email: this.form.email
            });
        })
        .then(() => {
          Swal.fire(
            "Good job! Copy your id Reservation",
            `Reservation id: ${this.form.id}`,
            "success"
          );

          this.form.email = "";
          this.form.nationality = "";
          this.form.firstname = "";
          this.form.lastname = "";
          this.form.birth = "";
          this.form.phone = "";
        });
      this.$bvModal.hide("my-modal");
    }
  }
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
