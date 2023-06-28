import { useStore } from '@nanostores/react';

export default function RESTList({ store, fields, className }) {
	const { data, mutate, loading, error } = useStore(store);
	console.log('hook=', { data, mutate, loading, error });
	if (error) return <>Error={error}</>;
	if (loading) return <>Loading...</>;
	if (!data || !Array.isArray(data)) return <></>;
	return <>
		<ul {...{ className }}>
			{data.map((row) => (
				<li key={row.id}>
					{fields?.map(({ name, getVal, Wrap, val = getVal(row) }) => (
						<div key={name}>
							<span>{name}: </span>
							{Wrap ? <Wrap value={val} /> : val}
						</div>
					))}
				</li>
			))}
		</ul>
	</>;
}