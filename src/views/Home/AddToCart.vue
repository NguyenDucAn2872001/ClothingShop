<template>
    <div class="container">
        <div class="list-blog">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sunt eveniet maxime magni in, nostrum
                facilis, temporibus, quam facere sint est blanditiis harum dicta. Tempore suscipit ut hic. Deleniti,
                qui.</p>
        </div>
        <div id="app">
            <div class="cart">Giỏ hàng ({{ cardNumber }})</div>
            <div class="product">
                <div class="product-image">
                    <div class="image">
                        <img v-bind:src="this.contact.image" alt="">
                    </div>
                </div>
                <div class="product-content">
                    <h3 class="title">
                    <a v-bind:href="url" v-bind:target="target">{{ title }}</a>
                    </h3>
                    <p class="brand">Thương hiệu: No brand</p>
                    <p class="quantity" v-if="getProduct.quantity > 0">Còn lại: {{ getProduct.quantity }} Sản phẩm</p>
                    <p class="quantity" v-if="getProduct.quantity <= 0">Sản phẩm đã hết hàng</p>

                    <div class="wrapper-price">
                        <div class="final-price">{{ formatFinalPrice }}</div>
                        <div class="origin-price">{{ formatOriginalPrice }}</div>
                        <div class="sale-price">-{{sale * 100}}%</div>
                    </div>
                    <div class="wrapper-color">
                        <div class="text">Màu sắc</div>
                        <div class="list-color">
                            <p class="color-text">{{ getProduct.textColor }}</p>
                            <ul>
                                <li 
                                    v-for="(item, index) in this.listProductDetail"
                                    v-bind:class="classActive(index)"
                                    v-bind:key="index"
                                    v-on:click="handleClickColor($event, index)">
                                    <img v-bind:src="item.image" v-bind:alt="item.textColor">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button 
                        v-on:click="handleAddToCart"
                        class="add-to-cart">Add to cart</button>
                </div>          
            </div>
            <div class="description">
                <ul class="extra-info">
                    <li v-for="item in this.listDesc" v-bind:key="item">{{ item }}</li>
                </ul>
                <h2>Chất liệu bền chặt&nbsp;</h2>
                <div v-html="description"></div>
            </div>
                
        </div>
    </div>
</template>
<script>
import { ContactService } from '@/services/ContactService';
    export default{
        name: "Home1Vue",
        data: function() {
            return{
                contact: {},
                contactId : this.$route.params.contactId,
                title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
                url: 'https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html',
                target: '_blank',
                price: 20000,
                sale: 0.5,
                selectedProduct: 1,
                cardNumber: 1,
                listProductDetail: [
                    {
                        image: './images/red.jpg',
                        quantity: 0,
                        textColor: 'Màu Đỏ'
                    }, {
                        image: './images/blue.jpg',
                        quantity: 8,
                        textColor: 'Màu Xanh'
                    }, {
                        image: './images/black.jpg',
                        quantity: 2,
                        textColor: 'Màu Đen'
                    }, 
                ],
                listDesc: [
                    'Chất liệu: polyester và thun',
                    'Thoát mồ hôi tốt',
                    'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',
                    'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',
                    'Chất liệu: polyester và thun'
                ],
                description: '<p>M&ocirc; tả: &Aacute;o thun cổ tr&ograve;n thể thao Hiye chuy&ecirc;n được may từ chất liệu nilon tho&aacute;ng m&aacute;t v&agrave; tho&aacute;t mồ h&ocirc;i tốt, kết hợp th&ecirc;m sợi thun tạo độ co gi&atilde;n gi&uacute;p người ti&ecirc;u d&ugrave;ng thoải m&aacute;i khi mặc</p> ',
                testDescription: `<p>Test hjskhfk h</p>
                <p><strong><span style="background-color:#8e44ad">fhsdjkfhsk&nbsp; hsdjkfk&nbsp;</span></strong></p>`
        }
    },
    created: async function () {
        let response = await ContactService.getContact(this.contactId);
        this.contact = response.data;

    },
    methods: {
        handleClickColor(e, index) {
            this.selectedProduct = index;
            // console.log(e, index, this);
        },
        classActive(index) {
            return {
                active: this.selectedProduct === index
            }
        },
        handleAddToCart(e) {
            if(this.cardNumber + 1 > this.getProduct.quantity) {
                alert('So luong khong du');
            } else {
                this.cardNumber = this.cardNumber + 1;
            }
            console.log(e.target)
        }
    },
    computed: {
        formatOriginalPrice() {
            var number = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        formatFinalPrice() {
            var number = this.price - this.sale * this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        getProduct() {
            let index = this.selectedProduct;
            return this.listProductDetail[index];
        }
    }
    }
</script>
<style>
body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px;
}
img {
    max-width: 100%;
}
.product {
    max-width: 700px;
    display: flex;
    margin-top: 20px;
    position: relative;
}
.product .product-image {
    flex-basis: 40%;
    max-width: 40%;
    padding-right: 30px;
}
.product .product-content {
    flex-basis: 60%;
}
.product-image .image {
    width: 100%;
    border: 1px solid #ccc;
}
.product-image .image img {
    display: block;
}
.title {
    margin-top: 0;
}
.title a {
    color: #333;
    text-decoration: none;
}
.cart {
    display: inline-block;
    padding: 15px 10px;
    border: 1px solid #ccc;
}
.wrapper-price .final-price {
    color: #f57224;
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 5px;
}
.wrapper-price .origin-price,
.wrapper-price .sale-price {
    display: inline-block;
    font-size: 14px;
    color: #ccc;
    vertical-align: middle;
}
.wrapper-price .sale-price {
    color: #333;
    margin-left: 5px;
    padding: 3px;
    font-size: 10px;
    border-radius: 5px;
    border: 1px solid #f57224;
}

.wrapper-color {
    display: flex;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #eee;
}
.wrapper-color .text {
    width: 100px;
    min-width: 100px;
}
.wrapper-color p {
    margin-top: 0;
    margin-bottom: 10px;
}
.list-color ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
}
.list-color ul li {
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
    margin-right: 20px;
}
.list-color ul li:hover,
.list-color ul li.active {
    border-color: #f57224;
}

.description {
    max-width: 700px;
}
.description .extra-info {
    padding-left: 0;
    list-style-position: inside;
}
.add-to-cart {
    border: 1px solid #ffb916;
    background: #ffb916;
    color: #fff;
    display: block;
    padding: 12px 30px;
    margin-top: 30px;
    text-transform: uppercase;
    font-size: 16px;
    cursor: pointer;
}
header {
    color: #fff;
    padding: 15px 30px;
    background-color: #3498db;
}
footer {
    color: #fff;
    padding: 15px 30px;
    background-color: #34495e;
}
header h1, footer h1 {
    margin: 0;
}
</style>