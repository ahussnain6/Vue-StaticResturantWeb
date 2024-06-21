<template>
<nav>
      <input type="checkbox" id="check">
      <label for="check" class="checkbtn">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJR9gvk7ErohaWnCOPp2tog_acjY_K-FU4Q&s" class="fas fa-bars" id="img-1" alt="">
      </label>
      <label class="logo">BurgerTown</label>
      <ul>
        <li><router-link class="a active" to="/">Home</router-link></li>
        <li><router-link class="a" to="#">Cart</router-link></li>
        <li><router-link class="a" to="#">Details</router-link></li>
        <li><router-link class="a" to="/">Login</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
</template>

<script>
export default {
    name: "HeaderComponent",
}
</script>
<style scoped>
#img-1{
  margin-top: 1.1rem;
  width: 60px;
  height: 45px;
}
.a{
  cursor: pointer;
}
*{
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}
#img-1{
  margin-right: -4vh;
  height: 35px;
  object-fit: cover;
}
body{
  font-family: montserrat;
}
nav{
  background: black;
  color: white;
  height: 75px;
  width: 100%;
  /* border: 2px solid orange; */
  font-family: "Questrial", sans-serif;
}
label.logo{
  color: white;
  font-size: 25px;
  line-height: 80px;
  padding: 0 40px;
  font-weight: bold;
}
nav ul{
  float: right;
  margin-right: 20px;
}
nav ul li{
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;}
nav ul li .a{
  color: white;
  font-size: 15px;
  font-weight: 800;
  padding: 7px 13px;
  border-radius: 3px;
  text-transform: uppercase;
}
.a.active,.a:hover{
  background: white;
  color: black;
  transition: .5s;
}
.checkbtn{
  font-size: 30px;
  color: white;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}
#check{
  display: none;
}
@media (max-width: 952px){
  label.logo{
    font-size: 20px;
    padding-left: 30px;
  }
  nav ul li .a{
    font-size: 16px;
  }
}
@media (max-width: 858px){
  .checkbtn{
    display: block;
  }
  ul{
    z-index: 100000;
    position: fixed;
    width: 97%;
    height: 100vh;
    background: black;
    top: 75px;
    left: -100%;
    text-align: center;
    transition: all .5s;
  }
  nav ul li{
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav ul li .a{
    font-size: 20px;
  }
  .a:hover,.a.active{
    background: none;
    color: #ccc;
  }
  #check:checked ~ ul{
    left: 0;
  }
}
</style>