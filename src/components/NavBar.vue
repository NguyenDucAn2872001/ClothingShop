<template>
    <nav class="navbar navbar-dark bg-danger navbar-expand-sm">
        <div class="container" style="height: 50px;">
            <router-link to="/" class="navbar-brand">
                <i class="fa fa-mobile"></i>
                FASHION SHOP
            </router-link>
            <router-link to="/Home/HomeViewMan" class="text-light item" style="text-decoration: none">
                MAN
            </router-link>
            <router-link to="/Home/HomeViewMan" class="text-light item" style="text-decoration: none">
                WOMAN
            </router-link>
            <router-link to="/Home/HomeViewMan" class="text-light item" style="text-decoration: none">
                SHOES
            </router-link>
            <router-link to="/Home/HomeViewMan" class="text-light item" style="text-decoration: none">
                ACCESSORY
            </router-link>
            <div class="icon_shoping item" >
                <i class="fas fa-shopping-cart text-light mr-1"></i>
            </div>
        </div>
    </nav>
</template>
<script>
    export default{ 
        name: "NavBar"
    }
</script>
<style scoped>
    .item{
        cursor: pointer;
    }
</style>