import React from 'react';

const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing' },
        author: {
            name: 'Kabanda Michael',
            role: 'Co-Founder / CTO',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Fashion' },
        author: {
            name: 'Kabanda Michael',
            role: 'Co-Founder / CTO',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'Boost your conversion rate',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Finance' },
        author: {
            name: 'Kabanda Michael',
            role: 'Co-Founder / CTO',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]

export default function Blogs() {
    return (
        <div className="py-24 bg-white sm:py-32"
            style={{
                boxShadow: '0 0 1px 1px rgba(0, 0, 0, 0.4)',
            }}
        >
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div id='our-blogs' className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Discover a treasure trove of insightful and engaging content as you explore our latest blogs.
                    </p>
                </div>

                <div
                    className="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 border-t border-gray-200 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"

                >
                    {posts.map((post) => (
                        <article
                            id='articles'
                            key={post.id}
                            className="flex flex-col justify-between max-w-xl"
                            style={{
                                borderRadius: '5px',
                                boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.4)',
                            }}
                        >
                            <div className="flex items-center justify-center mt-3 text-xs gap-x-4">
                                <time dateTime={post.datetime} className="text-gray-500">
                                    {post.date}
                                </time>
                                <a
                                    href={post.category}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
                                >
                                    {post.category.title}
                                </a>
                            </div>
                            <div className="relative items-center justify-center text-center group">
                                <h3 className="mt-5 text-lg font-semibold leading-6 text-gray-900">
                                    <a href={post.href}>
                                        <span className="absolute inset-0 " />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 mb-6 text-sm leading-6 text-gray-600 line-clamp-3">{post.description}</p>
                            </div>

                            <div className="relative flex items-center justify-center mt-8 mb-6 gap-x-4">
                                <img src={post.author.imageUrl} alt="" className="w-10 h-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a href={post.author.href}>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-600">{post.author.role}</p>
                                </div>
                            </div>
                            <div className="items-center justify-center mt-6 mb-8 text-center">
                                <a href={post.href} className="text-blue-700 hover:text-gray-600">
                                    Read more →
                                </a>
                            </div>
                        </article>

                    ))}
                </div>
            </div>
        </div>
    )
}
