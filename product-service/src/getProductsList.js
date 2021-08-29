import productList from './productList.json';

export const getProductsList = async (event) => {
  console.log('Lambda invocation with event: ', event);
  // const { productId } = event ....

  // Some logic ...
  // Don't forget about logging and testing

  return {
    statusCode: 200,
    body: JSON.stringify(productList),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    }
  };
};