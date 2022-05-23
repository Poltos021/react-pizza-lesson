import React from 'react';

var num = '0123456789';
var rs = '';
while (rs.length < 9) {
  rs += num[Math.floor(Math.random() * num.length)];
}

function Ready() {
  return (
    <div className='cart cart--empty'>
        <h2>Ваш заказ сделан!!!</h2>
        <h3>Номер уникального заказ: <p>{rs}</p></h3>
        <a href='/' className="button button--black">
            <span>Вернуться назад!</span>
        </a>
    </div>

  )
}

export default Ready;