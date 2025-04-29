
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
function CardDec({ subject, isObserver }: any) {
  const [price, setPrice] = useState(subject.price);

  useEffect(() => {
    if (!isObserver) {
      return;
    }
    // 订阅价格变化
    const unsubscribe = subject.subscribe(setPrice);
    return () => {
      isObserver && unsubscribe(); // 组件卸载时自动取消订阅
    };
  }, [isObserver]);


  return <div>
    <div style={{ width: '100%', backgroundColor: '#f0f2f5', borderRadius: '8px', marginBottom: '20px' }}>
      <div style={{ padding: '24px' }}>
        股票价格：{price}
      </div>
    </div>
  </div>;
}
export default CardDec;