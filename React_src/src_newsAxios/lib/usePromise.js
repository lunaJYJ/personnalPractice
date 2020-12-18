import {useState, useEffect} from 'react'

export default function usePromise(promiseCreateor, deps) {
  //대기중 완료 실패에 관한 상태 관리
  const [loading, setLoading] = useState(false)
  const [resolve, setResolve] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try{
        const resolved = await promiseCreateor();
        setResolve(resolved);
      } catch(e) {
        setError(e)
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolve, error]
}