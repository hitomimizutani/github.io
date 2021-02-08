//モーダル
const $modal = document.getElementById('modal');
$modal.style.display = 'none';
setTimeout(function(){
  $modal.style.display = 'block';
},1000);

$modal.addEventListener('click',function(){
  $modal.style.display = 'none';
})



const $img = document.querySelectorAll('.img');
console.log($img)


let count = 0;
let zindex = 0;
//let $zindex = $img.style.zIndex;

for(let i = 0 ; i < $img.length; i ++){

  $img[i].addEventListener('click',(e)=>{
    
    //e.target;  
       
    $img[i].classList.add('active');

    if($img[i] === $img[1]){
      setTimeout(function(){     
        $img[1].classList.add('active2');
      },1000);
    }
    if($img[i] === $img[2]){
      setTimeout(function(){     
        $img[2].classList.add('active2');
      },1000);
    }


    count++;
    //console.log(count);

    if(count === 12){
      $img[3].classList.add('active');
      $img[4].classList.add('active');
      $img[15].classList.add('active');
      $img[16].classList.add('active');
      $img[17].classList.add('active'); 
      $img[18].classList.add('active');  
      
      
      setTimeout(function(){
        $img[16].style.display = 'none';
        $img[17].style.display = 'none';
        $img[18].style.display = 'block';
        setTimeout(function(){
          $img[18].classList.add('active2');
          $img[5].classList.add('active2');
          setTimeout(function(){
            $img[5].style.width = '30%';
            $img[18].style.display = 'none';
          },1000)
        },1000);

      },2000);
    }


    console.log(count)
    
  });
  
}

