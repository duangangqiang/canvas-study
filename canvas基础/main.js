// 画布的起点为画布的左上角
function draw(id) {
    var canvas = document.getElementById(id);
    if (!canvas) return;

    var context = canvas.getContext('2d');

    // 填充的样式(这一步只是设置,并没有真正画)
    context.fillStyle='#EEEEFF';

    // 画一个矩形
    context.fillRect(0, 0, 400, 300);

    context.fillStyle = 'red';

    // 设定图形边框的样式
    context.strokeStyle = 'blue';

    // 设置图形边框的宽度, 在绘制涂鑫的时候,任何直线都可以通过lineWidth属性指定直线的宽度
    context.lineWidth = 1;
    context.fillRect(50, 50, 100, 100);

    // 绘制矩形边框
    context.strokeRect(50, 50, 100, 100);

    // 将矩形区域中的图形擦除,使得矩形区域中的颜色全部变为透明
    context.clearRect(60, 60, 40, 40);
    
}