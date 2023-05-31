


export function TopicDetails({ details }){
	const { name, posts  } = details;

	return (
		<div>
				<h2 className='font-headings'>{name}</h2>
				<div>
					{
						posts.map((post) => {
							return (
							<div key={post.id} className='flex flex-col gap-4 '>
								<div className='p-2 shadow-lg'>
									{post.story_summary}
								</div>
								<div className='p-2 shadow-lg'>
									{post.story_summary}
								</div>
							</div>
							)
						})
					}
				</div>
		</div>
	)
}
