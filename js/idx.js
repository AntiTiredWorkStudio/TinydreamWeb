// $(function(){
//     if(PERMISSION_USER("oSORf5kkXvHNxhIx8lQVe3DFRFvw")){
//         var cvn = document.getElementById('YB_top');
//         var ctx = cvn.getContext("2d");
//         ready();
//         drawCircle(ctx,0.5)
//         function ready(){
//             var canvas = document.getElementById('YB_bottom');
//             var cxt_arc = canvas.getContext("2d");
//             cxt_arc.lineWidth = 15;
//             cxt_arc.strokeStyle = '#edf0f5';
//             cxt_arc.lineCap = 'round';
//             cxt_arc.beginPath();
//             cxt_arc.arc(95, 95, 80, 0, 2 * Math.PI, false);
//             cxt_arc.stroke();
//         }
//         function drawCircle(ctx,prop){
//             if(prop == 0){
//                 ctx.clearRect(0,0,190,190);
//             }else{
//                 prop = prop * 2;
//             }
//             ctx.clearRect(0,0,190,190);
//             ctx.fillStyle = 'white';
//             ctx.clearRect(0,0,190,190);
//             ctx.lineWidth = 15;
//             ctx.strokeStyle = '#ffc057';
//             ctx.lineCap = 'round';
//             ctx.beginPath();
//             ctx.arc(95, 95, 80, Math.PI/-2, prop * Math.PI - Math.PI / 2, false);
//             ctx.stroke()
//         }
//     }else{
//         $('.YB_help').hide()
//     }
// })

// || PERMISSION_USER("oSORf5kn6hr_H5ZSRyYSHFUzyBd4") || PERMISSION_USER("oSORf5rNTdXPu5pwU6oumwxge0f4") || PERMISSION_USER("oSORf5hhlfkbykv72x27i17NuAuM") || PERMISSION_USER("oSORf5mym1fUgvZ2l-Rfip0cAFvQ") || PERMISSION_USER("oSORf5mym1fUgvZ2l-Rfip0cAFvQ")