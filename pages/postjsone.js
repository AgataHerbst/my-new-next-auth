import RESTList from '../components/RESTList';
import { $posts } from '../store/posts';

const fields = [
	{ name: 'Title', getVal: obj => obj.title },
	{ name: 'Body', getVal: obj => obj.body },
	{ name: 'id', getVal: obj => obj.id },
];

export default function postsPage() {
	return <RESTList store={$posts} url="https://jsonplaceholder.typicode.com/posts" {...{ fields }} />;
} 