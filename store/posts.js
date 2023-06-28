import { nanoquery } from '@nanostores/query';

export const [createFetcherStore, createMutatorStore] = nanoquery({
  fetcher: (...keys ) => fetch(keys.join('')).then(r => r.json()),
});

export const $posts = createFetcherStore(['/api/public/post/']);
export const $addPosts = createMutatorStore(
  async ({ data, getCacheUpdater }) => {

    const [updateCache, char] = getCacheUpdater('/api/public/post/');
    updateCache([...char, data]);

 
    return fetch('/api/public/post/',{
      method: 'POST',
      body:{data}
    });
  }
);