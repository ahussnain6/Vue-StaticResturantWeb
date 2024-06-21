<template>
 <div class="footer">
   <div class="content">
     <div class="left box">
       <div class="upper">
         <div class="topic">About us</div>
         <p>Welcome to BurgerTown, where passion meets flavor. We craft mouthwatering burgers using premium ingredients for an unforgettable dining experience. Explore our menu today!</p>
       </div>
       <div class="lower">
         <div class="topic">Contact us</div>
         <div class="phone m-91">
           <a href="#"><i class="fas fa-phone-volume"></i>+92 3274666681</a>
         </div>
         <div class="email m-91">
           <a href="#"><i class="fas fa-envelope"></i>ahussnain67h@gmail.com</a>
         </div>
       </div>
     </div>
     <div class="middle box">
       <div class="topic">Our Services</div>
       <div><a href="#">In-Restaurant Dining Experience</a></div>
       <div><a href="#">Convenient Takeout Options</a></div>
       <div><a href="#">Efficient Drive-Thru Service</a></div>
       <div><a href="#">Reliable Home Delivery Service</a></div>
       <div><a href="#">Personalized Catering Services</a></div>
       <div><a href="#">Streamlined Online Ordering</a></div>
     </div>
     <div class="right box">
       <div class="topic">Subscribe us</div>
       <form action="#">
         <input type="text" placeholder="Enter email address">
         <input type="submit" name="" value="Send" >
         <div class="media-icons">
           <a href="#"><img src="https://res.cloudinary.com/dlcyf2qtl/image/upload/v1718934925/facebook-removebg-preview_ctgz97.jpg" class="img-99" alt=""></a>
           <a href="#"><img src="https://res.cloudinary.com/dlcyf2qtl/image/upload/v1718934856/instgram-removebg-preview_l5eele.jpg" class="img-99" alt=""></a>
           <a href="#"><img src="https://res.cloudinary.com/dlcyf2qtl/image/upload/v1718935101/tweet1-removebg-preview_patpfm.jpg" class="img-99" alt=""></a>
           <a href="#"><img src="https://res.cloudinary.com/dlcyf2qtl/image/upload/v1718935213/you-removebg-preview_mlnp5x.jpg" class="img-99" alt=""></a>
           <a href="#"><img src="https://res.cloudinary.com/dlcyf2qtl/image/upload/v1718935237/you-removebg-preview_1_dppjqm.jpg" class="img-99" alt=""></a>
         </div>
       </form>
     </div>
   </div>
   <!-- <CoFacebook />  -->
   <div class="bottom">
     <p class="m-90">Copyright © 2024 <a href="#">BurgerTown</a> All rights reserved</p>
   </div>
  </div>


</template>
<script>
export default {
   name:"Footer",
}
</script>

<style scoped>
 .img-99{
  height: 100%;
  width: 100%;
  background-color: black !important;
  color: black;
 }
.footer{
  width: 100%;
  position: static;
  bottom: 0;
  left: 0;
  background: #111;
  font-family: "Questrial", sans-serif;}
.footer .content{
  max-width: 100%;
  margin: auto;
  padding: 20px!important;
  display: flex;
  font-family: "Questrial", sans-serif;
  flex-wrap: wrap;
  justify-content: space-between;
}
.footer .content p,a{
  color: #fff;
  text-decoration: none;
}
.footer .content .box{
  width: 29%;
  transition: all 0.4s ease;
}
.footer .content .topic{
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 16px;}
.footer .content p{
  text-align: justify;
}
.footer .content .lower .topic{
  margin: 24px 0 5px 0;
}
.footer .content .lower i{
  padding-right: 16px;
}
.footer .content .middle{
  padding-left: 80px;
}
.footer .content .middle a{
  line-height: 32px;
}
.footer .content .right input[type="text"]{
  height: 45px;
  width: 100%;
  outline: none;
  color: #d9d9d9;
  background: #000;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 17px;
  border: 2px solid #222222;
}
.footer .content .right input[type="submit"]{
  height: 42px;
  width: 100%;
  font-size: 18px;
  color: #d9d9d9;
  background: red;
  outline: none;
  border-radius: 5px;
  letter-spacing: 1px;
  cursor: pointer;
  margin-top: 12px;
  border: 2px solid #eb2f06;
  transition: all 0.3s ease-in-out;
}
.content .right input[type="submit"]:hover{
  background: none;
  color:  #eb2f06;
}
.m-91{
  margin-left:-2vh !important;
}
.footer .content .media-icons a{
  font-size: 16px;
  height: 45px;
  width: 48px;
  display: inline-block;
  text-align: center;
  line-height: 43px;
  border-radius: 5px;
  border: 2px solid #222222;
  margin: 30px 5px 0 0;
  transition: all 0.3s ease;
}
 
.footer .bottom{
  width: 100%;
  text-align: right;
  color: #d9d9d9;
  padding: 0 38px 11px 0;
}
.footer .bottom a{
  /* padding-right: 2vh; */
  color: #eb2f06;
}
.m-90{
  margin-right: 2rem;
}
.footer a{
  transition: all 0.3s ease;
}
.footer a:hover{
  color: #eb2f06;
}
@media (max-width:1100px) {
  .footer .content .middle{
    padding-left: 50px;
  }
}
@media (max-width:950px){
  .footer .content .box{
    width: 40%;
  }
  .content .right{
    margin-top: 40px;
  }
}
@media (max-width:560px){
  .footer{
    position: relative;
  }
  .footer .content .box{
    width: 100%;
    margin-top: 30px;
  }
  .footer .content .middle{
    padding-left: 0;
  }
  .m-90{
    text-align: center;
  }
} 
</style>