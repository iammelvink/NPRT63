let activities = [

  {
    id: '1',
    title: 'System Ready',
    description: 'Fleet management system started.',
    time: 'Now',
    type: 'system',
  },

];

export function getActivityStore() {

  return activities;

}

export function addActivity(activity) {

  activities.unshift({

    id: Date.now().toString(),

    ...activity,

  });

}

export function clearActivities() {

  activities = [];

}