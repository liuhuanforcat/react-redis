import React from 'react';
import useIndexedDB from '../../hooks/useIndexedDB';
import { Button, Space } from 'antd';
function index() {
  const { openLoading, addItem, getAllItems } = useIndexedDB("test", "test", 1);
  const handleAddItem = async () => {
    const item = { id: 2, name: "test" };
    try {
      await addItem(item);
      console.log("添加成功", item);
    } catch (error) {
      console.error("添加失败", error);
    }
  }
  const handleGetAllItems = async () => {
    const items = await getAllItems();
    console.log("获取所有数据", items);
  }
  return <div>
    <Space size={4}>
      <Button loading={!openLoading} type='primary' onClick={handleAddItem}>新增一条数据</Button>
      <Button loading={!openLoading} type='primary' onClick={handleGetAllItems}>获取所有数据</Button>
    </Space>

  </div>;
}
export default index;