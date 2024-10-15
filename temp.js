const unesi=document.getElementById("unesi");
const CtF=document.getElementById("CtF");
const FtC=document.getElementById("FtC");
const potvrdi=document.getElementById("potvrdi");
const rez=document.getElementById("rez");

function convert(){
    let temp=Number(unesi.value);

    if(CtF.checked){
        temp=(temp-32)*(5/9);
        temp=temp.toFixed(2);
        rez.textContent=`Temperatura je jednaka ${temp}F`;
    }

    else if(FtC.checked){
        temp=temp*9/5+32;
        temp=temp.toFixed(2);
        rez.textContent=`Temperatura je jednaka ${temp}C`;
    }
    else{
        rez.textContent="Unesite jedinicu i broj"
    }
}