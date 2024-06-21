<template>
<div class="place-1">
  <div class="img-1">
    <img src="https://res.cloudinary.com/dlcyf2qtl/image/upload/v1717317650/burger2-Photoroom_avsfbk.png" 
alt="" class="img-54">
  </div>
<div class="data">
  <h1 class="head-1">
    Our Story
  </h1>
  <p class="para-1"> 
    In a small town, Harold opened "Harold's Hideaway" with delicious burgers and pies. It expanded into "Harold's Haven," a nationwide chain offering global cuisine. Harold's passion and innovative dishes made it a household name, synonymous with quality and hospitality. From its humble beginnings to a sprawling chain, Harold's Haven stays true to its founder's vision of delicious food made with love. Today, it stands as a testament to passion, perseverance, and good cooking, committed to delighting taste buds and creating cherished memories for generations.</p>
</div>
<div class="img-2">
  <img src="https://res.cloudinary.com/dlcyf2qtl/image/upload/v1717325189/fresh-beef-burger-isolated-transparent-background_191095-9021.jpg_quouh9-Photoroom_t8lygp.png" 
alt="" class="img-55">   
</div>
   
</div>
</template>
<script>
export default {name:"Item1"}
</script>
<style scoped>
.place-1{
  margin-top: 10vh;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: row;
     filter: contrast(114%); 
  justify-content:space-between;
  align-items: center;
 background-color: rgb(255, 192, 0);
}
.img-2{
  /* border: 2px solid red; */
  width: 20%;
}
.img-1{
  /* border: 2px solid black; */
  width: 20%;
}
.data{
  margin-top: 2vh;
  height: 80%;
width: 60%;
}
.img-55{
width: 100%;
height: 57vh;
}
.img-54{
  width: 100%;
  height: 57vh;
  }
  .head-1{
    font-family: "Questrial", sans-serif;
 text-align: center;
 font-size: 1.5rem;
  }
.para-1{
  font-size: 1.2rem;
  font-family: "Questrial", sans-serif;
  text-align: center;
}
@media screen and (550px <= width < 800px) {
  .head-1{
    font-family: "Questrial", sans-serif;
 font-size: 1.2rem;
  }
  .data{
  margin-top: 2vh;
  height: 89%;
width: 60%;
/* border: 2px solid pink; */
}
  .para-1{
  font-size: 1.01rem;
  font-family: "Questrial", sans-serif;
}
}
@media screen and (width < 550px) {
  .head-1{
    font-family: "Questrial", sans-serif;
 font-size: 1rem;
  }
  .data{
  margin-top:-1vh;
  height: 101%;
  width: 68%;
  /* border: 2px solid pink; */
}
  .para-1{
  font-size: .85rem;
  font-family: "Questrial", sans-serif;
}
.place-1{
  margin-top: 10vh;
  width: 99%;
  height: 60vh;
}
}
</style>