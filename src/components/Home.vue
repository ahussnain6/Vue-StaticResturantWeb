<template>
<div class="home-1">
<div class="part-1">
    <div class="side-22">
     <h2 class="new">New</h2>       
      <h1 class="head-1">FULL BEEF THE 
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc3q-x8kXDDB5KzKdKzkM8g04IeierpLk5cA&s" alt="" 
         class="img-2"
         ><br> DOUBLE DECKER</h1>
      <div class="side3">
      <button class="btn-1">Place Order</button>
       <button class="btn-1">Get Membership</button>
      </div>
    </div> 
   </div>
   <div class="part-2">
    <img src="https://img.freepik.com/premium-photo/classic-beef-burger-with-yellow-backbround_198067-243864.jpg?size=626&ext=jpg&ga=GA1.1.2088459960.1716871457&semt=ais_user" alt="" class="img-1"  >
   </div>
</div>
<item-component></item-component>
<item1-component></item1-component>
<item2-component></item2-component>
<item3-component></item3-component>
</template>
<script>
import ItemComponent from "./Item.vue";
import Item1Component from "./Item1.vue";
import Item2Component from "./Item2.vue";
import Item3Component from "./Item3.vue";
 export default {
    name : "Home",
    components : {
   ItemComponent,
   Item1Component,
   Item2Component,
   Item3Component
   }
 }
</script>
<style scoped>
  .home-1{
   /* background: linear-gradient(to right, black,darkgrey); */
   z-index: 1000;
   width: 99.99%;
   height: 60vh;
   /* border: 2px solid black; */
   display: flex;
   /* border: 1px solid orange; */

   justify-content: center;
   align-items: center;
  }
  .part-1{
height: 60vh;
width: 50%;
/* border: 1px solid red; */
}
  .part-2{
   height: 60vh;
width: 50%;
}
.img-1{
   width: 100%;
   height: 100%;
      clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);}
.img-2{
   height: 50px;
   width: 70px;
   margin-top: 1vh;}
.side-22{
   font-family: "Nunito", sans-serif;
   display: flex;
   flex-direction: column;
   justify-content:flex-start;
   align-items: flex-start;
   margin: 0 13vh;
   padding: 0vh 2vh;
   /* border: 2px solid white; */
   width:80%;
   height: 100%;
}
.side3{
   display: flex;
   gap: 1vh;}
.new{
   margin-top: 12vh;
   background-color: red;
   color: white;
   padding: .6vh 1.5vh;
   box-shadow: rgb(245, 242, 242) 0px 5px 15px;
   border-radius: 1.1rem;
}
.head-1{
   margin-top: 0vh;
   color: black;
   font-size: 2.9rem;
}
.btn-1{
   background-color: red;
   border: none;
   padding: 1.5vh 2.5vh;
   border-radius: 1rem;
   font-size: 1.3rem;
   font-weight: bold;
   color: white;
}
@media screen and (900px < width < 1070px){
   .part-1{
height: 60vh;
width: 60%;
/* border: 1px solid red; */
}
  .part-2{
   height: 60vh;
width: 40%;
}
}
@media screen and (765px < width <= 900px){
   .part-1{
height: 60vh;
width: 70%;
/* border: 1px solid red; */
}
  .part-2{
   height: 60vh;
width: 30%;
}
}
@media screen and (width <= 765px){
   .part-1{
height: 64vh;
width: 99.9%;
background: url("https://images.pexels.com/photos/12325128/pexels-photo-12325128.jpeg?auto=compress&cs=tinysrgb&w=600");
background-size: 100% 100%;
background-repeat: no-repeat;
}
  .part-2{
   display: none;
   height: 60vh;
   width: 30%;
}
.img-2{
   display: none;
}
.head-1{
   color: white !important;
   /* color: red !important; */
}
.side-22{
   font-family: "Nunito", sans-serif;
   display: flex;
   flex-direction: column;
   justify-content:flex-start;
   align-items: flex-start;
   margin: 0 0vh;
   padding: 0vh 2vh;
   /* border: 2px solid gray; */
   width:90%;
   height: 100%;
}
.head-1{
   margin-top: 0vh;
   color: black;
   font-size: 2.1rem;
}
.btn-1{
   background-color: red;
   border: none;
   padding: 1.3vh 2vh;
   border-radius: 1rem;
   font-size: 1.1rem;
   font-weight: bold;
   color: white;
} }
</style>
