export async function getCategories() {
  // Faz a requisição de todas as categorias existentes e suas chaves.
  try {
    const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
    const promise = await fetch(URL);
    const response = await promise.json();

    return response;
  } catch (err) {
    return Error(err);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Faz a requisição utilizando o ID da categoria + um termo de busca.
  try {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const promise = await fetch(URL);
    const response = await promise.json();

    return response;
  } catch (err) {
    return Error(err);
  }
}

export async function getProductsFromTerm(search) {
  // Faz a requisição de um termo de busca
  try {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${search}`;
    const promise = await fetch(URL);
    const response = await promise.json();

    return response;
  } catch (err) {
    return Error(err);
  }
}

export async function getProductsfromCategory(category) {
  // Faz a requisição de produtos através da categoria.
  try {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${category}`;
    const promise = await fetch(URL);
    const response = await promise.json();

    return response;
  } catch (err) {
    return Error(err);
  }
}

export async function getProductFromID(id) {
  try {
    const URL = `https://api.mercadolibre.com/items/${id}`;
    const promise = await fetch(URL);
    const response = await promise.json();
    return response;
  } catch (err) {
    return Error(err);
  }
}

export const addItem = (item) => {
  const cart = JSON.parse(localStorage.getItem('shopping'));
  console.log(cart);
  const newCart = !cart ? [item] : [...cart, item];
  localStorage.setItem('shopping', JSON.stringify(newCart));
};
