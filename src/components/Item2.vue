<template >
        <h1 class="center-1">Customers FeedBack</h1>
<div class="item-66">
        <div class="item-67">
      <div class="item-1 com-22">
      <h1 class="center">Mitchel Mac</h1>
      <div class="para">
        <p class="para-99">
            "Mouthwatering burgers with perfect seasoning, accompanied by crispy fries.
             Friendly staff and cozy atmosphere."</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgPy9Hnqhxqdu6FPq3bZfFxiJqVBGFTyF5Q&s" alt="" class="img-88">
      </div>
      </div>
      <div class="item-2 com-22">
        <h1 class="center">Jane Will</h1>
        <div class="para">
        <p class="para-99">
            "Juicy, flavorful patties nestled in fresh buns, served promptly with a smile. Absolutely scrumptious!"
        </p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgPy9Hnqhxqdu6FPq3bZfFxiJqVBGFTyF5Q&s" alt="" class="img-88">
      </div>
      </div>
      <div class="item-3 com-22">
        <h1 class="center">Joe Titan</h1>  
        <div class="para">
        <p class="para-99">
    
"Exceptional burgers crafted with care, paired with delectable sides. A must-visit spot for burger aficionados!"
        </p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgPy9Hnqhxqdu6FPq3bZfFxiJqVBGFTyF5Q&s" alt="" class="img-88">
      </div>    
      </div>
        </div>
    </div>
</template>
<script>
export default {name:"Item2"}
</script>
<style scoped>
.img-88{
    /* margin-bottom: -3.9vh; */
    width: 53%;
    object-fit: contain;
    height: 24%;
    left: 25%;
    /* background-color: black; */
    bottom: 1vh;
    position: absolute;
}
.para-99{
 position: absolute;
 top:5.4vh;
}
.para{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  /* border: 1px solid greenyellow; */
  width: 80%;
  height: 60%;
  margin-top: -4.9vh;
  font-family: "Nunito", sans-serif;
  font-size: .8rem;
}
.center{
    margin-top: 1.2vh;
    font-family: "Nunito", sans-serif;
    font-size: 1.4rem;
    font-weight: 900;
text-align: center;
}
.center-1{
    margin-top:15vh;
/* margin-bottom: -3vh; */
       font-family: "Nunito", sans-serif;
    font-size: 1.5rem;
    font-weight: 900;
text-align: center;
color: black;
}
.item-66{
    margin-top: 4vh;
    /* border: 3px solid yellow; */
    width: 99.8%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(https://t4.ftcdn.net/jpg/07/13/15/29/240_F_713152933_8ZEohgnOk857CbaxVihK63P9dBGnSINj.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    /* background-image: linear-gradient(to right, black,white); */
}
.item-67{
    /* border: 2px solid purple; */
    height: 80%;
    width: 85%;
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    flex-direction: row;
    padding: 6vh;
    position: relative;
}
.com-22{
    width: 25vw;
    height: 23vh;
    flex-direction: column;
    border-radius: .9rem;
    background-color: white;
  display: flex;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  justify-content: flex-start;
  align-items: center;
    border: 2px solid grey;
}
.item-1{
    position: absolute;
    top: 3%;
    left: 10%;   
}
.item-2{
    position: absolute;
    top: 35.5%;
    left: 36%;
}
.item-3{
    position: absolute;
    top: 68%;
    left: 62%;
}
@media screen and (670px < width < 1000px){
    .item-1{
    position: absolute;
    top: 3%;
    left: 10%;   
}
.item-2{
    position: absolute;
    top: 35.5%;
    left: 37%;
}
.item-3{
    position: absolute;
    top: 68%;
    left: 62%;
}
.com-22{
    width: 31vw;
    height: 24vh;
}
}
@media screen and (width < 670px){
    .item-1{
    position: absolute;
    top: 3%;
    left: 6%;   
}
.item-2{
    position: absolute;
    top: 35.5%;
    left: 33%;
}
.item-3{
    position: absolute;
    top: 68%;
    left: 58%;
}
.com-22{
    width: 37vw;
    height: 21.5vh;
}
.para{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  /* border: 1px solid greenyellow; */
  width: 80%;
  height: 60%;
  margin-top: -4.9vh;
  font-family: "Nunito", sans-serif;
  font-size: .78rem;
}
.center{
    margin-top: 1.2vh;
    font-family: "Nunito", sans-serif;
    font-size: 1.1rem;
    font-weight: 900;
text-align: center;
}
.img-88{
    /* margin-bottom: -3.9vh; */
    width: 75%;
    object-fit: contain;
    height: 24%;
    left: 15%;
    /* background-color: black; */
    bottom: 1vh;
    position: absolute;
}
.para-99{
 position: absolute;
 top:4vh;
}
}
@media screen and (width < 413px){
    .para{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  /* border: 1px solid greenyellow; */
  width: 80%;
  height: 60%;
  margin-top: -4.9vh;
  font-family: "Nunito", sans-serif;
  font-size: 3vw;
}
}
</style>