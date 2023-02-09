<template>
    <NavBar/>
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
  <div class="container mt-3" v-if="contacts.length >0 ">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1" v-for="contact of contacts" :key="contact">
                <div class="card product-item border-0 mb-4">
                    <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img class="w-100 imgelement" :src="contact.photo" alt="">
                    </div>
                    <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 class="text-truncate mb-3 text_font">{{ contact.name }}</h6>
                        <div class="d-flex justify-content-center">
                            <h6 class="cost">{{ contact.cost }}</h6><h6 class="text-muted ml-2 text_font"><del>{{ contact.discount }}</del></h6>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light border">
                        <router-link :to="`/Home/ViewDetail/${contact.id}`" class="btn btn-sm text-dark p-0 text_font">
                            <i class="fas fa-eye text-danger mr-1"></i>View Detail
                        </router-link>
                        <router-link to="/Home/AddToCart" >
                            <a href="" class="btn btn-sm text-dark p-0 text_font"><i class="fas fa-shopping-cart text-danger mr-1"></i>Add To Cart</a>
                        </router-link>
                        <!-- <a href="" class="btn btn-sm text-dark p-0 text_font"><i class="fas fa-shopping-cart text-danger mr-1"></i>Add To Cart</a> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
  <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue';
import { ContactService } from '@/services/ContactService';
import NavBar from '@/components/NavBar.vue';
export default {
  name: 'HomeView',
  components: { Footer, NavBar },
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
    

}
</script>
<style>
    .text_font{
        font-family: "Comic Sans MS", cursive, sans-serif;
    }
    .cost{
        padding-right: 10px;
    }
    .imgelement{
        height: 350px;
        object-fit: cover;
    }
</style>