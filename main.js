const fruits = [
    {
    fruitId: 1,
    fruitName: ' Apel',
    fruitType: 'IMPORT',
    stock: 10
    },
    {
    fruitId: 2,
    fruitName: ' Kurma',
    fruitType: 'IMPORT',
    stock: 20
    },
    {
    fruitId: 3,    
    fruitName: ' apel',
    fruitType: 'IMPORT',
    stock: 50
    },
    {
    fruitId: 4,
    fruitName: ' Manggis',
    fruitType: 'LOCAL',
    stock: 100
    },
    {
    fruitId: 5,
    fruitName: ' Jeruk Bali',
    fruitType: 'LOCAL',
    stock: 10
    },
    {
    fruitId: 5,
    fruitName: ' KURMA',
    fruitType: 'IMPORT',
    stock: 20
    },
    {
    fruitId: 5,
    fruitName: ' Salak',
    fruitType: 'LOCAL',
    stock: 150
    }
]

const comments = 
[
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                    {
                    commentId: 111,
                    commentContent: 'Haai juga hai jugaa'
                    },
                    {
                    commentId: 112,
                    commentContent: 'Haai juga hai jugaa'
                    }
                ]
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    {
                    commentId: 121,
                    commentContent: 'Haai juga hai jugaa'
                    }
                ]
            }
        ]
    },
    {
        commentId: 2,
        commentContent: 'Halooo'
    }
    
]

const nomor1 = document.getElementById('nomor1');
const nomor2 = document.getElementById('nomor2');
const nomor3 = document.getElementById('nomor3');
const nomor4 = document.getElementById('nomor4');
const nomor5 = document.getElementById("nomor5");

//Nomor 1
const fruitName = [];

for (var i = 0; i< fruits.length; i++){
    fruitName.push(fruits[i]['fruitName']);
}

nomor1.innerHTML = fruitName;

//Nomor 2
const fruitType = [];
const wadah = [];

for (var i = 0; i< fruits.length; i++){
    if(fruitType.length != 0){
        var lanjut = false;
        for (var j = 0; j< fruitType.length; j++){
            if(fruitType[j] === fruits[i]['fruitType']){
                lanjut = true;
                break;
            }else{
                lanjut = false;
            }
        }
        if(lanjut == false){
            fruitType.push(fruits[i]['fruitType'])
        }
    }else if(fruitType.length == 0){
        fruitType.push(fruits[i]['fruitType']);
    }
}

for (var j = 0; j<fruitType.length; j++){
    const temp = [];
    for (var i = 0; i< fruits.length; i++){
        if(fruitType[j] == fruits[i]['fruitType']){
            temp.push(fruits[i]);
        }
    }
    wadah.push(temp);
}

nomor2.innerHTML = `Banyak wadah: ${wadah.length}`
for (var i = 0; i<wadah.length; i++){
    const temp = [];
    for(var j = 0; j<wadah[i].length ; j++){
        temp.push(wadah[i][j]['fruitName']);
    }
    var newcontent = document.createElement('p');
    newcontent.innerHTML = `wadah ${fruitType[i]}: ${temp}`;
    nomor2.appendChild(newcontent);
}

//Nomor 3
for (var i = 0; i<wadah.length; i++){
    var temp = 0;
    for(var j = 0; j<wadah[i].length ; j++){
        temp += wadah[i][j]['stock'];
    }
    var newcontent = document.createElement('p');
    newcontent.innerHTML = `wadah ${fruitType[i]}: ${temp} buah`;
    nomor3.appendChild(newcontent);
}

//Nomor 4
nomor4.innerHTML =
`1. Ada 2 nama apel yang berbeda yaitu fruitName: Apel dan fruitName: apel, 
mungkin bisa ditambahkan nama jenisnya untuk membedakan atau digabungkan apabila keduanya merupakan apel yang sama.  
<br>
2. Ada 3 elemen array dengan ID yang sama yaitu fruitID: 5. Sebaiknya untuk elemen yang berbeda diguanakan ID yang 
berbeda pula untuk mempermudah pemanggilan`

//Nomor 5
	
function hitungKomentar (object, array) {
    var level = 1;
    for(var key in object) {
        if (!object.hasOwnProperty(key)) continue;

        if(typeof object[key] == 'object'){
            if(object[key].length == undefined){
                array.push(object[key]);
            }
            var depth = hitungKomentar(object[key], array)+1;
            level = Math.max(depth, level);
        }
    }
    return level;
}

const hasil = [];
const totalKomen = hitungKomentar(comments, hasil);
console.log(hasil);

nomor5.innerHTML = `Terdapat total ${totalKomen+1} komentar`;