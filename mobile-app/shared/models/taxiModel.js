export function createTaxi(data = {}) {

    const now = new Date().toISOString();

    return {

        id: data.id || Date.now().toString(),

        registration: data.registration || '',

        make: data.make || 'Toyota',

        model: data.model || 'Quantum',

        year: data.year || new Date().getFullYear(),

        color: data.color || 'White',

        capacity: Number(data.capacity || 15),

        rank: data.rank || '',

        driverId: data.driverId || '',

        status: data.status || 'Waiting',

        queuePosition: data.queuePosition || null,

        currentPassengers: data.currentPassengers || 0,

        totalTrips: data.totalTrips || 0,

        totalRevenue: data.totalRevenue || 0,

        isActive: data.isActive ?? true,

        createdAt: data.createdAt || now,

        updatedAt: now,

    };

}