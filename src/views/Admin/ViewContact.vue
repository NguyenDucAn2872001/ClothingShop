<template>
    <NavbarAd/>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="h3 text-success  fw-bold">View Contact</p>
                <p class="fst-italic">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    </div>
    <div class="container" >
        <div class="row align-items-center">
            <div class="col-md-4">
                <img :src="contact.photo" alt="" class="contact-img">
                <!-- <input type="submit" value="Back" class="btn btn-success"> -->
            </div>
            <div class="col-md-6">
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
                        Giảm giá :
                        <span class="fw-bold">{{ contact.discount }}</span>
                    </li>
                    <li class="list-group-item">
                        Kho Hàng :
                        <span class="fw-bold">{{ contact.warehouse }}</span>
                    </li>
                    <li class="list-group-item">
                        Nhóm sản phẩm :
                        <span class="fw-bold">{{ contact.groupId }}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col">
                <router-link to="/contacts" class="btn btn-success">
                    <i class="fa fa-arrow-alt-circle-left"></i>
                    Back
                </router-link>
            </div>
        </div>
        <!-- <input type="submit" value="Back" class="btn btn-success"> -->
    </div>
</template>
<script>
import NavbarAd from '@/components/NavbarAd.vue';
import { ContactService } from '@/services/ContactService';

    export default{
    name: "ViewContact",
    data: function () {
        return {
            contactId: this.$route.params.contactId,
            loading: false,
            contact: {},
            errorMessage: null
        };
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ContactService.getContact(this.contactId);
            let groupResponse = await ContactService.getGroup(response.data);
            response.data.groupId = groupResponse.data.name;
            this.contact = response.data;
            this.loading = false;
        }
        catch (error) {
            console.log(error);
        }
    },
    components: { NavbarAd }
}
</script>
<style scoped>

</style>