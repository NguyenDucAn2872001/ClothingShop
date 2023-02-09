<template>
    <NavbarAd/>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="h3 text-success  fw-bold mt-2">Thêm sản phẩm</p>
                <p class="fst-italic">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="submitCreate()">
                    <div class="mb-2">
                       <input required v-model="contact.name" type="text" class="form-control" placeholder="Tên sản phẩm">
                    </div>
                    <div class="mb-2">
                       <input required v-model="contact.photo" type="text" class="form-control" placeholder="Ảnh sản phẩm">
                    </div>
                    <div class="mb-2">
                       <input required v-model="contact.cost" type="text" class="form-control" placeholder="Giá">
                    </div>
                    <div class="mb-2">
                       <input required v-model="contact.discount" type="text" class="form-control" placeholder="Giảm giá">
                    </div>
                    <div class="mb-2">
                       <input required v-model="contact.warehouse" type="text" class="form-control" placeholder="Kho hàng">
                    </div>
                    <div class="mb-2">
                       <input required v-model="contact.datecheckin" type="text" class="form-control" placeholder="Ngày nhập kho">
                    </div>
                    <div class="mb-2">
                        Nhóm sản phẩm
                       <select required v-model="contact.groupId" class="form-control" placeholder="Nhóm sản phẩm" v-if="groups.length>0">
                            <option :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
                        </select>
                    </div>
                    <div class="mb-2">
                       <input type="submit" class="btn btn-success" value="create">
                    </div>
                </form>
            </div>
            <div class="col-md-4" v-if="contact.photo">
                <img :src="contact.photo" class="contact-img">
            </div>
        </div>
    </div>
</template>
<script>
import NavbarAd from '@/components/NavbarAd.vue';
import { ContactService } from '@/services/ContactService';

    export default{
    name: "AddToCart",
    data: function () {
        return {
            contact: {
                name: "",
                photo: "",
                cost: "",
                discount: "",
                warehouse: "",
                datecheckin: "",
                groupId: "",
            },
            groups: []
        };
    },
    created: async function () {
        try {
            let response = await ContactService.getAllGroups();
            this.groups = response.data;
        }
        catch (error) {
            console.log(error);
        }
    },
    methods: {
        submitCreate: async function () {
            try {
                let response = await ContactService.createContact(this.contact);
                if (response) {
                    return this.$router.push("/contacts");
                }
                else {
                    return this.$router.push("/contacts/add");
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    },
    components: { NavbarAd }
}
</script>
<style scoped>

</style>