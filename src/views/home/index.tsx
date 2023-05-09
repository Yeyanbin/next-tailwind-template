
import { layoutState } from '@/contexts/layout';
import { userState } from '@/contexts/user';
import { Button, Card, List } from 'antd';
import React from 'react';

interface IProps {
  messageList: string[];
}

const Home: React.FC<IProps> = (props) => {

  const {
    hasHeader,
    hasMenu,
  } = layoutState.useState();


  const switchHeader = () => {
    hasHeader!.value = !hasHeader!.value
  }

  const switchMenu = () => {
    hasMenu!.value = !hasMenu!.value
  }


  return <div>
    this is Home page.
    <div className="flex gap-2 mt-1 mb-1">
      <Button onClick={switchHeader}>{hasHeader?.value ? '隐藏Header':'显示Header'}</Button>
      <Button onClick={switchMenu}>{hasMenu?.value ? '隐藏Menu':'显示Menu'}</Button>
    </div>

    <Card title='messageList'>
      {props.messageList.map((item) => <List.Item key={item}>{item}</List.Item>)}
    </Card>
  </div>
}

export default Home;
