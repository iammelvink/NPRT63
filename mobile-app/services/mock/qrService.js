const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getMarshalQRCode() {

  await delay(400);

  return {

    marshalId: 'MAR001',

    marshalName: 'John Marshal',

    rankId: 'RANK001',

    rankName: 'Kimberley Taxi Rank',

    generatedAt: new Date().toISOString(),

  };

}