export function createDriver(data = {}) {

    const now = new Date().toISOString();

    return {

        id: data.id || Date.now().toString(),

        fullName: data.fullName || '',

        cellphone: data.cellphone || '',

        licenseNumber: data.licenseNumber || '',

        taxiId: data.taxiId || '',

        status: data.status || 'Available',

        completedTrips: data.completedTrips || 0,

        totalPassengers: data.totalPassengers || 0,

        rating: data.rating || 5,

        isOnline: data.isOnline ?? true,

        createdAt: data.createdAt || now,

        updatedAt: now,

    };

}