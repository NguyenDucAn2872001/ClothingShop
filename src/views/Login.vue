<template>
    <section class="vh-100 ">
        <div class="container-fluid h-custom ">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    class="img-fluid" alt="Sample image">
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <!-- @submit.prevent="submitCreate()" -->
                    <form @submit.prevent="submitCreate()">
                        <div class="form-outline mb-4">
                            <input required v-model="accuonts.name" type="email" id="form3Example3" class="form-control form-control-lg"
                            placeholder="Nhập địa chỉ Email" />
                            <label class="form-label" for="form3Example3">Địa chỉ Email</label>
                        </div>
                        <div class="form-outline mb-3">
                            <input required v-model="accuonts.pass" type="password" id="form3Example4" class="form-control form-control-lg"
                            placeholder="Nhập  mật khẩu" />
                            <label class="form-label" for="form3Example4">Mật Khẩu</label>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="form-check mb-0">
                            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                            <label class="form-check-label" for="form2Example3">
                                Remember me
                            </label>
                            </div>
                            <router-link to="/Login/ForgotPassword" >
                                <a href="#!" class="text-body">Forgot password?</a>
                            </router-link>
                            
                        </div>
                        <div class="text-center text-lg-start mt-4 pt-2">
                            <input type="submit" value="Đăng Nhập" class="btn btn-primary btn-lg"
                            style="padding-left: 2.5rem; padding-right: 2.5rem;">
                            <p class="small fw-bold mt-2 pt-1 mb-0">Bạn chưa có tài khoản? 
                                <router-link to="/Login/NewLogin" >
                                    <a href="#!" class="link-danger">Đăng ký</a>
                                </router-link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
            <div class="text-white mb-3 mb-md-0"> FASHION SHOP </div>
            <div>
                <a href="#!" class="text-white me-4">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#!" class="text-white me-4">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#!" class="text-white me-4">
                    <i class="fab fa-google"></i>
                </a>
                <a href="#!" class="text-white">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
            <!-- Right -->
        </div>
    </section>
</template>
  
<script>
import { ContactService } from '@/services/ContactService';
    export default {
    name: 'LogIn',
    data: function(){
        return{
            contactId : this.$route.params.contactId,
            accuont:{},
            accuonts:{
                name:'',
                pass:''
            }
        }
    },
    created : async function(){
            try {
                let response = await ContactService.getAccuont(this.id);
                this.accuont=response.data
                console.log(this.accuonts.name);
                console.log(this.accuont.name[0]);
            } catch (error) {
                console.log(error);
            }
        },
    methods:{
        submitCreate:async function(){
            console.log(this.accuont[0].name);
            try {
                for (let i = 0; i < this.accuont.length; i++) {
                    if(this.accuonts.name=="admin@admin.com" && this.accuonts.pass=="admin" ){
                        return this.$router.push('/contacts')
                    }
                    else if (this.accuonts.name==this.accuont[i].name && this.accuonts.pass==this.accuont[i].pass ) {
                        return this.$router.push('/Home')
                    }
                    else{
                        console.log("hello");
                        // alert("Tài khoản hoặc mật khẩu không đúng , vui lòng nhập lại ")
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
  }
</script>
<style>
    .butonicon{
        border-radius: 50%;
    }
    .divider:after,
    .divider:before {
        content: "";
        flex: 1;
        height: 1px;
        background: #eee;
    }
    .h-custom {
        height: calc(100% - 73px);
    }
    @media (max-width: 450px) {
        .h-custom {
        height: 100%;
    }
    }
</style>