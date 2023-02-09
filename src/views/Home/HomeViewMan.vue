<template>
    <div class="container mt-3" >
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
                        <a href="" class="btn btn-sm text-dark p-0 text_font"><i class="fas fa-shopping-cart text-danger mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <Footer/>
</template>
<script>
import Footer from '@/components/Footer.vue'
import { ContactService } from '@/services/ContactService';
    export default{
        name:"HomeViewMan",
        components:{Footer},
        data: function () {
            return {
                contacts: {},
            };
        },
        created: async function () {
            let response = await ContactService.getAllContacts();
            for (let i = 0; i < response.data.length; i++) {
                    if(response.data[i].groupId=="1"){
                        this.contacts[i] = response.data[i];
                    }
                }
        },
    }

</script>
<style>
    .imgelement{
        height: 350px;
        object-fit: cover;
    }
</style>