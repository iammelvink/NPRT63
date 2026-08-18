import {
  getActivityStore,
  addActivity,
  clearActivities,
} from '../shared/activityStore';

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export async function getActivities() {

  await delay(200);

  return [...getActivityStore()];

}

export async function createActivity({

  title,

  description,

  type = 'system',

}) {

  await delay(100);

  addActivity({

    title,

    description,

    type,

    time: 'Just now',

  });

}

export async function deleteActivities() {

  await delay(100);

  clearActivities();

}