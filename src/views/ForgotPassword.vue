<template>
    <div class="container d-flex flex-column">
      <div class="row align-items-center justify-content-center
          min-vh-100">
        <div class="col-12 col-md-8 col-lg-4">
          <div class="card shadow-sm">

            <div class="card-body" v-if="this.check==true">
              <div class="mb-4">
                <h5>Forgot Password?</h5>
                <p class="mb-2">Enter your registered email ID to reset the password
                </p>
              </div>
              <form>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" id="email" class="form-control" v-model="this.accuonts.name" name="email" placeholder="Enter Your Email">
                </div>
                <div class="mb-3 d-grid" >
                  <button type="submit" class="btn btn-primary" @click="submitCreate()" >
                    Reset Password
                  </button>
                </div>
                <span >Don't have an account? 
                  <router-link to="/Login/NewLogin" >
                    <a href="sign-in.html">sign in</a>
                  </router-link>
                </span>
              </form>
            </div>
            <div class="card-body" v-else>
                <div class="mb-4">
                    <h5>Forgot Password Success</h5>
                    <p class="mb-2">Below is your account and password </p>
                </div>
                <div class="row">
                    <div class="col-4">
                        Tài Khoản: 
                    </div>
                    <div class="col">
                        {{this.accuonts.name  }}
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        Mật Khẩu: 
                    </div>
                    <div class="col">
                        {{ this.accuonts.pass }}
                    </div>
                </div>
                <div class="mt-3 d-grid" >
                  <router-link to="/Login" >
                    <button type="submit" class="btn btn-primary"  >
                      Back to Login
                    </button>
                  </router-link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { ContactService } from '@/services/ContactService';
  export default{
    name: "ForgotPassword",
    data:function(){
        return{
          contactId : this.$route.params.contactId,
          check:true,
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
                if (this.accuonts.name==this.accuont[i].name ) {
                  this.accuonts.pass=this.accuont[i].pass
                  this.check=!this.check
                  break
                }
                else{
                  this.accuonts.pass=null
                }
            }
            if(this.accuonts.pass==null){
              alert("Tài khoản không tồn tại")
            }        
          } 
          catch (error) {
              console.log(error);
          }
      }
    }
  }
</script>