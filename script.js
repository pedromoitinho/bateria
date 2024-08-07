@import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&display=swap');
*{
    margin:0;
    box-sizing:border-box;
    font-family: "Arvo", cursive;
    
}
html{
    background-color:rgb(39,42,67);
}
#title{
    width:100vw;
    display:flex;
    justify-content:center;
    margin-top:2%;
    font-size:400%;
    text-shadow: 3px 1px #DA0463;
    color: #DBEDF3;
    text-align:center;
}
.set{
    width:100%;
    display:flex;
    justify-content:center;
    gap:2%;
    overflow:hidden;
    margin:10% auto;
    flex-wrap:wrap;
    row-gap:2vh;
    
    
    
}
.drum{
    display:flex;
    width:150px;
    height:150px;
    border:10px solid #404B69;
    border-radius:15px;
    background-color:rgb(255,253,255);
    text-align:center;
    color:rgb(215,0,91);
    font-size:600%;
    align-items:end;
    justify-content:center;
    
    
    
}
@media(max-width:600px){
    .drum{
        width:100px;
        height:100px;
        font-size:400%;
    }
    .set{
        row-gap:2vh;
    }

}
footer{
    display:flex;
    justify-content:center;
    margin-top:20vh;
    color: #DBEDF3;
    font-size:85%;
    text-decoration:underline rgba(219,234,242,0.4);
}
.drum:hover{
    background-color:rgb(190,190,190);
}
.pressed {
    box-shadow: 0 3px 4px 0 #DBEDF3;
    opacity: 0.5;
  }
