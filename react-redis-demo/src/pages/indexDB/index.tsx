import React from 'react';
import useIndexedDB from '../../hooks/useIndexedDB';
import { Button } from 'antd';
function index() {
  const { openLoading, addItem } = useIndexedDB("test", "test", 1);
  const handleAddItem = async () => {
    const item = { id: 2, name: "test" };
    try {
      await addItem(item);
      console.log("添加成功", item);
    } catch (error) {
      console.error("添加失败", error);
    }
  }
  return <div>
    <Button loading={!openLoading} type='primary' onClick={handleAddItem}>新增一条数据</Button>
  </div>;
}
export default index;