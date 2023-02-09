<template>
    <NavbarAd/>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">FASHION SHOP
                    <router-link to="/contacts/add" class="btn btn-success btn-sm">
                        <i class="fa fa-plus"></i>
                        New
                    </router-link>
                </p>
                <p class="fst-italic">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <form action="">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col">
                            <input type="text" class="form-control" placeholder="Seach Name">
                        </div>
                        <router-link to="" class="col">
                            <input type="submit" class="btn btn-outline-dark" value="Submit">
                        </router-link>
                        <!-- <div class="col">
                            <input type="submit" class="btn btn-outline-dark" value="Submit">
                        </div> -->
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- spiner -->
    <div v-if="loading">
        <div class="container">
            <div class="row">
                <div class="col">
                    <SpinnerNav/>
                </div>
            </div>
        </div>
    </div>

    <div v-if="!loading&&errorMessage">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h3 class="h3 text-danger fw-bold">{{ errorMessage }}</h3>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-3" v-if="contacts.length >0 ">
        <div class="row">
            <div class="col-md-6" v-for="contact of contacts" :key="contact">
                <div class="card my-2 list-group-item-success shadow-lg " >
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-4">
                                <img :src="contact.photo" alt="" class="contact-img">
                            </div>
                            <div class="col-sm-7">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        Tên sản phẩm :
                                        <span class="fw-bold">{{ contact.name }}</span>
                                    </li>
                                    <li class="list-group-item">    
                                        Giá :
                                        <span class="fw-bold">{{ contact.cost }}</span>
                                    </li>
                                    <li class="list-group-item">
                                        Giá gốc :
                                        <span class="fw-bold">{{ contact.discount }}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-sm-1 d-flex flex-column justifi-content-center align-items-center">
                                <router-link :to="`/contacts/view/${contact.id}`" class="btn btn-warning ">
                                    <i class="fa fa-eye"></i>
                                </router-link>
                                <router-link :to="`/contacts/edit/${contact.id}`" class="btn btn-warning my-1">
                                    <i class="fa fa-pen"></i>
                                </router-link>
                                <button class="btn btn-danger" @click="deleteContact(contact.id)">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <Footer/>
</template>
<script>
import Footer from '@/components/Footer.vue';
import SpinnerNav from '@/components/SpinnerNav.vue';
import { ContactService } from '@/services/ContactService';
import NavbarAd from '@/components/NavbarAd.vue';

    export default{
    name: "ContacManager",
    data: function () {
        return {
            loading: false,
            contacts: [],
            errorMessage: null
        };
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ContactService.getAllContacts();
            this.contacts = response.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    methods: {
        deleteContact: async function(contactId){
            try {
                this.loading =true
                let response = await ContactService.deleteContact(contactId)
                if(response){
                    let response = await ContactService.getAllContacts()
                    this.contacts= response.data
                    this.loading= false;
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    components: { SpinnerNav, Footer, NavbarAd }
}
</script>
<style scoped>

</style>