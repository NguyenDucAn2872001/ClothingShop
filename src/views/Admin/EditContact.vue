<template>
    <NavbarAdVue/>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="h3 text-success  fw-bold" >Chỉnh sửa sản phẩm</p>
                <p class="fst-italic">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="updateSubmit()" >
                    <div class="mb-2">
                       <input v-model="contacts.name" type="text" class="form-control" placeholder="Tên sản phẩm">
                    </div>
                    <div class="mb-2">
                       <input v-model="contacts.photo" type="text" class="form-control" placeholder="Ảnh sản phẩm">
                    </div>
                    <div class="mb-2">
                       <input v-model="contacts.cost" type="text" class="form-control" placeholder="Giá">
                    </div>
                    <div class="mb-2">
                       <input v-model="contacts.discount" type="text" class="form-control" placeholder="Giá gốc">
                    </div>
                    <div class="mb-2">
                       <input v-model="contacts.warehouse" type="text" class="form-control" placeholder="Kho hàng">
                    </div>
                    <div class="mb-2">
                       <input v-model="contacts.datecheckin" type="text" class="form-control" placeholder="Ngày nhập kho">
                    </div>
                    <div class="mb-2">
                        Nhóm sản phẩm
                       <select v-model="contacts.groupId" class="form-control" placeholder="Nhóm sản phẩm" v-if="groups.length>0">
                            <option :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
                        </select>
                    </div>
                    
                    <div class="row">
                        <div class="col">
                            <div class="mb-2">
                                <input type="submit" class="btn btn-success" value="Update">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <router-link to="/contacts" class="btn btn-success">
                                Back
                            </router-link>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img :src="contacts.photo" alt="" class="contact-img">
            </div>
        </div>
    </div>
</template>
<script>
import { ContactService } from '@/services/ContactService';
import NavbarAdVue from '@/components/NavbarAd.vue';
    export default{
        name: "EditContact",
        data :function(){
            return{
                contactId : this.$route.params.contactId,
                contacts:{
                    name:'',
                    photo:'',
                    cost:'',
                    discount:'',
                    warehouse:'',  
                    datecheckin:'',
                    groupId:'',  
                },
                groups:[]
            }
        },
        created : async function(){
            try {
                let response= await ContactService.getContact(this.contactId)
                this.contacts= response.data
                let GroupResponse =await ContactService.getAllGroups();
                this.groups=GroupResponse.data
                
            } catch (error) {
                console.log(error);
            }
        },
        methods:{
            updateSubmit:async function(){
                try {
                    let response = await ContactService.updateContact(this.contacts, this.contactId);
                    if(response){
                        return this.$router.push('/contacts')
                    }
                    else{
                        return this.$router.push(`/contacts/edit/${this.contactId}`)
                    }
                    
                } catch (error) {
                    console.log(error);
                }
            }
        },
    components: {NavbarAdVue }
    }
</script>
<style scoped>

</style>