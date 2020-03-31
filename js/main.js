const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');
var map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,10,11,12,1,1,10,11,12,1,1,1,1,1,1,1,1,1,1,1,1,1,10,11,12,1,1,1,1,1,1,1,1,1,1,1,1,10,11,12,1,1,1,1,1,10,11,12,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,13,14,15,1,1,13,14,15,1,1,1,1,1,1,1,1,1,1,1,1,1,13,14,15,1,1,1,1,1,1,1,1,1,1,1,1,13,14,15,1,1,1,1,1,13,14,15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,10,11,12,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,10,11,12,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,13,14,15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,10,11,12,1,1,1,1,1,1,1,1,1,1,1,1,13,14,15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,10,11,12,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,7,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,13,14,15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,13,14,15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,5,1,1,1,1,6,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,5,5,1,1,1,1,6,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,100,101,1,1,1,1,1,100,101,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,5,5,5,1,1,1,1,6,1,1,1,1,1,1],
    [1,1,1,1,3,4,3,1,1,1,1,1,1,1,1,1,1,100,101,1,1,1,1,1,102,103,1,1,1,1,1,102,103,1,1,1,1,1,1,3,4,3,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,5,5,5,5,5,1,1,1,1,6,1,1,1,1,1,1],
    [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,102,103,1,1,3,1,1,102,103,1,1,1,1,1,102,103,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,5,1,1,5,5,1,1,1,1,1,1,1,1,1,1,5,5,5,5,5,5,1,1,1,1,6,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,100,101,1,1,1,1,102,103,1,1,1,1,1,102,103,1,1,1,1,1,102,103,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,5,5,1,1,5,5,5,1,1,1,1,1,100,101,1,5,5,5,5,5,5,5,1,1,1,1,6,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,102,103,1,1,1,1,102,103,1,1,1,1,1,102,103,1,1,1,1,1,102,103,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,5,5,5,1,1,5,5,5,5,1,1,1,1,102,103,5,5,5,5,5,5,5,5,1,1,1,1,5,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

var gounrd_x=1;
var ground_y=1;
var img_ground = new Image();
img_ground.src="./img/tiles.png";

17,16
var flag_img = new Image();
flag_img.src='./img/tiles.png';

var flag_head = new Image();
flag_head.src='./img/tiles.png';

var break_block = new Image();
break_block.src='./img/tiles.png';

var goomba = new Image();
goomba.src='./img/characters.gif';

var tunnel = new Image();
tunnel.src='./img/tiles.png';

var stone = new Image();
stone.src='./img/tiles.png';

var unknown = new Image();
unknown.src='./img/tiles.png';

var img_character = new Image();
img_character.src='./img/characters.gif';
var char_x=0;
var char_y=333; 
var goomba_x=235;
var goomba_y=352;


var add_x=0;
var add_y=0;

var arr_char_x = 0;
var arr_char_y = 0;

var die_time=0;
var goomba_die=new Image();
goomba_die.src='./img/characters.gif';
function monster(){
    if(goomba_live=='live')
        ctx.drawImage(goomba,16*18.5,16*11.7,16,16,goomba_x,goomba_y,16,16);
    else if(goomba_live=='die'){
        ctx.drawImage(goomba_die,16*17.3,16*11.7,16,16,goomba_x,goomba_y,16,16);
        die_time+=1;
    }
    if(die_time>10)
        goomba_live='nothing';
}

function Player(){
    var save_x = char_x;
    var save_y = char_y;
    char_x+=add_x;
    char_y+=add_y;
    if(char_x<0)
        char_x=save_x;
    if(char_y>333)
        char_y=save_y;
    if(char_y<0)
        char_y=save_y;
    if(char_x>1500)
        char_x=save_x;
    ctx.drawImage(img_character,256,33,16,31,char_x,char_y+7,16,31);

}

var player = new Player();
player.x = 0;
player.y = -2;

var bussut= new Image();
bussut.src='./img/tiles.png';

    function Draw(){
    for(var i=0;i<96;i++){
        for(var j=0;j<25;j++){
            if(map[j][i]==0){
                ctx.drawImage(img_ground,0,0,16,16,i*16,j*16,16,16);
            }
            else if(map[j][i]==1){
                ctx.drawImage(img_ground,48,368,16,16,i*16,j*16,48,368);
            }
            else if(map[j][i]==100){
                ctx.drawImage(tunnel,0,160,16,16,i*16,j*16,16,16);
            }
            else if(map[j][i]==101){
                ctx.drawImage(tunnel,16,160,16,16,i*16,j*16,16,16);
            }
            else if(map[j][i]==102){
                ctx.drawImage(tunnel,0,176,16,16,i*16,j*16,16,16);
            }
            else if(map[j][i]==103){
                ctx.drawImage(tunnel,16,176,16,16,i*16,j*16,16,16);
            }
            else if(map[j][i]==3){
                ctx.drawImage(break_block,16,0,16,16,i*16,j*16,16,16);
            }
            else if(map[j][i]==4){
                ctx.drawImage(unknown,16*24,0,16,16,i*16,j*16,16,16);
            }
            else if(map[j][i]==5){
                ctx.drawImage(stone,48,0,16,16,i*16,j*16,16,16);
            }
            else if(map[j][i]==6){
                ctx.drawImage(flag_img,16*16,16*15,16,16,i*16,j*16,16,16);
            }
            else if(map[j][i]==7){
                ctx.drawImage(flag_head,16*16,16*14,16,16,i*16,j*16,16,16);
            }
            else if(map[j][i]==8){
                ctx.drawImage(bussut,16*16,16*0,16,16,304,80,16,16);
            }
            

            //구름 그리기
            else if(map[j][i]==10){
                ctx.drawImage(img_ground,0,352,16,16,i*16,j*16,16,16);
            }
            else if(map[j][i]==11){
                ctx.drawImage(img_ground,16,352,16,16,i*16,j*16,16,16);
            }
            else if(map[j][i]==12){
                ctx.drawImage(img_ground,32,352,16,16,i*16,j*16,16,16);
            }
            else if(map[j][i]==13){
                ctx.drawImage(img_ground,0,368,16,16,i*16,j*16,16,16);
            }
            else if(map[j][i]==14){
                ctx.drawImage(img_ground,16,368,16,16,i*16,j*16,16,16);
            }
            else if(map[j][i]==15){
                ctx.drawImage(img_ground,32,368,16,16,i*16,j*16,16,16);
            }
            //여기까지

        }
    }
    monster();
    Player();
}
function sleep(ms) {
    return new Promise(resolve=>setTimeout(resolve, ms));
  }
  
  
var jumping_cnt;

function CheckMap(){
    arr_char_x=Math.floor((char_x)/16);
    arr_char_y=Math.floor(char_y/16)+1;
    if(map[arr_char_y-1][arr_char_x]!=1)
        return true;
}
var char_live='live';
var goomba_live='live';
var goomba_add_x=1;
var goomba_direction = 1;
var goomba_mode='right';
var goomba_move_x=0;
var jumping_mode=true;
function Play(){
    if(goomba_live=='live'){
        if(goomba_mode=='right')
            goomba_x++;
        else if(goomba_mode=='left')
            goomba_x--;
    }
    var chance=1;
    var arr_goomba_x=Math.round(goomba_x/16);
    var arr_goomba_y=Math.round(goomba_y/16);
    if(map[arr_goomba_y][arr_goomba_x+1]!=1 && goomba_mode == 'right'){
        goomba_mode='left';
    }
    if(map[arr_goomba_y][arr_goomba_x-1]!=1 && goomba_mode == 'left'){
        goomba_mode='right';
    }
        arr_char_x=Math.round(char_x/16);
        arr_char_y=Math.round(char_y/16)+1;
        if(map[arr_char_y+1][arr_char_x]==1){

                if(char_y<100)
                char_y+=10;
                else if(char_y<150)
                char_y+=5;
                else if(char_y<200)
                char_y+=3.5;
                else if(char_y<250)
                char_y+=3.0;
                else if(char_y<300)
                char_y+=2.5;
                else if(char_y<350)
                char_y+=2;
                else{
                    char_y+=3;
                }
                }
                
        arr_char_x=Math.round(char_x/16);
        arr_char_y=Math.round(char_y/16)+1;  
        if(map[arr_char_y-1][arr_char_x]==3){
            map[arr_char_y-1][arr_char_x]=1;
            jumping_mode=false;
        }
        if(map[arr_char_y-1][arr_char_x]==4){
            if(chance==1){
                ctx.drawImage(bussut,16*16,0,16,16,16,16,16,16);
                chance++;
            }
        }
        if(arr_char_y == arr_goomba_y && arr_char_x+1 == arr_goomba_x || arr_char_y == arr_goomba_y && arr_char_x-1 == arr_goomba_x && goomba_live=='live'){
            char_y+=50;
            alert('die');
        }   
            if(arr_char_y+1== arr_goomba_y && arr_char_x == arr_goomba_x)
                goomba_live='die';
                
    Draw();
}

setInterval(Play,25);
var front=false;
function move(){
    arr_char_x=Math.round(char_x/16);
    arr_char_y=Math.round(char_y/16)+1;
    if(event.keyCode=='39'){
        arr_char_y=Math.round(char_y/16)+1;
        if(map[arr_char_y][arr_char_x+1]!=1)
        return;
        add_x=7;
        add_y=0;
        mario_direction='go';
        Player();
    }
    if(event.keyCode=='38'){
            arr_char_y=Math.round(char_y/16)+1;
            if(map[arr_char_y+1][arr_char_x]==1){
                return;
            }
            if(jumping_mode==false){
                jumping_mode=true;
                return;
            }
        if(mario_direction=='go' || mario_direction=='back')
        {

        }
        else{
        (async function() {
            char_y-=25;
            arr_char_y=Math.round(char_y/16)+1;
            if(map[arr_char_y][arr_char_x]!=1){
                char_y+=23;
                return;
            }
            await sleep(11);
            char_y-=20;
            arr_char_y=Math.round(char_y/16)+1;
            if(map[arr_char_y][arr_char_x]!=1){
                char_y+=20;
                return;
            }
            await sleep(11);
            char_y-=15;
            arr_char_y=Math.round(char_y/16)+1;
            if(map[arr_char_y][arr_char_x]!=1){
                char_y+=15;
                return;
            }
            await sleep(11);
            char_y-=10;
            arr_char_y=Math.round(char_y/16)+1;
            if(map[arr_char_y][arr_char_x]!=1){
                char_y+=10;
                return;
            }
            await sleep(11);
            char_y-=7;
            arr_char_y=Math.round(char_y/16)+1;
            if(map[arr_char_y][arr_char_x]!=1){
                char_y+=7;
                return;
            }
            await sleep(11);
            char_y-=5;
            arr_char_y=Math.round(char_y/16)+1;
            if(map[arr_char_y][arr_char_x]!=1){
                char_y+=5;
                return;
            }
            await sleep(11);
            char_y-3;
            arr_char_y=Math.round(char_y/16)+1;
            if(map[arr_char_y][arr_char_x]!=1){
                char_y+=3;
                return;
            }
            await sleep(11);
            char_y-=1;
            arr_char_y=Math.round(char_y/16)+1;
            if(map[arr_char_y][arr_char_x]!=1){
                char_y+=1;
                return;
            }

            //

            await sleep(11);
            char_y+=1;
            arr_char_y=Math.round(char_y/16)+1;
            if(map[arr_char_y+1][arr_char_x]!=1){
                char_y-=1;
                return;
            }
            await sleep(12);
            char_y+=3;
            arr_char_y=Math.round(char_y/16)+1;
            if(map[arr_char_y+1][arr_char_x]!=1){
                char_y-=3;
                return;
            }
            await sleep(11);
            char_y+=5;
            arr_char_y=Math.round(char_y/16)+1;
            if(map[arr_char_y+1][arr_char_x]!=1){
                char_y-=5;
                return;
            }
            await sleep(11);
            char_y+=7;
            arr_char_y=Math.round(char_y/16)+1;
            if(map[arr_char_y+1][arr_char_x]!=1){
                char_y-=7;
                return;
            }
            await sleep(11);
            char_y+=14;
            arr_char_y=Math.round(char_y/16)+1;
            if(map[arr_char_y+1][arr_char_x]!=1){
                char_y-=14;
                return;
            }
            await sleep(11);
            char_y+=18;
            arr_char_y=Math.round(char_y/16)+1;
            if(map[arr_char_y+1][arr_char_x]!=1){
                char_y-=18;
                return;
            }


          })();
        }
    }
    if(event.keyCode=='37'){
        arr_char_y=Math.round(char_y/16)+1;
        if(map[arr_char_y][arr_char_x]!=1)
        return;
        add_x=-7;
        add_y=0;
        Player();
        front=false;
        mario_direction='back';
    }
    add_x=0;
    add_y=0;
    CheckMap();
}

    function go_jump(){
        arr_char_y=Math.round(char_y/16)+1;
        if(map[arr_char_y+1][arr_char_x]==1){
            return;
        }
    (async function() {
        char_y-=25;
        add_x=3;
        arr_char_y=Math.round(char_y/16)+1;
        if(map[arr_char_y][arr_char_x+1]!=1){
            char_y+=23;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y-=20;
        add_x=3;
        arr_char_x=Math.round(char_x/16);
        arr_char_y=Math.round(char_y/16)+1;
        if(map[arr_char_y][arr_char_x]!=1){
            char_y+=20;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y-=15;
        char_x+=0.5;
        add_x=3;
        arr_char_x=Math.round(char_x/16);
        arr_char_y=Math.round(char_y/16)+1;
        if(map[arr_char_y][arr_char_x]!=1){
            char_y+=15;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y-=10;
        char_x+=0.5;
        add_x=3;
        arr_char_x=Math.round(char_x/16);
        arr_char_y=Math.round(char_y/16)+1;
        if(map[arr_char_y][arr_char_x]!=1){
            char_y+=10;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y-=7;
        char_x+=0.5;
        add_x=3;
        arr_char_y=Math.round(char_y/16)+1;
        arr_char_x=Math.round(char_x/16);
        if(map[arr_char_y][arr_char_x]!=1){
            char_y+=7;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y-=5;
        char_x+=0.5;
        add_x=3;
        arr_char_y=Math.round(char_y/16)+1;
        arr_char_x=Math.round(char_x/16);
        if(map[arr_char_y][arr_char_x+1]!=1){
            char_y+=5;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y-3;
        char_x+=0.5;
        add_x=3;
        arr_char_y=Math.round(char_y/16)+1;
        arr_char_x=Math.round(char_x/16);
        if(map[arr_char_y][arr_char_x]!=1){
            char_y+=3;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y-=1;
        char_x+=0.5;
        add_x=3;
        arr_char_y=Math.round(char_y/16)+1;
        arr_char_x=Math.round(char_x/16);
        if(map[arr_char_y][arr_char_x]!=1){
            char_y+=1;
            add_x=0;
            return;
        }

        //

        await sleep(11);
        char_y+=1;
        char_x+=0.5;
        add_x=3;
        arr_char_y=Math.round(char_y/16)+1;
        arr_char_x=Math.round(char_x/16);
        if(map[arr_char_y+1][arr_char_x]!=1){
            char_y-=1;
            add_x=0;
            return;
        }
        await sleep(12);
        char_y+=3;
        char_x+=0.5;
        add_x=3;
        arr_char_y=Math.round(char_y/16)+1;
        arr_char_x=Math.round(char_x/16);
        if(map[arr_char_y+1][arr_char_x+1]!=1){
            char_y-=3;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y+=5;
        char_x+=0.5;
        add_x=3;
        arr_char_x=Math.round(char_x/16);
        arr_char_y=Math.round(char_y/16)+1;
        if(map[arr_char_y+1][arr_char_x]!=1){
            char_y-=5;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y+=7;
        char_x+=0.5;
        add_x=3;
        arr_char_y=Math.round(char_y/16)+1;
        arr_char_x=Math.round(char_x/16);
        if(map[arr_char_y+1][arr_char_x]!=1){
            char_y-=7;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y+=14;
        char_x+=0.5;
        add_x=3;
        arr_char_y=Math.round(char_y/16)+1;
        arr_char_x=Math.round(char_x/16);
        if(map[arr_char_y+1][arr_char_x]!=1){
            char_y-=14;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y+=18;
        add_x=3;
        arr_char_y=Math.round(char_y/16)+1;
        arr_char_x=Math.round(char_x/16);
        if(map[arr_char_y+1][arr_char_x+1]!=1){
            char_y-=18;
            add_x=0;
            return;
        }

        add_x=0;
      })();
    }

    function back_jump(){
        arr_char_y=Math.round(char_y/16)+1;
        if(map[arr_char_y+1][arr_char_x]==1){
            return;
        }
    (async function() {
        char_y-=25;
        add_x=-3;
        arr_char_y=Math.round(char_y/16)+1;
        if(map[arr_char_y][arr_char_x-1]!=1){
            char_y+=23;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y-=20;
        add_x=-3;
        arr_char_x=Math.round(char_x/16);
        arr_char_y=Math.round(char_y/16)+1;
        if(map[arr_char_y][arr_char_x]!=1){
            char_y+=20;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y-=15;
        add_x=-3;
        arr_char_x=Math.round(char_x/16);
        arr_char_y=Math.round(char_y/16)+1;
        if(map[arr_char_y][arr_char_x]!=1){
            char_y+=15;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y-=10;
        add_x=-3;
        arr_char_x=Math.round(char_x/16);
        arr_char_y=Math.round(char_y/16)+1;
        if(map[arr_char_y][arr_char_x]!=1){
            char_y+=10;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y-=7;
        add_x=-3;
        arr_char_y=Math.round(char_y/16)+1;
        arr_char_x=Math.round(char_x/16);
        if(map[arr_char_y][arr_char_x]!=1){
            char_y+=7;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y-=5;
        add_x=-3;
        arr_char_y=Math.round(char_y/16)+1;
        arr_char_x=Math.round(char_x/16);
        if(map[arr_char_y][arr_char_x-1]!=1){
            char_y+=5;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y-3;
        add_x=-3;
        arr_char_y=Math.round(char_y/16)+1;
        arr_char_x=Math.round(char_x/16);
        if(map[arr_char_y][arr_char_x]!=1){
            char_y+=3;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y-=1;
        add_x=-3;
        arr_char_y=Math.round(char_y/16)+1;
        arr_char_x=Math.round(char_x/16);
        if(map[arr_char_y][arr_char_x]!=1){
            char_y+=1;
            add_x=0;
            return;
        }

        //

        await sleep(11);
        char_y+=1;
        add_x=-3;
        arr_char_y=Math.round(char_y/16)+1;
        arr_char_x=Math.round(char_x/16);
        if(map[arr_char_y+1][arr_char_x]!=1){
            char_y-=1;
            add_x=0;
            return;
        }
        await sleep(12);
        char_y+=3;
        add_x=-3;
        arr_char_y=Math.round(char_y/16)+1;
        arr_char_x=Math.round(char_x/16);
        if(map[arr_char_y+1][arr_char_x-1]!=1){
            char_y-=3;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y+=5;
        add_x=-3;
        arr_char_x=Math.round(char_x/16);
        arr_char_y=Math.round(char_y/16)+1;
        if(map[arr_char_y+1][arr_char_x]!=1){
            char_y-=5;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y+=7;
        add_x=-3;
        arr_char_y=Math.round(char_y/16)+1;
        arr_char_x=Math.round(char_x/16);
        if(map[arr_char_y+1][arr_char_x]!=1){
            char_y-=7;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y+=14;
        add_x=-3;
        arr_char_y=Math.round(char_y/16)+1;
        arr_char_x=Math.round(char_x/16);
        if(map[arr_char_y+1][arr_char_x]!=1){
            char_y-=14;
            add_x=0;
            return;
        }
        await sleep(11);
        char_y+=18;
        add_x=-3;
        arr_char_y=Math.round(char_y/16)+1;
        arr_char_x=Math.round(char_x/16);
        if(map[arr_char_y+1][arr_char_x-1]!=1){
            char_y-=18;
            add_x=0;
            return;
        }

        add_x=0;
      })();
    }

var mario_direction='stop';
$(document).keydown(function(event){
    move(event);
});

$(document).keyup(function(event){
    if(mario_direction=='go' && event.keyCode==38){
        go_jump();
    }
    else if(mario_direction=='back' && event.keyCode==38){
        back_jump();
    }
    if(event.keyCode==37 || event.keyCode==39)
        mario_direction='stop';
});

