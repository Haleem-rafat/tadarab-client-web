import { useEffect, useState } from 'react';

function useInfiniteScroll(
  swrData: any,
  swrMutate: any,
  pageIndex: number,
  setPageIndex: any,
  isLoading: boolean
) {
  const [dataList, setDataList] = useState<any[]>([]);

  const hasMore = swrData?.pagination ? pageIndex < swrData.pagination.pages : false;

  const handleLoadMore = () => {
    if (swrData?.pagination && pageIndex < swrData.pagination.pages) {
      setPageIndex((prev: number) => prev + 1);
      swrMutate();
    }
  };

  useEffect(() => {
    if (swrData && pageIndex === 1 && !isLoading) {
      setDataList(swrData?.data || []);
    } else if (!isLoading && swrData && pageIndex > 1) {
      setDataList((prevDataList) => [...prevDataList, ...(swrData?.data || [])]);
    }
  }, [swrData, pageIndex, isLoading]);

  return {
    hasMore,
    handleLoadMore,
    dataList,
  };
}

export default useInfiniteScroll;
