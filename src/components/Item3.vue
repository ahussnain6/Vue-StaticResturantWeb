<template>
<div class="item-77">
<div class="item-8">
  <h1 class="mid-1">Your Favourite Food Delivery</h1>
</div>
<div class="item-9">
    <div class="item-22">
        <img src="https://res.cloudinary.com/dlcyf2qtl/image/upload/v1717936190/watch-removebg-preview_pvptot.png" alt="" class="img-55">
        <h2 class="head-99 m-7">Always on Time</h2>
        <p class="para-55">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum.</p>
    </div>
    <div class="item-22">
        <img src="https://res.cloudinary.com/dlcyf2qtl/image/upload/v1717935884/delivery-removebg-preview_bv0pds.png" class="img-55" alt="">
        <h2 class="head-99 m-7">Fast Delivery</h2>
        <p class="para-55 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum.</p>
    </div>
    <div class="item-22">
        <img src="https://res.cloudinary.com/dlcyf2qtl/image/upload/v1717936465/icon-removebg-preview_bvbtle.png" alt="" class="img-56" >
        <h2 class="head-99">Hot & Fresh</h2>
        <p class="para-55">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum.</p>
    </div>
</div>
</div>

</template>
<script>
export default {
    name:"Item3"
}
</script>
<style scoped>
.m-7{
    margin-top: -1vh;
}
.para-55{text-align: center;font-family: "Nunito", sans-serif;margin-top: -2vh;}
.head-99{
    font-family: "Nunito", sans-serif;
    font-weight: 990;
    font-size: 1rem;}
.item-22{
    padding: 0vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
height: 50%;
width: 25%;
border-radius: 1.2rem;
/* border: 2px solid yellowgreen; */
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
.img-55{
    background-color: transparent;
    height: 70px;
    width: 100px;
    object-fit: fill;
}
.img-56{
    background-color: transparent;
    height: 50px;
    width: 80px;
    object-fit: fill;
}
.mid-1{
    font-family: "Nunito", sans-serif;
    text-align: center;
    font-weight: 990;
}
.item-77{
    margin-top:12vh ;
    /* border: 2px solid black; */
    height: 70vh;
    width: 100%;
    background: url("https://img.freepik.com/free-photo/flat-lay-mexican-food-composition-with-chilis_23-2148131282.jpg?t=st=1717932771~exp=1717936371~hmac=587554196e82f3e9f3c85d5bc4cb8853e6670cab5c700251156f9c64b8c12cae&w=826");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
}
.item-8{
 width: 100%;
 height: 18%;
 /* border: 2px solid blue; */
}
.item-9{
    height: 82%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4vh;
    /* border: 2px solid red; */
}
@media screen and ( 550px <= width < 665px) {
    .item-9{
    height: 82%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1vh;
    /* border: 2px solid red; */
}
.item-22{
    padding: 0vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
height: 50%;
width: 30%;
border-radius: 1.2rem;
/* border: 2px solid yellowgreen; */
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
}
@media screen and (width < 550px){
    .item-22{
        /* border: ; */
    padding: 0vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
height: 50%;
width: 60%;
/* margin-top: -4vh; */
border-radius: 1.2rem;
/* border: 2px solid purple; */
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
 rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
  rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
   rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px,
     rgba(0, 0, 0, 0.09) 0px 8px 4px,
      rgba(0, 0, 0, 0.09) 0px 16px 8px,
       rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
    .item-77{
        margin-bottom: 7vh;
    margin-top: 12vh;
    /* border: 2px solid red; */
    height: 115vh;
    width: 99%;
    background: url("https://img.freepik.com/free-photo/flat-lay-mexican-food-composition-with-chilis_23-2148131282.jpg?t=st=1717932771~exp=1717936371~hmac=587554196e82f3e9f3c85d5bc4cb8853e6670cab5c700251156f9c64b8c12cae&w=826");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
}
.item-8{
 width: 100%;
 height: 12%;
 /* border: 2px solid blue; */
}
.item-9{
    /* margin-top: -3vh; */
    height: 96%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vh;
    /* border: 2px solid red; */
}
.mid-1{
    font-family: "Nunito", sans-serif;
    text-align: center;
    font-weight: 890;
    font-size: 1.3rem;
    /* border: 2px solid black; */
    padding-bottom: 1rem !important;
}

}

</style>