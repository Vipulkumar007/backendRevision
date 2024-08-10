async function abc(){
    var blob = await fetch(`https://randomuser.me/api/`);
    var data = await blob.json();

    console.log(data);
}

abc();