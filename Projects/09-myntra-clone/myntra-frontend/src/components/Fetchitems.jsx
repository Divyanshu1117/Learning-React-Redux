import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
   const fetchStatus = useSelector((store) => store.fetchStatus);
   const dispatch = useDispatch();

   useEffect(() => {
      if (fetchStatus.fetchDone) return;

      const controller = new AbortController();
      const signal = controller.signal;

      dispatch(fetchStatusActions.markFetchingStarted());

      /*
      fetch("http://localhost:8080/items", { signal })
         .then((res) => res.json())
         .then(({ items }) => {
            dispatch(fetchStatusActions.markFetchDone());
            dispatch(fetchStatusActions.markFetchingFinished());
            dispatch(itemsActions.addInitialItems(items[0]));
         });
      */

      fetch("http://localhost:8080/items", { signal })
         .then((res) => res.json())
         .then(({ items }) => {
            dispatch(fetchStatusActions.markFetchDone());
            dispatch(fetchStatusActions.markFetchingFinished());
            dispatch(itemsActions.addInitialItems(items[0]));
         })
         .catch((error) => {
            if (error.name === "AbortError") {
               return;
            }

            console.error("Failed to fetch items:", error);
            dispatch(fetchStatusActions.markFetchingFinished());
         });

      return () => {
         controller.abort();
      }
      // eslint-disable-next-line
   }, [fetchStatus]);

   return (<></>)
}

export default FetchItems;