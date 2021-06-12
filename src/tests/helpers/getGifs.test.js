import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {

  test('Debe traer 10 elementos', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs).toHaveLength(10);
  });

  test('Debe ser vacio sin categoria', async () => {
    const gifs = await getGifs('');
    expect(gifs).toHaveLength(0);
  });

});