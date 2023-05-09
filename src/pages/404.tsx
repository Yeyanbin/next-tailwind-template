
import { initPage } from '@/utils/page';
import { Empty } from 'antd';

const NotFount = () => {
  return <div className="m-auto">
    <Empty description='404 not found!'></Empty>
  </div>
}

export const getStaticProps = initPage(async ({ req, res }: any) => {

  return {
    props: {
    }
  }
}, {
  hasHeader: true,
  hasMenu: false,
})



export default NotFount;
