import {
  getQueueStore,
  setQueueStore,
} from '../../shared/queueStore';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function dispatchTaxi(queueId) {

  await delay(300);

  const queue = getQueueStore().filter(

    item => item.id !== queueId

  );

  queue.forEach((item, index) => {

    item.position = index + 1;

  });

  setQueueStore(queue);

  return true;

}