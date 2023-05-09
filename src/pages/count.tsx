
import ref from '@/hooks/ref';

const Count = () => {

  const count = ref<number>(0);
  const add = () => {
    count.value = count.value+1;
  }

  return <div>
    <a onClick={add}>Click add!</a>
    <div>{count.value}</div>
  </div>
}

export default Count;
